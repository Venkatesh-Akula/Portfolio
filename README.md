# 🚀 Gen AI Architect Portfolio

A modern, responsive, futuristic portfolio application built with **React 19**, **Vite 8**, and **Tailwind CSS v4**. Designed for a **Gen AI Architect & E-Learning Consultant** with 12+ years of experience in AI/ML engineering.

## ✨ Features

- **Futuristic Dark Theme** — Dark UI with gradient accents (indigo/cyan/amber), glass-morphism cards, and subtle background grid patterns
- **Fully Responsive** — Optimized for mobile, tablet, and desktop viewports
- **Smooth Animations** — Float, pulse-glow, slide-up, fade-in, and scale-in animations with staggered delays
- **Interactive Components**:
  - Sticky glass-nav with smooth scroll navigation & mobile hamburger menu
  - Hero section with animated avatar, floating badges, and stats counter
  - Filterable project grid with category tabs (Full Stack, Frontend, Backend, AI/ML)
  - Alternating timeline for work experience & education history
  - Contact form with submission feedback
- **Modern Stack**: React 19, Vite 8, Tailwind CSS v4

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with hooks-based components |
| **Vite 8** | Fast development server & build tool |
| **Tailwind CSS v4** | Utility-first CSS framework with `@import` syntax |
| **JavaScript (ES6+)** | Core application logic |

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navigation with smooth scroll
│   │   ├── Hero.jsx         # Full-screen hero section
│   │   ├── About.jsx        # About me with personal info grid
│   │   ├── Skills.jsx       # Skill categories with progress bars
│   │   ├── Projects.jsx     # Filterable project cards
│   │   ├── Experience.jsx   # Career timeline
│   │   ├── Contact.jsx      # Contact form & info cards
│   │   └── Footer.jsx       # Minimal footer
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind v4 + custom utilities & animations
├── index.html               # HTML template
├── vite.config.js           # Vite configuration with Tailwind plugin
├── package.json             # Dependencies & scripts
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

> **Note:** The project source code lives inside the `portfolio/` subdirectory. All commands must be run from within `portfolio/`.

The app will be available at **http://localhost:5173/** with hot-reload enabled.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Output

| Asset | Size | Gzipped |
|-------|------|---------|
| `index.html` | 0.45 kB | 0.29 kB |
| `index.css` | 33.92 kB | 6.42 kB |
| `index.js` | 219.58 kB | 67.15 kB |

## 🎨 Customization

### Colors

Theme colors are defined in `src/index.css` via Tailwind's `@theme` directive:

```css
@theme {
  --color-primary: #6366f1;     /* Indigo */
  --color-primary-dark: #4f46e5;
  --color-secondary: #06b6d4;   /* Cyan */
  --color-accent: #f59e0b;      /* Amber */
  --color-dark: #0f172a;        /* Slate 900 */
  --color-darker: #020617;      /* Slate 950 */
  --color-light: #e2e8f0;       /* Slate 200 */
  --color-gray-custom: #94a3b8; /* Slate 400 */
}
```

### Content

Update your personal information across the components:
- **Hero.jsx** — Name, title, description, stats
- **About.jsx** — Bio, personal info, contact details
- **Skills.jsx** — Skill categories and proficiency levels
- **Projects.jsx** — Project cards with tags and categories
- **Experience.jsx** — Career timeline entries
- **Contact.jsx** — Contact info and social links

## 📄 License

All rights reserved. This project is a personal portfolio template.