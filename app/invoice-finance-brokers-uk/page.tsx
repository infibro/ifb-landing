import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Invoice Finance Brokers UK | Compare & Get Funded Fast',
  description: 'Compare invoice finance brokers in the UK. Access multiple lenders, secure better rates, and get funding within 24–48 hours. No obligation.',
  alternates: {
    canonical: 'https://www.invoicefinancebrokers.co.uk/invoice-finance-brokers-uk'
  }
};

export default function InvoiceFinanceBrokersUK() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">

      {/* SEO Schema – Article */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Invoice Finance Brokers UK – Compare the Best Options Fast",
          "description": "Compare invoice finance brokers in the UK. Access multiple lenders, secure better rates, and get funding within 24–48 hours. No obligation.",
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
          "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/invoice-finance-brokers-uk",
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
              "name": "Why Use an Invoice Finance Broker?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An experienced broker gives you access to the full UK lending market, better rates through competition, faster approvals, and sector-specific matching."
              }
            },
            {
              "@type": "Question",
              "name": "How Much Does It Cost to Use a Broker?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In most cases, there is no upfront cost to you. Brokers are typically paid by the lender."
              }
            }
          ]
        })}
      </script>

      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
          Invoice Finance Brokers UK <span className="text-gray-400 text-3xl block mt-2">– Compare the Best Options Fast</span>
        </h1>

        <div className="space-y-12 prose prose-invert max-w-none prose-h2:text-3xl prose-h2:font-semibold prose-h2:text-white prose-h3:text-2xl prose-h3:text-gray-200">
          
          <section className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Find the Right Invoice Finance Broker in the UK</h2>
            <p className="mb-4">
              We help UK businesses compare trusted invoice finance brokers and lenders — quickly, independently, and without obligation.
            </p>
            <ul className="text-blue-400 font-medium space-y-2">
              <li>👉 Get matched in minutes</li>
              <li>👉 Access multiple lenders</li>
              <li>👉 No impact on your credit score</li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Why Use an Invoice Finance Broker?</h2>
            <p className="mb-4 text-gray-300">Going direct to a single lender limits your options.</p>
            <p className="mb-4 text-gray-300">An experienced broker gives you:</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
              <li>Access to the full UK lending market</li>
              <li>Better rates through competition</li>
              <li>Faster approvals (no wasted applications)</li>
              <li>Sector-specific matching</li>
            </ul>
            <p className="text-blue-400 bg-blue-900/10 p-4 rounded-lg inline-block">
              👉 <strong className="text-white">One application. Multiple offers. Better outcomes.</strong>
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">How Invoice Finance Brokers Work</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-6">
              <li>You submit a short enquiry</li>
              <li>A broker assesses your business and invoices</li>
              <li>They match you with suitable lenders</li>
              <li>You receive funding options</li>
              <li>You choose the best deal</li>
            </ol>
            <p className="text-blue-400 font-medium">👉 Most approvals happen within 24–48 hours</p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">What Can a Broker Help You With?</h2>
            <p className="mb-4 text-gray-300">Invoice finance brokers can arrange:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Invoice factoring</li>
              <li>Invoice discounting</li>
              <li>Selective invoice finance</li>
              <li>Bad credit invoice finance</li>
              <li>Construction invoice finance</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-8 my-10">
            <h2 className="text-2xl font-bold text-white mb-4">Compare Invoice Finance Options</h2>
            <p className="mb-4 text-gray-300">If you’re unsure which option is right, start here:</p>
            <ul className="list-disc pl-6 space-y-2 text-blue-400">
              <li><Link href="/how-to-get-invoice-finance-uk" className="hover:text-blue-300 underline">How to get invoice finance</Link></li>
              <li><Link href="/invoice-finance-costs-uk" className="hover:text-blue-300 underline">Invoice finance costs UK</Link></li>
              <li><Link href="/invoice-factoring-vs-discounting" className="hover:text-blue-300 underline">Invoice factoring vs discounting</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Who Should Use an Invoice Finance Broker?</h2>
            <p className="mb-4 text-gray-300">You should use a broker if you:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Want the best deal (not just one option)</li>
              <li>Have been declined by a lender</li>
              <li>Need funding quickly</li>
              <li>Operate in construction, recruitment, or manufacturing</li>
              <li>Want to avoid wasting time applying to multiple lenders</li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">How Much Does It Cost to Use a Broker?</h2>
            <p className="mb-4 text-gray-300">In most cases:</p>
            <p className="text-blue-400 font-bold mb-4">👉 There is no upfront cost to you</p>
            <p className="mb-4 text-gray-300">Brokers are typically paid by the lender.</p>
            <p className="mb-2 text-gray-300">This means:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>You get access to the market</li>
              <li>Without paying for advice upfront</li>
            </ul>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Why Businesses Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Independent and UK-focused</li>
              <li>Access to a wide panel of lenders</li>
              <li>Fast, straightforward process</li>
              <li>No pressure, no obligation</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Start Comparing Invoice Finance Brokers</h2>
            <p className="text-gray-300 mb-8">Stop guessing which <Link href="/" className="text-blue-400 hover:text-blue-300 underline">lender is right</Link>.</p>
            
            <div className="inline-flex flex-col text-left gap-3 mb-8 mx-auto">
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Compare brokers</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Get better terms</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Unlock funding faster</span>
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
