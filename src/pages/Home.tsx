import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TypesAndSectors from "../components/TypesAndSectors";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import { motion } from "motion/react";

export default function Home() {
    return (
        <main>
            <Hero />

            {/* Introduction Section (Semantic SEO) */}
            <section className="py-20 bg-[#050505] border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">What Is Invoice Finance?</h2>
                        <p className="text-xl text-gray-400 leading-relaxed text-pretty">
                            Invoice finance is a form of business funding that allows companies to raise money against unpaid sales invoices. Instead of waiting for customers to pay, a lender advances most of the invoice value upfront, helping the business maintain cash flow and fund growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            <HowItWorks />
            <TypesAndSectors />

            {/* Benefits Section */}
            <section id="benefits" className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-white">Benefits of Invoice Finance</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Access cash faster", desc: "Turn unpaid invoices into usable cash without waiting for long payment terms to expire." },
                            { title: "Support payroll", desc: "Better cash flow can make it easier to cover operating costs and maintain stability." },
                            { title: "Take on larger contracts", desc: "Businesses may be able to accept more work when funding is not held back by customer payment delays." }
                        ].map((benefit, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ />
            <CTA />
        </main>
    );
}
