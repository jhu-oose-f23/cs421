"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[4752],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(o),c=n,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return o?a.createElement(h,r(r({ref:t},d),{},{components:o})):a.createElement(h,r({ref:t},d))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6355:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const i={id:"hw3",title:"Homework 3"},r=void 0,s={unversionedId:"hw/hw3",id:"hw/hw3",title:"Homework 3",description:"* You are expected to work individually.",source:"@site/docs/hw/hw3.md",sourceDirName:"hw",slug:"/hw/hw3",permalink:"/cs421/docs/hw/hw3",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/hw/hw3.md",tags:[],version:"current",frontMatter:{id:"hw3",title:"Homework 3"}},l={},p=[{value:"Getting set up!",id:"getting-set-up",level:2},{value:"Task 1: Identify Classes and Propose a Design",id:"task-1-identify-classes-and-propose-a-design",level:2},{value:"Task 2: Go Above &amp; Beyond CRUD",id:"task-2-go-above--beyond-crud",level:2},{value:"Answer the followings:",id:"answer-the-followings",level:3},{value:"Task 3: Assess a Design",id:"task-3-assess-a-design",level:2},{value:"Submission",id:"submission",level:3}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"You are expected to work individually."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Due: Wednesday September 14th at 11pm EST (Baltimore time).")))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Before trying to make a submission for this homework, make sure you have successfully joined the course Github organization ",(0,n.kt)("inlineCode",{parentName:"p"},"jhu-oose-f22")," (check out the ",(0,n.kt)("inlineCode",{parentName:"p"},"Logistics")," page on the course website!)")),(0,n.kt)("h2",{id:"getting-set-up"},"Getting set up!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please go to ",(0,n.kt)("a",{parentName:"li",href:"https://classroom.github.com/a/bDYS7atP"},"https://classroom.github.com/a/bDYS7atP")),(0,n.kt)("li",{parentName:"ul"},"Login to your GitHub account and accept the invitation!"),(0,n.kt)("li",{parentName:"ul"},'A GitHub repository will be created for you that contains the starter code. The repository is "private" and you must not change it to a "public" one. You must not add any collaborators to it. Clone this repository locally. Open the folder in your favorite text editor and start working on it.')),(0,n.kt)("h2",{id:"task-1-identify-classes-and-propose-a-design"},"Task 1: Identify Classes and Propose a Design"),(0,n.kt)("p",null,"Assume you are designing an object-oriented software for a parking lot system. We have the following requirements/assumptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each parking lot is comprised of a number of parking spots"),(0,n.kt)("li",{parentName:"ul"},"Each vehicle must park in one spot"),(0,n.kt)("li",{parentName:"ul"},"There are three kinds of parking spots: small, medium and large for three types of vehicles motorcycles, cars and buses, respectively.",(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"A vehicle can only park in a parking spot of its size e.g., a motorbike would not be allowed to park in a medium or large spot and a car may only park in a medium spot.")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What classes/interfaces will be in your initial design? Just name them.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"How are these classes/interfaces are related to each other. You must draw a UML class diagram and link it from within your (answer) document."),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You do not need to list class fields and/or methods, but if thinking in details helps you with your design, feel free to include them as well!"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Defend your suggested design; that is justify why you went with the above design."))),(0,n.kt)("admonition",{title:"UML Drawing ",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"There are many (free) online tools that you can use to sketch a class diagram quickly, for instance: ",(0,n.kt)("a",{parentName:"p",href:"https://www.diagrams.net/"},"https://www.diagrams.net/")," ")),(0,n.kt)("admonition",{title:"Save Your Answers",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Write the answers in ",(0,n.kt)("inlineCode",{parentName:"p"},"task1.md")," file. If there are any other files that you want to submit (e.g. an image file), name those ",(0,n.kt)("inlineCode",{parentName:"p"},"task1")," as well (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"task1.jpg"),")")),(0,n.kt)("h2",{id:"task-2-go-above--beyond-crud"},"Task 2: Go Above & Beyond CRUD"),(0,n.kt)("p",null,"Assume we have the following paragraph describing a cooking app named ",(0,n.kt)("inlineCode",{parentName:"p"},"CookBook"),":"),(0,n.kt)("admonition",{title:"CookBook summary",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The goal of this project is to create a web application where we can view, remove, post, update and search among cooking recipes. The app allows its user to view, modify, and search for new cooking recipes using different filters e.g., title keywords, ingredients, recipe type, etc.")),(0,n.kt)("h3",{id:"answer-the-followings"},"Answer the followings:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Is ",(0,n.kt)("inlineCode",{parentName:"li"},"CookBook")," a CRUD application or does it go beyond CRUD? why or why not?"),(0,n.kt)("li",{parentName:"ol"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"CookBook")," is a CRUD app, come up with at least two ideas how to make this app go above and beyond CRUD?"),(0,n.kt)("li",{parentName:"ol"},"Try and see if you can come up with a novel idea to make ",(0,n.kt)("inlineCode",{parentName:"li"},"CookBook")," stand out from existing solutions? In other words, try to make ",(0,n.kt)("inlineCode",{parentName:"li"},"CookBook")," different from the other popular cooking apps, such as ",(0,n.kt)("a",{parentName:"li",href:"https://www.allrecipes.com/"},"Allrecipes")," or ",(0,n.kt)("a",{parentName:"li",href:"https://www.bigoven.com/"},"BigOven"),", that are already out there.",(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Note that part 2 and 3 of this task are open-ended questions. You might want to play around a little with existing cooking apps. Keep in mind though you do not need to spend lots of time on this, just try to get a sense of what existing solutions accomplish and then put your own spin into it. The goal here is not to come up with the next million-dollar business idea; rather just to practice brainstorming new ideas in the context of a real and tangible problem. ")))),(0,n.kt)("admonition",{title:"Save Your Answers ",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Save your answers in",(0,n.kt)("inlineCode",{parentName:"p"},"task2.md")," file.")),(0,n.kt)("h2",{id:"task-3-assess-a-design"},"Task 3: Assess a Design"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"InnovateNow")," is an entrepreneurial discovery and browsing platform. A basic core feature of ",(0,n.kt)("inlineCode",{parentName:"p"},"InnovateNow")," is to allow its users to post a short description of a novel idea they have to poll the general public and/or a select group of elite audience on their idea. The feedback is supposed to give the innovator a general basic idea whether their proposed idea has potential or not for further investigation. Innovators will also be able to collect demographic and customer information through the results of the polling."),(0,n.kt)("p",null,"Here is a design an engineer came up with for the software specification above:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(3525).Z,width:"631",height:"361"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Does this design meet the specification of the software system needed by ",(0,n.kt)("inlineCode",{parentName:"li"},"InnovateNow"),"? If there is any shortcoming or issues, please point them out. "),(0,n.kt)("li",{parentName:"ol"},'Does this design adhere to the good characteristics of "High Cohesion" and "Low Coupling"? Would you make any changes to increase cohesion or decrease coupling anywhere in this design? If so, where? If not, defend the current design.')),(0,n.kt)("admonition",{title:"Save Your Answers ",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Save your answers in",(0,n.kt)("inlineCode",{parentName:"p"},"task3.md")," file.")),(0,n.kt)("h3",{id:"submission"},"Submission"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://www.gradescope.com/courses/420577"},"Gradescope")),(0,n.kt)("li",{parentName:"ul"},"Click on Homework 3."),(0,n.kt)("li",{parentName:"ul"},"Select your homework repository."),(0,n.kt)("li",{parentName:"ul"},'Select the "main" branch.'),(0,n.kt)("li",{parentName:"ul"},"Hit Upload!")),(0,n.kt)("p",null,"The files in your GitHub repository are now submitted as your homework submission."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'Gradescope does not automatically fetch changes from your GitHub repository. If you make any updates to your repository, you must "resubmit" your work to Gradescope. (The resubmission process is exactly the same as the first submission.)')))}u.isMDXComponent=!0},3525:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/hw3_1-69d95d7a65a51fb1b5335c8d77d47089.jpg"}}]);