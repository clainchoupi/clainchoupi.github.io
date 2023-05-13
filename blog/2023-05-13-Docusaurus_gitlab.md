---
title: Docusaurus 🧡 GitLab pages
authors: [pcla]
tags: [Docusaurus, GitLab, CI/CD]
keywords: [Docusaurus, GitLab, CI/CD]
---

L'obejctif premier d'un site créé avec Docusaurus est d'être déployé.  
Pour mes premiers tests, j'ai hébergé mes repositories sur GitLab, mais malheureusement la documentation de Docusaurus ne contient pas encore d'exemple de pipeline pour GitLab Pages.  
La documentation contient des exemples pour Netlify, Vercel ou GitHub Pages, à retrouver ici : https://docusaurus.io/docs/deployment  
  
Je vais donc détailler un petit peu les actions nécessaires pour un déploiement sur GitLab Pages de votre site Docusaurus.

<!--truncate-->

### Configuration coté Docusaurus
Dans le fichier `package.json`, on ajoute un raccourci pour builder directement vers notre répertoire cible GitLab :
```
    "build:gitlab": "docusaurus build --out-dir public",
```

Dans le fichier `docusaurus.config.json`, il est nécessaire de modifier la **baseUrl** pour gérer le routing. Le '/' de fin doit être conservé. 
```
baseUrl: '/mon-site-docusaurus/',
```

### Gestion du pipeline Gitlab
Voici un exemple de création de pipeline simpliste `.gitlab-ci.yml`.  
Ici notre pipeline ne fait qu'un build du projet et dépose le résultat dans le répertoire public du repository GitLab.  
On peut imaginer facilement mettre en oeuvre des workflows de validation des articles et contenus, et de ne publier que lors d'un tag ou d'une action manuelle.

```yml
image: node:latest

# Gestion du cache pour un déploiement plus rapide
cache:
  paths:
    - node_modules/
    - public/
    - .cache/

pages:
  stage: deploy
  script:
    - npm ci
    - npm run build:gitlab
  artifacts:
      paths:
        - public
  only:
    - main
```