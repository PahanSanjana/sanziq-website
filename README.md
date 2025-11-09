# SANZIQ — Smart Web Solutions

SANZIQ is a modern, responsive, and optimized website built with React, Vite, and Tailwind CSS. It features a professional design with dark mode support, smooth animations, and performance optimizations.

![SANZIQ Screenshot](./src/assets/logo1.png)

## 🚀 Features

- **Modern React Architecture** - Built with React 19 and Vite for lightning-fast development
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Dark Mode** - Complete light and dark theme support with system preference detection
- **Animations** - Smooth transitions using Framer Motion
- **Performance Optimized** - Code splitting, image optimization, and lazy loading
- **SEO Ready** - Built-in SEO component and meta tags
- **Accessibility** - WCAG compliant with keyboard navigation support
- **Form Validation** - Client-side validation using React Hook Form
- **Progressive Web App** - Installable on mobile devices
- **3D Backgrounds** - Optimized Three.js based interactive backgrounds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Form Management**: React Hook Form
- **Routing**: React Router
- **API Integration**: React Query
- **State Management**: Context API and Valtio
- **Performance**: Dynamic imports, code splitting, image optimization
- **Icons**: Lucide React
- **Deployment**: Static site deployment ready

## 📋 Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

## 🏗️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sanziq-web.git
   cd sanziq-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit: `http://localhost:3000`

## 🚀 Build for Production

1. Create a production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

The build files will be generated in the `dist` directory.

## 🧪 Development Notes

### Project Structure

```
sanziq-web/
├── public/                 # Static files
│   ├── robots.txt          # SEO optimization
│   ├── sitemap.xml         # Site map for SEO
│   └── manifest.json       # PWA manifest
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable components
│   ├── context/            # Context providers
│   ├── data/               # Static data files
│   ├── pages/              # Page components
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
└── package.json            # Dependencies and scripts
```

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.jsx`

### Customizing Theme

The theme is defined in `tailwind.config.js`. You can customize the colors, typography, and other design elements there.

### 3D Scenes

The 3D backgrounds are created using Three.js and React Three Fiber. They're optimized for performance with fallbacks for low-end devices. You can customize them in the `src/components/` directory.

## 🌐 Deployment

This project can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

For example, to deploy to Netlify:

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Set build command to `npm run build` or `yarn build`
4. Set publish directory to `dist`

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com/)

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

SANZIQ — Smart Web Solutions by [Pahan Sanjana](https://github.com/PahanSanjana)
