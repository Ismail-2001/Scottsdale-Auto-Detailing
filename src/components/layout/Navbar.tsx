import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-1000 ${scrolled ? 'glass-panel border-b border-white/5 py-4 translate-y-0' : 'bg-transparent border-transparent py-10'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full group-hover:shadow-[0_0_15px_#D4AF37] transition-all duration-500 animate-pulse-slow"></div>
                            <span className="font-heading font-black text-2xl tracking-tighter text-white">
                                SCOTTSDALE<span className="text-gold-500">.</span>
                            </span>
                        </div>
                        <span className="text-[8px] uppercase tracking-[0.55em] text-gray-500 font-bold mt-1 group-hover:text-gray-300 transition-colors duration-500">Concierge Detailing</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-16">
                        {['Services', 'Reviews'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-[10px] font-bold uppercase tracking-ultra-wide text-gray-400 hover:text-white transition-all duration-500 relative group/link"
                            >
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500/50 group-hover/link:w-full transition-all duration-700"></span>
                            </a>
                        ))}
                        <button
                            onClick={scrollToContact}
                            className="px-8 py-3.5 bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-gold-500/5 text-white text-[10px] uppercase tracking-ultra-wide font-black transition-all duration-700 rounded-sm"
                        >
                            Secure Session
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white w-10 h-10 flex items-center justify-center transition-colors hover:text-gold-500"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <div className="flex flex-col gap-1.5 w-6 items-end">
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-2/3 h-[1px] bg-white"></div>
                        </div>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-obsidian-deep/98 backdrop-blur-3xl transition-all duration-700 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`h-full flex flex-col items-center justify-center space-y-12 px-8 transition-transform duration-700 ${mobileMenuOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-12 h-[1px] bg-gold-500/50 mb-8"></div>
                        <span className="font-heading font-black text-4xl tracking-tighter text-white">SCOTTSDALE<span className="text-gold-500">.</span></span>
                    </div>

                    {['Services', 'Reviews', 'Contact'].map((item, idx) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-heading text-4xl font-bold text-white/40 uppercase tracking-tightest hover:text-gold-500 transition-all duration-500 py-2 group"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {item}
                        </a>
                    ))}

                    <button
                        className="w-full max-w-xs mt-12 py-6 border border-white/10 text-gold-500 font-black text-xs uppercase tracking-ultra-wide"
                        onClick={() => { setMobileMenuOpen(false); scrollToContact(); }}
                    >
                        Book VIP Protocol
                    </button>
                    <div className="w-12 h-[1px] bg-gold-500/20 mt-8"></div>
                </div>
            </div>
        </>
    );
};
