# 🎵 SAUVEGARDE PROJET - Pimentão en Chansons

## 📋 INFORMATIONS GÉNÉRALES
- **Nom du projet** : Pimentão en Chansons
- **Type** : Site web musical pour enfants
- **URL de production** : https://www.pimentao.fr
- **Auteur** : Florent Lambert
- **Date de publication** : 2025-06-25T08:00:00-03:00
- **Statut** : ✅ FONCTIONNEL ET DÉPLOYÉ

---

## 🛠️ STACK TECHNIQUE

### Frontend
- **Framework** : React 18
- **Build tool** : Vite
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui
- **Routing** : React Router DOM

### Backend & Données
- **Base de données** : JSON local (pas d'authentification requise)
- **SDK** : Base44 (désactivé pour éviter les prompts de login)
- **Hébergement** : GitHub Pages

### Analytics & SEO
- **Google Analytics** : G-PYDPHP42W8
- **Structured Data** : JSON-LD pour albums musicaux
- **Meta tags** : Open Graph, Twitter Cards, Author, Publication date

---

## 📁 STRUCTURE DU PROJET

```
Website/
├── public/
│   ├── favicon.png
│   ├── logo.png
│   ├── preview.jpg
│   ├── quiz-personnages.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── activities/QuizWidget.jsx
│   │   └── ui/ (shadcn/ui components)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Albums.jsx
│   │   ├── Karaoke.jsx
│   │   ├── Characters.jsx
│   │   ├── Activities.jsx
│   │   ├── About.jsx
│   │   └── Layout.jsx
│   ├── data/
│   │   └── liensKaraoke.js
│   └── App.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎵 CONTENU MUSICAL

### Albums Disponibles
1. **"Il était une chanson"** (11 pistes)
   - Contes de Perrault en musique
   - Image : PochetteAlbum.png

2. **"Les Fables en Chantant"** (12 pistes)
   - Fables de La Fontaine
   - Image : PochetteAlbumFables.jpg

3. **"Molière en Chansons"** (15 pistes)
   - Œuvres de Molière
   - Image : pochette1.png

### Fonctionnalités
- ✅ Lecteur audio intégré
- ✅ Système de karaoké
- ✅ Quiz interactif sur les personnages
- ✅ Navigation responsive

---

## 🚀 CONFIGURATION DE DÉPLOIEMENT

### GitHub Pages
- **Branch source** : `gh-pages`
- **Custom domain** : www.pimentao.fr
- **Base path** : `/` (racine)
- **HTTPS** : Activé

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

### Scripts de déploiement
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

---

## 🔧 CONFIGURATIONS IMPORTANTES

### Meta Tags (index.html)
```html
<!-- Auteur -->
<meta name="author" content="Florent Lambert" />

<!-- Date de publication -->
<meta property="article:published_time" content="2025-06-25T08:00:00-03:00" />

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PYDPHP42W8"></script>
```

### Données Structurées JSON-LD
- Organisation : Pimentão en Chansons
- MusicGroup avec 3 albums
- Images et métadonnées complètes

---

## 🎯 FONCTIONNALITÉS CLÉS

### ✅ Opérationnelles
- Navigation responsive avec menu hamburger mobile
- Lecteur audio pour tous les albums
- Système de karaoké fonctionnel
- Quiz interactif sur les personnages
- SEO optimisé avec meta tags complets
- Google Analytics intégré
- Sitemap et robots.txt configurés

### 🔄 Désactivées (choix délibéré)
- Authentification Base44 (évite les prompts de login)
- Page admin (non nécessaire pour le public)
- Données dynamiques (remplacées par JSON local)

---

## 📊 ANALYTICS & MONITORING

### Google Analytics
- **ID** : G-PYDPHP42W8
- **Statut** : ✅ Actif
- **Tracking** : Pages, événements, utilisateurs

### SEO
- **Meta description** : Optimisée pour les moteurs de recherche
- **Open Graph** : Configuré pour les réseaux sociaux
- **Twitter Cards** : Aperçu optimisé
- **Structured Data** : Albums musicaux avec JSON-LD

---

## 🚨 POINTS D'ATTENTION

### Déploiement
- Toujours utiliser la branch `gh-pages` pour GitHub Pages
- Vérifier que le domaine custom est bien configuré
- Clear cache navigateur après déploiement

### Maintenance
- Les données sont en JSON local (pas de base de données externe)
- Pas de système d'authentification à maintenir
- Mise à jour simple via Git

---

## 📞 CONTACT & SUPPORT

- **Auteur** : Florent Lambert
- **Domaine** : www.pimentao.fr
- **Type de projet** : Site musical éducatif pour enfants
- **Statut actuel** : ✅ PRODUCTION FONCTIONNELLE

---

*Dernière mise à jour : 2025-01-27*
*Version : 1.0 - Fonctionnelle* 