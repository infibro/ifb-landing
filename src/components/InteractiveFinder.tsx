"use client";
import React, { useState } from "react";
import { ArrowRight, RotateCcw, Check, Briefcase, FileText, Percent, HelpCircle, Shield, Layers, HelpCircle as HelpIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    value: string;
    description?: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: "tradingAge",
    title: "How long has your business been actively trading?",
    subtitle: "This helps filter schemes like government-backed startup loans or bank term loans.",
    options: [
      { label: "New or Startup (Under 24 months)", value: "startup", description: "Eligible for startup schemes and niche alternative lenders." },
      { label: "Established (2+ years)", value: "established", description: "Eligible for traditional clearing banks and full commercial finance portfolios." }
    ]
  },
  {
    id: "businessModel",
    title: "How do your customers pay you?",
    subtitle: "Different funding types are optimized for invoicing versus consumer transactions.",
    options: [
      { label: "Business-to-Business (B2B)", value: "b2b", description: "We raise invoices with payment terms (e.g., 30, 60, or 90 days)." },
      { label: "Business-to-Consumer (B2C)", value: "b2c", description: "Immediate payments via cash, card terminal, or e-commerce storefront." }
    ]
  },
  {
    id: "assetProfile",
    title: "What is your primary business asset profile?",
    subtitle: "We can use assets as leverage to secure lower rates or larger funding limits.",
    options: [
      { label: "Unpaid sales ledger (Invoices)", value: "invoices", description: "We have significant capital tied up in unpaid invoices." },
      { label: "Physical assets", value: "physical", description: "We own vehicles, heavy machinery, equipment, or commercial property." },
      { label: "Card terminal revenues", value: "cardSales", description: "We process high volumes of card payments daily." },
      { label: "Clean balance sheet / Bank revenues", value: "revenue", description: "No major physical assets, but strong monthly cash flow." }
    ]
  },
  {
    id: "mainPriority",
    title: "What is your primary funding requirement?",
    subtitle: "Aligning your facility structure with your short or long-term objectives.",
    options: [
      { label: "Lowest possible cost (APR)", value: "cost", description: "Willing to provide collateral or wait longer for underwriting." },
      { label: "Maximum speed of funding", value: "speed", description: "Need working capital released in 24 to 48 hours." },
      { label: "Revolving flexibility", value: "flexibility", description: "Only pay interest on what we draw, like a flexible overdraft." },
      { label: "Scalability to match growth", value: "scale", description: "Funding limits that automatically expand with our monthly sales." }
    ]
  }
];

interface Result {
  title: string;
  description: string;
  whyMatch: string;
  typicalRates: string;
  typicalLimits: string;
  typicalSpeed: string;
  pros: string[];
  cons: string[];
  ctaUrl: string;
}

