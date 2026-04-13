import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Invoice Factoring vs Discounting | Key Differences Explained',
  description: 'Compare invoice factoring vs discounting. Understand costs, control, and which option is right for your business.',
  alternates: {
    canonical: 'https://www.invoicefinancebrokers.co.uk/invoice-factoring-vs-discounting'
  }
};

export default function InvoiceFactoringVsDiscounting() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Invoice Factoring vs Discounting – What's the Difference?",
          "description": "Compare invoice factoring vs discounting. Understand costs, control, and which option is right for your business.",
          "author": { "@type": "Organization", "name": "Invoice Finance Brokers" },
          "publisher": {
            "@type": "Organization",
            "name": "Invoice Finance Brokers",
            "logo": { "@type": "ImageObject", "url": "https://www.invoicefinancebrokers.co.uk/logo.png" }
          },
          "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/invoice-factoring-vs-discounting",
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
              "name": "What is the key difference between invoice factoring and discounting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "With factoring, the lender collects payments from your customers. With discounting, you retain control of collections and the facility is confidential."
              }
            },
            {
              "@type": "Question",
              "name": "Which is cheaper: factoring or discounting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Discounting is usually cheaper as it doesn't include the collections service. Factoring includes more service but comes at a higher cost."
              }
            },
            {
              "@type": "Question",
              "name": "Which is easier to get approved for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Factoring is generally easier to access because the lender controls collections, which reduces their risk."
              }
            }
          ]
        })}
      </script>

      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
          Invoice Factoring vs Discounting <span className="text-gray-400 text-3xl block mt-2">What's the Difference?</span>
        </h1>

        <div className="space-y-12 max-w-none">

          <section className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Factoring vs Discounting: Which Is Right for Your Business?</h2>
            <p className="mb-4 text-gray-300">Both options unlock cash from invoices — but they work very differently.</p>
            <ul className="text-blue-400 font-medium space-y-2">
              <li>👉 Compare options</li>
              <li>👉 Find the right fit</li>
              <li>👉 Get funded fast</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Key Difference (Simple Explanation)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <p className="text-2xl mb-2">🏦</p>
                <h3 className="text-lg font-bold text-white mb-1">Factoring</h3>
                <p className="text-gray-400">Lender collects payments</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <p className="text-2xl mb-2">🏢</p>
                <h3 className="text-lg font-bold text-white mb-1">Discounting</h3>
                <p className="text-gray-400">You collect payments</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Invoice Factoring Explained</h2>
            <p className="mb-4 text-gray-300">With factoring:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6 text-gray-300">
              <li>Lender advances cash</li>
              <li>Lender manages collections</li>
              <li>Customers usually know</li>
            </ul>
            <h3 className="text-xl font-bold text-white mb-3">Best for:</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Small businesses</li>
              <li>Limited admin resources</li>
              <li>Rapid growth</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Invoice Discounting Explained</h2>
            <p className="mb-4 text-gray-300">With discounting:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6 text-gray-300">
              <li>Lender advances cash</li>
              <li>You manage collections</li>
              <li>Facility is confidential</li>
            </ul>
            <h3 className="text-xl font-bold text-white mb-3">Best for:</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Established businesses</li>
              <li>Strong internal processes</li>
              <li>Businesses wanting control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Feature</th>
                    <th className="px-4 py-3 font-semibold">Factoring</th>
                    <th className="px-4 py-3 font-semibold">Discounting</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 divide-y divide-white/5">
                  {[
                    ['Collections', 'Lender', 'You'],
                    ['Confidential', 'No', 'Yes'],
                    ['Cost', 'Higher', 'Lower'],
                    ['Control', 'Less', 'More'],
                    ['Best for', 'Smaller firms', 'Established firms'],
                  ].map(([feature, factoring, discounting]) => (
                    <tr key={feature} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">{feature}</td>
                      <td className="px-4 py-3">{factoring}</td>
                      <td className="px-4 py-3 text-blue-400">{discounting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Which Is Cheaper?</h2>
            <ul className="space-y-2 mb-4 text-blue-400 font-medium">
              <li>👉 Discounting is usually cheaper</li>
              <li>👉 Factoring includes more service</li>
            </ul>
            <p className="text-gray-300">See full costs here: <Link href="/invoice-finance-costs-uk" className="text-blue-400 hover:text-blue-300 underline">Invoice finance costs UK</Link></p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white border-b border-white/10 pb-2 mb-6">Which Is Easier to Get?</h2>
            <p className="text-blue-400 font-medium mb-2">👉 Factoring is easier to access</p>
            <p className="text-gray-400 mb-2">Why:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Lender controls collections</li>
              <li>Lower risk</li>
            </ul>
          </section>

          <section>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">When to Choose Factoring</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>You want simplicity</li>
                  <li>You don't have credit control</li>
                  <li>You want faster setup</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">When to Choose Discounting</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>You want confidentiality</li>
                  <li>You already manage collections</li>
                  <li>You want lower costs</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Still Not Sure? Explore More Guides</h2>
            <ul className="space-y-2 text-blue-400">
              <li><Link href="/how-to-get-invoice-finance-uk" className="hover:text-blue-300 underline">How to get invoice finance</Link></li>
              <li><Link href="/invoice-finance-brokers-uk" className="hover:text-blue-300 underline">Invoice finance brokers UK</Link></li>
              <li><Link href="/invoice-finance-costs-uk" className="hover:text-blue-300 underline">Invoice finance costs UK</Link></li>
              <li><Link href="/" className="hover:text-blue-300 underline">Compare providers — Invoice Finance Brokers</Link></li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get Matched to the Right Option</h2>
            <p className="text-gray-300 mb-8">Don't guess — get the right structure from the start.</p>
            <div className="inline-flex flex-col text-left gap-3 mb-8 mx-auto">
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Compare factoring vs discounting</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Speak to UK lenders</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Get funded quickly</span>
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
