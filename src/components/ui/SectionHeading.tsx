import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => (
    <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tightest text-white mb-6">
            {title}
        </h2>
        {subtitle && (
            <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
                <div className="h-[1px] w-8 bg-gold-500"></div>
                <p className="text-gray-400 font-sans text-sm md:text-base tracking-[0.2em] uppercase">{subtitle}</p>
                <div className="h-[1px] w-8 bg-gold-500"></div>
            </div>
        )}
    </div>
);
