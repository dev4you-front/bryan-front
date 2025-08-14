# 🚀 Template de Règles pour Sites Vitrine - Guide Complet

## 📋 Checklist d'Architecture et Organisation

### 1. Structure des Dossiers (Next.js App Router)

```
src/
├── app/                    # App Router de Next.js
│   ├── components/         # Composants UI réutilisables
│   ├── globals.css        # Styles globaux et thème Tailwind
│   ├── layout.tsx         # Layout principal (header, footer)
│   ├── page.tsx           # Page d'accueil
│   ├── [section]/         # Pages statiques (ex: about, services)
│   │   └── page.tsx
│   └── [dynamic]/[slug]/  # Pages dynamiques (ex: blog/[slug])
│       └── page.tsx
├── data/                  # Données statiques/mockées
│   ├── articles.ts        # Articles de blog
│   ├── services.ts        # Services/produits
│   └── config.ts          # Configuration du site
├── types/                 # Définitions TypeScript
│   └── index.ts           # Toutes les interfaces
└── utils/                 # Fonctions utilitaires
    └── helpers.ts         # Fonctions réutilisables
```

### 2. Règles de Nommage

- **Pages** : `kebab-case` (ex: `about-us/page.tsx`)
- **Composants** : `PascalCase` (ex: `HeroSection.tsx`)
- **Fichiers de données** : `camelCase` (ex: `blogArticles.ts`)
- **Types/Interfaces** : `PascalCase` (ex: `Article`, `ServiceItem`)
- **Fonctions utilitaires** : `camelCase` (ex: `formatDate`, `classNames`)

## 🏗️ Architecture des Composants

### 3. Hiérarchie des Composants

```typescript
// 1. Layout Principal (src/app/layout.tsx)
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

// 2. Pages (src/app/page.tsx)
export default function HomePage() {
  return (
    <SectionWrapper>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </SectionWrapper>
  );
}

// 3. Sections (src/app/components/HeroSection.tsx)
export default function HeroSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenu de la section */}
      </div>
    </section>
  );
}
```

### 4. Règles Server vs Client Components

**Server Components (par défaut) :**
- Pages statiques
- Composants de layout
- Sections sans interactivité
- Fetching de données

**Client Components (`"use client"`) :**
- Composants avec hooks (`useState`, `useEffect`)
- Gestionnaires d'événements
- Animations/transitions
- Accès au DOM du navigateur

```typescript
// ❌ Mauvais : Server Component avec interactivité
export default function BadComponent() {
  const [isOpen, setIsOpen] = useState(false); // Erreur !
  return <div onClick={() => setIsOpen(!isOpen)}>...</div>;
}

// ✅ Bon : Client Component pour l'interactivité
"use client";
export default function GoodComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return <div onClick={() => setIsOpen(!isOpen)}>...</div>;
}
```

## 📊 Gestion des Données

### 5. Structure des Données

```typescript
// src/types/index.ts
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  slug: string;
  tags?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}
```

### 6. Organisation des Données

```typescript
// src/data/articles.ts
import { Article } from '@/types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Mon Premier Article',
    excerpt: 'Description courte...',
    content: 'Contenu complet en Markdown...',
    image: '/images/article-1.jpg',
    date: '2024-01-15',
    author: 'Nom Auteur',
    slug: 'mon-premier-article',
    tags: ['web', 'design']
  },
  // ...
];

// src/data/config.ts
import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'Mon Site Vitrine',
  description: 'Description de mon entreprise',
  author: 'Mon Nom',
  email: 'contact@monsite.com',
  social: {
    instagram: 'https://instagram.com/moncompte',
    linkedin: 'https://linkedin.com/in/monprofil'
  }
};
```

## 🎨 Stylisme et Design

### 7. Configuration Tailwind CSS

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme inline {
  /* Couleurs de marque */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #f59e0b;
  --color-neutral-light: #f8fafc;
  --color-neutral-dark: #1e293b;
  
  /* Typographie */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: 'Playfair Display', serif;
  
  /* Espacements personnalisés */
  --spacing-section: 4rem;
  --spacing-container: 1.5rem;
}

/* Styles globaux */
body {
  font-family: var(--font-sans);
  line-height: 1.6;
}

/* Styles pour le contenu Markdown */
.prose {
  @apply max-w-none;
}

.prose h1 { @apply text-3xl font-bold text-neutral-dark mt-8 mb-4; }
.prose h2 { @apply text-2xl font-bold text-neutral-dark mt-6 mb-3; }
.prose p { @apply text-neutral-600 mb-4 leading-relaxed; }
.prose a { @apply text-primary hover:text-primary/80 underline; }
```

### 8. Composant SectionWrapper Standard

```typescript
// src/app/components/SectionWrapper.tsx
interface SectionWrapperProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
}

