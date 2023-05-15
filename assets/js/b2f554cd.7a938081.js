"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/05/13/Docusaurus_github","metadata":{"permalink":"/blog/2023/05/13/Docusaurus_github","source":"@site/blog/2023-05-13-Docusaurus_github.md","title":"Docusaurus \ud83d\udda4 GitHub pages","description":"En parall\xe8le du d\xe9ploiement de sites sur GitLab, je teste aussi la cr\xe9ation d\'un blog et d\'une page de profil sur GitHub Pages.","date":"2023-05-13T00:00:00.000Z","formattedDate":"13 mai 2023","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"GitHub","permalink":"/blog/tags/git-hub"},{"label":"CI/CD","permalink":"/blog/tags/ci-cd"}],"readingTime":1.725,"hasTruncateMarker":true,"authors":[{"name":"Clainchoupi","url":"https://github.com/clainchoupi","imageURL":"https://avatars.githubusercontent.com/u/5754412","key":"pcla"}],"frontMatter":{"title":"Docusaurus \ud83d\udda4 GitHub pages","authors":["pcla"],"tags":["Docusaurus","GitHub","CI/CD"],"keywords":["Docusaurus","GitHub","CI/CD"]},"nextItem":{"title":"Docusaurus \ud83e\udde1 GitLab pages","permalink":"/blog/2023/05/13/Docusaurus_gitlab"}},"content":"En parall\xe8le du [d\xe9ploiement de sites sur GitLab](2023-05-13-Docusaurus_gitlab.md), je teste aussi la cr\xe9ation d\'un blog et d\'une page de profil sur GitHub Pages.  \\nLa documentation de Docusaurus contient des exemples pour Netlify, Vercel ou GitHub Pages, \xe0 retrouver ici : https://docusaurus.io/docs/deployment, mais j\'ai tout de m\xeame eu besoin de faire quelques ajustements.\\n  \\nJe vais donc d\xe9tailler un petit peu les actions n\xe9cessaires pour un d\xe9ploiement sur GitHub Pages de votre site Docusaurus.\\n\\n\x3c!--truncate--\x3e\\n\\n### Configuration cot\xe9 Docusaurus\\nTr\xe8s peu de modifications sont n\xe9cessaires, et elles sont bien d\xe9crites dans la documentation de Docusaurus.\\nDe mon cot\xe9 j\'ai suivi le tuto pour faire un d\xe9ploiement avec les GitHub Actions :  https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions \\n\\n### Gestion du pipeline GitHub\\nVoici un exemple de cr\xe9ation de pipeline simpliste `.github\\\\workflows\\\\publish.yml`.  \\nIci notre pipeline ne fait qu\'un build du projet et d\xe9pose le r\xe9sultat dans la branche **gh-pages**.  \\nOn peut imaginer facilement mettre en oeuvre des workflows de validation des articles et contenus, et de ne publier que lors d\'un tag ou d\'une action manuelle.\\n\\n```yml\\nname: Deploy to GitHub Pages\\n\\non:\\n  push:\\n    branches:\\n      - main\\n\\njobs:\\n  deploy:\\n    name: Deploy to GitHub Pages\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v3\\n      - uses: actions/setup-node@v3\\n        with:\\n          node-version: 16\\n\\n      - name: Install dependencies\\n        run: npm install\\n      - name: Build website\\n        run: npm run build\\n\\n      # Popular action to deploy to GitHub Pages:\\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\\n      - name: Deploy to GitHub Pages\\n        uses: peaceiris/actions-gh-pages@v3\\n        with:\\n          github_token: ${{ secrets.GITHUB_TOKEN }}\\n          # Build output to publish to the `gh-pages` branch:\\n          publish_dir: ./build\\n```\\n\\n:::info\\nEn suivant la documentation et en utilisant l\'Action `peaceiris/actions-gh-pages@v3`, quelques ajustements ont \xe9t\xe9 n\xe9cessaires \\n* node-version: 16 au lieu de 18\\n* passage \xe0 npm install et npm run au lieu de Yarn (pour \xeatre coh\xe9rent ave cmon usage en local)\\n* j\'ai du ajouter les droits Read & Write sur mon repo **/settings/actions > General**\\n![Permission du workflow](./2023-05-13-workflow_permissions.png)\\n* cr\xe9ation de la branche **gh-pages** car c\'est sur celle ci que l\'Action fait le d\xe9ploiement\\n* modification de la branche source des d\xe9ploiements de Pages sur mon repo **/settings/pages**\\n![Source de deploiement des pages](./2023-05-13-workflow_deploy_source.png)\\n:::"},{"id":"/2023/05/13/Docusaurus_gitlab","metadata":{"permalink":"/blog/2023/05/13/Docusaurus_gitlab","source":"@site/blog/2023-05-13-Docusaurus_gitlab.md","title":"Docusaurus \ud83e\udde1 GitLab pages","description":"L\'obejctif premier d\'un site cr\xe9\xe9 avec Docusaurus est d\'\xeatre d\xe9ploy\xe9.","date":"2023-05-13T00:00:00.000Z","formattedDate":"13 mai 2023","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"GitLab","permalink":"/blog/tags/git-lab"},{"label":"CI/CD","permalink":"/blog/tags/ci-cd"}],"readingTime":1.135,"hasTruncateMarker":true,"authors":[{"name":"Clainchoupi","url":"https://github.com/clainchoupi","imageURL":"https://avatars.githubusercontent.com/u/5754412","key":"pcla"}],"frontMatter":{"title":"Docusaurus \ud83e\udde1 GitLab pages","authors":["pcla"],"tags":["Docusaurus","GitLab","CI/CD"],"keywords":["Docusaurus","GitLab","CI/CD"]},"prevItem":{"title":"Docusaurus \ud83d\udda4 GitHub pages","permalink":"/blog/2023/05/13/Docusaurus_github"},"nextItem":{"title":"Utiliser Mermaid avec Docusaurus","permalink":"/blog/2023/05/11/Mermaid"}},"content":"L\'obejctif premier d\'un site cr\xe9\xe9 avec Docusaurus est d\'\xeatre d\xe9ploy\xe9.  \\nPour mes premiers tests, j\'ai h\xe9berg\xe9 mes repositories sur GitLab, mais malheureusement la documentation de Docusaurus ne contient pas encore d\'exemple de pipeline pour GitLab Pages.  \\nLa documentation contient des exemples pour Netlify, Vercel ou GitHub Pages, \xe0 retrouver ici : https://docusaurus.io/docs/deployment  \\n  \\nJe vais donc d\xe9tailler un petit peu les actions n\xe9cessaires pour un d\xe9ploiement sur GitLab Pages de votre site Docusaurus.\\n\\n\x3c!--truncate--\x3e\\n\\n### Configuration cot\xe9 Docusaurus\\nDans le fichier `package.json`, on ajoute un raccourci pour builder directement vers notre r\xe9pertoire cible GitLab :\\n```\\n    \\"build:gitlab\\": \\"docusaurus build --out-dir public\\",\\n```\\n\\nDans le fichier `docusaurus.config.json`, il est n\xe9cessaire de modifier la **baseUrl** pour g\xe9rer le routing. Le \'/\' de fin doit \xeatre conserv\xe9. \\n```\\nbaseUrl: \'/mon-site-docusaurus/\',\\n```\\n\\n### Gestion du pipeline Gitlab\\nVoici un exemple de cr\xe9ation de pipeline simpliste `.gitlab-ci.yml`.  \\nIci notre pipeline ne fait qu\'un build du projet et d\xe9pose le r\xe9sultat dans le r\xe9pertoire public du repository GitLab.  \\nOn peut imaginer facilement mettre en oeuvre des workflows de validation des articles et contenus, et de ne publier que lors d\'un tag ou d\'une action manuelle.\\n\\n```yml\\nimage: node:latest\\n\\n# Gestion du cache pour un d\xe9ploiement plus rapide\\ncache:\\n  paths:\\n    - node_modules/\\n    - public/\\n    - .cache/\\n\\npages:\\n  stage: deploy\\n  script:\\n    - npm ci\\n    - npm run build:gitlab\\n  artifacts:\\n      paths:\\n        - public\\n  only:\\n    - main\\n```"},{"id":"/2023/05/11/Mermaid","metadata":{"permalink":"/blog/2023/05/11/Mermaid","source":"@site/blog/2023-05-11-Mermaid.md","title":"Utiliser Mermaid avec Docusaurus","description":"Mermaid.js est une biblioth\xe8que open-source JavaScript qui permet de g\xe9n\xe9rer des diagrammes et des graphiques \xe0 partir de textes simples. En l\'utilisant directement avec Docusaurus, cela permet de mettre au m\xeame endroit tous mes sch\xe9mas as code, et donc de ne pas avoir \xe0 g\xe9rer diff\xe9rents outils pour g\xe9n\xe9rer mes images ou \xe0 importer des images stock\xe9es ailleurs.","date":"2023-05-11T00:00:00.000Z","formattedDate":"11 mai 2023","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"Mermaid","permalink":"/blog/tags/mermaid"}],"readingTime":1.355,"hasTruncateMarker":false,"authors":[{"name":"Clainchoupi","url":"https://github.com/clainchoupi","imageURL":"https://avatars.githubusercontent.com/u/5754412","key":"pcla"}],"frontMatter":{"title":"Utiliser Mermaid avec Docusaurus","authors":["pcla"],"tags":["Docusaurus","Mermaid"],"keywords":["Docusaurus","Mermaid"]},"prevItem":{"title":"Docusaurus \ud83e\udde1 GitLab pages","permalink":"/blog/2023/05/13/Docusaurus_gitlab"}},"content":"Mermaid.js est une biblioth\xe8que open-source JavaScript qui permet de g\xe9n\xe9rer des diagrammes et des graphiques \xe0 partir de textes simples. En l\'utilisant directement avec Docusaurus, cela permet de mettre au m\xeame endroit tous mes sch\xe9mas as code, et donc de ne pas avoir \xe0 g\xe9rer diff\xe9rents outils pour g\xe9n\xe9rer mes images ou \xe0 importer des images stock\xe9es ailleurs.\\n\\nPlus d\'exemples dans la [documentation de Mermaid](https://mermaid.js.org/intro/).  \\nQuelques types de graphiques int\xe9ressants :\\n* Gitgraph Diagrams \\n* Flowcharts\\n* Pie charts\\n* Timelines\\n\\nUn exemple de GitGraph : \\n\\n```mermaid\\n%%{init: { \'logLevel\': \'debug\', \'theme\': \'base\', \'gitGraph\': {\'rotateCommitLabel\': true}} }%%\\ngitGraph\\n  commit id: \\"feat(api): ...\\"\\n  commit id: \\"a\\"\\n  commit id: \\"b\\"\\n  commit id: \\"fix(client): .extra long label..\\"\\n  branch c2\\n  commit id: \\"feat(modules): ...\\"\\n  commit id: \\"test(client): ...\\"\\n  checkout main\\n  commit id: \\"fix(api): ...\\"\\n  commit id: \\"ci: ...\\"\\n  branch b1\\n  commit\\n  branch b2\\n  commit\\n```\\n\\nPour g\xe9n\xe9rer des graphs en live : https://mermaid.live \\n\\n### Installer et utiliser le plugin Mermaid pour Docusaurus\\n\\nCommencer par importer le plugin `@docusaurus/theme-mermaid`\\n\\n```\\nnpm install --save @docusaurus/theme-mermaid\\n```\\nDans le fichier `/docusaurus.config.js` activer le mode Mermaid : \\n\\n```\\nmodule.exports = {\\n  markdown: {\\n    mermaid: true,\\n  },\\n  themes: [\'@docusaurus/theme-mermaid\'],\\n};\\n```\\n\\n\\nPuis dans une page ajouter les balises Mermaid, et mettre le code de votre graphique. Ici pour l\'image en d\xe9but d\'article.\\n\\n```jsx title=\\"\\"\\n    ```mermaid\\n        %%{init: { \'logLevel\': \'debug\', \'theme\': \'base\', \'gitGraph\': {\'rotateCommitLabel\': true}} }%%\\n        gitGraph\\n          commit id: \\"feat(api): ...\\"\\n          commit id: \\"a\\"\\n          commit id: \\"b\\"\\n          commit id: \\"fix(client): .extra long label..\\"\\n          branch c2\\n          commit id: \\"feat(modules): ...\\"\\n          commit id: \\"test(client): ...\\"\\n          checkout main\\n          commit id: \\"fix(api): ...\\"\\n          commit id: \\"ci: ...\\"\\n          branch b1\\n          commit\\n          branch b2\\n          commit\\n    ```\\n```"}]}')}}]);