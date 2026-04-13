import React from 'react';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Terms and Conditions</h1>
                <p className="text-gray-500 mb-8 font-medium">Invoice Finance Brokers &bull; Last updated: 13 March 2026</p>

                <div className="space-y-8 prose prose-invert max-w-none">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Service Description</h2>
                        <p>Invoice Finance Brokers provides a platform that connects businesses seeking invoice finance with independent lenders and finance brokers.</p>
                        <p>We act solely as an introducer and do not provide financial products directly.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. No Financial Advice</h2>
                        <p>The information provided on this website is for general informational purposes only and does not constitute financial advice.</p>
                        <p>Users should obtain independent professional advice before entering into financial agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Accuracy of Information</h2>
                        <p>Users agree that all information submitted through the website is accurate and complete to the best of their knowledge.</p>
                        <p>Providing misleading or inaccurate information may result in enquiries being rejected.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Introductions to Finance Providers</h2>
                        <p>Invoice Finance Brokers may introduce your enquiry to one or more finance providers.</p>
                        <p>These providers may contact you directly regarding potential funding solutions.</p>
                        <p>Invoice Finance Brokers may receive a referral fee or commission where funding is successfully arranged.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. No Guarantee of Funding</h2>
                        <p>Submitting an enquiry does not guarantee that finance will be offered.</p>
                        <p>All lending decisions are made by the finance providers reviewing your enquiry.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                        <p className="mb-2">Invoice Finance Brokers shall not be liable for:</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>lending decisions made by third-party providers</li>
                            <li>the terms or conditions of finance offered</li>
                            <li>financial losses resulting from funding agreements</li>
                        </ul>
                        <p>Our role is limited to providing introductions.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Third Party Websites</h2>
                        <p>Our website may contain links to third-party websites. We do not control or accept responsibility for the content or policies of those websites.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property</h2>
                        <p>All website content including branding, design, and written material remains the intellectual property of Invoice Finance Brokers.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
                        <p>We reserve the right to update these terms at any time. Continued use of the website indicates acceptance of updated terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
                        <p>These terms are governed by the laws of England and Wales.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
