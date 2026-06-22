# 🦉 Quizzy

Une application web ludique pour motiver un élève de CM1 à aimer réviser, maths, français et anglais, avec du vrai contenu pédagogique et des mécaniques de jeu pensées pour être engageantes **sans dark patterns** : pas de perte de points, pas de "game over", pas de comparaison sociale, pas de microtransactions.

Quizzy est la petite sœur de [Studyverse](https://github.com/riadh-mnasri/studyverse), la même formule de révision ludique, adaptée ici à un enfant plus jeune (CM1, ~9-10 ans).

## Pourquoi cette app

Réviser peut être perçu comme une contrainte. Quizzy transforme chaque session de révision en petite mission quotidienne avec une vraie boucle de progression :

- 🎯 **3 missions par jour** (~5 min chacune, 10 questions), un parcours clair qui se termine — pas de scroll infini qui pousse à rester collé à l'écran
- ⭐ **XP, niveaux par matière et rang global** (Apprenti → Élève → Chevalier → Érudit → Maître → Légende)
- 🔥 **Streak quotidienne tolérante** : un jour de joker autorisé par semaine, pour ne jamais culpabiliser après un jour manqué
- 💎 **Gemmes gagnées en jouant**, dépensées dans une boutique d'avatar 100% cosmétique (jamais d'argent réel, jamais de récompense réelle automatisée - voir choix de conception ci-dessous)
- 🏅 **Badges** pour les jalons (séries, volume de questions, maîtrise de chapitre, rangs atteints)
- 👀 **Vue parent** en mode "coach" : suivi de la progression sans surveillance intrusive

## Choix de conception : pas de récompenses réelles

Les récompenses réelles (temps d'écran, argent de poche...) fonctionnent fort à court terme mais peuvent affaiblir le plaisir d'apprendre sur la durée (effet de sur-justification). Quizzy mise uniquement sur la progression intrinsèque (XP, niveaux, cosmétiques, badges) comme moteur de motivation.

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript + React 19
- [Tailwind CSS 4](https://tailwindcss.com) + [Framer Motion](https://www.framer.com/motion/) pour les animations
- `canvas-confetti` + Web Audio API pour le feedback (confettis, sons)
- Aucun backend — persistance 100% locale (`localStorage`), aucune donnée envoyée à un serveur

## Démarrer en local

```bash
npm install
npm run dev   # http://localhost:5151
```

## Contenu pédagogique

Niveau CM1 (France). Matières actuelles : **Maths** (numération, opérations, fractions, mesures, géométrie, temps), **Français** (grammaire, conjugaison, accords, homophones, vocabulaire, types de phrases) et **Anglais** (couleurs, nombres, animaux, famille, corps, vêtements, nourriture, jours/mois, formules de politesse). Le modèle de données (`lib/content/`) est conçu pour qu'ajouter une matière ou un chapitre se fasse en ajoutant un seul fichier, sans toucher au moteur de jeu.

## Roadmap

- Élargir le programme CM1 (plus de chapitres par matière)
- Nouvelles matières : histoire-géographie, sciences
- Sélection des chapitres du jour pondérée par répétition espacée

---

© 2026 Riadh MNASRI — Quizzy
