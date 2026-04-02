import { motion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rotate-45" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">IFB</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">How It Works</a>
              <a href="#types" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Types</a>
              <a href="#benefits" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Benefits</a>
              <a href="#faq" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
              <a 
                href="#enquiry" 
                className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all flex items-center group"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 space-y-1"
        >
          <a href="#how-it-works" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">How It Works</a>
          <a href="#types" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Types</a>
          <a href="#benefits" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Benefits</a>
          <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">FAQ</a>
          <div className="pt-4 px-3">
            <a 
              href="#enquiry" 
              className="w-full bg-white text-black px-6 py-3 rounded-full text-center font-semibold hover:bg-gray-200 transition-all block"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
