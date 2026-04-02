import React from 'react';

export default function LegalDisclosures() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Legal Disclosures</h1>
                <p className="text-gray-500 mb-8 font-medium">Invoice Finance Brokers &bull; Last updated: 13 March 2026</p>

                <div className="space-y-8 prose prose-invert max-w-none">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Credit Broker / Introducer Disclosure</h2>
                        <p>Invoice Finance Brokers acts as an introducer service and may introduce businesses seeking funding to independent lenders, finance brokers, and asset-based lending providers.</p>
                        <p className="mb-2 mt-4 font-medium text-white">Invoice Finance Brokers:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>does not provide lending directly</li>
                            <li>does not provide regulated financial advice</li>
                            <li>may receive a commission from lenders or brokers for successful introductions</li>
                        </ul>
                        <p className="mt-4">This commission may be paid by the lender or broker and does not affect the terms offered to the applicant.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Financial Promotion Disclaimer</h2>
                        <p>The content on this website is intended for business customers seeking commercial finance.</p>
                        <p>Invoice finance products are typically designed for limited companies and registered businesses rather than individual consumers.</p>
                        <p>Nothing on this website constitutes an offer of finance or a commitment to lend.</p>
                        <p>Any finance offered will be subject to lender approval, underwriting checks, and contractual agreements.</p>
                        <p>Users should conduct their own due diligence before entering into finance agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Data Use Notice</h2>
                        <p>By submitting an enquiry through this website you consent to your information being shared with selected finance providers who may contact you regarding funding solutions.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Copyright</h2>
                        <p>&copy; {new Date().getFullYear()} Invoice Finance Brokers. All rights reserved.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
