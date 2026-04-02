import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is invoice finance a loan?",
    answer: "Invoice finance is not the same as a traditional loan. It is funding secured against unpaid invoices, making it more flexible and tied to your sales volume."
  },
  {
    question: "How quickly can I get funds?",
    answer: "Timescales vary by provider and case, but invoice finance is commonly used because it can be quicker than many traditional lending routes, often releasing funds within 24-48 hours."
  },
  {
    question: "Do my customers know I am using invoice finance?",
    answer: "That depends on the type of facility. Factoring is usually disclosed, while invoice discounting can often remain confidential."
  },
  {
    question: "Can startups use invoice finance?",
    answer: "Some newer businesses may qualify, particularly if they invoice strong commercial customers, but lender criteria vary."
  },
  {
    question: "What matters most to lenders?",
    answer: "Alongside your business profile, lenders often look closely at the quality of the companies that owe you money and the strength of your invoice book."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about invoice-based funding.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