const RESULTS: Record<string, Result> = {
  startup_loan: {
    title: "Government-Backed Start Up Loan",
    description: "A government-supported personal loan for business purposes, offering fixed interest rates and comprehensive post-loan mentoring.",
    whyMatch: "Since your business is in its early stages (under 2 years trading), traditional commercial lending is hard to secure. This government scheme bypasses trading history requirements.",
    typicalRates: "6.0% Fixed APR",
    typicalLimits: "£500 to £25,000 per director (up to £120,000 per business)",
    typicalSpeed: "2 to 4 weeks",
    pros: [
      "No security or business collateral required",
      "Includes 12 months of free business mentoring",
      "Fixed low interest rate"
    ],
    cons: [
      "Personally liable for repayment (it is a personal loan for business purposes)",
      "Strict application criteria and business plan review",
      "Cap on maximum borrowing"
    ],
    ctaUrl: "/#enquiry"
  },
  invoice_factoring: {
    title: "Invoice Factoring",
    description: "An asset-backed facility where the lender advances cash against your unpaid invoices and manages debtor collections directly.",
    whyMatch: "You trade B2B, have outstanding invoices, and want a funding solution that scales with your growth while outsourcing the collections administration.",
    typicalRates: "1.5% to 4.5% above base rate + service fee (0.5% - 3.0%)",
    typicalLimits: "Up to 90% of your outstanding invoice values",
    typicalSpeed: "5 to 10 days setup, 24 hours thereafter",
    pros: [
      "Reduces credit control workload as the lender collects payments",
      "Scales automatically with sales volume without renegotiation",
      "Easier to secure than bank loans for growing firms"
    ],
    cons: [
      "Lender interacts directly with your clients (disclosed)",
      "May affect customer relationships if not handled delicately",
      "Typically requires whole-ledger commitment"
    ],
    ctaUrl: "/#enquiry"
  },
  invoice_discounting: {
    title: "Confidential Invoice Discounting",
    description: "A discreet revolving facility that advances up to 90% of invoice values, allowing your internal team to retain control of customer collections.",
    whyMatch: "You trade B2B, have invoices, and value confidentiality, meaning you want to manage collections yourself without customers knowing a lender is involved.",
    typicalRates: "1.0% to 3.0% above base rate + administration fee (0.2% - 1.5%)",
    typicalLimits: "Up to 90% of outstanding sales ledger",
    typicalSpeed: "5 to 10 days setup, 24 hours thereafter",
    pros: [
      "100% confidential; customers are unaware of the arrangement",
      "Your team retains control of customer relationships and credit control",
      "Very cost-effective for established firms with good processes"
    ],
    cons: [
      "Requires robust credit control and reporting processes",
      "Only available to established companies with higher turnover",
      "Strict auditing requirements from the lender"
    ],
    ctaUrl: "/#enquiry"
  },
  merchant_cash_advance: {
    title: "Merchant Cash Advance (MCA)",
    description: "An innovative alternative finance product where funding is repaid as a fixed percentage of your daily credit and debit card receipts.",
    whyMatch: "Your business processes card transactions (B2C model) and values speed and repayment flexibility over fixed monthly costs.",
    typicalRates: "1.15 to 1.35 factor rate (no ongoing APR)",
    typicalLimits: "£5,000 to £500,000 (usually 100% to 150% of monthly card sales)",
    typicalSpeed: "24 to 48 hours",
    pros: [
      "Repayments scale dynamically: pay less during slow weeks, more during busy weeks",
      "No physical security or asset collateral required",
      "Extremely fast approval and disbursement"
    ],
    cons: [
      "Can be more expensive than traditional bank loans when calculated as APR",
      "Requires consistent card terminal turnover",
      "Not suitable for businesses that primarily invoice"
    ],
    ctaUrl: "/#enquiry"
  },
  asset_finance: {
    title: "Asset Finance (Hire Purchase & Leasing)",
    description: "Finance structured specifically to fund the acquisition of new assets or unlock capital from existing plant, machinery, or vehicles.",
    whyMatch: "You own or need to purchase high-value physical assets, which acts as natural security to keep interest rates low.",
    typicalRates: "4.5% to 9.5% APR depending on asset type",
    typicalLimits: "£10,000 to £10m+ (linked to asset market value)",
    typicalSpeed: "2 to 5 working days",
    pros: [
      "Low interest rates because the loan is secured against the physical asset",
      "Preserves working capital; avoids large upfront capital outlays",
      "Asset refinancing can unlock immediate cash from items you already own"
    ],
    cons: [
      "The asset is at risk of repossession if payments are missed",
      "Typically requires a deposit or initial downpayment",
      "Only covers specific qualifying physical assets"
    ],
    ctaUrl: "/#enquiry"
  },
  secured_loan: {
    title: "Secured Business Loan",
    description: "A traditional commercial loan secured against property, land, or other high-value assets to borrow substantial capital over a long term.",
    whyMatch: "You seek the lowest possible cost (APR) for a large capital amount and have commercial or residential property to offer as security.",
    typicalRates: "4.0% to 8.5% Variable/Fixed APR",
    typicalLimits: "£100,000 to £10,000,000+",
    typicalSpeed: "2 to 6 weeks (due to valuations)",
    pros: [
      "Lowest overall interest rates for large-scale funding",
      "Extended repayment terms (up to 15-20 years)",
      "High borrowing limits based on equity value"
    ],
    cons: [
      "Long application times with property valuations and legal checks",
      "Assets are directly at risk of repossession upon default",
      "Substantial upfront legal and arrangement fees"
    ],
    ctaUrl: "/#enquiry"
  },
  unsecured_loan: {
    title: "Unsecured Business Loan",
    description: "A term loan requiring no physical collateral, backed by the trading health of the business and director guarantees.",
    whyMatch: "You are an established business with steady cash flow, need funding quickly, and prefer not to leverage physical property or invoices.",
    typicalRates: "7.0% to 22.0% APR depending on credit profile",
    typicalLimits: "£10,000 to £500,000",
    typicalSpeed: "24 to 72 hours",
    pros: [
      "Fast underwriting and payout times",
      "No physical assets or property valuation required",
      "Predictable fixed monthly repayments"
    ],
    cons: [
      "Almost always requires a Personal Guarantee from directors",
      "Higher interest rates compared to secured lending",
      "Shorter repayment terms (typically 1 to 5 years)"
    ],
    ctaUrl: "/#enquiry"
  },
  revolving_credit: {
    title: "Revolving Credit Line",
    description: "A flexible, ongoing credit facility similar to an overdraft, where you draw down funds as needed and only pay interest on utilized amounts.",
    whyMatch: "You value flexibility and want a buffer to manage seasonal cash flow fluctuations, drawing down and repaying dynamically.",
    typicalRates: "1.5% to 3.5% monthly on drawn balances",
    typicalLimits: "£5,000 to £250,000",
    typicalSpeed: "24 to 48 hours setup",
    pros: [
      "Extremely flexible; draw down and repay multiple times",
      "Only pay interest on the money you actually use",
      "Excellent emergency cushion or buffer for unexpected expenses"
    ],
    cons: [
      "May carry monthly access or commitment fees even if unused",
      "Lower maximum limits compared to term loans",
      "Shorter draw periods, requiring regular facility renewals"
    ],
    ctaUrl: "/#enquiry"
  }
};

