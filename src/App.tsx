import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import LegalDisclosures from "./pages/LegalDisclosures";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/legal-disclosures" element={<LegalDisclosures />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
