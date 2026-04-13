import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get Invoice Finance UK | Fast Approval & Broker Comparison',
  description: 'Learn how to get invoice finance in the UK. Step-by-step guide to qualifying, applying, and accessing funding within 24–48 hours. Compare trusted providers.',
  alternates: {
    canonical: 'https://www.invoicefinancebrokers.co.uk/how-to-get-invoice-finance-uk'
  }
};

export default function HowToGetInvoiceFinanceUK() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">

      {/* SEO Schema – Article */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How to Get Invoice Finance in the UK (Step-by-Step Guide)",
          "description": "Learn how to get invoice finance in the UK. Step-by-step guide to qualifying, applying, and accessing funding within 24–48 hours. Compare trusted providers.",
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
          "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/how-to-get-invoice-finance-uk",
          "datePublished": new Date().toISOString().split('T')[0],
          "dateModified": new Date().toISOString().split('T')[0]
        })}
      </script>

      {/* SEO Schema – FAQPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is invoice finance a loan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No — it’s funding secured against your invoices."
              }
            },
            {
              "@type": "Question",
              "name": "Do customers know?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Only with factoring. Discounting is confidential."
              }
            },
            {
              "@type": "Question",
              "name": "Can startups apply?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sometimes — depends on invoice quality and customers."
              }
            }
          ]
        })}
      </script>

      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
          How to Get Invoice Finance in the UK <span className="text-gray-400 text-3xl block mt-2">(Step-by-Step Guide)</span>
        </h1>

        <div className="space-y-12 prose prose-invert max-w-none prose-h2:text-3xl prose-h2:font-semibold prose-h2:text-white prose-h3:text-2xl prose-h3:text-gray-200">
          
          <section className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Check if you qualify for invoice finance in minutes</h2>
            <p className="mb-4">
              Unlock cash tied up in unpaid invoices without waiting 30, 60 or 90 days.<br/>
              We match UK businesses with trusted invoice finance providers — fast.
            </p>
            <p className="text-blue-400 font-medium">👉 Get a free quote | No obligation | No impact on credit score</p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">What Is Invoice Finance?</h2>
            <p>
              Invoice finance allows UK businesses to release cash from unpaid invoices.<br/>
              Instead of waiting for customers to pay, a lender advances up to 90% of the invoice value upfront.
            </p>
            <p className="mt-4">It’s widely used across sectors like:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-gray-300">
              <li>Construction</li>
              <li>Recruitment</li>
              <li>Manufacturing</li>
              <li>Logistics</li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">How to Get Invoice Finance (Step-by-Step)</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-2 mb-2"><span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span> Issue an invoice</h3>
                <p className="ml-10 text-gray-400">You provide goods or services and invoice your customer on standard terms (30–90 days).</p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 mb-2"><span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span> Apply for funding</h3>
                <p className="ml-10 text-gray-400 mb-2">Submit a short enquiry outlining:</p>
                <ul className="list-disc ml-16 text-gray-400 space-y-1">
                  <li>Funding required</li>
                  <li>Business type</li>
                  <li>Customer profile</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 mb-2"><span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span> Lender assessment</h3>
                <p className="ml-10 text-gray-400 mb-2">The lender reviews:</p>
                <ul className="list-disc ml-16 text-gray-400 space-y-1">
                  <li>Your customers (debtor quality is key)</li>
                  <li>Invoice value</li>
                  <li>Trading history</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 mb-2"><span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span> Receive an advance</h3>
                <p className="ml-10 text-gray-400">Up to 70–90% of the invoice value is released — often within 24–48 hours.</p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 mb-2"><span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span> Customer pays the invoice</h3>
                <p className="ml-10 text-gray-400 mb-2">Depending on the facility:</p>
                <ul className="list-disc ml-16 text-gray-400 space-y-1">
                  <li>The lender collects payment (factoring)</li>
                  <li>You collect payment (discounting)</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 mb-2"><span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span> Final balance released</h3>
                <p className="ml-10 text-gray-400">The remaining balance is paid to you, minus fees.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Who Qualifies for Invoice Finance?</h2>
            <p className="mb-4">Most UK businesses qualify if they:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Sell to other businesses (B2B)</li>
              <li>Issue invoices with payment terms</li>
              <li>Have reliable customers</li>
              <li>Need £10k+ funding</li>
            </ul>
            <p className="mt-4 text-blue-400 bg-blue-900/10 p-4 rounded-lg inline-block">
              👉 Profitability is less important than <strong className="text-white">customer quality</strong>
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">What Lenders Look for (UK Reality)</h2>
            <p className="mb-4 text-gray-300">Most lenders won’t say this publicly, but approval typically comes down to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-8 text-gray-300">
              <li>Your customer’s credit strength (not yours)</li>
              <li>Invoice size (usually £500+ per invoice)</li>
              <li>Industry risk (construction is common, hospitality is harder)</li>
              <li>Payment history consistency</li>
            </ul>
            
            <h3 className="text-xl font-bold text-white mb-3">Common reasons applications are rejected</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6 text-gray-400">
              <li>Customers with poor credit ratings</li>
              <li>Disputed invoices</li>
              <li>Too many small invoices</li>
              <li>B2C (consumer) businesses</li>
            </ul>
            <p className="text-blue-400 bg-blue-900/10 p-4 rounded-lg inline-block">
              👉 If your customers are strong, approval rates are high — even if your business is new.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-8 my-10">
            <h2 className="text-2xl font-bold text-white mb-4">Example: Construction Business Using Invoice Finance</h2>
            <p className="mb-6 text-gray-300">A UK subcontractor invoices £50,000 monthly on 60-day terms.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-white mb-3">Instead of waiting:</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>Receives ~£40,000 within 48 hours</li>
                  <li>Uses cash to pay staff and take on new jobs</li>
                </ul>
              </div>
              <div className="bg-green-900/10 border border-green-500/20 p-5 rounded-lg">
                <h3 className="font-medium text-white mb-3">Result:</h3>
                <ul className="list-disc pl-5 text-green-400 space-y-2 font-medium">
                  <li>Faster growth</li>
                  <li>No cashflow gaps</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Why Use an Invoice Finance Broker?</h2>
            <p className="mb-6 text-gray-300">Going direct to one lender limits your options. Using a broker gives you:</p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Access to multiple lenders</h3>
                <p className="text-gray-400 text-sm">Compare options across the UK market.</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Better rates and terms</h3>
                <p className="text-gray-400 text-sm">Lenders compete for your business.</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Faster approvals</h3>
                <p className="text-gray-400 text-sm">We match you with the right provider first time.</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Sector expertise</h3>
                <p className="text-gray-400 text-sm">Different lenders specialise in different industries.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Invoice Finance Options Explained</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Invoice Factoring</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300">
                  <li>Lender advances funds</li>
                  <li>Lender manages collections</li>
                </ul>
                <p className="text-sm font-medium text-blue-400">👉 Best for smaller or growing businesses</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Invoice Discounting</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300">
                  <li>You retain control of collections</li>
                  <li>Confidential facility</li>
                </ul>
                <p className="text-sm font-medium text-blue-400">👉 Best for established businesses</p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Selective Invoice Finance</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300">
                  <li>Fund individual invoices only</li>
                </ul>
                <p className="text-sm font-medium text-blue-400">👉 Best for flexible, short-term funding</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">How Quickly Can You Get Invoice Finance?</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
              <li>Decision: often within 24 hours</li>
              <li>Funding: typically within 48 hours</li>
            </ul>
            <p className="text-gray-300 mb-2">Speed depends on:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Quality of invoices</li>
              <li>Customer strength</li>
              <li>Documentation readiness</li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">How Much Does Invoice Finance Cost in the UK?</h2>
            <p className="mb-4 text-gray-300">Typical costs include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-300">
              <li><strong className="text-white">Service fee:</strong> 0.5% – 3% of invoice value</li>
              <li><strong className="text-white">Discount rate:</strong> 1.5% – 5% above base rate</li>
            </ul>
            
            <p className="mb-3 text-gray-300">Costs depend on:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6 text-gray-400">
              <li>Volume</li>
              <li>Risk</li>
              <li>Industry</li>
              <li>Customer quality</li>
            </ul>
            
            <p className="text-blue-400 font-medium bg-blue-900/10 p-4 rounded-lg inline-block">👉 Strong debtors = lower rates</p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Common Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Is invoice finance a loan?</h3>
                <p className="text-gray-400">No — it’s funding secured against your invoices.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Do customers know?</h3>
                <p className="text-gray-400">Only with factoring. Discounting is confidential.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Can startups apply?</h3>
                <p className="text-gray-400">Sometimes — depends on invoice quality and customers.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get Matched with the Right Invoice Finance Provider</h2>
            <p className="text-gray-300 mb-8">We connect UK businesses with independent <Link href="/" className="text-blue-400 hover:text-blue-300 underline">invoice finance brokers and lenders</Link>. See <Link href="/how-it-works" className="text-blue-400 hover:text-blue-300 underline">how it works</Link> to learn more.</p>
            
            <div className="inline-flex flex-col text-left gap-3 mb-8 mx-auto">
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Compare options</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Get a fast decision</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Unlock working capital quickly</span>
            </div>

            <div>
              <Link
                href="/#enquiry"
                className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
              >
                Start your enquiry now
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
