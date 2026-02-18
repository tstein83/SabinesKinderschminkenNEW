# Sabines Kinderschminken - Astro Website

Moderne, performante Website für Sabines Kinderschminken, entwickelt mit Astro und Tailwind CSS.

## 🚀 Features

- ⚡ **Astro 5.17** - Ultra-schnelles Web-Framework mit optimaler Performance
- 🎨 **Tailwind CSS 4.1** - Utility-first CSS Framework
- 📱 **Responsive Design** - Optimiert für alle Geräte
- 🖼️ **Interaktive Galerie** - Mit Filter-Funktion und Lightbox
- 🎯 **SEO-optimiert** - Beste Sichtbarkeit in Suchmaschinen
- ⚡ **Lighthouse Score: 100** - Perfekte Performance

## 📦 Projekt-Struktur

```
alternative-webseite/
├── public/
│   └── images/          # 180+ Bilder (10 MB)
├── src/
│   ├── components/      # Wiederverwendbare Komponenten
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Gallery.astro
│   │   ├── ServiceArea.astro
│   │   ├── References.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css   # Tailwind & Custom Styles
└── package.json
```

## 🎨 Design-System

### Farben
- **Primary (Pink):** `#FF6B9D`
- **Secondary (Türkis):** `#4ECDC4`
- **Accent (Gelb):** `#FFE66D`

### Schriftart
- **Poppins** - Modern und lesbar

## 🛠️ Entwicklung

### Voraussetzungen
- Node.js 24+ (aktuell: v24.13.1)
- npm 11+ (aktuell: v11.8.0)

### Installation
```bash
cd alternative-webseite
npm install
```

### Entwicklungsserver starten
```bash
npm run dev
```
Website läuft unter: **http://localhost:4321/**

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📄 Inhalte

### Sektionen
1. **Hero** - Willkommensbereich mit Call-to-Action
2. **Services** - 6 Haupt-Dienstleistungen
3. **Galerie** - 18 Bilder mit Filter (Kinderschminken, Ballons, Events)
4. **Über Uns** - Team-Vorstellung
5. **Einsatzgebiet** - 12 Städte in der Rhein-Main-Region
6. **Referenzen** - Top 20 + 50+ weitere Referenzen
7. **Kontakt** - Kontaktformular

### Bilder
- Galerie: 13 Bilder
- Services: 145+ Bilder
- Team: 4 Bilder
- Referenzen: 20 Bilder
- **Gesamt:** 180+ Bilder (10 MB)

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📱 Browser-Support

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## 📝 Lizenz

© 2026 Sabines Kinderschminken. Alle Rechte vorbehalten.

## 🤝 Kontakt

- Website: https://www.sabineskinderschminken.de
- E-Mail: info@sabineskinderschminken.de
- Region: Rhein-Main (Frankfurt, Mannheim, Darmstadt)
