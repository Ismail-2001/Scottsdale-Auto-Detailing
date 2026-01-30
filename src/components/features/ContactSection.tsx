import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-gold-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-obsidian opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-gold-500/10 to-transparent opacity-50 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <RevealOnScroll>
                    <h2 className="font-heading text-4xl md:text-8xl font-black text-white uppercase mb-6 tracking-tighter">
                        Showroom <span className="text-gold-500">Ready?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 font-light tracking-wide max-w-xl mx-auto">
                        Our schedule fills weeks in advance. Secure your priority appointment today.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="tel:+16028824959"
                            className="group flex items-center gap-4 bg-white text-black px-12 py-6 uppercase tracking-widest font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            <Phone className="group-hover:rotate-12 transition-transform" />
                            (602) 882-4959
                        </a>
                        <div className="flex items-center gap-2 text-white/50 text-sm uppercase tracking-widest border border-white/10 px-8 py-6 backdrop-blur-sm">
                            <MapPin size={16} />
                            <span>North Scottsdale & Paradise Valley</span>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
