# Vishal Kumar - Portfolio Website

A modern, animated portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern UI with smooth animations using Framer Motion
- 🌊 Beautiful CSS wave transitions between sections
- ✨ Interactive dot background effects
- 📱 Fully responsive design
- 🎯 Smooth scroll navigation
- 🎭 Dynamic content sections:
  - Hero with animated introduction
  - Work Experience timeline
  - Featured Projects showcase
  - Skills & Technologies
  - Education background
  - Achievements & Awards
  - Contact information

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── sections/        # Page sections
│   └── Navbar.tsx       # Navigation bar
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Customization

- Update personal information in the section components under `src/components/sections/`
- Modify colors in `tailwind.config.js` and `src/index.css`
- Adjust animations in individual component files

## License

MIT License - feel free to use this template for your own portfolio!
