import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-white font-bold text-2xl tracking-tighter">Revolut</span>
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#personal" className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium transition-colors">Personal</a>
              <a href="#business" className="text-gray-100 hover:text-white px-2 py-2 text-sm font-medium transition-colors">Business</a>
              <a href="#kids" className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium transition-colors">Kids & Teens</a>
              <a href="#company" className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium transition-colors">Company</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#login" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Log in</a>
            <a 
              href="#signup" 
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all flex items-center group"
            >
              Sign up
            </a>
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
          <a href="#personal" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Personal</a>
          <a href="#business" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Business</a>
          <a href="#kids" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Kids & Teens</a>
          <a href="#company" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Company</a>
          <a href="#login" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Log in</a>
          <div className="pt-4 px-3">
            <a 
              href="#signup" 
              className="w-full bg-white text-black px-6 py-3 rounded-full text-center font-semibold hover:bg-gray-200 transition-all block"
            >
              Sign up
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
