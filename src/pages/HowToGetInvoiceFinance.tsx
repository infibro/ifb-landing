import React from 'react';

export default function HowToGetInvoiceFinance() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">

            {/* SEO Schema – Article */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "How to Get Invoice Finance: A Step-by-Step Guide for UK Businesses",
                    "description": "Learn how to get invoice finance in the UK. Find out what you need to qualify, how to apply, what documents are required, and how to compare providers.",
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
                    "mainEntityOfPage": "https://www.invoicefinancebrokers.co.uk/how-to-get-invoice-finance/",
                    "datePublished": "2026-04-09",
                    "dateModified": "2026-04-09"
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
                            "name": "How do I get invoice finance?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "To get invoice finance, you apply through a lender or broker, provide details of your business and outstanding invoices, pass credit checks on your customers, and receive approval — often within 24–48 hours."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What do I need to qualify for invoice finance?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You generally need to invoice other businesses (B2B), have outstanding invoices with creditworthy customers, be a UK-registered company, and have been trading for at least a few months."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take to get invoice finance?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Initial setup typically takes 1–2 weeks. Once a facility is in place, funds from new invoices are usually released within 24–48 hours."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I get invoice finance with bad credit?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, in many cases. Invoice finance is primarily based on the creditworthiness of your customers rather than your own credit score, making it accessible to businesses with imperfect credit histories."
                            }
                        }
                    ]
                })}
            </script>

            <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    How to Get Invoice Finance{' '}
                    <span className="text-gray-400 text-3xl block mt-2">
                        Step-by-Step Guide for UK Businesses
                    </span>
                </h1>

                <div className="space-y-10 prose prose-invert max-w-none">

                    {/* Intro */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">What Is Invoice Finance?</h2>
                        <p>
                            Invoice finance lets UK businesses unlock cash from unpaid invoices rather than waiting 30–90 days for customers
                            to pay. A lender advances up to 90% of each invoice's value immediately, with the remainder (minus fees) paid
                            once your customer settles.
                        </p>
                        <p>
                            On this page we explain exactly <strong className="text-white">how to get invoice finance</strong> — from checking
                            eligibility and gathering documents, to applying and going live.
                        </p>
                        <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                            <span className="text-blue-400 font-bold">👉 Ready to compare providers? </span>
                            <a href="https://www.invoicefinancebrokers.co.uk/" className="text-white hover:text-blue-300 underline underline-offset-4">
                                Invoice Finance Brokers
                            </a>
                        </div>
                    </section>

                    {/* Eligibility */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Do You Qualify? Key Eligibility Criteria</h2>
                        <p className="mb-4">Most UK lenders look for the following before approving a facility:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: "🏢", title: "B2B Invoices", desc: "You invoice other businesses, not consumers." },
                                { icon: "📋", title: "UK-Registered Business", desc: "Your company is registered in England, Wales, Scotland or Northern Ireland." },
                                { icon: "📅", title: "Trading History", desc: "Typically at least 3–6 months of trading, though some lenders consider start-ups." },
                                { icon: "✅", title: "Creditworthy Customers", desc: "Your customers have a reasonable payment history — lenders assess them, not just you." },
                                { icon: "💷", title: "Minimum Turnover", desc: "Some lenders require £50k+ annual turnover; others have no minimum." },
                                { icon: "📄", title: "Clear Invoice Trail", desc: "Your invoices must be legitimate, undisputed, and not already used as security." },
                            ].map(({ icon, title, desc }) => (
                                <div key={title} className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-2xl">{icon}</span>
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                                        <p className="text-gray-400 text-sm">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Documents */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Documents You'll Typically Need</h2>
                        <p className="mb-4">Gathering the right paperwork before applying speeds up the process significantly:</p>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li><strong className="text-white">Aged debtor report</strong> — a list of all outstanding invoices with amounts and due dates</li>
                            <li><strong className="text-white">Recent bank statements</strong> — usually 3–6 months</li>
                            <li><strong className="text-white">Filed accounts or management accounts</strong> — to evidence trading activity</li>
                            <li><strong className="text-white">Details of your customers</strong> — names, credit history, payment terms</li>
                            <li><strong className="text-white">Company registration details</strong> — Companies House number, directors' names</li>
                            <li><strong className="text-white">ID and proof of address</strong> — for each director (AML checks)</li>
                        </ul>
                    </section>

                    {/* Step-by-step */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6">How to Apply for Invoice Finance: Step by Step</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    step: 1,
                                    title: "Choose your facility type",
                                    body: "Decide between invoice factoring (lender collects debts), invoice discounting (you collect debts confidentially), or selective invoice finance (choose individual invoices). A broker can help you decide."
                                },
                                {
                                    step: 2,
                                    title: "Compare lenders or use a broker",
                                    body: "Go direct to a lender or use an invoice finance broker to compare multiple facilities at once. Brokers often access exclusive rates and can match you to the right provider based on your sector and turnover."
                                },
                                {
                                    step: 3,
                                    title: "Submit your application",
                                    body: "Complete an application form and upload your documents (bank statements, aged debtor report, accounts). Most lenders have online portals and can process applications within 48–72 hours."
                                },
                                {
                                    step: 4,
                                    title: "Credit checks and due diligence",
                                    body: "The lender assesses your customers' creditworthiness and reviews your invoice history. They may contact your key customers for verification."
                                },
                                {
                                    step: 5,
                                    title: "Receive your offer",
                                    body: "You'll receive a facility offer setting out the advance rate (e.g. 85%), the service fee, and the discount rate. Review this carefully — a broker can negotiate better terms."
                                },
                                {
                                    step: 6,
                                    title: "Go live and start drawing funds",
                                    body: "Once you sign the agreement, you upload invoices and immediately draw down cash. Funds typically hit your account within 24 hours per invoice."
                                },
                            ].map(({ step, title, body }) => (
                                <div key={step} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                                        {step}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{title}</h3>
                                        <p className="text-gray-400">{body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Timeline */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">How Long Does It Take?</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                                <thead className="bg-white/10 text-white">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold">Stage</th>
                                        <th className="px-4 py-3 font-semibold">Typical Timeframe</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300 divide-y divide-white/5">
                                    {[
                                        ["Initial enquiry & comparison", "Same day"],
                                        ["Application submission", "1–2 days"],
                                        ["Due diligence & credit checks", "3–5 days"],
                                        ["Offer & agreement", "1–2 days"],
                                        ["First drawdown", "24–48 hours after signing"],
                                    ].map(([stage, time]) => (
                                        <tr key={stage} className="hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-3">{stage}</td>
                                            <td className="px-4 py-3 text-blue-400 font-medium">{time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Bad credit */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Can I Get Invoice Finance With Bad Credit?</h2>
                        <p className="mb-3">
                            Yes — often you can. Unlike bank loans, invoice finance approval is driven primarily by your <em>customers'</em> creditworthiness,
                            not your own. Lenders want to know your customers will pay; if they will, your own imperfect credit history
                            is often less of a barrier.
                        </p>
                        <p>
                            That said, serious adverse events (e.g. recent CCJs against your business) may affect approval or rates. A broker
                            can identify lenders most likely to approve your specific situation.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Common Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Does invoice finance affect my relationship with customers?",
                                    a: "With factoring, your customers pay the lender directly — they will know you use invoice finance. With discounting, it's completely confidential and your relationship stays unchanged."
                                },
                                {
                                    q: "Is invoice finance suitable for start-ups?",
                                    a: "Some specialist lenders do offer facilities to newer businesses. Having creditworthy customers on longer payment terms makes approval more likely even with a short trading history."
                                },
                                {
                                    q: "What minimum invoice value do lenders accept?",
                                    a: "This varies by provider — some accept invoices from £500 upwards; others prefer larger ticket sizes. Selective invoice finance tends to be more flexible for smaller invoice values."
                                },
                                {
                                    q: "Can I exit the facility if it's not right for me?",
                                    a: "Most facilities have a minimum contract period (e.g. 12 months) with a notice period. Some lenders offer flexible, rolling contracts with shorter notice periods — worth checking before signing."
                                },
                            ].map(({ q, a }) => (
                                <div key={q}>
                                    <h3 className="text-lg font-bold text-white">{q}</h3>
                                    <p className="text-gray-400 mt-1">{a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                        <h2 className="text-2xl font-semibold text-white mb-4">Find the Right Invoice Finance Facility Today</h2>
                        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                            An independent broker compares the whole market, negotiates rates on your behalf, and matches you to the lender
                            best suited to your sector and turnover — at no cost to you.
                        </p>
                        <a
                            href="https://www.invoicefinancebrokers.co.uk/"
                            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            Compare Providers Now
                        </a>
                    </section>

                </div>
            </div>
        </div>
    );
}
