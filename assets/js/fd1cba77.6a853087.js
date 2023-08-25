"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[8458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,y=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"addemployer",title:"Add an employer",sidebar_label:"Add an employer"},i=void 0,l={unversionedId:"readings/wk5/addemployer",id:"readings/wk5/addemployer",title:"Add an employer",description:"Now, let's implement a new view to facilitate adding employers. Add the following route to Main.main:",source:"@site/docs/readings/wk5/addemployer.md",sourceDirName:"readings/wk5",slug:"/readings/wk5/addemployer",permalink:"/cs421/docs/readings/wk5/addemployer",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk5/addemployer.md",tags:[],version:"current",frontMatter:{id:"addemployer",title:"Add an employer",sidebar_label:"Add an employer"}},p={},d=[],m={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now, let's implement a new view to facilitate adding employers. Add the following route to ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.main"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'get("/addemployer", (req, res) -> {\n    Map<String, Object> model = new HashMap<String, Object>();\n    return new ModelAndView(model, "public/addemployer.vm");\n}, new VelocityTemplateEngine());\n')),(0,a.kt)("p",null,"Note we already implemented a ",(0,a.kt)("a",{parentName:"p",href:"../wk4/post"},"HTTP post ",(0,a.kt)("inlineCode",{parentName:"a"},"employers")," endpoint")," to add new employers. The following is the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"addemployer.vm")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'#set($title = "Add employer")\n#parse("public/top.vm")\n\n<h2>Add a new employer</h2>\n<form action="/employers" method="post" >\n    <div>\n        <label for="name">Name: </label>\n        <input type="text" name="name" placeholder="name" id="name" required>\n    </div>\n    <div>\n        <label for="sector">Sector: </label>\n        <input type="text" name="sector" placeholder="sector" id="sector" />\n    </div>\n    <div>\n        <label for="summary">Summary: </label>\n        <input type="text" name="summary" placeholder="summary" id="summary" />\n    </div>\n    <br />\n    <input type="submit" value="Submit" id="submitAddEmployer" />\n</form>\n\n#parse("public/bottom.vm")\n')),(0,a.kt)("p",null,"Now, point your browser to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:7000/"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:7000/")),' and click on "Add an employer". Fill the form and hit ',(0,a.kt)("inlineCode",{parentName:"p"},"Submit"),". If things work, you should receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," reponse back which is a confirmation that the new employer was added successfully to the ",(0,a.kt)("inlineCode",{parentName:"p"},"employers")," table."),(0,a.kt)("admonition",{title:"Controller Code",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You might have noticed our ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.main()")," is getting very long. In general, ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.main()"),' is not the best place to list and process all API requests. It would be sensible to move the "controller" code somewhere else. One viable approach is to introduce a new Java package named ',(0,a.kt)("inlineCode",{parentName:"p"},"controller")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/java")," and create class(es) that contain controller code. Then, we just receive http requests in ",(0,a.kt)("inlineCode",{parentName:"p"},"Main"),", but then we ",(0,a.kt)("em",{parentName:"p"},"route")," each request to a suitable controller class for actual processing. Finally, you may want to rename the ",(0,a.kt)("inlineCode",{parentName:"p"},"Main")," class to something more meaningful like ",(0,a.kt)("inlineCode",{parentName:"p"},"Server"),"!")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To get more details on Apache Velocity, refer to its ",(0,a.kt)("a",{parentName:"p",href:"http://velocity.apache.org/engine/1.7/user-guide"},"user guide"),".")))}c.isMDXComponent=!0}}]);