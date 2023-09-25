"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[7588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,b=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return r?i.createElement(b,a(a({ref:t},u),{},{components:r})):i.createElement(b,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const o={id:"sissearchappgithub",title:"Github",sidebar_label:"Github"},a=void 0,s={unversionedId:"readings/wk1/sissearchappgithub",id:"readings/wk1/sissearchappgithub",title:"Github",description:"GitHub is a website that stores Git repositories on the internet to facilitate the collaboration that Git allows for. We will be using GitHub in this class. If you don't already have an account, please make one by visiting github.com/join",source:"@site/docs/readings/wk1/sissearchappgithub.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/sissearchappgithub",permalink:"/cs421/docs/readings/wk1/sissearchappgithub",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk1/sissearchappgithub.md",tags:[],version:"current",frontMatter:{id:"sissearchappgithub",title:"Github",sidebar_label:"Github"},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/cs421/docs/readings/wk1/sissearchappgit"},next:{title:"Object-Oriented Programming",permalink:"/cs421/docs/readings/wk2/oop"}},p={},l=[],u={toc:l};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"GitHub is a website that stores Git repositories on the internet to facilitate the collaboration that Git allows for. We will be using GitHub in this class. If you don't already have an account, please make one by visiting github.com/join"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},'If you have NOT already done the "Github form", please ',(0,n.kt)("a",{parentName:"p",href:"https://forms.gle/ZFC8x6QZU62Qoj9e7"},"fill it out")," to let us know what your GitHub username is. We need it to setup repositories for your homework and project.")),(0,n.kt)("p",null,"Let's put our repository on GitHub for the world to see! Go to GitHub, login, and then create a new repository:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1843).Z,width:"900",height:"1025"})),(0,n.kt)("p",null,"Once the repository is created, GitHub provides a few useful suggestions to start working with it."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7675).Z,width:"1535",height:"859"})),(0,n.kt)("p",null,"Since we already have a local repository, we follow the instructions for \"...or push an existing repository from the command line.\" For the GitHub repository I've created, this is the command I must use (the GitHub repo URL will be different for you). In the Intellij's terminal while you are in ",(0,n.kt)("inlineCode",{parentName:"p"},"sis-search-app")," directory, type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git remote add origin https://github.com/darvishdarab/class-search-app.git\ngit branch -M main\ngit push -u origin main\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The reposirty's url would be different for you based on your github username")),(0,n.kt)("p",null,"Next, refresh the page on GitHub. You must see the content of class-search-app folder uploaded to your GitHub repository."),(0,n.kt)("p",null,"In your GitHub repository, you can click on any of the files to open it. There is even a built-in editor."),(0,n.kt)("p",null,"Moreover, there is a list of all commits (similar to git log but fancier!)."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Intellij offers a nice integration with Github. In Intellij, we could do all the git operation we did above and in the ",(0,n.kt)("a",{parentName:"p",href:"sissearchappgit"},"previous part")," using the Intellij's ",(0,n.kt)("inlineCode",{parentName:"p"},"Git")," menu. Even better, we could go to ",(0,n.kt)("inlineCode",{parentName:"p"},"VCS")," menu -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Import in Version Control")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Share project on GitHub")," to push our app in one go into Github!")))}c.isMDXComponent=!0},1843:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/sissearchappgithub1-19ac11b9bd09e3e0253acfa18c70a747.png"},7675:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/sissearchappgithub2-cf8ca7f8ace9dbbc5d6f5500d3671049.png"}}]);