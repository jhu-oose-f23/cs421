"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[7070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={id:"factory",title:"Factory",sidebar_label:"Factory"},i=void 0,c={unversionedId:"readings/wk3/factory",id:"readings/wk3/factory",title:"Factory",description:"Factory is a creational design pattern that allows you replace direct object construction calls (using the new operator) with call to a special factory method.",source:"@site/docs/readings/wk3/factory.md",sourceDirName:"readings/wk3",slug:"/readings/wk3/factory",permalink:"/cs421/docs/readings/wk3/factory",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk3/factory.md",tags:[],version:"current",frontMatter:{id:"factory",title:"Factory",sidebar_label:"Factory"}},s={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Factory",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Factory")," is a ",(0,o.kt)("em",{parentName:"p"},"creational")," design pattern that allows you replace direct object construction calls (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," operator) with call to a special ",(0,o.kt)("em",{parentName:"p"},"factory")," method.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,o.kt)("p",null,"You will see this pattern in the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Database_Connectivity"},"JDBC")," API; ",(0,o.kt)("inlineCode",{parentName:"p"},"DriverManager.getConnection")," is a factory method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'hl_lines="6"',hl_lines:'"6"'},'import java.sql.*;\n\npublic class Main {\n  public static void main(String[] args) throws SQLException {\n    final String URI = "jdbc:sqlite:./Store.db"; \n    Connection conn = DriverManager.getConnection(URI);\n\n    // do something with the connection\n\n    conn.close();\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2690).Z,width:"894",height:"112"})),(0,o.kt)("p",null,"In the example of JDBC API, ",(0,o.kt)("inlineCode",{parentName:"p"},"DriverManager")," creates ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," objects (instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," keyword with ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection"),"). So why would we want this? Why not use a constructor to make ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," objects? "),(0,o.kt)("p",null,"Well, under the hood, the ",(0,o.kt)("inlineCode",{parentName:"p"},"DriverManager")," will find the SQLite driver (from the ",(0,o.kt)("inlineCode",{parentName:"p"},"URI"),") and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," method of the (SQLite) driver which in turn will return a concrete implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," class (that is, a subclass of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," class that is specialized to work with SQLite). This eliminates the need for you to specify concrete implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection"),' in your code. "How so?" you ask! Well, read on!'),(0,o.kt)("p",null,"Let's assume the SQLite JDBC driver has a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLiteConnection")," which implements ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection"),(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"; we could write"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Connection conn = new SQLiteConnection("./Store.db");\n')),(0,o.kt)("p",null,'The code above would require us to "know" about (existence and the use of) ',(0,o.kt)("inlineCode",{parentName:"p"},"SQLiteConnection"),', to "import" it in our source code, properly call it (with required arguments), etc. ',(0,o.kt)("inlineCode",{parentName:"p"},"SQLiteConnection"),' is then a "dependency" in our code. Using the ',(0,o.kt)("inlineCode",{parentName:"p"},"DriverManager.getConnection")," eliminates this dependency. Moreover, since all ",(0,o.kt)("inlineCode",{parentName:"p"},"DriverManager.getConnection")," takes is a string (",(0,o.kt)("inlineCode",{parentName:"p"},"URI"),"), we can connect to a different database during runtime. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Using Factory pattern, essentially, the client code asks the ",(0,o.kt)("em",{parentName:"p"},"factory")," to make an implementation, and the factory does so. The client code does not decide which implementation to make and therefore it is not coupled to it.")),(0,o.kt)("p",null,"Factory is one of the most widely used java design pattern. Here is another example, again from JDBC:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Statement statement = connection.createStatement();\n")),(0,o.kt)("p",null,"This lets the specific JDBC driver (e.g. SQLite driver) return a concrete implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Statement")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"connection"),". You can just declare it against ",(0,o.kt)("inlineCode",{parentName:"p"},"java.sql.Statement")," interface. "),(0,o.kt)("admonition",{title:"When to use this pattern?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use the Factory pattern when you want to provide users of your library or framework with a way to extend its internal components, allowing your clients to decouple their application from concrete implementations of your framework.")),(0,o.kt)("admonition",{title:"Advantage",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Factory pattern removes the instantiation of actual implementation classes from client code. Factory pattern makes client code more robust, less coupled and easy to extend. Imagine properly instantiating an object from a class might depend on creating many other objects first and/or getting certain detialed setting rights before being able to do the instantiation. This is something that must not be left to the client code, because it might not get those right or even lack the knowledge to do them. The factory can serve as a knowledge center for producing objects. Even if it can be argued that the client code can get all those preliminaries, settings and dependencies right and do the instantiation itself, factory pattern moves all those into one separate place preventing duplicate code, in case the client does the instantiation multiple times. Read about ",(0,o.kt)("a",{parentName:"p",href:"../wk2/refactoring"},"duplicate code")," being a ",(0,o.kt)("em",{parentName:"p"},"code smell"),".")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Factory, Factory Method and Abstract Factory are all design patterns with subtle differences; the underlying idea of all is to let other objects make objects for you.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"I don't know if there is really a ",(0,o.kt)("inlineCode",{parentName:"li"},"SQLiteConnection")," class but let's assume it is the case for the sake of the example.",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},2690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/factory01-75d53d9216e6d905f6a58fe7326930df.png"}}]);