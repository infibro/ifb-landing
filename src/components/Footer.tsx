import Link from "next/link";
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-xl tracking-tighter mb-4">Invoice Finance Brokers</span>
            <p className="text-gray-400 text-sm max-w-sm text-center md:text-left">
              Connecting businesses with independent finance brokers and lenders.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:funding@invoicefinancebrokers.co.uk" className="text-blue-400 hover:text-blue-300 transition-colors">
                funding@invoicefinancebrokers.co.uk
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left text-sm text-gray-400">
            <div className="flex flex-col space-y-3">
              <h4 className="text-white font-semibold mb-2">Legal</h4>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
              <Link href="/legal-disclosures" className="hover:text-white transition-colors">Legal Disclosures</Link>
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="text-white font-semibold mb-2">Platform</h4>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link>
              <Link href="/how-to-get-invoice-finance-uk" className="hover:text-white transition-colors">How to get invoice finance</Link>
              <Link href="/invoice-finance-brokers-uk" className="hover:text-white transition-colors">Invoice Finance Brokers</Link>
              <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="text-white font-semibold mb-2">Guides</h4>
              <Link href="/invoice-factoring" className="hover:text-white transition-colors">Invoice Factoring</Link>
              <Link href="/invoice-finance-costs-uk" className="hover:text-white transition-colors">Invoice Finance Costs</Link>
              <Link href="/invoice-factoring-vs-discounting" className="hover:text-white transition-colors">Factoring vs Discounting</Link>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Invoice Finance Brokers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