export default function SectionWrapper({ 
  children, 
  maxWidth = '5xl', 
  spacing = 'xl',
  className = '',
  id 
}: SectionWrapperProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm', 'md': 'max-w-md', 'lg': 'max-w-lg',
    'xl': 'max-w-xl', '2xl': 'max-w-2xl', '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl', '5xl': 'max-w-5xl', '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  const spacingClasses = {
    'sm': 'space-y-8', 'md': 'space-y-12', 
    'lg': 'space-y-16', 'xl': 'space-y-20'
  };

  return (
    <section className={`py-16 ${className}`} id={id}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto px-6 ${spacingClasses[spacing]}`}>
        {children}
      </div>
    </section>
  );
}
```

## 🚀 Performance et Optimisation

### 9. Règles d'Optimisation des Images

```typescript
// ✅ Toujours utiliser next/image
import Image from 'next/image';

// Pour les images au-dessus du pli (LCP)
<Image
  src="/hero-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // Important pour LCP
  className="rounded-lg"
/>

// Pour les autres images
<Image
  src="/article-image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
/>

// Pour les images de taille inconnue
<Image
  src="/dynamic-image.jpg"
  alt="Description"
  fill
  className="object-cover rounded-lg"
/>
```

### 10. Optimisation des Ressources Externes

```typescript
// iframes (YouTube, etc.)
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Titre de la vidéo"
  className="w-full aspect-video rounded-lg"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  loading="lazy" // Important pour la performance
/>

// Liens externes
<a 
  href="https://external-site.com" 
  target="_blank" 
  rel="noopener noreferrer" // Sécurité obligatoire
  className="text-primary hover:text-primary/80"
>
  Lien externe
</a>
```

## 🛠️ Fonctions Utilitaires Standard

### 11. Utilitaires Essentiels

```typescript
// src/utils/helpers.ts

// Combinaison de classes CSS
export function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

// Formatage de dates
export function formatDate(date: string, locale: string = 'fr-FR'): string {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Troncature de texte
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

// Génération de slug
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9\s-]/g, '') // Supprime les caractères spéciaux
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/-+/g, '-') // Supprime les tirets multiples
    .trim();
}

// Validation d'URL
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
```

## 📱 Responsive Design

### 12. Breakpoints Standard

```typescript
// Utilisez les breakpoints Tailwind
// sm: 640px   - Mobile large
// md: 768px   - Tablette
// lg: 1024px  - Desktop petit
// xl: 1280px  - Desktop
// 2xl: 1536px - Desktop large

// Exemple d'utilisation
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Contenu responsive */}
</div>

// Navigation mobile/desktop
<nav className="hidden md:flex space-x-8">
  {/* Navigation desktop */}
</nav>
<button className="md:hidden" onClick={toggleMobileMenu}>
  {/* Bouton hamburger mobile */}
</button>
```

## 🔍 SEO et Métadonnées

### 13. Configuration SEO

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Mon Site Vitrine',
    template: '%s | Mon Site Vitrine'
  },
  description: 'Description de mon entreprise et services',
  keywords: ['mot-clé1', 'mot-clé2', 'mot-clé3'],
  authors: [{ name: 'Mon Nom' }],
  creator: 'Mon Nom',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://monsite.com',
    title: 'Mon Site Vitrine',
    description: 'Description pour les réseaux sociaux',
    siteName: 'Mon Site Vitrine',
    images: [{
      url: 'https://monsite.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Mon Site Vitrine'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mon Site Vitrine',
    description: 'Description pour Twitter',
    images: ['https://monsite.com/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

// Pages dynamiques
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image]
    }
  };
}
```

## 🧪 Bonnes Pratiques de Développement

### 14. Checklist Qualité

**TypeScript :**
- [ ] Toutes les interfaces sont définies dans `src/types/`
- [ ] Aucun `any` dans le code
- [ ] Props des composants typées
- [ ] Configuration TypeScript stricte activée

**Performance :**
- [ ] Toutes les images utilisent `next/image`
- [ ] Images LCP avec `priority`
- [ ] iframes avec `loading="lazy"`
- [ ] Polices avec `next/font`

**Accessibilité :**
- [ ] Attributs `alt` sur toutes les images
- [ ] `aria-label` sur les boutons sans texte
- [ ] Navigation au clavier fonctionnelle
- [ ] Contraste des couleurs suffisant

**SEO :**
- [ ] Métadonnées définies pour chaque page
- [ ] Structure HTML sémantique (`<header>`, `<main>`, `<section>`)
- [ ] URLs propres et descriptives
- [ ] Sitemap généré automatiquement

**Sécurité :**
- [ ] `rel="noopener noreferrer"` sur liens externes
- [ ] Validation des données utilisateur
- [ ] Headers de sécurité configurés

## 📦 Configuration des Dépendances

### 15. Package.json Standard

```json
{
  "name": "mon-site-vitrine",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-markdown": "^10.0.0",
    "remark-gfm": "^4.0.0",
    "rehype-raw": "^7.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

## 🚀 Prompt pour Nouveaux Projets

### 16. Template de Prompt pour Bolt

```
Crée-moi un site vitrine professionnel avec Next.js App Router et les spécifications suivantes :

ARCHITECTURE :
- Next.js 15 avec App Router
- TypeScript strict
- Tailwind CSS v4
- Structure : src/app, src/data, src/types, src/utils

FONCTIONNALITÉS :
- Page d'accueil avec hero section
- Section services/produits
- Blog avec articles en Markdown
- Page contact
- Navigation responsive avec menu mobile

COMPOSANTS REQUIS :
- SectionWrapper réutilisable
- Header avec navigation
- Footer avec liens sociaux
- Carrousel/slider pour témoignages
- Formulaire de contact

OPTIMISATIONS :
- Images avec next/image
- Lazy loading des ressources
- SEO optimisé avec métadonnées
- Performance Web Vitals optimisées

DESIGN :
- Design moderne et professionnel
- Palette de couleurs cohérente
- Responsive design (mobile-first)
- Animations subtiles et micro-interactions

Respecte toutes les bonnes pratiques modernes de développement React/Next.js.
```

---

## 📋 Checklist Finale

Avant de livrer un site vitrine, vérifiez :

- [ ] **Architecture** : Structure des dossiers respectée
- [ ] **Performance** : Score Lighthouse > 90
- [ ] **SEO** : Métadonnées complètes
- [ ] **Accessibilité** : Tests WCAG passés
- [ ] **Responsive** : Testé sur tous les breakpoints
- [ ] **TypeScript** : Aucune erreur de type
- [ ] **Sécurité** : Headers et liens sécurisés
- [ ] **Contenu** : Textes et images optimisés

Ce template vous garantit un site vitrine professionnel, performant et maintenable ! 🎉