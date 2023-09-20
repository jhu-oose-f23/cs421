"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[8565],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>m});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),s=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?t.createElement(f,l(l({ref:r},c),{},{components:a})):t.createElement(f,l({ref:r},c))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},938:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=a(7462),n=(a(7294),a(3905));const o={id:"sparkjava",title:"SparkJava",sidebar_label:"SparkJava"},l=void 0,i={unversionedId:"readings/wk4/sparkjava",id:"readings/wk4/sparkjava",title:"SparkJava",description:"We will be using a free and open source Java web application development framework called SparkJava for building our REST API.",source:"@site/docs/readings/wk4/sparkjava.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/sparkjava",permalink:"/cs421/docs/readings/wk4/sparkjava",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/sparkjava.md",tags:[],version:"current",frontMatter:{id:"sparkjava",title:"SparkJava",sidebar_label:"SparkJava"},sidebar:"tutorialSidebar",previous:{title:"Separation of Client and Server",permalink:"/cs421/docs/readings/wk4/api"},next:{title:"Lambda Expressions",permalink:"/cs421/docs/readings/wk4/lambda"}},p={},s=[{value:"Run a server locally!",id:"run-a-server-locally",level:2}],c={toc:s};function u(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We will be using a free and open source Java web application development framework called ",(0,n.kt)("a",{parentName:"p",href:"http://sparkjava.com/"},"SparkJava")," for building our REST API."),(0,n.kt)("p",null,"You need to add the following to the ",(0,n.kt)("inlineCode",{parentName:"p"},"dependencies")," clause of ",(0,n.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.sparkjava:spark-core:2.9.3'\n")),(0,n.kt)("h2",{id:"run-a-server-locally"},"Run a server locally!"),(0,n.kt)("p",null,"Running SparkJava is as easy as follows!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static spark.Spark.*;\n\npublic class ApiServer {\n  public static void main(String[] args) {\n    final int PORT_NUM = 7000;\n    port(PORT_NUM);\n    get("/", (req, res) -> "Hello World");\n  }\n}\n')),(0,n.kt)("p",null,"After running the ",(0,n.kt)("inlineCode",{parentName:"p"},"ApiServer"),", point your browser to ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:7000/"},(0,n.kt)("inlineCode",{parentName:"a"},"http://localhost:7000/"))," to see the following message!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"Hello World!\n")),(0,n.kt)("p",null,"Notice the following statement"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'get("/", (req, res) -> "Hello World");\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"->")," is part of ",(0,n.kt)("strong",{parentName:"p"},"Java's Lambda")," syntax. This syntax may be strange to you! If that is the case, read the next section (otherwise skip it)."))}u.isMDXComponent=!0}}]);