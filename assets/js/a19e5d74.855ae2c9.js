"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[3227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,h=m["".concat(p,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={id:"html",title:"HTML",sidebar_label:"HTML"},o=void 0,s={unversionedId:"readings/wk6/html",id:"readings/wk6/html",title:"HTML",description:"Tags and attributes are the basis of an HTML page. Tags are used to indicate or mark up the start and end of an HTML element. Tags come inside",source:"@site/docs/readings/wk6/html.md",sourceDirName:"readings/wk6",slug:"/readings/wk6/html",permalink:"/cs421/docs/readings/wk6/html",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk6/html.md",tags:[],version:"current",frontMatter:{id:"html",title:"HTML",sidebar_label:"HTML"},sidebar:"tutorialSidebar",previous:{title:"Wireframe",permalink:"/cs421/docs/readings/wk6/wireframe"},next:{title:"CSS",permalink:"/cs421/docs/readings/wk6/css"}},p={},l=[{value:"Main parts of an HTML page",id:"main-parts-of-an-html-page",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tags and attributes are the basis of an HTML page. Tags are used to indicate or mark up the start and end of an HTML element. Tags come inside\nangle brackets. To close a tag, we need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," before the tag name. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," is a tag used to produce a heading title with large size on the page, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>This is a large title</h1>"),". Tags can be nested, but must be closed in order in which they were opened, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<strong><em>This is an important note!</em></strong>")),(0,r.kt)("p",null,"Attributes go inside tags and provide additional information/settings about the tag, e.g. in ",(0,r.kt)("inlineCode",{parentName:"p"},'<img src="mydog.jpg" alt="A photo of my dog."></img>'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," is the tag and ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")," are its attributes: ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," is the location of the image to be loaded into the page and ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")," specifes an alternate peice of text in case the image cannot be loaded. You can open and close a tag at once: e.g. in ",(0,r.kt)("inlineCode",{parentName:"p"},'<img src="mydog.jpg" alt="A photo of my dog." />')),(0,r.kt)("h3",{id:"main-parts-of-an-html-page"},"Main parts of an HTML page"),(0,r.kt)("p",null,"An HTML page typically starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"<!DOCTYPE html>")," indicating that this is a HTML5 (i.e. version 5) page. An HTML page can be broken down into two main parts: ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),". The title of page is set in the head part, and it contains meta data about the page and information that can be useful for search engines. ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),", not so surprisingly, contains the page content. This is what we had for front page of ",(0,r.kt)("inlineCode",{parentName:"p"},"JBApp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <title>$title</title>\n</head>\n<body>\n<h1>Welcome to JBApp</h1>\n<div class="divContents indexLinkWrapper">\n    <p><a class="content indexLink" href="/employers">Show all employers</a></p>\n    <p><a class="content indexLink" href="/addemployer">Add an employer</a></p>\n</div>\n</body>\n</html>\n')),(0,r.kt)("admonition",{title:"Learn HTML",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To learn more on HTML, ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},"MDN web docs")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/html/"},"w3schools")," are great resources.")))}c.isMDXComponent=!0}}]);