# St. Augustine Publications Website# React + TypeScript + Vite



A modern, responsive book publication website built with React, TypeScript, and Tailwind CSS. This website showcases educational books and materials for different grade levels (Preschool, Grade School, Junior High, Senior High).This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



![React](https://img.shields.io/badge/React-19.1.1-blue)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)

![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38bdf8)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## 🚀 Features## React Compiler



- ✨ Modern, responsive design with Tailwind CSSThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- 🎨 Auto-rotating hero slider/carousel

- 📚 Product categories for different education levels## Expanding the ESLint configuration

- 📰 News & updates section

- 📝 Contact formIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- 🔍 SEO-friendly routing with React Router

- ⚡ Lightning-fast development with Vite```js

- 💪 Type-safe with TypeScriptexport default defineConfig([

  globalIgnores(['dist']),

## 📋 Prerequisites  {

    files: ['**/*.{ts,tsx}'],

Before you begin, ensure you have the following installed:    extends: [

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)      // Other configs...

- **npm** (comes with Node.js) or **yarn**

- **Git** - [Download here](https://git-scm.com/)      // Remove tseslint.configs.recommended and replace with this

      tseslint.configs.recommendedTypeChecked,

## 🛠️ Installation      // Alternatively, use this for stricter rules

      tseslint.configs.strictTypeChecked,

### 1. Clone the repository      // Optionally, add this for stylistic rules

      tseslint.configs.stylisticTypeChecked,

```bash

git clone https://github.com/rommelocon/publication-website.git      // Other configs...

cd publication-website    ],

```    languageOptions: {

      parserOptions: {

### 2. Install dependencies        project: ['./tsconfig.node.json', './tsconfig.app.json'],

        tsconfigRootDir: import.meta.dirname,

```bash      },

npm install      // other options...

```    },

  },

This will install all required packages including:])

- React & React DOM```

- React Router DOM

- Tailwind CSS & PostCSSYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

- TypeScript

- Vite```js

- ESLint// eslint.config.js

import reactX from 'eslint-plugin-react-x'

### 3. Start the development serverimport reactDom from 'eslint-plugin-react-dom'



```bashexport default defineConfig([

npm run dev  globalIgnores(['dist']),

```  {

    files: ['**/*.{ts,tsx}'],

The application will open at `http://localhost:5173` (or another port if 5173 is in use).    extends: [

      // Other configs...

## 📁 Project Structure      // Enable lint rules for React

      reactX.configs['recommended-typescript'],

```      // Enable lint rules for React DOM

publication-website/      reactDom.configs.recommended,

├── public/              # Static assets (images, logo, etc.)    ],

├── src/    languageOptions: {

│   ├── components/      # Reusable UI components      parserOptions: {

│   │   ├── Header.tsx        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   │   ├── Hero.tsx        tsconfigRootDir: import.meta.dirname,

│   │   ├── ProductCategories.tsx      },

│   │   └── Footer.tsx      // other options...

│   ├── layouts/         # Layout components    },

│   │   └── MainLayout.tsx  },

│   ├── pages/          # Page components])

│   │   ├── Home.tsx```

│   │   ├── Products.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── News.tsx
│   ├── assets/         # Images, fonts, etc.
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles & Tailwind imports
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── postcss.config.js   # PostCSS & Tailwind configuration
```

## 🎨 Adding Images

Place your images in the `public` folder:

```
public/
├── logo.png           # Company logo (used in header)
├── slide1.jpg         # Hero slider image 1
├── slide2.jpg         # Hero slider image 2
├── slide3.jpg         # Hero slider image 3
├── preschool.jpg      # Preschool category image
├── gradeschool.jpg    # Grade school category image
├── juniorhigh.jpg     # Junior high category image
└── seniorhigh.jpg     # Senior high category image
```

Images in the `public` folder are referenced with `/` in your code (e.g., `/logo.png`).

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customizing Theme Colors

The website uses custom Tailwind colors defined in `src/index.css`:

```css
@theme {
  --color-primary: #1a365d;        /* Navy blue */
  --color-primary-dark: #0f1f3d;   /* Darker navy */
  --color-primary-light: #2d5a8f;  /* Lighter blue */
  --color-accent: #ffd700;         /* Gold */
  --color-accent-hover: #ffed4e;   /* Light gold */
}
```

Use these colors in your components:
- `bg-primary` / `text-primary`
- `bg-primary-dark` / `text-primary-dark`
- `bg-primary-light` / `text-primary-light`
- `bg-accent` / `text-accent`
- `bg-accent-hover` / `text-accent-hover`

## 🔧 Configuration

### Updating Company Information

Edit these files to customize the website:

1. **Company Name & Logo**: `src/components/Header.tsx`
2. **Hero Slider Content**: `src/components/Hero.tsx`
3. **Product Categories**: `src/components/ProductCategories.tsx`
4. **Contact Information**: `src/components/Footer.tsx` and `src/pages/Contact.tsx`
5. **About Us Content**: `src/pages/About.tsx`
6. **News Items**: `src/pages/News.tsx`
7. **Products List**: `src/pages/Products.tsx`

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

## 🐛 Troubleshooting

### Port already in use

If you see "Port 5173 is in use", Vite will automatically try the next available port (5174, 5175, etc.).

### Module not found errors

Run `npm install` again to ensure all dependencies are installed.

### Tailwind styles not working

Make sure `postcss.config.js` exists and contains the Tailwind PostCSS plugin.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)
- Routing with [React Router](https://reactrouter.com/)
