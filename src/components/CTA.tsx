import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // API transmission logic would trigger here
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
                        <button type="button" onClick={prevStep} className="px-5 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center">
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                      )}

                      <button type="submit" className="flex-1 bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        {step === 3 ? "Submit Enquiry" : "Next Step"}
                        {step === 3 ? (
                          <CheckCircle2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
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
