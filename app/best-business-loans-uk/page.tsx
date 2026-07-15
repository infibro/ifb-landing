import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '../../src/components/FAQAccordion';
import InteractiveFinder from '../../src/components/InteractiveFinder';
import { ShieldCheck, HelpCircle, AlertCircle, TrendingUp, Clock, Scale, Award, Info, FileText, CheckCircle2, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Business Loans UK (2026): Compare Funding Options',
  description: 'Looking for the best business loans in the UK? Compare secured, unsecured, startup, and alternative business funding like invoice and asset finance.',
  alternates: {
    canonical: 'https://www.invoicefinancebrokers.co.uk/best-business-loans-uk'
  }
};

export default function BestBusinessLoansPage() {
  // Rich FAQ list mapping to the schema and interactive accordion
  const faqItems = [
    {
      question: "What is the difference between secured and unsecured business loans?",
      answer: "A secured business loan requires you to pledge high-value assets (such as commercial or residential property, machinery, or vehicles) as collateral. If the business defaults, the lender can liquidate these assets to recover their funds. Unsecured business loans do not require physical collateral but almost always require a Personal Guarantee (PG) from the company directors, meaning you remain personally liable if the company cannot pay."
    },
    {
      question: "How do business loan interest rates work in the UK?",
      answer: "Business loan interest rates can be fixed or variable. Fixed rates remain constant throughout the loan term, providing payment certainty. Variable rates are typically pegged to the Bank of England Base Rate or SONIA (Sterling Overnight Index Average), meaning your monthly payments can rise or fall. Interest rates depend heavily on your business credit score, annual turnover, trading history, and whether you provide security."
    },
    {
      question: "Can I get a startup business loan without a trading history?",
      answer: "Yes. The primary option is the government-backed Start Up Loans scheme, administered by the British Business Bank. This scheme provides personal loans for business purposes of up to £25,000 per director (up to £120,000 per business) at a fixed 6% APR, with 12 months of free mentoring. Commercial lenders also offer startup loans but typically require director guarantees and solid personal credit scores."
    },
    {
      question: "What is a personal guarantee, and when is it required?",
      answer: "A personal guarantee (PG) is a legal agreement signed by a business owner or director promising to repay a business loan using their personal funds (e.g., personal savings or equity in their home) if the business default. Lenders require PGs for almost all unsecured business loans and for many secured or alternative finance structures to reduce their risk profile."
    },
    {
      question: "How is invoice finance different from a traditional term loan?",
      answer: "A traditional business loan provides a fixed lump sum upfront with fixed monthly payments over 1 to 5 years. Invoice finance (factoring or discounting) is a revolving line of credit secured by your unpaid B2B customer invoices. Instead of taking on rigid debt, you receive up to 90% of your invoice value within 24 hours of raising it, and the facility automatically grows as your sales turnover increases."
    },
    {
      question: "How does a Merchant Cash Advance (MCA) work?",
      answer: "A Merchant Cash Advance is designed for businesses with high volumes of debit and credit card transactions (such as retail shops, restaurants, and e-commerce stores). The lender advances a lump sum, which is repaid via a fixed percentage (typically 5% to 20%) of your daily card sales. There are no fixed monthly payments; repayments automatically adjust based on your daily trading volumes."
    },
    {
      question: "What fees should I watch out for when comparing business loans?",
      answer: "Beyond the nominal interest rate, look out for: 1) Arrangement/origination fees (typically 1% to 5% of the loan amount), 2) Broker fees (if using an intermediary), 3) Annual facility renewal fees (common in revolving lines), 4) Commitment fees (charged on the unused portions of credit lines), and 5) Early repayment charges (ERCs) which apply if you settle the debt ahead of schedule."
    },
    {
      question: "Can I get business finance if I have bad personal or business credit?",
      answer: "Yes, though it is more challenging and expensive. Bad credit business loans are available through specialist alternative lenders. These providers place less emphasis on your credit score and focus more on your real-time bank revenues, the quality of your outstanding invoices (invoice finance), or the value of your assets (asset finance/secured loans). You will likely face higher interest rates and strict personal guarantee requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* SEO Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Business Loans UK (2026): The Ultimate Comparative Funding Guide",
        "description": "An authoritative guide to the best business loans and alternative finance in the UK. Compare rates, terms, eligibility, and explore structured funding solutions.",
        "author": {
          "@type": "Organization",
          "name": "Invoice Finance Brokers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Invoice Finance Brokers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.invoicefinancebrokers.co.uk/logo.svg"
          }
        },
        "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/best-business-loans-uk",
        "datePublished": "2026-07-15",
        "dateModified": "2026-07-15"
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FinancialProduct",
        "name": "Commercial Business Finance Advisory",
        "description": "Independent brokerage services matching UK enterprises with optimal business loans, invoice finance, asset finance, and cash flow solutions.",
        "provider": {
          "@type": "Organization",
          "name": "Invoice Finance Brokers"
        }
      })}} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" /> Topical Authority Report
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-5xl">
            Best Business Loans UK (2026): <span className="text-gray-400 block sm:inline">The Ultimate Comparative Guide to Corporate Finance</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            An independent, educational guide helping UK business owners navigate commercial funding, alternative finance, and interest rates before making an enquiry.
          </p>

          {/* EEAT Author / Reviewer Info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 py-4 border-y border-white/5 text-xs text-gray-400 justify-center md:justify-start">
            <span className="flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-blue-400" /> Written by: <strong className="text-white">Richard Croft</strong> (Senior Commercial Finance Specialist)</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Fact-Checked & Reviewed by: <strong className="text-white">Independent Brokerage Committee</strong></span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Published: <strong className="text-white">July 2026</strong></span>
          </div>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-28 bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 space-y-4">
            <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-white/5 pb-2">Guide Chapters</span>
            <nav className="flex flex-col space-y-2.5 text-sm text-gray-400 font-medium">
              <a href="#summary" className="hover:text-blue-400 transition-colors">1. Executive Summary</a>
              <a href="#traditional" className="hover:text-blue-400 transition-colors">2. Traditional Business Loans</a>
              <a href="#alternative" className="hover:text-blue-400 transition-colors">3. Alternative & Working Capital</a>
              <a href="#specialist" className="hover:text-blue-400 transition-colors">4. Bad Credit & Fast Funding</a>
              <a href="#rates" className="hover:text-blue-400 transition-colors">5. Rates, Costs & Fees</a>
              <a href="#comparison" className="hover:text-blue-400 transition-colors">6. Comparing Loan Types</a>
              <a href="#selector" className="hover:text-blue-400 transition-colors">7. Interactive Finder Quiz</a>
              <a href="#redflags" className="hover:text-blue-400 transition-colors">8. Lender Red Flags</a>
              <a href="#faq" className="hover:text-blue-400 transition-colors">9. Frequently Asked Questions</a>
            </nav>
            <div className="pt-4 border-t border-white/5 text-[11px] text-gray-500 leading-normal">
              <p>Looking for a tailored quote? Skip the reading and connect directly with a broker:</p>
              <a href="#enquiry" className="block text-center mt-3 bg-white text-black py-2 rounded-lg font-bold hover:bg-gray-200 transition-all">Enquire Now</a>
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-3 space-y-12 max-w-none">

            {/* SECTION 1: EXECUTIVE SUMMARY */}
            <section id="summary" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">01.</span> Executive Summary: The UK Business Finance Landscape
              </h2>
              <p className="leading-relaxed text-gray-300">
                UK businesses in 2026 operate in a highly dynamic and fragmented financial ecosystem. When entrepreneurs search for the <strong className="text-white">best business loans</strong>, they are frequently met with thousands of competing offers from traditional clearing banks, digital challenger institutions, peer-to-peer (P2P) lending platforms, and boutique asset-backed finance houses. Choosing blindly can lead to excessive debt service costs, restrictive covenants, or structural cash flow blockages.
              </p>
              <p className="leading-relaxed text-gray-300">
                Historically, securing <strong className="text-white">business funding</strong> meant visiting a high-street bank manager with a thick binder containing business plans, asset ledgers, and historical tax accounts. Today, technology-driven underwriting has shifted the balance of power. While high-street banks remain competitive for established firms seeking low-cost, long-term capital, alternative finance solutions have expanded dramatically to bridge working capital deficits, support rapid scale-ups, and aid firms struggling with adverse credit scores.
              </p>
              
              {/* Trust Signal Banner */}
              <div className="bg-blue-900/10 border border-blue-500/20 p-5 rounded-2xl flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-bold text-white mb-1">Independent Educational Policy</span>
                  <span className="block text-xs text-gray-400 leading-relaxed">
                    Invoice Finance Brokers is an independent advisory resource. We do not lend money directly, nor are we tied to any single financial institution. Our goal is to educate business owners so they can confidently self-select the correct funding structure. If you choose to enquire, we connect you with regulated independent brokers who negotiate market-wide terms on your behalf.
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white/5 border border-white/5 p-5 rounded-xl text-center">
                  <span className="block text-3xl font-extrabold text-white mb-1">£250bn+</span>
                  <span className="block text-xs text-gray-400 uppercase tracking-wider">Estimated UK SME Debt Outstanding</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-5 rounded-xl text-center">
                  <span className="block text-3xl font-extrabold text-white mb-1">80%+</span>
                  <span className="block text-xs text-gray-400 uppercase tracking-wider">Alternative Finance Approval Rates</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-5 rounded-xl text-center">
                  <span className="block text-3xl font-extrabold text-white mb-1">24 Hrs</span>
                  <span className="block text-xs text-gray-400 uppercase tracking-wider">Average Fintech Underwriting Speed</span>
                </div>
              </div>
            </section>

            {/* SECTION 2: TRADITIONAL BUSINESS LOANS */}
            <section id="traditional" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">02.</span> Traditional Business Loans: Secured vs. Unsecured
              </h2>
              <p className="leading-relaxed text-gray-300">
                Traditional commercial loans are structured term instruments: you receive a fixed lump sum of capital upfront, and repay it over a pre-determined duration (typically 1 to 5 years for unsecured facilities, or up to 15 years for secured structures) with compounding interest. These facilities represent the bedrock of corporate debt.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Unsecured Business Loans</h3>
              <p className="leading-relaxed text-gray-300">
                An <strong className="text-white">unsecured business loan</strong> is written without the lender placing a direct legal charge over physical assets (like property or equipment). Because the lender carries a higher risk of total loss in the event of insolvency, these loans are heavily dependent on the trading health of the enterprise, its historical bank revenues, and credit scores.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Borrowing Limits:</strong> Generally range from £10,000 to £500,000, though specialist fintechs can stretch to £1,000,000 for highly profitable enterprises.</li>
                <li><strong className="text-white">Repayment Terms:</strong> Typically 12 to 60 months, paid in equal monthly instalments.</li>
                <li><strong className="text-white">Personal Guarantees (PGs):</strong> Almost always required. A PG means the directors are personally liable for the outstanding debt, potentially placing personal homes or savings at risk if the company defaults.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2. Secured Business Loans</h3>
              <p className="leading-relaxed text-gray-300">
                A <strong className="text-white">secured business loan</strong> requires the borrower to offer high-value security as collateral. The lender takes a legal charge over the asset (such as commercial property, residential real estate, land, or heavy plant machinery). If the business fails to keep up repayments, the lender has the legal right to seize and sell the asset to recover their funds.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Borrowing Limits:</strong> Scale significantly higher, stretching from £100,000 to £10,000,000+ depending on the equity available in the security.</li>
                <li><strong className="text-white">Lower Interest Rates:</strong> Because the lender's risk is mitigated by collateral, secured APRs are usually much lower than unsecured APRs.</li>
                <li><strong className="text-white">Loan-to-Value (LTV):</strong> Underwriting parameters typically cap borrowing at 65% to 80% of the asset's certified market valuation.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">3. Startup Loans</h3>
              <p className="leading-relaxed text-gray-300">
                New ventures struggle to secure standard bank commercial facilities due to the lack of trading accounts. In the UK, the primary route is a government-backed <strong className="text-white">startup loan</strong> under the British Business Bank's flagship program. This is technically a personal loan used exclusively for business startup purposes, designed to lower the barrier to entry.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Borrowing Caps:</strong> Up to £25,000 per individual director, capped at £120,000 per business entity if there are multiple eligible directors.</li>
                <li><strong className="text-white">Fixed Interest:</strong> Highly competitive, locked at a fixed 6% APR to prevent inflation from escalating debt costs.</li>
                <li><strong className="text-white">Mentoring:</strong> Includes 12 months of free post-loan business mentoring to improve survival rates.</li>
              </ul>

              {/* Expert Quote Callout */}
              <div className="border-l-4 border-blue-500 bg-white/5 p-5 rounded-r-2xl my-6">
                <span className="block text-xs uppercase tracking-wider text-blue-400 font-bold mb-2">Expert Broker Insight</span>
                <p className="italic text-gray-300 text-sm leading-relaxed">
                  &ldquo;Many business owners apply for unsecured loans because they believe it protects their assets. They fail to read the fine print of the Personal Guarantee. In reality, an unsecured loan with a strict PG carries personal risk, while asset finance or invoice finance secures the debt against the business asset itself, shielding personal wealth.&rdquo;
                </p>
                <span className="block text-xs text-gray-400 mt-2">— Richard Croft, Senior Finance Broker</span>
              </div>
            </section>

            {/* SECTION 3: ALTERNATIVE & WORKING CAPITAL FINANCE */}
            <section id="alternative" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">03.</span> Alternative & Working Capital Finance Options
              </h2>
              <p className="leading-relaxed text-gray-300">
                Modern corporate finance extends far beyond traditional term loans. Many businesses do not need large sums of lump-sum debt; rather, they face cash flow friction caused by seasonal demand, supplier payment schedules, or long invoice terms. For these firms, alternative <strong className="text-white">working capital finance</strong> is far more efficient.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Invoice Finance</h3>
              <p className="leading-relaxed text-gray-300">
                If your business operates B2B and sells goods or services on credit terms (e.g., 30 to 90 days), you have capital trapped in your sales ledger. <strong className="text-white">Invoice finance</strong> releases this cash immediately. Instead of waiting for the invoice to mature, a lender advances up to 90% of its value within 24 hours. The remaining 10% (minus fees) is paid when your customer settles their invoice.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Invoice Factoring</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The lender manages your credit control and collections directly. This is a disclosed facility (your customers know you use factoring). Best for growing SMEs that want to outsource debt collection.
                  </p>
                  <Link href="/invoice-factoring" className="text-xs text-blue-400 hover:underline block mt-3">Read Factoring Guide →</Link>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                  <h4 className="font-bold text-white mb-2">Invoice Discounting</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    A confidential facility where your internal team retains control of credit control and collections. Your customers are unaware of the lender's involvement. Ideal for established companies.
                  </p>
                  <Link href="/invoice-factoring-vs-discounting" className="text-xs text-blue-400 hover:underline block mt-3">Factoring vs Discounting →</Link>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                You can also opt for <strong className="text-white">Selective Invoice Finance</strong>, which allows you to finance specific high-value invoices rather than your entire sales ledger, offering maximum flexibility.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2. Merchant Cash Advance (MCA)</h3>
              <p className="leading-relaxed text-gray-300">
                For B2C businesses operating physical card terminals, PDQ machines, or online payment gateways, a <strong className="text-white">merchant cash advance</strong> is an exceptionally flexible financing option. Lenders advance a lump sum based on your historical monthly card turnover, and repayments are collected automatically as a fixed percentage of your daily card sales.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Flexible Repayments:</strong> During high-sales seasons (e.g., Christmas for retailers), you repay faster. During slow seasons, the daily repayment amount drops proportionally, protecting your cash reserves.</li>
                <li><strong className="text-white">Underwriting Focus:</strong> Lenders care primarily about your monthly card transaction volume, making this highly accessible to hospitality, retail, and e-commerce companies with weak asset positions.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">3. Asset Finance</h3>
              <p className="leading-relaxed text-gray-300">
                If your business relies on physical equipment, vehicles, or machinery, <strong className="text-white">asset finance</strong> enables you to purchase these items without draining working capital, or to borrow against items you already own.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Hire Purchase (HP):</strong> The finance company buys the asset, and you rent it over a fixed term. Once the final instalment is paid, ownership transfers to your business.</li>
                <li><strong className="text-white">Finance Leasing:</strong> You lease the asset from the lender. You enjoy full use of the asset, but ownership remains with the lessor, offering distinct tax benefits (payments can often be offset against profits).</li>
                <li><strong className="text-white">Asset Refinancing:</strong> If you have equity locked in existing machinery or commercial vehicle fleets, you can sell them to a lender, release immediate cash, and lease them back to maintain operations.</li>
              </ul>
            </section>

            {/* SECTION 4: SPECIALIST FINANCE & SITUATIONS */}
            <section id="specialist" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">04.</span> Specialist Funding: Bad Credit & Fast Capital
              </h2>
              <p className="leading-relaxed text-gray-300">
                Many businesses find themselves locked out of high-street commercial bank rates due to historical trading difficulties, late filings, county court judgements (CCJs), or poor director credit histories. However, specialist alternative lenders provide products tailored to these scenarios.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Bad Credit Business Loans</h3>
              <p className="leading-relaxed text-gray-300">
                Having adverse credit does not prevent you from obtaining <strong className="text-white">bad credit business loans</strong>, but it alters the underwriting structure. Lenders offset the default risk by requiring asset collateral or strong cash reserves.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-white">Structured Invoice Finance:</strong> Since invoice finance relies on the credit health of your corporate debtors (customers) rather than your own, it is one of the easiest facilities to secure with bad credit.</li>
                <li><strong className="text-white">Asset-Backed Security:</strong> Offering a charge over machinery or commercial property is often required to secure approval.</li>
                <li><strong className="text-white">Interest Rates:</strong> You will face interest rate premiums (often 15% to 30% APR) and higher arrangement fees to cover the lender's risk assessment.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2. Emergency & Same-Day Funding</h3>
              <p className="leading-relaxed text-gray-300">
                When a business faces unexpected tax bills (e.g., HMRC VAT payments) or supplier ultimatums, waiting weeks for a bank decision is not an option. Fintech underwriters use API integrations to link directly to your open banking data, allowing them to underwrite and fund unsecured loans in as little as 4 to 24 hours.
              </p>
              <div className="bg-red-950/10 border border-red-500/20 p-5 rounded-2xl flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-bold text-red-400 mb-1">Warning: The Cost of Speed</span>
                  <span className="block text-xs text-gray-300 leading-relaxed">
                    Emergency capital is priced at a premium. Fast-underwritten unsecured loans carry the highest interest rates on the market. Always ensure you have a clear repayment strategy before drawing emergency funds, and avoid rolling over short-term facilities.
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 5: RATES, COSTS & FEES */}
            <section id="rates" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">05.</span> Understanding Business Loan Interest Rates & Costs
              </h2>
              <p className="leading-relaxed text-gray-300">
                Calculating the true cost of commercial finance is complex. Lenders quote headline numbers that may exclude significant administrative overheads. When looking to <strong className="text-white">compare business loans</strong>, always requests a comprehensive breakdown of the Total Cost of Credit.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">Deconstructing the Fee Structure:</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-[#0a0a0a] border border-white/15 p-5 rounded-xl">
                  <span className="block text-xs uppercase tracking-wider text-blue-400 font-bold mb-2">Ongoing Rates</span>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li><strong className="text-white">Fixed Interest:</strong> Stays locked, providing stability.</li>
                    <li><strong className="text-white">Variable Interest:</strong> Linked to Base Rate + margin (e.g., BoE + 4%).</li>
                    <li><strong className="text-white">Factor Rate:</strong> Quoted as a multiplier (e.g., 1.2x your borrow amount), common in MCA.</li>
                  </ul>
                </div>
                <div className="bg-[#0a0a0a] border border-white/15 p-5 rounded-xl">
                  <span className="block text-xs uppercase tracking-wider text-blue-400 font-bold mb-2">Administrative Fees</span>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li><strong className="text-white">Arrangement Fee:</strong> Typically 1% to 5% of the loan principal, deducted at payout.</li>
                    <li><strong className="text-white">Broker Fee:</strong> Often paid by the lender as commission, but some brokers charge upfront.</li>
                    <li><strong className="text-white">Early Repayment Charge (ERC):</strong> Penalty for paying off the loan early.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 6: COMPARISON TABLE */}
            <section id="comparison" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">06.</span> Compare Business Loans: The Master Comparison Matrix
              </h2>
              <p className="leading-relaxed text-gray-300">
                To simplify your decision-making, we have compiled the core characteristics, rates, and criteria of the 8 major business financing types available in the UK:
              </p>

              <div className="overflow-x-auto border border-white/10 rounded-xl my-6 bg-[#0a0a0a]">
                <table className="min-w-full text-xs text-left text-gray-300">
                  <thead className="bg-white/5 text-white uppercase font-semibold text-[10px] tracking-wider border-b border-white/10">
                    <tr>
                      <th className="p-4 border-r border-white/10">Finance Type</th>
                      <th className="p-4 border-r border-white/10">Typical APR Range</th>
                      <th className="p-4 border-r border-white/10">Typical Speed</th>
                      <th className="p-4 border-r border-white/10">Key Security Required</th>
                      <th className="p-4">Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Unsecured Business Loan</td>
                      <td className="p-4 border-r border-white/10">7% - 22%</td>
                      <td className="p-4 border-r border-white/10">24 - 72 Hours</td>
                      <td className="p-4 border-r border-white/10">Director Personal Guarantee</td>
                      <td className="p-4">Rapid stock purchasing or short-term projects.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Secured Business Loan</td>
                      <td className="p-4 border-r border-white/10">4% - 8.5%</td>
                      <td className="p-4 border-r border-white/10">2 - 6 Weeks</td>
                      <td className="p-4 border-r border-white/10">Commercial/Residential Real Estate</td>
                      <td className="p-4">Large-scale capital projects or acquisitions.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Start Up Loan (BBB)</td>
                      <td className="p-4 border-r border-white/10">6% Fixed</td>
                      <td className="p-4 border-r border-white/10">2 - 4 Weeks</td>
                      <td className="p-4 border-r border-white/10">None (Personally liable)</td>
                      <td className="p-4">Funding early-stage business launches.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Invoice Factoring</td>
                      <td className="p-4 border-r border-white/10">Base + 1.5% - 4.5% + fees</td>
                      <td className="p-4 border-r border-white/10">5 - 10 Days setup</td>
                      <td className="p-4 border-r border-white/10">Unpaid B2B Invoices</td>
                      <td className="p-4">Bridging B2B cash flow gaps and ledger collection.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Invoice Discounting</td>
                      <td className="p-4 border-r border-white/10">Base + 1.0% - 3.0% + fees</td>
                      <td className="p-4 border-r border-white/10">5 - 10 Days setup</td>
                      <td className="p-4 border-r border-white/10">Unpaid B2B Invoices</td>
                      <td className="p-4">Confidential cash flow release for mid-size firms.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Merchant Cash Advance</td>
                      <td className="p-4 border-r border-white/10">1.15 - 1.35 factor rate</td>
                      <td className="p-4 border-r border-white/10">24 - 48 Hours</td>
                      <td className="p-4 border-r border-white/10">None (Linked to card turnover)</td>
                      <td className="p-4">Retailers, restaurants, or seasonal e-commerce.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Asset Finance</td>
                      <td className="p-4 border-r border-white/10">4.5% - 9.5%</td>
                      <td className="p-4 border-r border-white/10">2 - 5 Days</td>
                      <td className="p-4 border-r border-white/10">Purchased/Leased Equipment</td>
                      <td className="p-4">Buying heavy machinery or vehicles.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-white/10">Revolving Credit Line</td>
                      <td className="p-4 border-r border-white/10">1.5% - 3.5% monthly</td>
                      <td className="p-4 border-r border-white/10">24 - 48 Hours</td>
                      <td className="p-4 border-r border-white/10">Director PG or revenue metrics</td>
                      <td className="p-4">Flexible cash buffer or seasonal credit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: INTERACTIVE FINDER QUIZ */}
            <section id="selector" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">07.</span> The UK Business Finance Finder
              </h2>
              <p className="leading-relaxed text-gray-300">
                Unsure which financing structure is most suitable for your enterprise? Answer our brief four-question interactive quiz. The finder processes your inputs to suggest the optimal corporate funding route:
              </p>
              
              <InteractiveFinder />
            </section>

            {/* SECTION 8: LENDER RED FLAGS */}
            <section id="redflags" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">08.</span> Lender Red Flags & Regulatory Disclosures
              </h2>
              <p className="leading-relaxed text-gray-300">
                The business lending market in the UK is largely unregulated by the Financial Conduct Authority (FCA), with the exception of loans under £25,000 to sole traders and partnerships. This means that consumer credit protections do not apply to the majority of commercial agreements. It is imperative that directors execute proper due diligence.
              </p>
              
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-500" /> Key Red Flags to Watch Out For:
                </h4>
                <ul className="space-y-3 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span><strong className="text-white">All-Assets Debentures:</strong> Lenders placing an all-encompassing legal charge over all corporate assets, preventing you from securing alternative lines of credit (like asset or invoice finance) in the future.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span><strong className="text-white">Notice Periods in Invoice Finance:</strong> Strict 12-month lock-in periods with automatically renewing roll-overs requiring 3 to 6 months of written notice to terminate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span><strong className="text-white">Guarantor Vulnerabilities:</strong> Personal Guarantees that are uncapped, making the guarantor liable for arrangement fees, default interest, and legal collections costs in addition to the principal loan amount.</span>
                  </li>
                </ul>
              </div>

              {/* Regulatory Notice Banner */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl text-xs text-gray-500 leading-normal">
                <p className="font-bold text-gray-400 uppercase tracking-wider mb-2">Regulatory Compliance Notice</p>
                <p className="mb-2">
                  Commercial lending is not regulated by the Financial Conduct Authority (FCA) in the United Kingdom unless the borrower is a sole trader or small partnership borrowing £25,000 or less. Broker commissions are paid as a percentage of the volume introduced, and may vary depending on the product chosen.
                </p>
                <p>
                  Disclaimer: The contents of this page are provided for educational purposes only and do not constitute financial advice. Past performance is not a guarantee of future outcomes. Your property may be at risk if you fail to keep up repayments on secured loans.
                </p>
              </div>
            </section>

            {/* SECTION 9: FAQs */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="text-blue-500 text-lg">09.</span> Frequently Asked Questions (FAQ)
              </h2>
              <p className="leading-relaxed text-gray-300">
                Review the answers to the most common questions surrounding business financing in the UK, optimized to provide rapid answers for both search engine crawlers and AI search platforms:
              </p>

              <FAQAccordion items={faqItems} />
            </section>

            {/* FINAL CTA SECTION */}
            <section id="enquiry" className="bg-gradient-to-br from-blue-950 via-zinc-950 to-zinc-950 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Secure the Best Business Funding Structure Now
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
                Connect with our independent specialist finance brokers. We compare the entire UK market to negotiate the most competitive interest rates, flexible parameters, and maximum limits for your enterprise.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-300">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Compare 40+ UK Lenders</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Independent Broker Matching</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> No Impact on Credit Score to Enquire</span>
              </div>

              <div>
                <Link
                  href="/#enquiry"
                  className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all shadow-xl shadow-white/5 hover:scale-[1.02] cursor-pointer text-base"
                >
                  Start Your Free Quote Comparison
                </Link>
                <div className="mt-4">
                  <Link href="/" className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4">
                    Return to Homepage
                  </Link>
                </div>
              </div>
            </section>

          </article>
        </div>

      </div>
    </div>
  );
}
