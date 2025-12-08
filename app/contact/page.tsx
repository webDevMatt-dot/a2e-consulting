"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", company: "", email: "", phone: "", service: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="bg-gray-50 flex flex-col">

            {/* Header */}
            <PageHeader
                badge="Contact Us"
                title="Let's Start a Conversation"
                description="Ready to streamline your financial operations? Reach out to us today and we’ll respond within 24-48 hours."
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* LEFT COLUMN: The Form */}
                        <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                        <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="John" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                        <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                    <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Your Company (Optional)" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="john@example.com" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="+27 ..." required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Enquiring About *</label>
                                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white" required>
                                        <option value="">Select a service...</option>
                                        <option value="Accounting">Accounting services</option>
                                        <option value="Taxation">Taxation</option>
                                        <option value="Audit">Audit and Assurance Related Services</option>
                                        <option value="Advisory">Advisory</option>
                                        <option value="Payroll">Payroll Services</option>
                                        <option value="Secretarial">Secretarial Services</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Tell us about your needs..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                                >
                                    {status === "submitting" ? (
                                        "Sending..."
                                    ) : (
                                        <>Submit Message <Send size={18} /></>
                                    )}
                                </button>

                                {/* Status Messages */}
                                {status === "success" && (
                                    <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-center">
                                        Message sent successfully! We will contact you within 24-48 hours.
                                    </div>
                                )}
                                {status === "error" && (
                                    <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-center">
                                        Something went wrong. Please try again or contact us via WhatsApp.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* RIGHT COLUMN: Contact Info & WhatsApp */}
                        <div className="space-y-6">

                            {/* 1. The Blue Contact Info Card */}
                            <div className="bg-blue-900 text-white p-10 rounded-3xl h-fit shadow-xl">
                                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                                <div className="space-y-8">

                                    {/* Email Row (NOT a block link) */}
                                    <div className="flex gap-4 p-2 -mx-2">
                                        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-blue-200 text-sm mb-1">Email</p>
                                            <a
                                                href="mailto:admin@a2econsultinggroup.com"
                                                className="font-medium hover:text-blue-300 hover:underline transition"
                                            >
                                                admin@a2econsultinggroup.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone Row (NOT a block link) */}
                                    <div className="flex gap-4 p-2 -mx-2">
                                        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-blue-200 text-sm mb-1">Phone / WhatsApp</p>
                                            <a
                                                href="https://wa.me/27699494985"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium hover:text-blue-300 hover:underline transition"
                                            >
                                                +27 69 949 4985
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location Row (NOT a block link) */}
                                    <div className="flex gap-4 p-2 -mx-2">
                                        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-blue-200 text-sm mb-1">Office</p>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=8+Cork+Tree+Street,+Moreleta+Park,+Pretoria"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium hover:text-blue-300 hover:underline transition"
                                            >
                                                8 Cork Tree Street, Moreleta Park<br />Pretoria, Gauteng, 0181
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex gap-4 p-2 -mx-2">
                                        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="text-blue-200 text-sm mb-1">Hours</p>
                                            <p className="font-medium">Mon-Fri: 9am – 5pm<br />Sat: 9am – 1pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. The WhatsApp "Pop" Card (Text Link only) */}
                            <div className="bg-green-50 border border-green-200 p-6 rounded-3xl flex items-center gap-5">
                                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                                    <MessageCircle size={28} fill="white" />
                                </div>
                                <div>
                                    <a
                                        href="https://wa.me/27699494985"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 font-bold text-lg hover:text-green-600 hover:underline transition"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                    <p className="text-green-700 text-sm font-medium">Quick response guaranteed</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}