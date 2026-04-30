import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Invoice Factoring Explained: How It Works, Benefits, Costs and Alternatives',
  description: 'Invoice factoring helps businesses release cash from unpaid invoices. Learn how factoring works, who it suits, the costs, risks, benefits and alternatives.',
  alternates: {
    canonical: 'https://www.invoicefinancebrokers.co.uk/invoice-factoring'
  }
};

export default function InvoiceFactoringPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* SEO Schema – Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Invoice Factoring: Meaning, How It Works, Costs, Benefits and Risks",
        "description": "Invoice factoring helps businesses release cash from unpaid invoices. Learn how factoring works, who it suits, the costs, risks, benefits and alternatives.",
        "author": {
          "@type": "Organization",
          "name": "Invoice Finance Brokers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Invoice Finance Brokers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.invoicefinancebrokers.co.uk/logo.png"
          }
        },
        "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/invoice-factoring",
        "datePublished": new Date().toISOString().split('T')[0],
        "dateModified": new Date().toISOString().split('T')[0]
      })}} />

      {/* SEO Schema – FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is factoring in finance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Factoring is a finance arrangement where a business releases cash from unpaid invoices by selling or assigning them to a third party provider."
            }
          },
          {
            "@type": "Question",
            "name": "Is invoice factoring the same as invoice finance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Invoice factoring is one type of invoice finance. Invoice discounting is another."
            }
          },
          {
            "@type": "Question",
            "name": "Does invoice factoring hurt customer relationships?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It can if collections are handled poorly. A good provider should deal with customers professionally and protect the business relationship."
            }
          },
          {
            "@type": "Question",
            "name": "Is invoice factoring only for struggling businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Many growing companies use factoring because growth can create cash pressure when customers pay slowly."
            }
          },
          {
            "@type": "Question",
            "name": "Can small businesses use invoice factoring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, provided they sell to other businesses, issue invoices on credit terms and have suitable debtor quality."
            }
          },
          {
            "@type": "Question",
            "name": "Is invoice factoring expensive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It can be more expensive than some traditional lending, but the value depends on speed, flexibility, cash flow improvement and the cost of not having working capital available."
            }
          }
        ]
      })}} />

      {/* SEO Schema – Financial Product */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FinancialProduct",
        "name": "Invoice Factoring",
        "description": "A business finance product where a company sells its unpaid customer invoices to a factoring provider in return for faster access to cash.",
        "provider": {
          "@type": "Organization",
          "name": "Invoice Finance Brokers"
        }
      })}} />

      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
          Invoice Factoring: <span className="text-gray-400 text-3xl block mt-2">Meaning, How It Works, Costs, Benefits and Risks</span>
        </h1>

        <div className="space-y-12 prose prose-invert max-w-none prose-h2:text-3xl prose-h2:font-semibold prose-h2:text-white prose-h3:text-2xl prose-h3:text-gray-200">
          
          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">What is invoice factoring?</h2>
            <p className="mb-4 text-gray-300">
              Invoice factoring is a form of business finance where a company sells its unpaid customer invoices to a factoring provider in return for faster access to cash.
            </p>
            <p className="mb-4 text-gray-300">
              Instead of waiting 30, 60 or 90 days for customers to pay, the business receives an advance against the invoice value. The factoring company then collects payment from the customer and releases the remaining balance, less its fees.
            </p>
            <p className="mb-4 text-gray-300">
              Invoice factoring is commonly used by business to business companies that issue invoices on credit terms and need working capital before customers settle their bills. It is part of the wider <Link href="/how-to-get-invoice-finance-uk" className="text-blue-400 hover:text-blue-300 underline">invoice finance</Link> market, which also includes invoice discounting. The British Business Bank describes invoice finance as a way for businesses to access money tied up in unpaid invoices and support cash flow.
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">How invoice factoring works</h2>
            <p className="mb-4 text-gray-300">The process usually works like this:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-6">
              <li>A business supplies goods or services to another business.</li>
              <li>The business raises an invoice with payment terms.</li>
              <li>The invoice is sent to a factoring provider.</li>
              <li>The factoring provider advances a percentage of the invoice value.</li>
              <li>The customer pays the factoring provider directly.</li>
              <li>The factoring provider pays the remaining balance to the business after deducting fees.</li>
            </ol>
            <p className="mb-4 text-gray-300">
              Many providers advance a large proportion of the invoice value upfront, often within a short period once the facility is active. The British Business Bank notes that invoice finance can provide funds within 24 hours of new invoices being generated once the arrangement is in place.
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Who is involved in invoice factoring?</h2>
            <p className="mb-4 text-gray-300">There are usually three parties:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-6">
              <li>The business selling the invoice.</li>
              <li>The customer who owes the money.</li>
              <li>The factoring company that advances funds and collects payment.</li>
            </ol>
            <p className="mb-4 text-gray-300">
              This is different from a standard bank loan because the funding is linked to unpaid invoices rather than being based only on the borrower’s balance sheet.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-8 my-10">
            <h2 className="text-2xl font-bold text-white mb-4">Invoice factoring vs invoice discounting</h2>
            <p className="mb-4 text-gray-300">
              Invoice factoring and invoice discounting are often confused, but they are not the same.
            </p>
            <p className="mb-4 text-gray-300">
              With invoice factoring, the factoring company usually takes control of collections and deals directly with the customer.
            </p>
            <p className="mb-4 text-gray-300">
              With <Link href="/invoice-factoring-vs-discounting" className="text-blue-400 hover:text-blue-300 underline">invoice discounting</Link>, the business usually keeps control of its own sales ledger and customer payment process.
            </p>
            <p className="text-gray-300">
              This means factoring is often more visible to customers, while invoice discounting can be more discreet. Allianz Trade describes invoice finance as covering both factoring and invoice discounting, with different options depending on how much control a business wants over collections.
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Why businesses use invoice factoring</h2>
            <p className="mb-4 text-gray-300">Businesses use invoice factoring because profitable companies can still run short of cash when customers pay slowly.</p>
            <p className="mb-4 text-gray-300">Factoring can help with:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Paying wages.</li>
              <li>Buying stock or materials.</li>
              <li>Covering supplier payments.</li>
              <li>Funding growth.</li>
              <li>Managing seasonal demand.</li>
              <li>Reducing pressure caused by late payment.</li>
              <li>Improving working capital.</li>
            </ul>
            <p className="mb-4 text-gray-300">
              UK Finance states that invoice finance and asset based lending are used to unlock working capital and support businesses through the economic cycle.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <section className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Benefits of invoice factoring</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-green-400 block mb-1">Faster access to cash</strong>
                  <span className="text-gray-300 text-sm">The main advantage is speed. A business can release cash from invoices without waiting for the customer to pay.</span>
                </li>
                <li>
                  <strong className="text-green-400 block mb-1">Scales with sales</strong>
                  <span className="text-gray-300 text-sm">As sales increase, the amount of available funding can increase too. This makes factoring useful for growing businesses with reliable customers.</span>
                </li>
                <li>
                  <strong className="text-green-400 block mb-1">Helps manage late payment pressure</strong>
                  <span className="text-gray-300 text-sm">Factoring can reduce the cash flow gap between issuing an invoice and receiving payment.</span>
                </li>
                <li>
                  <strong className="text-green-400 block mb-1">Outsourced credit control</strong>
                  <span className="text-gray-300 text-sm">Some businesses benefit from the factoring provider managing collections and debtor follow up.</span>
                </li>
                <li>
                  <strong className="text-green-400 block mb-1">No equity dilution</strong>
                  <span className="text-gray-300 text-sm">Invoice factoring is a finance product, not an equity raise, so the business does not give away ownership.</span>
                </li>
              </ul>
            </section>

            <section className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Disadvantages of invoice factoring</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-red-400 block mb-1">It has a cost</strong>
                  <span className="text-gray-300 text-sm">Factoring fees reduce the overall margin on each invoice.</span>
                </li>
                <li>
                  <strong className="text-red-400 block mb-1">Customers may know you are using finance</strong>
                  <span className="text-gray-300 text-sm">In many factoring arrangements, the customer pays the factoring provider directly.</span>
                </li>
                <li>
                  <strong className="text-red-400 block mb-1">Not all invoices will qualify</strong>
                  <span className="text-gray-300 text-sm">Providers usually assess the quality of the debtor book, customer creditworthiness and invoice history.</span>
                </li>
                <li>
                  <strong className="text-red-400 block mb-1">It may not suit business to consumer companies</strong>
                  <span className="text-gray-300 text-sm">Factoring is generally designed for businesses that invoice other businesses on credit terms.</span>
                </li>
                <li>
                  <strong className="text-red-400 block mb-1">Contracts need careful review</strong>
                  <span className="text-gray-300 text-sm">Minimum fees, notice periods, personal guarantees, concentration limits and recourse terms can make a major difference.</span>
                </li>
              </ul>
            </section>
          </div>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Recourse factoring vs non recourse factoring</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Recourse factoring</h3>
                <p className="text-gray-300">With recourse factoring, the business remains responsible if the customer does not pay. This is usually cheaper but carries more risk for the business.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Non recourse factoring</h3>
                <p className="text-gray-300">With non recourse factoring, the factoring provider takes on more of the bad debt risk, although this protection normally comes with conditions and exclusions.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">What does invoice factoring cost?</h2>
            <p className="mb-4 text-gray-300">Invoice factoring costs vary depending on:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Turnover.</li>
              <li>Invoice volume.</li>
              <li>Customer quality.</li>
              <li>Sector risk.</li>
              <li>Average payment time.</li>
              <li>Whether the facility is recourse or non recourse.</li>
              <li>Whether bad debt protection is included.</li>
            </ul>
            <p className="mb-4 text-gray-300">
              Common charges can include a service fee, discount charge, arrangement fee, audit fee and additional administration fees. <Link href="/invoice-finance-costs-uk" className="text-blue-400 hover:text-blue-300 underline">Read more about invoice finance costs here.</Link>
            </p>
            <p className="mb-4 text-gray-300">
              The exact cost should always be compared against the cash flow benefit, the time saved on credit control and the cost of alternative finance.
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Is invoice factoring a loan?</h2>
            <p className="mb-4 text-gray-300">
              Invoice factoring is not always described as a traditional loan because the finance is based on selling or assigning unpaid invoices. However, from a practical business cash flow perspective, it still functions as a funding facility.
            </p>
            <p className="mb-4 text-gray-300">
              The important point is that repayment is linked to customer invoice payments.
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Who is invoice factoring suitable for?</h2>
            <p className="mb-4 text-gray-300">Invoice factoring may suit companies that:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Sell to other businesses.</li>
              <li>Raise invoices on credit terms.</li>
              <li>Have reliable commercial customers.</li>
              <li>Need faster access to working capital.</li>
              <li>Are growing faster than cash flow allows.</li>
              <li>Want support with credit control.</li>
            </ul>
            <p className="mb-4 text-gray-300">
              It may be less suitable for companies with mostly consumer sales, disputed invoices, poor debtor quality or very low invoice volumes.
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Alternatives to invoice factoring</h2>
            <p className="mb-4 text-gray-300">Businesses may also consider:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li><Link href="/invoice-factoring-vs-discounting" className="text-blue-400 hover:text-blue-300 underline">Invoice discounting</Link>.</li>
              <li>Business overdrafts.</li>
              <li>Asset based lending.</li>
              <li>Revolving credit facilities.</li>
              <li>Merchant cash advances.</li>
              <li>Trade finance.</li>
              <li>Supplier finance.</li>
              <li>Unsecured business loans.</li>
            </ul>
            <p className="mb-4 text-gray-300">
              The right option depends on cash flow need, cost, control, customer relationships and how quickly funding is required. Working with experienced <Link href="/invoice-finance-brokers-uk" className="text-blue-400 hover:text-blue-300 underline">commercial finance brokers</Link> can help clarify these choices.
            </p>
          </section>

          <section className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Invoice factoring example</h2>
            <p className="mb-2 text-gray-300">A business issues a £10,000 invoice with 60 day payment terms.</p>
            <p className="mb-2 text-gray-300">The factoring company advances 85 percent of the invoice value.</p>
            <p className="mb-2 text-gray-300">The business receives £8,500 upfront.</p>
            <p className="mb-2 text-gray-300">The customer later pays the full £10,000 to the factoring company.</p>
            <p className="mb-2 text-gray-300">The factoring company deducts its fees and releases the remaining balance to the business.</p>
            <p className="text-gray-300 italic">This gives the business cash sooner, but the final amount received is lower than waiting for the customer to pay directly.</p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Key questions before choosing a factoring provider</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-6">
              <li>What percentage of each invoice will be advanced?</li>
              <li>What are the total fees?</li>
              <li>Are there minimum monthly charges?</li>
              <li>Is the agreement recourse or non recourse?</li>
              <li>Who manages customer collections?</li>
              <li>Will customers be notified?</li>
              <li>Are there long contract terms?</li>
              <li>Are personal guarantees required?</li>
              <li>What happens if a customer disputes an invoice?</li>
              <li>Can the facility grow with the business?</li>
            </ol>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What is factoring in finance?</h3>
                <p className="text-gray-300">Factoring is a finance arrangement where a business releases cash from unpaid invoices by selling or assigning them to a third party provider.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Is invoice factoring the same as invoice finance?</h3>
                <p className="text-gray-300">Invoice factoring is one type of invoice finance. Invoice discounting is another.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Does invoice factoring hurt customer relationships?</h3>
                <p className="text-gray-300">It can if collections are handled poorly. A good provider should deal with customers professionally and protect the business relationship.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Is invoice factoring only for struggling businesses?</h3>
                <p className="text-gray-300">No. Many growing companies use factoring because growth can create cash pressure when customers pay slowly.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Can small businesses use invoice factoring?</h3>
                <p className="text-gray-300">Yes, provided they sell to other businesses, issue invoices on credit terms and have suitable debtor quality.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Is invoice factoring expensive?</h3>
                <p className="text-gray-300">It can be more expensive than some traditional lending, but the value depends on speed, flexibility, cash flow improvement and the cost of not having working capital available.</p>
              </div>
            </div>
          </section>

          {/* Call to Action to Main Home Page */}
          <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Cash Flow?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop waiting on unpaid invoices. Explore the best invoice finance options for your business and get access to working capital faster. Our service helps you compare top brokers easily.
            </p>
            
            <div className="inline-flex flex-col text-left gap-3 mb-8 mx-auto">
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Release cash quickly</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Get matched with expert brokers</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> No obligation comparisons</span>
            </div>

            <div>
              <Link
                href="/#enquiry"
                className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
              >
                Start your enquiry today
              </Link>
              <div className="mt-4">
                <Link href="/" className="text-blue-400 hover:text-blue-300 underline text-sm">
                  Return to Home
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
