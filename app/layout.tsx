import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
// Import the new Navbar component
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A2E Consulting | Accountants & Business Consultants",
  description: "Strategic Expertise That Delivers Results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Use the new Client Component here */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold">A2E Consulting</h3>
                <p className="text-gray-400 leading-relaxed">
                  Trusted advisors combining professional accounting excellence with strategic business insight.
                </p>
                <div className="flex gap-4 pt-2">
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"><Linkedin size={20} /></a>
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"><Facebook size={20} /></a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                  <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>Accounting Services</li>
                  <li>Taxation & Compliance</li>
                  <li>Audit & Assurance</li>
                  <li>Payroll Services</li>
                  <li>Company Secretarial</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a href="mailto:admin@a2econsultinggroup.com" className="flex gap-3 hover:text-white transition group">
                      <Mail className="flex-shrink-0 text-blue-500 group-hover:text-blue-400" size={20} />
                      <span>admin@a2econsultinggroup.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/27699494985" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white transition group">
                      <Phone className="flex-shrink-0 text-blue-500 group-hover:text-blue-400" size={20} />
                      <span>+27 69 949 4985</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/search/?api=1&query=8+Cork+Tree+Street,+Moreleta+Park,+Pretoria" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white transition group">
                      <MapPin className="flex-shrink-0 text-blue-500 group-hover:text-blue-400" size={20} />
                      <span>8 Cork Tree Street, Moreleta Park, Pretoria</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} A2E Consulting (Pty) Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}