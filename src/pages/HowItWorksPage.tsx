import React from 'react';

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">

            {/* SEO Schema Injection */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "How Does Invoice Finance Work? Complete UK Guide",
                    "description": "Learn how invoice finance works in the UK, including factoring, invoice discounting, costs, and benefits. A complete guide for businesses.",
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
                    "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/how-does-invoice-finance-work/",
                    "datePublished": "2026-04-02",
                    "dateModified": "2026-04-02"
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How does invoice finance work?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Invoice finance allows businesses to receive an advance on unpaid invoices, typically 70% to 90%, with the remainder paid once the customer settles the invoice."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What are the types of invoice finance?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "The main types are invoice factoring, invoice discounting, and selective invoice finance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is invoice finance a loan?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No, invoice finance is not a loan. It is an advance against outstanding invoices."
                            }
                        }
                    ]
                })}
            </script>

            <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    How Does Invoice Finance Work? <span className="text-gray-400 text-3xl block mt-2">(Complete UK Guide for Businesses)</span>
                </h1>

                <div className="space-y-10 prose prose-invert max-w-none">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">What is Invoice Finance?</h2>
                        <p>Invoice finance is a way for UK businesses to unlock cash tied up in unpaid invoices. Instead of waiting 30–90 days for customers to pay, you receive up to 90% of the invoice value immediately from a lender.</p>
                        <p>The remaining balance (minus fees) is paid once your customer settles the invoice.</p>
                        <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                            <span className="text-blue-400 font-bold">👉 If you’re looking to compare providers, visit: </span>
                            <a href="https://www.invoicefinancebrokers.co.uk/" className="text-white hover:text-blue-300 underline underline-offset-4">Invoice Finance Brokers</a>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6">How Does Invoice Finance Work Step by Step?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">1</div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">You issue an invoice</h3>
                                    <p className="text-gray-400">You provide goods or services and send an invoice to your customer (e.g. £10,000 with 60-day terms).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">2</div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">You upload or submit the invoice</h3>
                                    <p className="text-gray-400">The invoice is sent to an invoice finance provider.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">3</div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">You receive an advance</h3>
                                    <p className="text-gray-400 mb-2">The lender advances typically 70%–90% of the invoice value within 24–48 hours.</p>
                                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-sm">
                                        <strong>Example:</strong><br />
                                        Invoice: £10,000<br />
                                        Advance (85%): £8,500
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">4</div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Your customer pays the invoice</h3>
                                    <p className="text-gray-400">The customer pays either:<br />- You (invoice discounting)<br />- The lender directly (factoring)</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">5</div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">You receive the remaining balance</h3>
                                    <p className="text-gray-400 mb-2">Once payment is received, the lender releases the remaining funds minus fees.</p>
                                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-sm">
                                        <strong>Example:</strong><br />
                                        Remaining: £1,500<br />
                                        Fees: £200<br />
                                        Final payment: £1,300
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Types of Invoice Finance Explained</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-2">Invoice Factoring</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                    <li>Lender manages your sales ledger</li>
                                    <li>Customers pay the lender directly</li>
                                    <li>Often disclosed to customers</li>
                                    <li>Best for smaller or growing businesses</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-2">Invoice Discounting</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                    <li>You retain control of collections</li>
                                    <li>Confidential (customers don’t know)</li>
                                    <li>Suitable for established businesses</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 mt-4">
                            <h3 className="text-xl font-bold text-white mb-2">Selective Invoice Finance</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                <li>Choose which invoices to finance</li>
                                <li>Flexible, no long-term contracts</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Key Benefits of Invoice Finance</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-white">Improve Cash Flow</h3>
                                <p className="text-gray-400">Access cash tied up in invoices instantly instead of waiting weeks.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Support Business Growth</h3>
                                <p className="text-gray-400">Take on larger contracts without worrying about working capital.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">No Need for Traditional Loans</h3>
                                <p className="text-gray-400">Funding is based on your invoices, not your credit score alone.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Scales With Your Business</h3>
                                <p className="text-gray-400">The more you invoice, the more funding you can access.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Costs of Invoice Finance (UK)</h2>
                        <p className="mb-2">Typical fees include:</p>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li><strong className="text-white">Service Fee:</strong> 0.5% – 3% of turnover</li>
                            <li><strong className="text-white">Discount Rate:</strong> 1.5% – 3% above base rate</li>
                        </ul>
                    </section>

                    <section className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Example: Real-World Scenario</h2>
                        <p className="mb-2">A recruitment agency invoices £50,000 monthly.</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <h4 className="text-red-400 font-bold mb-2">Without invoice finance:</h4>
                                <ul className="text-gray-300 text-sm space-y-1 list-disc pl-4">
                                    <li>Waits 60 days for payment</li>
                                    <li>Cash flow pressure</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-green-400 font-bold mb-2">With invoice finance:</h4>
                                <ul className="text-gray-300 text-sm space-y-1 list-disc pl-4">
                                    <li>Receives £42,500 upfront (85%)</li>
                                    <li>Pays staff and grows faster</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Common Questions</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-white">Does it affect my customers?</h3>
                                <p className="text-gray-400"><strong>Factoring:</strong> Yes (they pay the lender)<br /><strong>Discounting:</strong> No (confidential)</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Is it a loan?</h3>
                                <p className="text-gray-400">No. It’s an advance against your invoices.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">How quickly can I get funding?</h3>
                                <p className="text-gray-400">Typically within 24–48 hours after setup.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Do I need good credit?</h3>
                                <p className="text-gray-400">Less important than traditional lending — focus is on your customers’ ability to pay.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                        <h2 className="text-2xl font-semibold text-white mb-4">Why Use an Invoice Finance Broker?</h2>
                        <p className="text-gray-300 mb-6 max-w-lg mx-auto">Going direct limits your options. A broker compares multiple lenders, finds better rates, matches you to the right structure, and saves time negotiating.</p>
                        <a href="https://www.invoicefinancebrokers.co.uk/" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Compare Providers Here
                        </a>
                    </section>

                </div>
            </div>
        </div>
    );
}