export default function InteractiveFinder() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleOptionSelect = (optionValue: string) => {
    const qId = QUESTIONS[currentStep].id;
    const newAnswers = { ...answers, [qId]: optionValue };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<string, string>) => {
    // Decision Tree logic
    const { tradingAge, businessModel, assetProfile, mainPriority } = finalAnswers;

    let matchKey = "unsecured_loan"; // Default fallback

    if (tradingAge === "startup") {
      // Startups almost always fit best in Startup Loan, or MCA if they run B2C card transactions
      if (businessModel === "b2c" && assetProfile === "cardSales") {
        matchKey = "merchant_cash_advance";
      } else {
        matchKey = "startup_loan";
      }
    } else {
      // Established businesses
      if (assetProfile === "invoices" || (businessModel === "b2b" && mainPriority === "scale")) {
        // Invoice finance matches
        if (mainPriority === "scale" || mainPriority === "flexibility") {
          // If B2B wants scale, look at factoring vs discounting. Factoring is general, discounting is premium
          matchKey = "invoice_factoring";
        } else {
          matchKey = "invoice_discounting";
        }
      } else if (assetProfile === "physical" || mainPriority === "cost") {
        // Secured options
        if (assetProfile === "physical" && mainPriority !== "cost") {
          matchKey = "asset_finance";
        } else {
          matchKey = "secured_loan";
        }
      } else if (assetProfile === "cardSales" || (businessModel === "b2c" && mainPriority === "speed")) {
        matchKey = "merchant_cash_advance";
      } else if (mainPriority === "flexibility") {
        matchKey = "revolving_credit";
      } else {
        matchKey = "unsecured_loan";
      }
    }

    setShowResult(true);
    setAnswers(finalAnswers);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const progressPercentage = ((currentStep) / QUESTIONS.length) * 100;

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      {!showResult ? (
        <div>
          {/* Header & Progress Bar */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Step {currentStep + 1} of {QUESTIONS.length}
            </span>
            <span className="text-xs text-gray-500">
              Interactive Finance Finder
            </span>
          </div>

          <div className="w-full bg-white/5 h-1.5 rounded-full mb-8 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Question Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                {QUESTIONS[currentStep].title}
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                {QUESTIONS[currentStep].subtitle}
              </p>

              {/* Options Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {QUESTIONS[currentStep].options.map((opt, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(opt.value)}
                    className="group text-left p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex flex-col justify-between h-full cursor-pointer"
                  >
                    <div>
                      <span className="block text-base font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                        {opt.label}
                      </span>
                      {opt.description && (
                        <span className="block text-sm text-gray-400 leading-normal">
                          {opt.description}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex items-center text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                      Select option <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Back Navigation */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="mt-8 text-xs text-gray-500 hover:text-white flex items-center transition-colors focus:outline-none cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 mr-1" /> Back to previous step
            </button>
          )}
        </div>
      ) : (
        /* Result Page */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="block text-sm font-bold text-white mb-0.5">Quiz Completed</span>
              <span className="block text-xs text-gray-400">Based on your business profile, here is our recommended financing route.</span>
            </div>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Recommended Solution</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed text-pretty">
              {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].description}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <span className="block text-xs font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wide">Why this matches your situation:</span>
            <p className="text-sm text-gray-300 leading-relaxed">
              {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].whyMatch}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 my-6">
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
              <span className="block text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">Typical Rates</span>
              <span className="text-xs md:text-sm font-bold text-white">
                {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].typicalRates}
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
              <span className="block text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">Max Limits</span>
              <span className="text-xs md:text-sm font-bold text-white">
                {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].typicalLimits}
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
              <span className="block text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">Funding Speed</span>
              <span className="text-xs md:text-sm font-bold text-white">
                {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].typicalSpeed}
              </span>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-950/20 border border-green-500/10 p-4 rounded-xl">
              <span className="block text-xs font-bold text-green-400 uppercase mb-2">Key Advantages</span>
              <ul className="space-y-1.5">
                {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].pros.map((pro, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-1.5">
                    <span className="text-green-500 font-bold">✓</span> {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-950/10 border border-red-500/10 p-4 rounded-xl">
              <span className="block text-xs font-bold text-red-400 uppercase mb-2">Key Trade-offs</span>
              <ul className="space-y-1.5">
                {RESULTS[answers.tradingAge === "startup" && answers.businessModel === "b2c" && answers.assetProfile === "cardSales" ? "merchant_cash_advance" : (answers.tradingAge === "startup" ? "startup_loan" : (answers.assetProfile === "invoices" ? "invoice_factoring" : (answers.assetProfile === "physical" ? "asset_finance" : (answers.mainPriority === "cost" ? "secured_loan" : (answers.mainPriority === "flexibility" ? "revolving_credit" : (answers.assetProfile === "cardSales" ? "merchant_cash_advance" : "unsecured_loan"))))))].cons.map((con, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">✗</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
            <a
              href="#enquiry"
              className="flex-1 bg-white hover:bg-gray-200 text-black text-center py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-white/5"
            >
              Get matched with lenders <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={handleReset}
              className="border border-white/10 hover:border-white/20 text-gray-300 px-5 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Start over
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
