import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp, Users, Building2, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 text-white/80 border border-white/10 mb-8">
              <Shield className="w-4 h-4 mr-2 text-blue-400" />
              Trusted by UK Businesses
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Invoice Finance <span className="text-gray-500">Explained.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              Unlock cash tied up in unpaid invoices and improve working capital without waiting 30, 60 or 90 days for customers to pay.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#enquiry" 
                className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all flex items-center justify-center group"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#how-it-works" 
                className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all text-center"
              >
                How It Works
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 flex items-center justify-center">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                  {[
                    { icon: Zap, label: "Fast Funding", desc: "Access cash in 24h" },
                    { icon: TrendingUp, label: "Flexible", desc: "Grows with sales" },
                    { icon: Shield, label: "Secure", desc: "Confidential options" },
                    { icon: CheckCircle2, label: "Simple", desc: "No hidden fees" }
                  ].map((item, i) => (
                    <div key={i} className="text-left p-6 rounded-xl bg-white/5 border border-white/5">
                      <item.icon className="w-8 h-8 text-white mb-4" />
                      <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
