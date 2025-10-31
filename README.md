# 🚀 Modern Portfolio Website

A stunning, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features modern animations, glass morphism design, and smooth user interactions.

## ✨ Features

- **Modern Design**: Glass morphism effects with gradient backgrounds
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Animations**: Smooth hover effects and entrance animations
- **Active Navigation**: Dynamic navbar with scroll-based active states
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 16 for optimal performance

## 🎨 Sections

- **Hero**: Dynamic typing animation with social links and stats
- **About**: Personal introduction with circular profile image
- **Experience**: Timeline-based work experience showcase
- **Education**: Academic background with achievements and courses
- **Skills**: Categorized tech stack with interactive cards
- **Projects**: Featured projects with hover effects and live demos
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React patterns

### Styling & Animation
- **Glass Morphism** - Modern UI design trend
- **CSS Animations** - Custom keyframe animations
- **Gradient Effects** - Beautiful color transitions
- **Responsive Design** - Mobile-first approach

### Tools & Deployment
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform (recommended)
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with typing animation
│   │   ├── About.tsx        # About section with profile image
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Featured projects
│   │   └── Contact.tsx      # Contact information
│   └── Navbar.tsx           # Navigation with active states
├── public/
│   ├── profile.jpg          # Profile image (add your photo)
│   └── project*.jpg         # Project images
└── README.md
```

## 🎨 Customization

### Personal Information
1. **Update Hero Section** (`components/sections/Hero.tsx`)
   - Change name and titles in the typing animation
   - Update social media links
   - Modify stats (years of experience, projects, etc.)

2. **Add Profile Image**
   - Add your photo as `/public/profile.jpg`
   - The About section will automatically use it

3. **Update Experience** (`components/sections/Experience.tsx`)
   - Modify the `experienceData` array with your work history
   - Update job titles, companies, and descriptions

4. **Update Education** (`components/sections/Education.tsx`)
   - Modify the `educationData` array with your academic background
   - Update degrees, institutions, and achievements

5. **Update Skills** (`components/sections/Skills.tsx`)
   - Modify the `skillCategories` object with your tech stack
   - Add/remove technologies as needed

6. **Update Projects** (`components/sections/Projects.tsx`)
   - Modify the `projects` array with your actual projects
   - Add project images to `/public/` folder
   - Update GitHub and live demo links

### Styling
- **Colors**: Modify gradient colors in `app/globals.css`
- **Animations**: Adjust animation durations and delays
- **Layout**: Customize spacing and sizing in component files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Collapsible mobile navigation
- Adaptive typography scaling
- Flexible grid layouts
- Touch-friendly interactions

## 🎭 Animations

### Custom Animations
- `animate-slide-up`: Entrance animation for sections
- `animate-float`: Floating animation for background elements
- `animate-glow`: Glowing effect for interactive elements
- `animate-pulse-glow`: Pulsing glow for call-to-action buttons

### Hover Effects
- Card scaling and shadow enhancement
- Gradient overlays and text effects
- Icon animations and transformations
- Smooth color transitions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms
The project can be deployed to any static hosting service that supports Next.js.

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/personal-portfolio/issues).

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)
- **Portfolio**: [Live Demo](https://yourportfolio.com)

---

⭐ **Star this repository if you found it helpful!**
