import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'gold';
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
    const baseStyle = "px-10 py-4 min-w-[160px] md:min-w-0 uppercase tracking-[0.15em] text-xs md:text-sm font-bold transition-all duration-500 ease-out transform group relative overflow-hidden";

    const variants = {
        primary: "bg-white text-black hover:bg-gray-100",
        outline: "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5",
        gold: "bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:brightness-110"
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        </button>
    );
};
