import Link from "next/link";
import { Award, Heart, ShieldCheck, Eye, Target, Users, Phone, Mail, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function About() {
    return (
        <div className="flex flex-col">
            {/* NEW HEADER */}
            <PageHeader
                badge="About Us"
                title="Why A2E Consulting?"
                description="We leverage modern technology to deliver tailored solutions that simplify financial complexity and drive sustainable growth for businesses and individuals."
            />

            {/* Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4">
                            Our Philosophy
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Believe In</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Our core beliefs guide every decision we make and every service we provide.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition duration-300">
                            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-600/20">
                                <Award size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We maintain the highest standards of professional excellence in every service we deliver, ensuring accuracy, reliability, and exceptional outcomes.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition duration-300">
                            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-orange-500/20">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Making a Difference</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We go beyond traditional accounting to create meaningful impact, helping businesses thrive and individuals achieve their financial goals.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition duration-300">
                            <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-emerald-500/20">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Honesty and Integrity</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Trust is the cornerstone of our practice. We operate with complete transparency, ethical standards, and unwavering commitment to doing what is right.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-12 rounded-3xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-8">
                                <Eye size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To create a future where financial complexity is simplified, enabling businesses and individuals to focus on what matters most.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-12 rounded-3xl shadow-xl text-white">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-200 mb-8 border border-white/10">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-blue-100/80 leading-relaxed">
                                To deliver customer tailored, high quality and cost-effective range of professional services in financial reporting, accounting and tax solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4">
                        Our Foundation
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Core Values</h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                                <Award size={32} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Quality First</h4>
                            <p className="text-xs text-gray-500">Excellence in every engagement</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                                <Users size={32} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Making a Difference</h4>
                            <p className="text-xs text-gray-500">Creating meaningful impact</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                                <Heart size={32} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Honesty</h4>
                            <p className="text-xs text-gray-500">Transparent in all dealings</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                                <Users size={32} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Customer Commitment</h4>
                            <p className="text-xs text-gray-500">Your success is our priority</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                                <ShieldCheck size={32} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Integrity</h4>
                            <p className="text-xs text-gray-500">Ethical in everything we do</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-blue-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your<br />
                        <span className="text-blue-400">Financial Future?</span>
                    </h2>

                    <p className="text-blue-100/80 text-lg mb-10 max-w-2xl mx-auto">
                        Let's discuss how we can help streamline your financial operations and drive growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link href="/contact" className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-950 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
                            Contact Us Today
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a href="https://wa.me/27699494985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-400/30 text-white rounded-full font-bold hover:bg-blue-900/50 transition">
                            <Phone className="w-4 h-4" />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}