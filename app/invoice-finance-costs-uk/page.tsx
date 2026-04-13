import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Invoice Finance Costs UK | Fees, Rates & Pricing Explained',
  description: 'Discover invoice finance costs in the UK. Understand fees, rates, and real examples. Compare lenders and get the best deal.',
  alternates: {
    canonical: 'https://www.invoicefinancebrokers.co.uk/invoice-finance-costs-uk'
  }
};

export default function InvoiceFinanceCostsUK() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Invoice Finance Costs UK – Fees, Rates & What You'll Actually Pay",
          "description": "Discover invoice finance costs in the UK. Understand fees, rates, and real examples. Compare lenders and get the best deal.",
          "author": { "@type": "Organization", "name": "Invoice Finance Brokers" },
          "publisher": {
            "@type": "Organization",
            "name": "Invoice Finance Brokers",
            "logo": { "@type": "ImageObject", "url": "https://www.invoicefinancebrokers.co.uk/logo.png" }
          },
          "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/invoice-finance-costs-uk",
          "datePublished": new Date().toISOString().split('T')[0],
          "dateModified": new Date().toISOString().split('T')[0]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does invoice finance cost in the UK?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Invoice finance costs typically range from 1% to 5% of invoice value, depending on your business, customers, and risk profile."
              }
            },
            {
              "@type": "Question",
              "name": "What is the service fee for invoice finance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The service fee is typically 0.5% – 3% of turnover, covering account management, collections (for factoring), and administration."
              }
            },
            {
              "@type": "Question",
              "name": "What hidden costs should I watch for with invoice finance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Watch out for setup fees, minimum usage fees, long-term contracts, and early exit penalties. A broker can help you avoid these traps."
              }
            }
          ]
        })}
      </script>

      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
          Invoice Finance Costs UK <span className="text-gray-400 text-3xl block mt-2">Fees, Rates &amp; What You'll Actually Pay</span>
        </h1>

        <div className="space-y-12 max-w-none">

          <section className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">How Much Does Invoice Finance Cost in the UK?</h2>
            <p className="mb-4 text-gray-300">
              Invoice finance costs typically range from <strong className="text-white">1% to 5% of invoice value</strong>, depending on your business, customers, and risk profile.
            </p>
            <ul className="text-blue-400 font-medium space-y-2">
              <li>👉 Get a tailored quote in minutes</li>
              <li>👉 Compare UK lenders</li>
              <li>👉 No obligation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">The 2 Main Costs Explained</h2>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">1. Service Fee (Administration Fee)</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
                  <li>Typically: <strong className="text-white">0.5% – 3% of turnover</strong></li>
                  <li>Covers: account management, collections (factoring), admin</li>
                </ul>
                <p className="text-blue-400 font-medium">👉 Higher volume = lower fees</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">2. Discount Rate (Interest)</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
                  <li>Typically: <strong className="text-white">1.5% – 5% above base rate</strong></li>
                  <li>Charged on the amount advanced</li>
                </ul>
                <p className="text-blue-400 font-medium">👉 Similar to interest on a loan — but only on what you use</p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Example: Real Invoice Finance Costs</h2>
            <p className="text-gray-300 mb-4">A UK business invoices £50,000:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
              <li>Advance: £40,000 (80%)</li>
              <li>Service fee (2%): £1,000</li>
              <li>Discount cost: ~£400–£800</li>
            </ul>
            <p className="text-blue-400 font-bold">👉 Total cost: ~£1,400–£1,800</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">What Affects Invoice Finance Costs?</h2>
            <p className="mb-4 text-gray-300">Your pricing depends on:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Customer credit quality (biggest factor)</li>
              <li>Industry risk (construction vs professional services)</li>
              <li>Invoice volume</li>
              <li>Average invoice size</li>
              <li>Payment terms (30 vs 90 days)</li>
            </ul>
            <p className="text-blue-400 bg-blue-900/10 p-4 rounded-lg inline-block">👉 Strong customers = lower costs</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Factoring vs Discounting Costs</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
              <li><strong className="text-white">Factoring:</strong> slightly higher (includes collections)</li>
              <li><strong className="text-white">Discounting:</strong> lower cost, more control</li>
            </ul>
            <p className="text-gray-300">Compare both here: <Link href="/invoice-factoring-vs-discounting" className="text-blue-400 hover:text-blue-300 underline">Invoice factoring vs discounting</Link></p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Hidden Costs to Watch For</h2>
            <p className="mb-4 text-gray-300">Some providers include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
              <li>Setup fees</li>
              <li>Minimum usage fees</li>
              <li>Long-term contracts</li>
              <li>Early exit penalties</li>
            </ul>
            <p className="text-blue-400 font-medium">👉 A broker helps you avoid these traps</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">How to Get the Best Rates</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Use a broker (lenders compete)</li>
              <li>Keep debtor book clean</li>
              <li>Avoid disputes</li>
              <li>Increase volume over time</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
            <ul className="space-y-2 text-blue-400">
              <li><Link href="/how-to-get-invoice-finance-uk" className="hover:text-blue-300 underline">How to get invoice finance</Link></li>
              <li><Link href="/invoice-finance-brokers-uk" className="hover:text-blue-300 underline">Invoice finance brokers UK</Link></li>
              <li><Link href="/invoice-factoring-vs-discounting" className="hover:text-blue-300 underline">Invoice factoring vs discounting</Link></li>
              <li><Link href="/" className="hover:text-blue-300 underline">Compare providers — Invoice Finance Brokers</Link></li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compare Invoice Finance Costs Now</h2>
            <p className="text-gray-300 mb-8">Stop guessing what you'll pay.</p>
            <div className="inline-flex flex-col text-left gap-3 mb-8 mx-auto">
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Compare UK lenders</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Get accurate pricing</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Secure better terms</span>
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
