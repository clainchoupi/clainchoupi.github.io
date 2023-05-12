"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[427],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[c]="string"==typeof e?e:n,o[1]=m;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const i={title:"Utiliser Mermaid avec Docusaurus",authors:["pcla"],tags:["Docusaurus","Mermaid"]},o=void 0,m={permalink:"/blog/2023/05/11/Mermaid",source:"@site/blog/2023-05-11-Mermaid.md",title:"Utiliser Mermaid avec Docusaurus",description:"Mermaid.js est une biblioth\xe8que open-source JavaScript qui permet de g\xe9n\xe9rer des diagrammes et des graphiques \xe0 partir de textes simples. En l'utilisant directement avec Docusaurus, cela permet de mettre au m\xeame endroit tous mes sch\xe9mas as code, et donc de ne pas avoir \xe0 g\xe9rer diff\xe9rents outils pour g\xe9n\xe9rer mes images ou \xe0 importer des images stock\xe9es ailleurs.",date:"2023-05-11T00:00:00.000Z",formattedDate:"11 mai 2023",tags:[{label:"Docusaurus",permalink:"/blog/tags/docusaurus"},{label:"Mermaid",permalink:"/blog/tags/mermaid"}],readingTime:1.355,hasTruncateMarker:!1,authors:[{name:"Clainchoupi",url:"https://github.com/clainchoupi",imageURL:"https://avatars.githubusercontent.com/u/5754412",key:"pcla"}],frontMatter:{title:"Utiliser Mermaid avec Docusaurus",authors:["pcla"],tags:["Docusaurus","Mermaid"]}},l={authorsImageUrls:[void 0]},s=[{value:"Installer et utiliser le plugin Mermaid pour Docusaurus",id:"installer-et-utiliser-le-plugin-mermaid-pour-docusaurus",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Mermaid.js est une biblioth\xe8que open-source JavaScript qui permet de g\xe9n\xe9rer des diagrammes et des graphiques \xe0 partir de textes simples. En l'utilisant directement avec Docusaurus, cela permet de mettre au m\xeame endroit tous mes sch\xe9mas as code, et donc de ne pas avoir \xe0 g\xe9rer diff\xe9rents outils pour g\xe9n\xe9rer mes images ou \xe0 importer des images stock\xe9es ailleurs."),(0,n.kt)("p",null,"Plus d'exemples dans la ",(0,n.kt)("a",{parentName:"p",href:"https://mermaid.js.org/intro/"},"documentation de Mermaid"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Quelques types de graphiques int\xe9ressants :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gitgraph Diagrams "),(0,n.kt)("li",{parentName:"ul"},"Flowcharts"),(0,n.kt)("li",{parentName:"ul"},"Pie charts"),(0,n.kt)("li",{parentName:"ul"},"Timelines")),(0,n.kt)("p",null,"Un exemple de GitGraph : "),(0,n.kt)("mermaid",{value:'%%{init: { \'logLevel\': \'debug\', \'theme\': \'base\', \'gitGraph\': {\'rotateCommitLabel\': true}} }%%\ngitGraph\n  commit id: "feat(api): ..."\n  commit id: "a"\n  commit id: "b"\n  commit id: "fix(client): .extra long label.."\n  branch c2\n  commit id: "feat(modules): ..."\n  commit id: "test(client): ..."\n  checkout main\n  commit id: "fix(api): ..."\n  commit id: "ci: ..."\n  branch b1\n  commit\n  branch b2\n  commit'}),(0,n.kt)("p",null,"Pour g\xe9n\xe9rer des graphs en live : ",(0,n.kt)("a",{parentName:"p",href:"https://mermaid.live"},"https://mermaid.live")," "),(0,n.kt)("h3",{id:"installer-et-utiliser-le-plugin-mermaid-pour-docusaurus"},"Installer et utiliser le plugin Mermaid pour Docusaurus"),(0,n.kt)("p",null,"Commencer par importer le plugin ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-mermaid")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install --save @docusaurus/theme-mermaid\n")),(0,n.kt)("p",null,"Dans le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"/docusaurus.config.js")," activer le mode Mermaid : "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"module.exports = {\n  markdown: {\n    mermaid: true,\n  },\n  themes: ['@docusaurus/theme-mermaid'],\n};\n")),(0,n.kt)("p",null,"Puis dans une page ajouter les balises Mermaid, et mettre le code de votre graphique. Ici pour l'image en d\xe9but d'article."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=""',title:'""'},'    ```mermaid\n        %%{init: { \'logLevel\': \'debug\', \'theme\': \'base\', \'gitGraph\': {\'rotateCommitLabel\': true}} }%%\n        gitGraph\n          commit id: "feat(api): ..."\n          commit id: "a"\n          commit id: "b"\n          commit id: "fix(client): .extra long label.."\n          branch c2\n          commit id: "feat(modules): ..."\n          commit id: "test(client): ..."\n          checkout main\n          commit id: "fix(api): ..."\n          commit id: "ci: ..."\n          branch b1\n          commit\n          branch b2\n          commit\n    ```\n')))}p.isMDXComponent=!0}}]);