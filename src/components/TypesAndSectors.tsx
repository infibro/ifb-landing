import { motion } from "motion/react";
import { Building2, Users, Briefcase, Truck, Factory, Store } from "lucide-react";

const types = [
  {
    title: "Invoice Factoring",
    description: "A facility where the lender advances funds against invoices and usually manages collections and credit control on your behalf.",
    bestFor: "Growing businesses, smaller firms, and companies that want support with collections.",
    icon: Building2
  },
  {
    title: "Invoice Discounting",
    description: "Allows a business to raise money against unpaid invoices while keeping control of its own sales ledger and customer relationships.",
    bestFor: "More established businesses that want a confidential funding arrangement.",
    icon: Briefcase
  },
  {
    title: "Selective Invoice Finance",
    description: "Allows a company to fund chosen invoices rather than the entire sales ledger, offering greater flexibility.",
    bestFor: "Businesses with occasional gaps in cash flow or project-led invoicing.",
    icon: Users
  },
  {
    title: "Spot Factoring",
    description: "Used to finance a single invoice or one-off invoice batch without committing to a long-term arrangement.",
    bestFor: "Companies that need occasional short-term working capital.",
    icon: Store
  }
];

const sectors = [
  { name: "Recruitment", icon: Users, desc: "Pay staff weekly while waiting for clients." },
  { name: "Construction", icon: Building2, desc: "Bridge the gap on extended payment terms." },
  { name: "Manufacturing", icon: Factory, desc: "Buy materials before payment arrives." },
  { name: "Logistics", icon: Truck, desc: "Cover fuel and wages ahead of settlement." }
];

export default function TypesAndSectors() {
  return (
    <section id="types" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Types of Invoice Finance</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the facility that best aligns with your business goals and operational needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {types.map((type, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all group"
            >
              <type.icon className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{type.description}</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-xs font-bold text-white uppercase tracking-widest block mb-2">Best For</span>
                <p className="text-sm text-gray-500">{type.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Who It Is For</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Specialist funding for sectors with complex cash flow cycles.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/5 text-center"
            >
              <sector.icon className="w-8 h-8 text-white mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">{sector.name}</h4>
              <p className="text-sm text-gray-500">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
