import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top 10 Invoice Finance Companies UK | Compare Invoice Finance Providers',
  description: 'Compare 10 leading UK invoice finance companies. See who each lender is best suited for, key benefits, and how to choose the right invoice finance provider.',
  alternates: {
    canonical: 'https://www.invoicefinancebrokers.co.uk/top-10-invoice-finance-companies-uk'
  }
};

export default function Top10InvoiceFinanceCompaniesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* SEO Schema – Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Top 10 Invoice Finance Companies in the UK",
        "description": "Compare 10 leading UK invoice finance companies. See who each lender is best suited for, key benefits, and how to choose the right invoice finance provider.",
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
        "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/top-10-invoice-finance-companies-uk",
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
            "name": "Who is the best invoice finance company in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no single best invoice finance company for every business. Providers like Lloyds, Close Brothers, Bibby, and Skipton all serve different types of businesses. The best choice depends on your turnover, debtor book, sector, and whether you need factoring or discounting."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between an invoice finance lender and a broker?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An invoice finance lender provides the funding directly. A broker compares multiple lenders and helps match your business with suitable providers."
            }
          },
          {
            "@type": "Question",
            "name": "Is invoice finance only for struggling businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Many growing businesses use invoice finance because sales growth can create cash flow pressure. More sales often means more invoices waiting to be paid."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can invoice finance be arranged?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some digital providers can move quickly, especially for straightforward cases. Larger or more complex facilities may take longer because the lender needs to assess the debtor book and contracts."
            }
          },
          {
            "@type": "Question",
            "name": "Can startups use invoice finance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some startups can use invoice finance if they raise valid B2B invoices to creditworthy customers. However, lender appetite varies."
            }
          },
          {
            "@type": "Question",
            "name": "Does invoice finance affect customer relationships?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the facility. Invoice factoring is usually disclosed because the lender may contact customers for payment. Invoice discounting can be confidential."
            }
          },
          {
            "@type": "Question",
            "name": "What industries use invoice finance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Invoice finance is commonly used in recruitment, transport, manufacturing, wholesale, engineering, logistics, security, printing, and food supply among others."
            }
          }
        ]
      })}} />

      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
          Top 10 Invoice Finance Companies in the UK <span className="text-gray-400 text-3xl block mt-2">Compare Leading Providers & Find Your Best Fit</span>
        </h1>

        <div className="space-y-12 prose prose-invert max-w-none prose-h2:text-3xl prose-h2:font-semibold prose-h2:text-white prose-h3:text-2xl prose-h3:text-gray-200">
          
          <section>
            <p className="mb-4 text-gray-300 text-lg">
              Invoice finance can help businesses release cash tied up in unpaid invoices, improve working capital, and reduce the pressure caused by late paying customers.
            </p>
            <p className="mb-4 text-gray-300">
              The right provider depends on your size, sector, debtor book, funding requirement, and whether you want <Link href="/invoice-factoring" className="text-blue-400 hover:text-blue-300 underline">invoice factoring</Link>, <Link href="/invoice-factoring-vs-discounting" className="text-blue-400 hover:text-blue-300 underline">invoice discounting</Link>, selective invoice finance, or a larger asset based lending facility.
            </p>
            <p className="mb-4 text-gray-300">
              Below is a practical comparison of 10 well-known UK invoice finance companies to help you make an informed decision.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-8 my-10">
            <h2 className="text-2xl font-bold text-white mb-4 border-none">What is invoice finance?</h2>
            <p className="mb-4 text-gray-300">
              Invoice finance allows a business to access money from unpaid customer invoices before the customer pays.
            </p>
            <p className="text-gray-300">
              Instead of waiting 30, 60, or 90 days, the business can receive an agreed percentage of the invoice value upfront. The remaining balance is released when the customer pays, less <Link href="/invoice-finance-costs-uk" className="text-blue-400 hover:text-blue-300 underline">fees and charges</Link>.
            </p>
          </section>

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">Top 10 UK invoice finance companies</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mb-8 min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 px-4 text-white font-semibold">Provider</th>
                    <th className="py-3 px-4 text-white font-semibold">Best suited for</th>
                    <th className="py-3 px-4 text-white font-semibold">Typical strengths</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Lloyds Bank</td>
                    <td className="py-3 px-4">Established SMEs and larger businesses</td>
                    <td className="py-3 px-4">Bank backed facilities, invoice discounting, scale</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Close Brothers</td>
                    <td className="py-3 px-4">B2B SMEs and larger trading businesses</td>
                    <td className="py-3 px-4">Flexible facilities, asset based lending</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Bibby Financial Services</td>
                    <td className="py-3 px-4">SMEs needing specialist invoice finance</td>
                    <td className="py-3 px-4">Independent lender, broad sector experience</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Skipton Business Finance</td>
                    <td className="py-3 px-4">SMEs wanting straightforward factoring or discounting</td>
                    <td className="py-3 px-4">Transparent facilities, bad debt protection options</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Novuna Business Cash Flow</td>
                    <td className="py-3 px-4">Businesses wanting guided options</td>
                    <td className="py-3 px-4">Fast funding, lender comparison, expert support</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Cynergy Business Finance</td>
                    <td className="py-3 px-4">Growing SMEs needing asset based lending</td>
                    <td className="py-3 px-4">Relationship led funding, structured facilities</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Metro Bank</td>
                    <td className="py-3 px-4">SMEs wanting factoring support</td>
                    <td className="py-3 px-4">Invoice finance with credit control support</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Growth Lending</td>
                    <td className="py-3 px-4">High growth businesses and scale ups</td>
                    <td className="py-3 px-4">Larger facilities, selective invoice finance</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">Kriya</td>
                    <td className="py-3 px-4">Digital first SMEs and B2B businesses</td>
                    <td className="py-3 px-4">Flexible working capital products</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white">TRIVER</td>
                    <td className="py-3 px-4">Small businesses wanting fast funding</td>
                    <td className="py-3 px-4">Digital application, simple invoice advances</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Company Profiles */}
          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">1. Lloyds Bank Invoice Finance</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.lloydsbank.com/business.html" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Lloyds Bank</a> is one of the best-known names in UK business finance and offers invoice finance solutions for businesses looking to release cash from unpaid invoices.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Lloyds Bank may be best for</h3>
            <p className="mb-4 text-gray-300">
              Lloyds Bank may suit established businesses that want a bank backed invoice finance facility and have a strong debtor book. It is particularly relevant for companies that want invoice discounting, confidentiality, and a facility that can grow as sales increase.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Well recognised banking brand</li>
                  <li>Suitable for established SMEs and larger businesses</li>
                  <li>Can help improve working capital</li>
                  <li>Funding can grow with the value of the sales ledger</li>
                  <li>Useful for businesses with strong credit control processes</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Lloyds is likely to be more suitable for businesses with a solid trading history and good quality customer invoices. Smaller businesses or companies needing more flexible factoring support may want to compare specialist lenders as well.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">2. Close Brothers Invoice Finance</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.closeinvoice.co.uk/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Close Brothers</a> is a long established invoice finance and asset based lending provider, working with B2B businesses across the UK.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Close Brothers may be best for</h3>
            <p className="mb-4 text-gray-300">
              Close Brothers may suit businesses that need more than a simple invoice finance facility. It can be a strong option for companies looking at invoice discounting, factoring, asset based lending, growth funding, acquisitions, or more structured working capital support.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Strong reputation in invoice finance and asset based lending</li>
                  <li>Suitable for B2B businesses</li>
                  <li>Can support more complex funding requirements</li>
                  <li>Useful for growth, acquisitions, restructuring, or working capital pressure</li>
                  <li>Relationship led approach</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Close Brothers may be better suited to established businesses with meaningful turnover and good quality receivables.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">3. Bibby Financial Services</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.bibbyfinancialservices.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Bibby Financial Services</a> is one of the UK’s leading independent invoice finance specialists and works with thousands of businesses across different sectors.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Bibby may be best for</h3>
            <p className="mb-4 text-gray-300">
              Bibby may suit SMEs that want a specialist invoice finance provider rather than a high street bank. It can be relevant for businesses looking for invoice factoring, invoice discounting, export finance, bad debt protection, or sector specific support.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Independent invoice finance specialist</li>
                  <li>Broad experience across UK SMEs</li>
                  <li>Can support businesses in multiple sectors</li>
                  <li>Good fit for firms affected by late payments</li>
                  <li>Options for bad debt protection and additional working capital support</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Bibby is a strong option for businesses that want invoice finance as a core funding solution, not just an add on banking product.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">4. Skipton Business Finance</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.skiptonbusinessfinance.co.uk/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Skipton Business Finance</a> provides invoice factoring and invoice discounting to UK businesses looking to improve cash flow and reduce the uncertainty caused by unpaid invoices.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Skipton may be best for</h3>
            <p className="mb-4 text-gray-300">
              Skipton may suit SMEs looking for a straightforward invoice finance provider with clear facility options. It can work well for companies that want either outsourced credit control through factoring or more confidential invoice discounting.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Invoice factoring and invoice discounting options</li>
                  <li>Can help stabilise cash flow</li>
                  <li>Useful for SMEs with regular B2B invoices</li>
                  <li>Bad debt protection options available</li>
                  <li>Straightforward approach to working capital funding</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Skipton is worth considering where the business wants a focused invoice finance facility without needing a wider corporate banking relationship.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">5. Novuna Business Cash Flow</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.novuna.co.uk/business-cash-flow/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Novuna Business Cash Flow</a> offers invoice finance solutions and also helps businesses compare funding options.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Novuna may be best for</h3>
            <p className="mb-4 text-gray-300">
              Novuna may suit businesses that are not completely sure which invoice finance structure they need. It can be useful for SMEs that want expert guidance, quick access to cash, and a provider that can look beyond one fixed product.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Invoice finance and wider cash flow support</li>
                  <li>Fast funding options</li>
                  <li>Expert guidance through the process</li>
                  <li>Can compare suitable funding routes</li>
                  <li>Useful for businesses new to invoice finance</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Novuna may be a good fit where the business wants support understanding the most suitable funding route before committing to a facility.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">6. Cynergy Business Finance</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.cynergybank.co.uk/business-finance/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Cynergy Business Finance</a> is the asset based lending arm of Cynergy Bank and provides funding for UK SMEs looking to scale and grow.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Cynergy may be best for</h3>
            <p className="mb-4 text-gray-300">
              Cynergy may suit growing SMEs that need structured finance rather than a basic invoice factoring product. It can be relevant for companies with larger funding needs, asset backed requirements, or more complex working capital demands.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Asset based lending expertise</li>
                  <li>Backed by Cynergy Bank</li>
                  <li>Suitable for growing SMEs</li>
                  <li>Relationship led approach</li>
                  <li>Can support more structured funding needs</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Cynergy is likely to be more relevant for established businesses with clear growth plans and suitable business assets or receivables.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">7. Metro Bank Invoice Finance</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.metrobankonline.co.uk/business/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Metro Bank</a> offers invoice finance services for SMEs looking to improve cash flow by releasing money from unpaid invoices.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Metro Bank may be best for</h3>
            <p className="mb-4 text-gray-300">
              Metro Bank may suit SMEs that want invoice finance with support around credit control and customer collections. It can be relevant for businesses that prefer factoring style support rather than handling everything internally.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Invoice finance for SMEs</li>
                  <li>Can support credit control processes</li>
                  <li>Useful for businesses without a large internal finance team</li>
                  <li>Helps reduce pressure from late payment</li>
                  <li>Recognisable UK banking brand</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Metro Bank may be most suitable for businesses that want operational support as well as funding.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">8. Growth Lending</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.growth-lending.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Growth Lending</a> provides funding for ambitious SMEs and scale ups, including selective invoice finance and larger growth capital solutions.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Growth Lending may be best for</h3>
            <p className="mb-4 text-gray-300">
              Growth Lending may suit high growth businesses that need more flexible funding than a traditional invoice finance facility. It can be relevant for companies funding expansion, acquisitions, contract delivery, or large invoice based requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Suitable for high growth companies</li>
                  <li>Larger funding options available</li>
                  <li>Selective invoice finance options</li>
                  <li>Can support ambitious SMEs and scale ups</li>
                  <li>Useful where funding needs are linked to growth plans</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Growth Lending is likely to be more relevant for businesses with clear growth momentum and meaningful funding requirements.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">9. Kriya</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://kriya.co/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">Kriya</a> provides invoice finance, working capital loans, and B2B payment solutions for businesses that want a more digital approach to funding.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who Kriya may be best for</h3>
            <p className="mb-4 text-gray-300">
              Kriya may suit SMEs and B2B businesses that want flexible, technology led invoice finance. It can be useful for businesses that want to bridge cash flow gaps, fund growth, or use invoice finance alongside other working capital products.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Digital first invoice finance</li>
                  <li>Flexible working capital solutions</li>
                  <li>Suitable for modern B2B businesses</li>
                  <li>Can help bridge cash flow gaps</li>
                  <li>Useful for businesses wanting speed and simplicity</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  Kriya may be a good fit for businesses comfortable with a more digital funding experience.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          <section>
            <h2 className="border-b border-white/10 pb-2 mb-6">10. TRIVER</h2>
            <p className="mb-4 text-gray-300">
              <a href="https://www.triver.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">TRIVER</a> is a digital invoice finance provider focused on fast access to working capital for small businesses.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Who TRIVER may be best for</h3>
            <p className="mb-4 text-gray-300">
              TRIVER may suit smaller businesses that want to turn individual invoices into cash quickly without going through a traditional bank process. It can be relevant for businesses that need simple, fast invoice funding on demand.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> Key benefits</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Fast digital application process</li>
                  <li>Simple invoice advance model</li>
                  <li>Useful for small businesses</li>
                  <li>No personal guarantee on some facilities</li>
                  <li>Can help businesses manage short term cash flow gaps</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><span className="text-yellow-500">⚠</span> Things to consider</h4>
                <p className="text-gray-300 text-sm">
                  TRIVER may be best for businesses that want speed and simplicity rather than a large, complex invoice finance facility.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-gray-900/30 p-8 rounded-xl border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-4">How to choose the right invoice finance company</h2>
            <p className="mb-4 text-gray-300">
              Before choosing an invoice finance provider, <Link href="/invoice-finance-brokers-uk" className="text-blue-400 hover:text-blue-300 underline">working with an invoice finance broker</Link> or comparing lenders directly, consider the following points:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Advance rate</li>
                <li>Total cost of funding</li>
                <li>Service fees</li>
                <li>Contract length</li>
                <li>Set up fees</li>
                <li>Exit fees</li>
                <li>Whether the facility is confidential or disclosed</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Whether credit control is handled by you or the lender</li>
                <li>Sector appetite</li>
                <li>Debtor concentration limits</li>
                <li>Personal guarantee requirements</li>
                <li>Speed of funding</li>
                <li>Quality of support</li>
              </ul>
            </div>
            <p className="mt-6 text-gray-300">
              The cheapest option is not always the best. The right facility is the one that fits your debtor book, customer payment terms, growth plans, and internal finance capability.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="border-b border-white/10 pb-2 mb-6">Invoice factoring vs invoice discounting</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Invoice factoring</h3>
                <p className="text-gray-300">
                  <Link href="/invoice-factoring" className="text-blue-400 hover:text-blue-300 underline">Invoice factoring</Link> is where the lender usually manages customer collections and credit control. This can be useful for smaller businesses or companies without a dedicated finance team.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Invoice discounting</h3>
                <p className="text-gray-300">
                  Invoice discounting is usually more discreet. The business keeps control of customer collections while borrowing against unpaid invoices. This is often better suited to established businesses with strong internal credit control.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">When invoice finance works well</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Customers are creditworthy</li>
                <li>Invoices are raised to other businesses</li>
                <li>Payment terms are causing cash flow pressure</li>
                <li>Sales are growing faster than available working capital</li>
                <li>The business needs funding linked to turnover</li>
                <li>There is a regular sales ledger</li>
                <li>The company wants to avoid waiting 30 to 90 days for payment</li>
              </ul>
            </div>
            <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">When invoice finance may not be suitable</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Most customers are consumers rather than businesses</li>
                <li>Invoices are disputed regularly</li>
                <li>The debtor book is weak</li>
                <li>Payment terms are unclear</li>
                <li>The business has very low invoice volume</li>
                <li>The company only needs a one-off small loan</li>
                <li>Customers are slow-paying or high risk</li>
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="border-b border-white/10 pb-2 mb-6">Should you use an invoice finance broker?</h2>
            <p className="mb-4 text-gray-300">
              An <Link href="/invoice-finance-brokers-uk" className="text-blue-400 hover:text-blue-300 underline">invoice finance broker</Link> can help you compare lenders, understand facility structures, and avoid wasting time with providers that are unlikely to fund your type of business.
            </p>
            <p className="mb-4 text-gray-300">A broker can be especially useful where the case involves:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>High debtor concentration</li>
              <li>Construction or contractual debt</li>
              <li>Export invoices</li>
              <li>New businesses</li>
              <li>Larger funding requirements</li>
              <li>Poor previous lender experience</li>
              <li>Urgent working capital pressure</li>
              <li>Multiple funding options</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="border-b border-white/10 pb-2 mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Who is the best invoice finance company in the UK?</h3>
                <p className="text-gray-300">
                  There is no single best invoice finance company for every business. Lloyds, Close Brothers, Bibby, Skipton, Novuna, Cynergy, Metro Bank, Growth Lending, Kriya, and TRIVER all serve different types of businesses. The best choice depends on your turnover, debtor book, sector, funding requirement, and whether you need factoring or discounting.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What is the difference between an invoice finance lender and a broker?</h3>
                <p className="text-gray-300">
                  An invoice finance lender provides the funding directly. A broker compares multiple lenders and helps match your business with suitable providers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Is invoice finance only for struggling businesses?</h3>
                <p className="text-gray-300">
                  No. Many growing businesses use invoice finance because sales growth can create cash flow pressure. More sales often means more invoices waiting to be paid, which can increase the need for working capital.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">How quickly can invoice finance be arranged?</h3>
                <p className="text-gray-300">
                  Some digital providers can move quickly, especially for straightforward cases. Larger or more complex facilities may take longer because the lender needs to assess the debtor book, contracts, trading history, and credit risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Can startups use invoice finance?</h3>
                <p className="text-gray-300">
                  Some startups can use invoice finance if they raise valid B2B invoices to creditworthy customers. However, lender appetite varies, and newer businesses may have fewer options than established companies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Does invoice finance affect customer relationships?</h3>
                <p className="text-gray-300">
                  It depends on the type of facility. Invoice factoring is usually disclosed because the lender may contact customers for payment. Invoice discounting can be confidential, meaning customers may not know the facility exists.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What industries use invoice finance?</h3>
                <p className="text-gray-300">
                  Invoice finance is commonly used in recruitment, transport, manufacturing, wholesale, engineering, logistics, security, printing, food supply, and other B2B sectors with payment terms.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-8 my-10">
            <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
            <p className="mb-4 text-gray-300">
              The UK invoice finance market includes banks, independent lenders, specialist funders, and digital providers.
            </p>
            <p className="mb-4 text-gray-300">
              For established businesses, Lloyds, Close Brothers, Bibby, Skipton, Novuna, Cynergy, and Metro Bank may be worth comparing.
            </p>
            <p className="mb-4 text-gray-300">
              For high growth or digital first businesses, Growth Lending, Kriya, and TRIVER may offer more flexible or faster options.
            </p>
            <p className="text-gray-300">
              The best route is to compare providers based on your debtor book, funding requirement, sector, facility type, and total cost rather than choosing on brand name alone.
            </p>
          </section>

          {/* Call to Action to Main Home Page */}
          <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Cash Flow?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop waiting on unpaid invoices. Explore the best invoice finance options for your business and get access to working capital faster. Our service helps you compare top lenders easily.
            </p>
            
            <div className="inline-flex flex-col text-left gap-3 mb-8 mx-auto">
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Release cash quickly</span>
              <span className="flex items-center gap-2 text-white"><span className="text-blue-500">👉</span> Get matched with expert providers</span>
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
