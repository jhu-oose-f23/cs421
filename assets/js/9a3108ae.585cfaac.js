"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[2271],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,b=h["".concat(p,".").concat(d)]||h[d]||m[d]||i;return a?r.createElement(b,o(o({ref:t},l),{},{components:a})):r.createElement(b,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={id:"observer",title:"Observer",sidebar_label:"Observer"},o=void 0,s={unversionedId:"readings/wk3/observer",id:"readings/wk3/observer",title:"Observer",description:'Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they\'re "observing."',source:"@site/docs/readings/wk3/observer.md",sourceDirName:"readings/wk3",slug:"/readings/wk3/observer",permalink:"/cs421/docs/readings/wk3/observer",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk3/observer.md",tags:[],version:"current",frontMatter:{id:"observer",title:"Observer",sidebar_label:"Observer"},sidebar:"tutorialSidebar",previous:{title:"Iterator",permalink:"/cs421/docs/readings/wk3/iterator"}},p={},c=[],l={toc:c};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Observer",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Observer")," is a ",(0,n.kt)("em",{parentName:"p"},"behavioral")," design pattern that lets you define a ",(0,n.kt)("em",{parentName:"p"},"subscription")," mechanism to notify multiple objects about any ",(0,n.kt)("em",{parentName:"p"},"events"),' that happen to the object they\'re "observing."')),(0,n.kt)("p",null,'Given the COVID-19 crisis, this example seems relevant: suppose you are interested in purchasing "disinfecting wipes" but it is out of stock. You would want to keep an eye out for when it becomes available again; you may routinely check the stocks (by visiting your local store or your favorite online shopping website). This will require a significant time, commitment and effort on your side. A better strategy is to ',(0,n.kt)("em",{parentName:"p"},"subscribe")," (if that option is available) to your provider subscription service and ask to be ",(0,n.kt)("em",{parentName:"p"},"notified")," when the item of interest becomes in-stock."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Observer design pattern is also called as publish-subscribe pattern. It allows you get ",(0,n.kt)("em",{parentName:"p"},"notified")," whenever there is a change in the ",(0,n.kt)("em",{parentName:"p"},"state")," of an object you are interested in. ")),(0,n.kt)("p",null,"In observer pattern, the object that watches on the state of another object is called ",(0,n.kt)("strong",{parentName:"p"},"Observer")," and the object that is being watched is called ",(0,n.kt)("strong",{parentName:"p"},"Subject"),". "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In the example above, you (i.e., the customer) is the ",(0,n.kt)("em",{parentName:"p"},"observer")," aka subscriber. The store, which is the object that offers some interesting state to its observers/subscribers, is the ",(0,n.kt)("em",{parentName:"p"},"subject")," aka publisher.")),(0,n.kt)("p",null,"This pattern is widely applied to Graphical User Interface (GUI) components through ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/uiswing/events/intro.html"},"Action/Event Listener"),". The idea is to consider each GUI component a ",(0,n.kt)("em",{parentName:"p"},"subject")," where different ",(0,n.kt)("em",{parentName:"p"},"events")," (e.g. clicking on) would send a notification to an observer class (typically called an Event Listener) which would perform different ",(0,n.kt)("em",{parentName:"p"},"actions")," based on the occurrence of an event.",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,n.kt)("admonition",{title:"GUI Button Example",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Let's take the exampe of a button in a GUI that supports different actions such as right-clicking, drag/drop etc. The button itself is the subject (aka publisher) and the class(es) that implement functionality for those action events are observers (aka subscribers). The action events (e.g. right-clicking on the button) is the state of interest for which the observer(s) have subscribed.")),(0,n.kt)("p",null,"Java facilitates implementing Observer pattern through ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Observer.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Observable")," class")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Observable.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Observer")," interface"),".",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," The ",(0,n.kt)("em",{parentName:"p"},"subject")," class must ",(0,n.kt)("em",{parentName:"p"},"extend")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Observable")," and observers must implement ",(0,n.kt)("inlineCode",{parentName:"p"},"Observer"),". Here is a simplified UML diagram that represents the Observer pattern in Java:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7761).Z,width:"978",height:"540"})),(0,n.kt)("p",null,"The use of ",(0,n.kt)("inlineCode",{parentName:"p"},"Observer")," (as a separate interface with just one method) is in line with the Interface Segregation Principle. Moreover, it is in accordance to the Open/Closed principle; you can add multiple new types of observes and add them to subject (observable) without minimized risk of breaking the application. "),(0,n.kt)("admonition",{title:"When to use this pattern?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand (or changes dynamically).")),(0,n.kt)("admonition",{title:"Advantage",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Observers are ",(0,n.kt)("em",{parentName:"p"},"loosely coupled")," to subject since the Subject knows nothing about them, other than that they implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"Observer")," interface.")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Java's ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/EventListener.html"},(0,n.kt)("inlineCode",{parentName:"a"},"EventListener"))," in ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/swing/index.html"},"Swing")," implements the Observer pattern.",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"Observable")," class and the ",(0,n.kt)("inlineCode",{parentName:"li"},"Observer")," interface ",(0,n.kt)("a",{parentName:"li",href:"https://bugs.openjdk.java.net/browse/JDK-8154801"},"have been ",(0,n.kt)("strong",{parentName:"a"},"deprecated")," in Java 9"),". This does not mean the Observer Pattern is depreciated! The pattern is extremely useful. The implementation of the pattern in Java, however, was not ideal (lack of thread safety, not Serializable, limited event model, ...). So, as a Java developer you may want to consider implementing the pattern yourself or using other mechanisims in Java (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"java.beans"),") for a notification model. For more info, see ",(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/46380073/observer-is-deprecated-in-java-9-what-should-we-use-instead-of-it"},"this")," stackoverflow thread.",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},7761:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/observer01-d761214616e4bdbf7a7946f4121a9b10.png"}}]);