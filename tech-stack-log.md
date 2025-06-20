# Tech Stack Log - Journal des Connaissances Techniques

*Fichier de mémoire technique partagée pour capitaliser sur le travail effectué et garantir la cohérence.*

## Bibliothèques et Dépendances

### Framer Motion (framer-motion)
- **Version :** Installée via npm
- **Usage :** Animations d'interface utilisateur, particulièrement pour les animations d'entrée lors du scroll
- **Implémentation :** 
  - Composant `AnimatedPanel` dans `src/components/AnimatedPanel/AnimatedPanel.tsx`
  - Utilise `motion.div` avec `whileInView` pour détecter l'entrée dans le viewport
  - Configuration d'animation : `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`
  - Paramètres viewport : `once: true, amount: 0.2` (animation une seule fois, déclenchée à 20% de visibilité)
  - Transition : `duration: 0.6, ease: 'easeOut'`

### Three.js Stack (three, @react-three/fiber, @react-three/drei, @types/three)
- **Version :** Installée via npm
- **Usage :** Rendu 3D dans React, implémentation d'avatars et scènes interactives
- **Implémentation :**
  - Composant `AvatarScene` dans `src/components/AvatarScene/AvatarScene.tsx`
  - Utilise `Canvas` de @react-three/fiber comme conteneur principal
  - Modèle 3D rotatif avec `useFrame` pour l'animation continue
  - `OrbitControls` pour l'interaction utilisateur (rotation manuelle, auto-rotation)
  - Configuration d'éclairage : `ambientLight` (0.5 intensity) + `directionalLight` (position [10,10,5])
  - Matériau métallique : `meshStandardMaterial` avec metalness: 0.7, roughness: 0.2

## Patterns de Conception Établis

### Wrapper d'Animation Réutilisable
- **Pattern :** Composant wrapper pour animations d'entrée
- **Implémentation :** `AnimatedPanel` component
- **Usage :** Enveloppe les `SectionPanel` pour ajouter des animations d'apparition au scroll
- **Avantages :** Réutilisable, configurabilité future, séparation des préoccupations

### Architecture Responsive avec Media Queries
- **Pattern :** Breakpoints standardisés utilisant des mixins SCSS
- **Implémentation :** Utilisation du mixin `respond-to(tablet-l)` et `respond-to(mobile-l)`
- **Breakpoints :**
  - `tablet-l` : 1024px - point de rupture principal pour le passage en mode mobile
  - `mobile-l` : généralement ~480px pour les ajustements spécifiques au mobile
- **Stratégie :** Mobile-first approche avec desktop comme layout principal, puis adaptation pour tablette/mobile

## Composants UI/Utilitaires Réutilisables

### AnimatedPanel
- **Localisation :** `src/components/AnimatedPanel/AnimatedPanel.tsx`
- **Props :** `{ children: React.ReactNode }`
- **Fonctionnalité :** Animation d'apparition progressive lors du scroll
- **Utilisation :** Wrapper autour des sections de contenu pour améliorer l'UX

### AvatarScene
- **Localisation :** `src/components/AvatarScene/AvatarScene.tsx`
- **Props :** Aucune
- **Fonctionnalité :** Scène 3D interactive avec modèle rotatif
- **Utilisation :** Intégré dans la HeroSection pour affichage 3D
- **Interactions :** Rotation manuelle par clic-glisser, auto-rotation désactivable par zoom

### Layout Responsive
- **Localisation :** `src/app/globals.scss`
- **Fonctionnalité :** Adaptation du conteneur principal de flex horizontal à vertical
- **Breakpoint :** `tablet-l` (1024px)
- **Changements :** `flex-direction: column`, padding réduit

### Navigation Adaptive
- **Localisation :** `src/components/Navigation/Navigation.module.scss`
- **Fonctionnalité :** Transformation de navigation verticale en barre horizontale
- **Breakpoint :** `tablet-l` (1024px)
- **Changements :** Position relative, flex horizontal, distribution space-around, annulation du texte vertical 