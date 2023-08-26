"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,u=f["".concat(p,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(u,a(a({ref:t},c),{},{components:n})):r.createElement(u,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={id:"isp",title:"Interface segregation principle",sidebar_label:"Interface Segregation Principle"},a=void 0,s={unversionedId:"readings/wk2/isp",id:"readings/wk2/isp",title:"Interface segregation principle",description:"A class that implements an interface shouldn't be forced to implement methods it does not use.",source:"@site/docs/readings/wk2/isp.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/isp",permalink:"/cs421/docs/readings/wk2/isp",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk2/isp.md",tags:[],version:"current",frontMatter:{id:"isp",title:"Interface segregation principle",sidebar_label:"Interface Segregation Principle"}},p={},l=[],c={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Principle",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A class that implements an interface shouldn't be forced to implement methods it does not use.")),(0,i.kt)("p",null,"The Interface Segregation Principle is, in a way, the same as Single Responsibility Principle, only for interfaces. It essentially says: "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An interface should describe one set of behaviors. In other words, ",(0,i.kt)("strong",{parentName:"p"},"keep interfaces small"),'; break down a "fat" interface into several more refined interfaces.  ')),(0,i.kt)("p",null,"Here is an example: imagine your software application integrates with AWS cloud computing provider. You came up with the following design, inspired by the ",(0,i.kt)("a",{parentName:"p",href:"/cs421/docs/readings/wk2/ocp"},"Open/Closed Principle"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(151).Z,width:"287",height:"347"})),(0,i.kt)("p",null,"You thought with this design your application is open for extension (when time comes to add another cloud computing provider) and close for modification (since you would not have to mess with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Amazon")," class that implements AWS, your current cloud computing provider). As you have anticipated, in later iterations, you add support for Dropbox to your application. The class diagram then looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2453).Z,width:"390",height:"347"})),(0,i.kt)("p",null,"The problem, however, is that Dropbox does not provide the broad spectrum of behaviours declared in your ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudProvider"),". So, if a client calls ",(0,i.kt)("inlineCode",{parentName:"p"},"getCDNAddress"),(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," on an object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Dropbox")," for instance, you would have to let them know this feature is not supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"Dropbox"),".",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," "),(0,i.kt)("p",null,"A better design would look like the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9126).Z,width:"947",height:"332"})),(0,i.kt)("p",null,"In this example, one bloated interface (",(0,i.kt)("inlineCode",{parentName:"p"},"CloudProvider"),") is broken down into a set of more granular interfaces (",(0,i.kt)("inlineCode",{parentName:"p"}," CloudHostingProvider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CDNProvider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudStorageProvider"),"). "),(0,i.kt)("p",null,"Similar to the Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the adverse effect of required changes by splitting the software into multiple, independent parts. "),(0,i.kt)("admonition",{title:"Case in point",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"By following this principle, you prevent bloated interfaces that define methods for multiple responsibilities. As explained in the Single Responsibility Principle, you should avoid interfaces with multiple responsibilities because they change often and make your software hard to maintain.")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"CDN is short for ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Content_delivery_network"},"Content Delivery Network"),".",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"A common approach is to throw ",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/UnsupportedOperationException.html"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsupportedOperationException")),".",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/isp01-9bf5a0b1fd1dc862726574ce5bb2b306.png"},2453:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/isp02-afe39bf7b88949823c1bc6fb32a6bf68.png"},9126:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/isp03-57e9d994b666ca09f81aa18994bd843b.png"}}]);