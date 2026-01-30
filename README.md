# North Scottsdale Auto Detailing 🏎️✨

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A premium, high-conversion landing page for **North Scottsdale Auto Detailing**. This project is a production-ready web application designed for elite mobile detailing services, featuring a "Stealth Luxury" aesthetic, optimized performance, and high-end animations. Built for the uncompromising vehicle owner, it provides a seamless user experience from service discovery to booking.

---

## 💎 Key Features

- **Premium Aesthetic**: A curated "Stealth Luxury" design system using glassmorphism, metallic gradients, and obsidian color palettes.
- **Modular Component Architecture**: Fully refactored into reusable React components for maximum maintainability.
- **Scroll-Triggered Animations**: Smooth, high-performance reveal animations using `IntersectionObserver`.
- **Performance Optimized**: 
  - Responsive image loading (`srcset`) for the hero section.
  - Lazy-loading for non-critical assets.
  - Minimal bundle size through Vite tree-shaking.
- **SEO & Social Ready**: Comprehensive Meta tags, Open Graph protocol, and JSON-LD Structured Data (Schema.org) for local business ranking.
- **Mobile First**: Fully responsive navigation and touch-optimized UI components.

---

## 🛠️ Tech Stack

### Frontend
- **React 19**: Utilizing the latest concurrent rendering features.
- **TypeScript**: Strict type-checking for robust, self-documenting code.
- **Tailwind CSS**: Utility-first styling with custom theme extensions for premium aesthetics.
- **Lucide React**: Clean, accessible iconography.

### Build & Tools
- **Vite**: Ultra-fast next-generation frontend tooling.
- **PostCSS / Autoprefixer**: Industry-standard CSS transformation.
- **ESLint**: Standardized code quality enforcement.

### Hosting & Deployment
- **Recommended**: [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) (Optimized for Vite/React).

---

## 🏗️ Architecture

The project follows a modern, atomic-inspired file structure:

```text
src/
├── components/
│   ├── layout/      # High-level page structure (Navbar, Hero, Footer)
│   ├── features/    # Domain-specific components (ServiceCard, ReviewCard)
│   └── ui/          # Reusable primitive components (Button, RevealOnScroll)
├── data/            # Centralized content management (Services, Reviews)
├── types/           # TypeScript interfaces and type definitions
├── App.tsx          # Main application assembler
└── index.tsx        # Application entry point
```

---

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step-by-Step Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ismail-2001/Mobile-Auto-Detailing---North-Scottsdale.git
   cd Mobile-Auto-Detailing---North-Scottsdale
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory (optional, used for future API integrations):
   ```text
   VITE_APP_TITLE=North Scottsdale Auto Detailing
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

---

## 📖 Usage

- **Development**: `npm run dev` - Runs the app with Hot Module Replacement (HMR).
- **Build**: `npm run build` - Compiles the project into highly optimized static assets in the `dist/` folder.
- **Preview**: `npm run preview` - Locally boot the production build for final testing.
- **Lint**: `npm run lint` - Run ESLint to check for code quality issues.

---

## 🚢 Deployment

### Deploying to Netlify/Vercel
1. Connect your GitHub repository to the platform.
2. Set **Build Command**: `npm run build`
3. Set **Publish Directory**: `dist`
4. Deploy!

### Manual Deployment
Upload the contents of the `dist/` folder to any static hosting service (S3, Nginx, Apache).

---

## 📸 Screenshots / Demo

> [!TIP]
> **View Live Demo**: [Insert Your Link Here]

| Hero Section | Services Grid |
| :--- | :--- |
| ![Hero Placeholder](https://via.placeholder.com/800x450?text=Hero+Aesthetic) | ![Grid Placeholder](https://via.placeholder.com/800x450?text=Service+Cards) |

---

## 🗺️ Roadmap

- [ ] **Phase 1**: Integration of a lead capture form with email automation (EmailJS/Web3Forms).
- [ ] **Phase 2**: Interactive "Before/After" slider gallery for restoration work.
- [ ] **Phase 3**: Dynamic booking system integration (Calendly/Custom).
- [ ] **Phase 4**: Blog engine for local SEO content marketing.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Designed with precision by Ismail-2001.**
