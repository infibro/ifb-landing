export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rotate-45" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Invoice Finance Brokers</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Invoice Finance Brokers introduces UK businesses to specialist lenders and brokers who can help turn outstanding invoices into fast, flexible funding.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#types" className="hover:text-white transition-colors">Types of Finance</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Invoice Finance Brokers. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
