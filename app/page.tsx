import Link from "next/link";
import { ShieldCheck, TrendingUp, Users, Phone, Mail, ArrowRight, Award, Heart, CheckCircle2, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-blue-900">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for skyscraper image - opacity lowered for text readability */}
          <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6 border border-blue-400/20">
              Trusted Financial Advisors
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Strategic Expertise <br />
              <span className="text-blue-400">That Delivers Results</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              We are trusted advisors who combine professional accounting excellence with strategic business insight to drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition shadow-lg shadow-blue-600/30 text-center">
                Contact Us Today
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-semibold text-lg transition backdrop-blur-sm text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Foundation Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What We Believe In</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver excellence in every engagement, ensuring the highest standards of professional service.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Making a Difference</h3>
              <p className="text-gray-600 leading-relaxed">
                We go beyond numbers to create meaningful impact for our clients and their businesses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our priority. We provide dedicated support and personalized solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mb-6">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner in <span className="text-blue-600">Financial Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                A2E Consulting leverages modern technology to deliver tailored solutions that simplify financial complexity and drive sustainable growth for your business.
              </p>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Quality First</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We deliver excellence in every engagement, ensuring the highest standards of professional service.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Making a Difference</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We go beyond numbers to create meaningful impact for our clients and their businesses.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Honesty & Integrity</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trust is the foundation of our relationships, built on transparency and ethical practices.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Commitment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your success is our priority. We provide dedicated support and personalized solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder for the office image - Replace with actual image */}
                <div className="aspect-[4/5] bg-gray-200 w-full object-cover flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-[-20px] bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-gray-600 text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        {/* Background Gradient Effect */}
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200/80 text-sm font-medium">
            <a href="mailto:admin@a2econsultinggroup.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="w-4 h-4 text-blue-400" />
              admin@a2econsultinggroup.com
            </a>
            <a href="https://wa.me/27699494985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-4 h-4 text-blue-400" />
              +27 69 949 4985
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}