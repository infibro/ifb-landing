import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "../supabaseClient";

export default function CTA() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fundingAmount: "£10k - £50k",
    fundingSpeed: "Immediately",
    purpose: "",
    name: "",
    phone: "",
    email: "",
    companyName: "",
    companyReg: "",
    monthlyValue: "£10k - £50k",
    debtorCompanyName: "",
    debtorCompanyNumber: "",
    debtorContactPerson: "",
    isLate: "No",
    isNewClient: "No",
    gdprConsent: false,
  });

  const nextStep = () => setStep((s) => Math.min(3, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const [isProcessing, setIsProcessing] = useState(false);

  const fetchCHData = async (number: string) => {
    if (!number || number.length < 5) return { data: null, officers: null, error: 'Invalid number length' };
    try {
      const formattedNum = number.padStart(8, '0');
      // Read key from environment variable, falling back to original key for safety
      const apiKey = import.meta.env.VITE_COMPANIES_HOUSE_KEY || '1a1e424d-aac7-4c5f-96f5-1c258f0bbaf1';
      const authHeader = 'Basic ' + window.btoa(apiKey + ':');

      const res = await fetch(`/api/companies-house/company/${formattedNum}`, {
        headers: { 'Authorization': authHeader }
      });
      if (!res.ok) return { data: null, officers: null, error: `HTTP ${res.status}` };
      const data = await res.json();

      // Fetch officers asynchronously
      let officers = [];
      try {
        const offRes = await fetch(`/api/companies-house/company/${formattedNum}/officers`, {
          headers: { 'Authorization': authHeader }
        });
        if (offRes.ok) {
          const offData = await offRes.json();
          officers = offData.items || [];
        }
      } catch (err) {
        console.error("Officer fetch failed", err);
      }

      return { data, officers, error: null };
    } catch (e: any) {
      return { data: null, officers: null, error: e.message || "Network proxy blocked" };
    }
  };

  const generateDescription = (res: any, defaultName: string) => {
    if (!res.data) return `No Companies House data found for ${defaultName}. (Error: ${res.error})`;

    // Core details
    const name = res.data.company_name || defaultName;
    const status = res.data.company_status ? res.data.company_status.replace('-', ' ') : 'active';
    const type = res.data.type ? res.data.type.replace(/-/g, ' ') : 'company';
    const year = res.data.date_of_creation ? res.data.date_of_creation.substring(0, 4) : 'an unknown year';
    const sic = (res.data.sic_codes && res.data.sic_codes.length > 0) ? res.data.sic_codes.join(', ') : 'unspecified sectors';

    // Address
    const addr = res.data.registered_office_address || {};
    const addressString = [addr.address_line_1, addr.address_line_2, addr.locality, addr.postal_code].filter(Boolean).join(', ') || 'No registered address on file';

    // Accounts
    const accounts = res.data.accounts || {};
    const lastAccountsDate = accounts.last_accounts?.made_up_to || 'None filed';
    const nextAccountsDate = accounts.next_accounts?.due_on || 'Unknown';

    // Officers
    let officersText = 'No officers found';
    if (res.officers && res.officers.length > 0) {
      officersText = res.officers.slice(0, 3).map((o: any) => {
        const nat = o.nationality ? `(${o.nationality})` : '';
        const idVerified = o.identification_verification_status === "verified" ? "[ID Verified]" : (o.identification_verification_status === "unverified" ? "[ID Unverified]" : "");
        return `${o.name} ${nat} ${idVerified}`.trim();
      }).join('; ');
      if (res.officers.length > 3) officersText += ` (+${res.officers.length - 3} more)`;
    }

    return `${name} is an ${status} ${type} incorporated in ${year}. Nature of business (SIC): ${sic}. Registered office location: ${addressString}. Account Status: Last accounts made up to ${lastAccountsDate}, next accounts are due by ${nextAccountsDate}. Key connected people: ${officersText}.`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Fetch details for both companies in parallel securely in the background
    const [applicantRes, debtorRes] = await Promise.all([
      fetchCHData(formData.companyReg),
      fetchCHData(formData.debtorCompanyNumber)
    ]);

    // Generate automated narrative summaries
    const company_description = generateDescription(applicantRes, formData.companyName);
    const debtor_description = generateDescription(debtorRes, formData.debtorCompanyName);

    // Calculate Algorithmic Risk Score (0-10) and compile reasoning logic
    let risk_score = 5; // Base default score
    let reasoning = ["Base starting risk score is 5/10."];

    if (formData.isLate === "Yes") {
      risk_score += 4;
      reasoning.push("Invoice is marked as LATE (+4 risk).");
    }
    if (formData.isNewClient === "Yes") {
      risk_score += 2;
      reasoning.push("Debtor is a NEW client/customer (+2 risk).");
    }

    if (debtorRes.data) {
      if (debtorRes.data.company_status && debtorRes.data.company_status !== 'active') {
        risk_score += 2; // Extra risk for dissolved/in-administration status
        reasoning.push(`Debtor company status on CH is '${debtorRes.data.company_status}' (+2 risk).`);
      } else {
        reasoning.push("Debtor company status on CH is 'active' (safe).");
      }

      if (debtorRes.data.date_of_creation) {
        const age = new Date().getFullYear() - parseInt(debtorRes.data.date_of_creation.substring(0, 4));
        if (age > 10) {
          risk_score -= 1; // Reduction in risk for highly established companies
          reasoning.push(`Debtor company is highly established (${age} years old) (-1 risk).`);
        } else {
          reasoning.push(`Debtor company is ${age} years old (neutral).`);
        }
      }
    } else {
      risk_score += 1; // Debtor not found on CH registry
      reasoning.push(`Debtor company was not found on Companies House (+1 risk). Reason: ${debtorRes.error}`);
    }

    // Clamp score within 0 to 10
    risk_score = Math.min(10, Math.max(0, risk_score));
    const risk_reasoning = reasoning.join(" ");

    // Transmit to Supabase
    try {
      const { error } = await supabase.from('enquiries').insert([
        {
          funding_amount: formData.fundingAmount,
          funding_speed: formData.fundingSpeed,
          purpose: formData.purpose,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company_name: applicantRes.data?.company_name || formData.companyName,
          company_reg: formData.companyReg,
          monthly_value: formData.monthlyValue,
          debtor_company_name: debtorRes.data?.company_name || formData.debtorCompanyName,
          debtor_company_number: formData.debtorCompanyNumber,
          debtor_contact_person: formData.debtorContactPerson,
          is_late: formData.isLate,
          is_new_client: formData.isNewClient,
          gdpr_consent: formData.gdprConsent,
          company_description,
          debtor_description,
          risk_score,
          risk_reasoning
        }
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        alert("Database connection failed. Please ensure the Supabase credentials are loaded and try again.");
        setIsProcessing(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed drastically. Please check your network.");
    }
    setIsProcessing(false);
  };

  return (
    <section id="enquiry" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[2.5rem] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Get an Invoice Finance <span className="text-blue-500">Quote</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                If your business needs faster access to cash tied up in unpaid invoices, submit this fast enquiry and we will match you with suitable invoice finance providers.
              </p>
            </div>

            {/* Right Column Form */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative min-h-[520px] flex flex-col justify-center shadow-2xl">

              {!isSubmitted ? (
                <>
                  {/* Progress Bar Header */}
                  <div className="mb-8">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      <span className={step >= 1 ? "text-white" : ""}>Requirements</span>
                      <span className={step >= 2 ? "text-white" : ""}>Your Business</span>
                      <span className={step >= 3 ? "text-white" : ""}>The Invoice</span>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${s <= step ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-white/10"
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }} className="flex flex-col h-full justify-between flex-1">
                    <AnimatePresence mode="wait">
                      {/* Step 1: Funding needs */}
                      {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">How much funding do you need?</label>
                            <select
                              value={formData.fundingAmount}
                              onChange={(e) => setFormData({ ...formData, fundingAmount: e.target.value })}
                              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none font-medium"
                            >
                              <option>£10k - £50k</option>
                              <option>£50k - £250k</option>
                              <option>£250k - £1m</option>
                              <option>£1m+</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">How quickly do you need funding?</label>
                            <select
                              value={formData.fundingSpeed}
                              onChange={(e) => setFormData({ ...formData, fundingSpeed: e.target.value })}
                              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none font-medium"
                            >
                              <option>Immediately</option>
                              <option>Within 30 days</option>
                              <option>Just exploring</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">What's it for?</label>
                            <input
                              type="text"
                              required
                              value={formData.purpose}
                              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors font-medium placeholder:text-gray-600"
                              placeholder="e.g. Buying stock, covering payroll"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: About Them */}
                      {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-5">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-gray-400">Your name</label>
                              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600" placeholder="John Doe" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-gray-400">Phone</label>
                              <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600" placeholder="07123..." />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-400">Email address</label>
                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600" placeholder="john@company.com" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-gray-400">Company name</label>
                              <input type="text" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600" placeholder="Company Ltd" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-gray-400">Companies House number</label>
                              <input type="text" value={formData.companyReg} onChange={(e) => setFormData({ ...formData, companyReg: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600" placeholder="01234567" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-400">Approx monthly invoice value</label>
                            <select value={formData.monthlyValue} onChange={(e) => setFormData({ ...formData, monthlyValue: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none md:text-[15px]">
                              <option>£10k - £50k</option>
                              <option>£50k - £250k</option>
                              <option>£250k - £1m</option>
                              <option>£1m+</option>
                            </select>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: About the Invoice */}
                      {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-5">
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-400">Debtor company name</label>
                            <input type="text" required value={formData.debtorCompanyName} onChange={(e) => setFormData({ ...formData, debtorCompanyName: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 font-medium" placeholder="Company Ltd" />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-gray-400">Companies House number</label>
                              <input type="text" required value={formData.debtorCompanyNumber} onChange={(e) => setFormData({ ...formData, debtorCompanyNumber: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 font-medium" placeholder="01234567" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-gray-400">Contact person name</label>
                              <input type="text" required value={formData.debtorContactPerson} onChange={(e) => setFormData({ ...formData, debtorContactPerson: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 font-medium" placeholder="John Doe" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-400">Is the invoice late?</label>
                              <select value={formData.isLate} onChange={(e) => setFormData({ ...formData, isLate: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none font-medium">
                                <option>No</option>
                                <option>Yes</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-400">New client / customer?</label>
                              <select value={formData.isNewClient} onChange={(e) => setFormData({ ...formData, isNewClient: e.target.value })} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none font-medium">
                                <option>No</option>
                                <option>Yes</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 mt-4 pt-6 border-t border-white/10">
                            <input
                              type="checkbox"
                              id="gdpr"
                              required
                              checked={formData.gdprConsent}
                              onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                              className="mt-1 w-4 h-4 rounded border-gray-600 bg-black accent-blue-500 cursor-pointer"
                            />
                            <label htmlFor="gdpr" className="text-[13px] text-gray-400 leading-relaxed cursor-pointer select-none">
                              By submitting, you agree to our <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a> and <a href="/terms-and-conditions" className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Service</a>. You expressly consent to Invoice Finance Brokers securely storing your details for the purpose of matching you with suitable finance providers.
                            </label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer Controls */}
                    <div className="mt-8 flex gap-3 pt-6 border-t border-white/5">
                      {step > 1 && (
                        <button type="button" onClick={prevStep} disabled={isProcessing} className="px-5 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                      )}

                      <button type="submit" disabled={isProcessing} className="flex-1 bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-wait">
                        {step === 3 ? (isProcessing ? "Processing Enquiry..." : "Submit Enquiry") : "Next Step"}
                        {step === 3 ? (
                          !isProcessing && <CheckCircle2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                        ) : (
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center h-full py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Enquiry Completed</h3>
                  <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                    Thank you for your submission. We have successfully received your details and one of our invoice finance specialists will contact you shortly.
                  </p>
                  <button onClick={() => { setStep(1); setIsSubmitted(false); setFormData({ ...formData, gdprConsent: false }); }} className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Submit another enquiry
                  </button>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
