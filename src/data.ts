import { ServiceItem, Review } from './types';

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop';

export const SERVICES: ServiceItem[] = [
    {
        id: '1',
        title: 'Bespoke Paint Correction',
        description: 'A multi-stage therapeutic process removing imperfections to achieve absolute mirror clarity. We measure paint depth at every panel to ensure safety and precision.',
        price: 'From $1,200',
        features: [
            'Multi-stage machine leveling',
            'Paint depth mapping & analysis',
            'Texture refinement (Orange peel reduction)',
            'Jeweling stage for extreme gloss',
            'Post-correction inspection under 1000lm lighting'
        ],
        image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'Signature Ceramic Protection',
        description: 'Elite-tier Gtechniq & Modesta professional coatings. A permanent molecular bond providing chemical resistance, UV protection, and unparalleled hydrophobicity.',
        price: 'From $1,500',
        features: [
            '9H Hardness ceramic layer',
            '7-Year Transferable Warranty',
            'Self-healing technology',
            'Wheel-off barrel & caliper coating',
            'Interior leather & fabric protection'
        ],
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'Interior Restoration',
        description: 'Beyond cleaning—we restore. Using dry steam, pH-balanced Swissvax treatments, and Alcantara specific protocols to revive the boardroom aesthetic.',
        price: 'From $450',
        features: [
            'Full disassembly where required',
            'Swissvax leather enrichment',
            'Deep fiber extraction & sanitization',
            'Piano black refinement',
            'HEPA-grade climate system purge'
        ],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop'
    }
];

export const REVIEWS: Review[] = [
    {
        id: '1',
        author: 'Alexander Sterling',
        rating: 5,
        text: "In Scottsdale, many claim to be detailers. This team are artisans. They spent 40 hours on my Ferrari 458, and the results are frankly better than factory. Impeccable protocol and communication.",
        car: 'Ferrari 458 Italia'
    },
    {
        id: '2',
        author: 'Eleanor Vance',
        rating: 5,
        text: 'The convenience of high-end mobile service without compromise. They handled my fleet with surgical precision. The ceramic coating on my G-Wagon makes maintenance effortless.',
        car: 'Mercedes-AMG G63'
    }
];
