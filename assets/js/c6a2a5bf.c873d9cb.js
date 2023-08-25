"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[4288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={id:"client_server",title:"Client-Server Architecture",sidebar_label:"Client-Server Architecture"},s=void 0,o={unversionedId:"readings/wk1/client_server",id:"readings/wk1/client_server",title:"Client-Server Architecture",description:"A client-server is a popular software design architecture which, at an abstract level, breaks down a software into two parts: client-side and server-side.",source:"@site/docs/readings/wk1/client_server.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/client_server",permalink:"/cs421/docs/readings/wk1/client_server",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk1/client_server.md",tags:[],version:"current",frontMatter:{id:"client_server",title:"Client-Server Architecture",sidebar_label:"Client-Server Architecture"},sidebar:"tutorialSidebar",previous:{title:"Product Discovery",permalink:"/cs421/docs/readings/wk1/productdiscovery"},next:{title:"API",permalink:"/cs421/docs/readings/wk1/api"}},l={},c=[{value:"An example of Client-Server Application",id:"an-example-of-client-server-application",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A client-server is a popular ",(0,n.kt)("strong",{parentName:"p"},"software design architecture")," which, at an abstract level, breaks down a software into two parts: client-side and server-side."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(2842).Z,width:"2440",height:"988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"client-side")," (or simply, client) is the application that runs on the end-user computer; it provides a user-interface (",(0,n.kt)("strong",{parentName:"p"},"UI"),") that handles what the application feels and looks like and how it interacts with end-user. It may employ and consume resources on the user's machine (computing device) such as temporary and local storage, etc. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"server-side")," (or simply, server) is the application that receives requests from the clients, and contains the logic to send the appropriate data back to the client. Instead of user-interface, the server usually has an application programming interface (",(0,n.kt)("strong",{parentName:"p"},"API"),"). Moreover, the server often includes a ",(0,n.kt)("strong",{parentName:"p"},"database"),", which will persistently store all of the data for the application."))),(0,n.kt)("p",null,"As long as your software application adheres to the client-server architecture (i.e. a client can send and receive data to an API on a server) you are free to build whatever user interface you want on whatever platform you want. This is advantageous as modern software application are expected to be available across multiple platforms and provide a consistent experience across devices."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1191).Z,width:"898",height:"805"})),(0,n.kt)("p",null,"Let\u2019s make all of this a bit more concrete, by following an example of the main steps that happen when a you access your grades on JHU's Student Information System (SIS). "),(0,n.kt)("h2",{id:"an-example-of-client-server-application"},"An example of Client-Server Application"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(9926).Z,width:"1737",height:"1367"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You visit sis.jhu.edu using an internet browser like Chrome on any device that provides internet browsing. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Following your ",(0,n.kt)("em",{parentName:"p"},"visit"),', a web-page will be displayed in your browser. This web-page is the user-interface of SIS and it constitutes the "client" side of the SIS application. The client application allows you to interact with the SIS server (which, for the intent of this example, may be a physical computer at one of JHU\'s campuses).')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the client-side, you enter your username and password to log into SIS. As this stage, the client application (web-page where you put your username and password) will send (an authentication) ",(0,n.kt)("strong",{parentName:"p"},"request")," to the (SIS) server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Your (authentication) request travels across the internet to the SIS server. The server, which is actively ",(0,n.kt)("em",{parentName:"p"},"listening")," for requests from ",(0,n.kt)("strong",{parentName:"p"},"all users"),", receives your request and triggers a ",(0,n.kt)("strong",{parentName:"p"},"response"),". ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The response process on the server makes a ",(0,n.kt)("strong",{parentName:"p"},"database query")," to check your login credentials. This database may contain other information about you such as your grades.\nThe database query is executed, and the database sends the requested data back to the server. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The server receives the data that it needs from the database, and it is now ready to construct and send its response back to the client (you). In this case, the response would be the ",(0,n.kt)("em",{parentName:"p"},"privilege")," to access SIS (assuming your login credential were accredited). ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The response travels across the internet, back to your computer. Your browser receives the response and uses that information to create and render the ",(0,n.kt)("strong",{parentName:"p"},"view")," that you ultimately see after successfully logging in. "))),(0,n.kt)("admonition",{title:'"Question"',type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Can you map the request-response cycle for viewing your grades on SIS, after you have successfully logged in?")))}u.isMDXComponent=!0},2842:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png"},1191:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/client-server-2-30410be736c83fca936de8ccbd59561c.png"},9926:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sis-6dd90d11cfe654ab59d7ad6d65630497.png"}}]);