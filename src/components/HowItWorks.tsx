import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Step 1: Your business issues an invoice",
    description: "You deliver goods or services and send an invoice to your customer on agreed payment terms, often 30, 60 or 90 days."
  },
  {
    title: "Step 2: The invoice is reviewed",
    description: "The lender assesses the invoice and the strength of the customer who owes the money. In invoice finance, the quality of the debtor often matters as much as the borrower."
  },
  {
    title: "Step 3: You receive an advance",
    description: "The lender can typically release 70% to 90% of the invoice value upfront, giving the business access to working capital much sooner."
  },
  {
    title: "Step 4: The customer pays",
    description: "When the customer settles the invoice, the finance provider receives the payment or the business collects it, depending on the facility type."
  },
  {
    title: "Step 5: The balance is released",
    description: "Once the invoice is paid, the remaining balance is released to the business after fees are deducted."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              How Invoice Finance Works
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Invoice finance is a form of business funding that allows companies to raise money against unpaid sales invoices. Instead of waiting for customers to pay, a lender advances most of the invoice value upfront.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="h-12 w-48 bg-white/10 rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-white/5 rounded-full" />
                <div className="h-4 w-2/3 bg-white/5 rounded-full" />
              </div>
              
              <div className="relative h-48 w-full bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-white font-mono text-4xl font-bold"
                >
                  £85,000.00
                </motion.div>
                <div className="absolute top-4 left-4 text-xs text-gray-500 uppercase tracking-widest">Advance Released</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">Trusted by 500+ firms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
