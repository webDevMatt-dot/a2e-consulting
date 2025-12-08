import React from "react";

interface PageHeaderProps {
    badge: string;
    title: string;
    description: string;
}

export default function PageHeader({ badge, title, description }: PageHeaderProps) {
    return (
        <section className="relative py-24 bg-blue-950 overflow-hidden">
            {/* Background Gradient Effect - Matches your dark blue theme */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                {/* The Badge (e.g., "About Us") */}
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-8 border border-white/10">
                    {badge}
                </span>

                {/* The Main Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {title}
                </h1>

                {/* The Subheadline */}
                <p className="text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
                    {description}
                </p>
            </div>
        </section>
    );
}