import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-white font-bold text-2xl tracking-tighter">IFB</Link>
          <div className="flex items-center gap-6">
            <Link to="/how-it-works" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">How it works</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
