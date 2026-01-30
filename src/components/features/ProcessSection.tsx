import React from 'react';
import { Check } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const ProcessSection: React.FC = () => {
    return (
        <section id="process" className="py-40 bg-charcoal/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
                <div className="w-full lg:w-1/2 relative">
                    <RevealOnScroll>
                        <div className="relative h-[500px] lg:h-[700px] w-full overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-gold-500/20 -mt-2 -mr-2 z-10 transition-all duration-1000 group-hover:w-full group-hover:h-full group-hover:border-gold-500/40"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 border-b border-l border-white/5 -mb-2 -ml-2 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop"
                                alt="Luxury Car Restoration"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-opacity duration-1000 opacity-60 hover:opacity-100"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="w-full lg:w-1/2">
                    <RevealOnScroll delay={200}>
                        <div className="flex items-center gap-6 mb-8">
                            <span className="w-16 h-[1px] bg-gold-500"></span>
                            <span className="text-gold-500 font-bold uppercase tracking-ultra-wide text-[10px]">The SCOTTSDALE Protocol</span>
                        </div>
                        <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-10 leading-tight uppercase tracking-tightest">
                            We Don't Wash.<br />
                            <span className="text-white/20">We Curate.</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-12 text-xl font-light border-l border-gold-500/30 pl-8 lg:max-w-xl">
                            Standard detailing is a service. The <span className="text-white font-medium italic">Scottsdale Protocol</span> is an art form.
                            We utilize aerospace-grade instrumentation and boutique-label chemistries to achieve a result that is frankly indistinguishable from showroom delivery.
                        </p>

                        <ul className="space-y-8">
                            {[
                                "Lab-grade deionized water filtration",
                                "Full bespoke coverage up to $10,000,000",
                                "Master Artisan level craftsmanship",
                                "Fully self-contained mobile atelier"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-6 text-gray-200 group">
                                    <div className="w-8 h-8 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-500">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg tracking-wide font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
