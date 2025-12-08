import Link from "next/link";
import { CheckCircle2, Calculator, FileText, BarChart3, Users, Landmark, ShieldCheck } from "lucide-react";
// Import the new component
import PageHeader from "../components/PageHeader";

const services = [
    {
        title: "Accounting Services",
        icon: <Calculator className="w-8 h-8 text-white" />,
        items: [
            "Bookkeeping (Debtors/Creditors, Reconciliations)",
            "Compilation of Annual Financial Statements (AFS)",
            "Monthly management accounts",
            "Asset counts and verification"
        ]
    },
    {
        title: "Taxation",
        icon: <FileText className="w-8 h-8 text-white" />,
        items: [
            "Tax preparation and planning",
            "SARS Registration and Compliance",
            "Income Tax (Individuals & Companies)",
            "VAT Calculations (VAT201s)"
        ]
    },
    {
        title: "Payroll Services",
        icon: <Users className="w-8 h-8 text-white" />,
        items: [
            "Administration of salaries and wages",
            "Pay slips and Payroll reports",
            "EMP201 Returns Submission",
            "EMP501 Reconciliation"
        ]
    },
    {
        title: "Audit & Assurance",
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        items: [
            "Internal and External audits",
            "Independent review engagements",
            "'Clean audit' services / Audit readiness",
            "Risk assessment and management"
        ]
    },
    {
        title: "Advisory",
        icon: <BarChart3 className="w-8 h-8 text-white" />,
        items: [
            "Due diligence",
            "Business consulting",
            "Supply-chain Management (SCM)",
            "Analysis of Financial Information"
        ]
    },
    {
        title: "Company Secretarial",
        icon: <Landmark className="w-8 h-8 text-white" />,
        items: [
            "Company Formation Registrations",
            "CIPC Annual Returns & Amendments",
            "Share certificates & Board meetings",
            "CSD Registrations"
        ]
    }
];

export default function Services() {
    return (
        <div className="bg-gray-50 flex flex-col">
            {/* NEW HEADER - Replaces the old gray text header */}
            <PageHeader
                badge="Our Services"
                title="Comprehensive Financial Solutions"
                description="From accounting and taxation to advisory and secretarial services, we provide end-to-end solutions tailored to your unique needs."
            />

            {/* Grid Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100">
                            {/* Icon - Navy Blue background */}
                            <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-900/20">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>

                            <ul className="space-y-4">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <div className="bg-blue-900 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Financial Future?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Let's discuss how we can help streamline your financial operations and drive growth.</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </div>
    );
}