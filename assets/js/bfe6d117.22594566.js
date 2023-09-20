"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[9853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"api",title:"Separation of client and server",sidebar_label:"Separation of Client and Server"},o=void 0,s={unversionedId:"readings/wk4/api",id:"readings/wk4/api",title:"Separation of client and server",description:"We have established that our interest lies in software solutions that conform to the Client-Server architecture. If you are still not so clear on Client-Server model, re-read Client-Server section as well as this wikipedia article.",source:"@site/docs/readings/wk4/api.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/api",permalink:"/cs421/docs/readings/wk4/api",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/api.md",tags:[],version:"current",frontMatter:{id:"api",title:"Separation of client and server",sidebar_label:"Separation of Client and Server"}},l={},p=[{value:"What is HTTP?",id:"what-is-http",level:2},{value:"What is RESTful API?",id:"what-is-restful-api",level:2},{value:"What is API Endpoint?",id:"what-is-api-endpoint",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have established that our interest lies in software solutions that conform to the Client-Server architecture. If you are still not so clear on Client-Server model, re-read ",(0,a.kt)("a",{parentName:"p",href:"../wk1/client_server"},"Client-Server")," section as well as this ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model"},"wikipedia")," article."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2842).Z,width:"2440",height:"988"})),(0,a.kt)("p",null,"A common practice to separate the Client and Server is ",(0,a.kt)("strong",{parentName:"p"},"Representational State Transfer"),", or ",(0,a.kt)("strong",{parentName:"p"},"REST")," architecture style.\nIn this style, the implementation of the client and the server are done independently without each knowing about the other. This means that the code on the client/server side can be changed at any time without affecting the other side. "),(0,a.kt)("admonition",{title:"RESTful",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"REST-compliant systems, often called RESTful systems.")),(0,a.kt)("admonition",{title:"REST is stateless!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"On important characterstic of RESTful systems is that they are stateless. In the Client-Server architecture, stateless means the server does not need to know anything about what state the client is in and vice versa. ")),(0,a.kt)("p",null,'So then how does client and server collaborate (communicate)? They do so through sending "',(0,a.kt)("strong",{parentName:"p"},"messages"),'" to one another. The client sends a ',(0,a.kt)("em",{parentName:"p"},"request")," message and the server replies with a ",(0,a.kt)("em",{parentName:"p"},"response")," message. Each request message sent by the client must be self-contained: ",(0,a.kt)("em",{parentName:"p"},"Statelessness of REST means the server and the client must understand any message received, without seeing previous messages.")," For more info on REST, read ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"this"),"."),(0,a.kt)("h1",{id:"communication-between-client-and-server"},"Communication between Client and Server"),(0,a.kt)("p",null,"As long as each side knows what format of messages to send to the other, they can communicate with one another.\nThe messages send in between are generally categorized into ",(0,a.kt)("strong",{parentName:"p"},"request")," and ",(0,a.kt)("strong",{parentName:"p"},"response")," messages. And, the most common ",(0,a.kt)("strong",{parentName:"p"},"protocol")," for communication is ",(0,a.kt)("strong",{parentName:"p"},"HTTP"),"."),(0,a.kt)("h2",{id:"what-is-http"},"What is HTTP?"),(0,a.kt)("p",null,"HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet."),(0,a.kt)("p",null,"There are 4 basic HTTP ",(0,a.kt)("em",{parentName:"p"},"verbs")," (operation) we use in requests to interact with server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GET")," \u2014 retrieve a specific resource (by id) or a collection of resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"POST")," \u2014 create a new resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PUT")," \u2014 update a specific resource (by id)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DELETE")," \u2014 remove a specific resource by id")),(0,a.kt)("p",null,"A HTTP request, in addition to an HTTP verb, typically consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("em",{parentName:"li"},"header"),", which allows the client to pass along information about the request"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("em",{parentName:"li"},"path")," to a resource"),(0,a.kt)("li",{parentName:"ul"},"an optional message ",(0,a.kt)("em",{parentName:"li"},"body")," containing data")),(0,a.kt)("h2",{id:"what-is-restful-api"},"What is RESTful API?"),(0,a.kt)("p",null,"Application Program Interface (API) permits the interaction between two systems. A RESTful API is an API that conforms to REST style and establishes what functionalities the server provides to the client and how it provides them. "),(0,a.kt)("h2",{id:"what-is-api-endpoint"},"What is API Endpoint?"),(0,a.kt)("p",null,"HTTP requires data to be transferred from one point to another over the network.\nAn API endpoint is the point of entry in a communication channel when client and server interacting."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We will next develop a few API endpoints for MyBooksApp. But first, we need a ",(0,a.kt)("em",{parentName:"p"},"framework")," to help with the implementation!")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'After you finish all the "RESTful API" section readings, if you want to have a practical overview of http (and its methods) and REST, this ',(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iYM2zFP3Zn0"},"video")," and this ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Q-BpqyOT3a8"},"one")," do a good job. Note though that some of their contents are out of the scope of our class.")))}d.isMDXComponent=!0},2842:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png"}}]);