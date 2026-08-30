import "../app/globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Invoice Finance Brokers | Compare UK Invoice Finance Providers",
  description: "Compare invoice finance providers across the UK. Unlock cash tied up in unpaid invoices within 24 hours. Get a free quote from independent invoice finance brokers today.",
  keywords: "invoice finance, invoice finance brokers, invoice factoring, invoice discounting, UK invoice finance, business cash flow, selective invoice finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8585310452285544"
          crossOrigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VQLQMEFEPN"></script>
        <script
          dangerouslySetInnerHTML={{
             __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VQLQMEFEPN');
            `
          }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black flex flex-col">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
