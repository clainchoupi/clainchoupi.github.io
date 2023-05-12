"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/05/11/Mermaid","metadata":{"permalink":"/blog/2023/05/11/Mermaid","source":"@site/blog/2023-05-11-Mermaid.md","title":"Utiliser Mermaid avec Docusaurus","description":"Mermaid.js est une biblioth\xe8que open-source JavaScript qui permet de g\xe9n\xe9rer des diagrammes et des graphiques \xe0 partir de textes simples. En l\'utilisant directement avec Docusaurus, cela permet de mettre au m\xeame endroit tous mes sch\xe9mas as code, et donc de ne pas avoir \xe0 g\xe9rer diff\xe9rents outils pour g\xe9n\xe9rer mes images ou \xe0 importer des images stock\xe9es ailleurs.","date":"2023-05-11T00:00:00.000Z","formattedDate":"11 mai 2023","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"Mermaid","permalink":"/blog/tags/mermaid"}],"readingTime":1.355,"hasTruncateMarker":false,"authors":[{"name":"Clainchoupi","url":"https://github.com/clainchoupi","imageURL":"https://avatars.githubusercontent.com/u/5754412","key":"pcla"}],"frontMatter":{"title":"Utiliser Mermaid avec Docusaurus","authors":["pcla"],"tags":["Docusaurus","Mermaid"]}},"content":"Mermaid.js est une biblioth\xe8que open-source JavaScript qui permet de g\xe9n\xe9rer des diagrammes et des graphiques \xe0 partir de textes simples. En l\'utilisant directement avec Docusaurus, cela permet de mettre au m\xeame endroit tous mes sch\xe9mas as code, et donc de ne pas avoir \xe0 g\xe9rer diff\xe9rents outils pour g\xe9n\xe9rer mes images ou \xe0 importer des images stock\xe9es ailleurs.\\n\\nPlus d\'exemples dans la [documentation de Mermaid](https://mermaid.js.org/intro/).  \\nQuelques types de graphiques int\xe9ressants :\\n* Gitgraph Diagrams \\n* Flowcharts\\n* Pie charts\\n* Timelines\\n\\nUn exemple de GitGraph : \\n\\n```mermaid\\n%%{init: { \'logLevel\': \'debug\', \'theme\': \'base\', \'gitGraph\': {\'rotateCommitLabel\': true}} }%%\\ngitGraph\\n  commit id: \\"feat(api): ...\\"\\n  commit id: \\"a\\"\\n  commit id: \\"b\\"\\n  commit id: \\"fix(client): .extra long label..\\"\\n  branch c2\\n  commit id: \\"feat(modules): ...\\"\\n  commit id: \\"test(client): ...\\"\\n  checkout main\\n  commit id: \\"fix(api): ...\\"\\n  commit id: \\"ci: ...\\"\\n  branch b1\\n  commit\\n  branch b2\\n  commit\\n```\\n\\nPour g\xe9n\xe9rer des graphs en live : https://mermaid.live \\n\\n### Installer et utiliser le plugin Mermaid pour Docusaurus\\n\\nCommencer par importer le plugin `@docusaurus/theme-mermaid`\\n\\n```\\nnpm install --save @docusaurus/theme-mermaid\\n```\\nDans le fichier `/docusaurus.config.js` activer le mode Mermaid : \\n\\n```\\nmodule.exports = {\\n  markdown: {\\n    mermaid: true,\\n  },\\n  themes: [\'@docusaurus/theme-mermaid\'],\\n};\\n```\\n\\n\\nPuis dans une page ajouter les balises Mermaid, et mettre le code de votre graphique. Ici pour l\'image en d\xe9but d\'article.\\n\\n```jsx title=\\"\\"\\n    ```mermaid\\n        %%{init: { \'logLevel\': \'debug\', \'theme\': \'base\', \'gitGraph\': {\'rotateCommitLabel\': true}} }%%\\n        gitGraph\\n          commit id: \\"feat(api): ...\\"\\n          commit id: \\"a\\"\\n          commit id: \\"b\\"\\n          commit id: \\"fix(client): .extra long label..\\"\\n          branch c2\\n          commit id: \\"feat(modules): ...\\"\\n          commit id: \\"test(client): ...\\"\\n          checkout main\\n          commit id: \\"fix(api): ...\\"\\n          commit id: \\"ci: ...\\"\\n          branch b1\\n          commit\\n          branch b2\\n          commit\\n    ```\\n```"}]}')}}]);