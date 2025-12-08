"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when window is resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 1. Background Logic
    const navBackground = isScrolled || isMobileMenuOpen
        ? "bg-white border-b border-gray-100 shadow-sm"
        : "bg-transparent";

    // 2. Text Color Logic
    const textColor = isScrolled || isMobileMenuOpen
        ? "text-gray-700 hover:text-blue-900"
        : "text-white/90 hover:text-white";

    // 3. Logo Logic
    const logoTextMain = isScrolled || isMobileMenuOpen ? "text-blue-900" : "text-white";
    const logoTextAccent = isScrolled || isMobileMenuOpen ? "text-blue-600" : "text-blue-400";

    // 4. Phone Icon Logic
    const phoneIconColor = isScrolled || isMobileMenuOpen ? "text-gray-600" : "text-blue-200";
    const phoneTextColor = isScrolled || isMobileMenuOpen ? "text-gray-600" : "text-white/90";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className={`text-2xl font-serif font-bold tracking-wide transition-colors ${logoTextMain}`}>
                                A2E<span className={logoTextAccent}>Consulting</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className={`${textColor} font-medium transition`}>Home</Link>
                        <Link href="/about" className={`${textColor} font-medium transition`}>About Us</Link>
                        <Link href="/services" className={`${textColor} font-medium transition`}>Services</Link>
                        <Link href="/contact" className={`${textColor} font-medium transition`}>Contact Us</Link>
                    </div>

                    {/* Desktop CTA & Phone */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href="https://wa.me/27699494985"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 font-medium transition-colors hover:opacity-80 ${phoneTextColor}`}
                        >
                            <Phone size={18} className={phoneIconColor} />
                            <span>+27 69 949 4985</span>
                        </a>
                        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg shadow-blue-600/20">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-md ${textColor} hover:bg-gray-100 transition`}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0 top-20">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg border-b border-gray-100"
                        >
                            Contact Us
                        </Link>

                        <div className="pt-4 space-y-4">
                            <a
                                href="https://wa.me/27699494985"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 text-gray-600 font-medium"
                            >
                                <Phone size={18} />
                                +27 69 949 4985
                            </a>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}