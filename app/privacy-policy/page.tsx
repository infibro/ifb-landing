import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#d4d4d8] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
                <p className="text-gray-500 mb-8 font-medium">Invoice Finance Brokers &bull; Last updated: 13 March 2026</p>

                <div className="space-y-8 prose prose-invert max-w-none">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p>Invoice Finance Brokers (“we”, “our”, “us”) is committed to protecting and respecting your privacy. This policy explains how we collect, use, store, and share personal information when you use our website and submit an enquiry for invoice finance services.</p>
                        <p>Invoice Finance Brokers operates as a lead generation and introduction platform that connects businesses seeking invoice finance with independent brokers, lenders, and finance providers.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                        <p className="mb-2">When you use our website or submit an enquiry we may collect the following information:</p>
                        <h3 className="text-lg font-medium text-white mt-4 mb-2">Personal Information</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Telephone number</li>
                            <li>Job title</li>
                        </ul>
                        <h3 className="text-lg font-medium text-white mt-4 mb-2">Business Information</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Company name</li>
                            <li>Company registration number</li>
                            <li>Trading address</li>
                            <li>Funding requirements</li>
                            <li>Invoice volumes</li>
                            <li>Information relating to companies that owe you money (your customers/debtors)</li>
                        </ul>
                        <h3 className="text-lg font-medium text-white mt-4 mb-2">Technical Information</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>IP address</li>
                            <li>Browser type and device information</li>
                            <li>Pages visited and interactions on our website</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="mb-2">We use the information collected to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Assess your eligibility for invoice finance products</li>
                            <li>Introduce you to suitable invoice finance brokers or lenders</li>
                            <li>Respond to your enquiry</li>
                            <li>Improve our services and website functionality</li>
                            <li>Maintain internal records of enquiries</li>
                            <li>Prevent fraud or misuse of our services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
                        <p className="mb-2">By submitting an enquiry through our website you agree that your information may be shared with:</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>Invoice finance brokers</li>
                            <li>Asset based lending providers</li>
                            <li>Finance companies</li>
                            <li>Funding partners</li>
                        </ul>
                        <p>These organisations may contact you directly to discuss potential funding solutions.</p>
                        <p>We only share information necessary for them to assess your enquiry.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Legal Basis for Processing</h2>
                        <p className="mb-2">We process personal data under the following legal bases:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Legitimate interest in introducing businesses to finance providers</li>
                            <li>Consent where applicable</li>
                            <li>Legal obligations where required</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
                        <p>We take appropriate technical and organisational measures to protect your personal information from unauthorised access, loss, or misuse.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
                        <p>Your information will be retained only for as long as necessary to fulfil the purposes outlined in this policy, or as required under applicable law.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights</h2>
                        <p className="mb-2">Under UK GDPR you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>Request access to your personal data</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal data</li>
                            <li>Object to certain types of data processing</li>
                            <li>Withdraw consent where applicable</li>
                        </ul>
                        <p>Requests may be submitted via the contact details below.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Cookies</h2>
                        <p>Our website may use cookies and similar technologies to improve functionality, analyse traffic, and enhance user experience.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
                        <p>For questions relating to this policy or data protection matters:</p>
                        <p>Email: <a href="mailto:funding@invoicefinancebrokers.co.uk" className="text-blue-400 hover:text-blue-300">funding@invoicefinancebrokers.co.uk</a></p>
                    </section>
                </div>
            </div>
        </div>
    );
}
