"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[2e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"dao",title:"CRUD operations in Data Access Object (DAO)",sidebar_label:"CRUD operations in data access Object (DAO)"},i=void 0,s={unversionedId:"readings/wk4/dao",id:"readings/wk4/dao",title:"CRUD operations in Data Access Object (DAO)",description:"CRUD stands for create, read, update, and delete. It refers to the common tasks you want to carry out on a database. Data access object (DAO) is a design pattern that follows high cohesion (and single responsibilty) principle and is used to abstract away data persistence operations from the rest of the application. You can read further about it here.",source:"@site/docs/readings/wk4/dao.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/dao",permalink:"/cs421/docs/readings/wk4/dao",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/dao.md",tags:[],version:"current",frontMatter:{id:"dao",title:"CRUD operations in Data Access Object (DAO)",sidebar_label:"CRUD operations in data access Object (DAO)"}},c={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CRUD stands for create, read, update, and delete. It refers to the common tasks you want to carry out on a database. Data access object (DAO) is a design pattern that follows high cohesion (and single responsibilty) principle and is used to abstract away data persistence operations from the rest of the application. You can read further about it ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_access_object"},"here"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Quote from ",(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://en.wikipedia.org/wiki/Data_access_object#Advantages"},"Wikipedia")),(0,r.kt)("p",{parentName:"admonition"},"The primary advantage of using data access objects is the relatively simple and rigorous separation between two important parts of an application that can but should not know anything of each other, and which can be expected to evolve frequently and independently. Changing business logic can rely on the same DAO interface, while changes to persistence logic do not affect DAO clients as long as the interface remains correctly implemented.")),(0,r.kt)("p",null,"You can easily implement DAO pattern by hand, but many of the ORM technologies support DAO pattern within themselves. Next, we will look at one such API!"))}d.isMDXComponent=!0}}]);