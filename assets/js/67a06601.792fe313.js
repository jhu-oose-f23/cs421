"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[2163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=o.createContext({}),l=function(e){var t=o.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return o.createElement(A.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,A=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(A,".").concat(u)]||c[u]||p[u]||i;return n?o.createElement(h,a(a({ref:t},f),{},{components:n})):o.createElement(h,a({ref:t},f))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={id:"bootstrap",title:"CSS Libraries/Frameworks",sidebar_label:"CSS Libraries/Frameworks"},a=void 0,s={unversionedId:"readings/wk6/bootstrap",id:"readings/wk6/bootstrap",title:"CSS Libraries/Frameworks",description:"Although you can do everything style-related using pure CSS, using a library/framework can make your life much easier as they come with lots of different pre-built designs, layouts, components, etc. that can readily be used out-of-the-box. Pure CSS gives you maximum flexibility and customization power on however you want to style your content, but the cost is the time/energy to do all the bits of the work on your own. Libraries/Frameworks on the other hand allow you to set up a nice looking front-end in matter of minutes but they decrease (to some extent) your customization flexibility.",source:"@site/docs/readings/wk6/bootstrap.md",sourceDirName:"readings/wk6",slug:"/readings/wk6/bootstrap",permalink:"/cs421/docs/readings/wk6/bootstrap",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk6/bootstrap.md",tags:[],version:"current",frontMatter:{id:"bootstrap",title:"CSS Libraries/Frameworks",sidebar_label:"CSS Libraries/Frameworks"},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/cs421/docs/readings/wk6/css"},next:{title:"Adding Logic using JavaScript",permalink:"/cs421/docs/readings/wk6/js"}},A={},l=[{value:"Bootstrap",id:"bootstrap",level:2},{value:"Getting started with Bootstrap",id:"getting-started-with-bootstrap",level:3}],f={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Although you can do everything style-related using pure CSS, using a library/framework can make your life much easier as they come with lots of different pre-built designs, layouts, components, etc. that can readily be used out-of-the-box. Pure CSS gives you maximum flexibility and customization power on however you want to style your content, but the cost is the time/energy to do all the bits of the work on your own. Libraries/Frameworks on the other hand allow you to set up a nice looking front-end in matter of minutes but they decrease (to some extent) your customization flexibility. "),(0,r.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.0/getting-started/introduction/"},"Bootstrap")," is the most popular CSS framework which is free and open-source. Bootstrap can help you make clean, responsive, and nice-looking websites without having to remember the gritty details about styling and layout."),(0,r.kt)("h3",{id:"getting-started-with-bootstrap"},"Getting started with Bootstrap"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"top.vm")," and replace the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="css/jbapp.css">\n')),(0,r.kt)("p",null,"with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">\n')),(0,r.kt)("p",null,"This incorporates bootstrap 5 into your html files. Next, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom.vm")," and add the folowing right before ",(0,r.kt)("inlineCode",{parentName:"p"},"</body>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"><\/script>\n')),(0,r.kt)("p",null,"Some of bootstrap's functionalities depend on JS code, so we need to incorporate bootstrap's JS script too. It is best to have this as the very last thing in the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," of the html files so we that is why we put it in ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom.vm"),"."),(0,r.kt)("p",null,"Now, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"index.vm")," to be the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'#set( $title = "Welcome Page" )\n#parse("public/top.vm")\n\n<div class="vh-100" style="background-color: #9A616D;">\n    <div class="container-fluid p-4">\n        <div class="row no-gutters">\n            <div class="card col-3" style="border-radius: 1rem;">\n                <div class="card-body p-3 text-black">\n                    #if($username)\n                        <h5 class="fw-normal mb-1 pb-2" style="font-family: \'Helvetica font\'; letter-spacing: 1px;">Welcome to JBApp $username</h5>\n                        <div class="list-group pt-3">\n                            <a class="list-group-item list-group-item-action" href="/employers">Show all employers</a>\n                            <a class="list-group-item list-group-item-action" href="/addemployers">Add an employer</a>\n                        </div>\n                    #else\n                        <form action="/" method="post">\n                            <h5 class="fw-normal mb-1 pb-2" style="font-family: \'Helvetica font\'; letter-spacing: 1px;">Sign into JBApp!</h5>\n                            <div class="form-outline mb-1">\n                                <input type="text" name="username" id="username" class="form-control form-control-sm" required/>\n                                <label class="form-label form-control-sm" style="font-family: \'Courier New\';" for="username">Username</label>\n                            </div>\n                            <div class="mb-1">\n                                <input class="btn btn-primary btn-block" type="submit" value="Sign in"/>\n                            </div>\n                        </form>\n                    #end\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n#parse("public/bottom.vm")\n')),(0,r.kt)("p",null,"Now, re-run the application and the sign-in page would look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2962).Z,width:"357",height:"280"})),(0,r.kt)("p",null,"And the front page would be:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2213).Z,width:"336",height:"250"})),(0,r.kt)("p",null,"As you can see the entire body of the html page above is being ",(0,r.kt)("em",{parentName:"p"},"contained")," in a bootstrap ",(0,r.kt)("inlineCode",{parentName:"p"},"container"),"! .",(0,r.kt)("inlineCode",{parentName:"p"},".container-fluid")," class provides a full width container, spanning the entire width of the viewport. Containers are the most basic layout element in Bootstrap and are required when using the default grid system. Containers are used to contain, pad, and (sometimes) center the content within them. "),(0,r.kt)("p",null,"The sign-in view is a ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.0/components/card/"},(0,r.kt)("inlineCode",{parentName:"a"},"card"))," and the homepage view is essentially just a ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.0/components/list-group/"},"list group")," of hyperlinks, both of which are among commonly-used bootstrap components!"),(0,r.kt)("p",null,"What we did ",(0,r.kt)("inlineCode",{parentName:"p"},"index.vm"),' only gives "style" to the sign-in and homepage views, but you can easily make the other pages in JBApp look nicer as well using bootstrap.'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Even though Bootstrap is the most popular CSS framework, it is not the only one out there. See ",(0,r.kt)("a",{parentName:"p",href:"https://geekflare.com/best-css-frameworks/"},"this")," for pros&cons of 14 different popular CSS frameworks.")))}p.isMDXComponent=!0},2962:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},2213:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAAD6CAIAAAB4eoiyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABtjSURBVHhe7Z39bxzHfYfzn8S0xIQsbB/tWAfbgAy3AKMilI3arIAwgAExjHFCjVA1aspG7UiVGLohowCMyyJE5NI1DRpmda0hEDVUwTSjRKH0AxmqlkChoWgZlFQWFGyBagUeYELsd152d972bu+4R95pPg8+CLhzs7N7e/PMzO6do2/syj6FIIgngfAI4lEgfBWTaXm8+U8e3vmt5gd3fPuBhsYHGnYiyPYGwqefx3c9+dDDLQ07vmVcawTZ9kD4lPPII4/t2Jm+6t+k/31gh1GIIOUGwqeZRzKPGdc3tcB2JI1A+NRCc/s3oSVS24Hw6aTlsaxxZRGkBgPhU8jju57csbPJuLIIUoOpXPg//bPvzs79J8UoTzGHXv9bypNPPW2UbzJ05m8P/YrOfPV//49Cf4y8O0qF4tV/yf9bWDNhHnq4xbiszjQ1PfTi/pd6f3b81//8AYX+oE0qNKohSPVSofDCdmbLxeoK/9bfD6Tr/Js/+bsb/70sVFdDhfQS2U5/G7sUz3cef6LhwdKP5Z/7i798e/ifyPNXX/8JeU6hP2iTCuklozKCVCmVCK/aHk6M1Qh5nq7zpLTQm8Tu6HhRFNIfwvMwYf0kefiRR41raoeU5lP6LzItj6vltEmF9NJ3/3yvWu5K7/nVjasnjcIKc5S1lWd/n7y6sXrhqP5qGnnih71vD/5Sy7GuJ4yXghKetkNBzUPfCwvjKiOVpmzht8x2kRSdp7MVcztpb7xE+e2531cmfMk1OVWgaZzEDkvIcEq4SS9RhVLt1K7wrI3zvUahluxLxwKNv9fz9mDPs7z82Vd/+farbWGFn/4wy/7e1fXTwd6XdhWpjGwi5Qm/xbaLpOX8P/zjr+jMnbfom5nhGxubjWtqhFbvpLc6txvC00u0SdXCElfqWHjyNpifyVspNoW5zX0O/9DruCsjm0kZwm+L7SKpOE+nTScfruTDGLZTjArF82Cp39XRBE6360ahEarQ+7PjRqEeXXiSLESoK3LswqosDSRUaoZaGsKfpE2B2lTMIaJiNlKwswpYPX9MnZODKNM7W7cHs7fyElu3q7O3HCDclaNqSAUpQ3ghTMnQoGDsmDBC6ZKhasaOCSNOzyjcfEr+VzH27G3M8BSxClBLrCjCM+eYXWG5NJnZHpbnz/PCk1evnmSbYi/5tyZ8OBDwwaLEIag8WBEcPZkXf7CyYCixhVemdwi//amC8JU+t4fwaomVSHhVMJZAQrPcTJ69zh2OW9KHLcQdgg8EwQgSxKyshZbliqUQfrtT5pKeO09z+P20pA9Db+rfT/8H3eob5cVTwZLeFp4v6aOneq6EwitTvQibmUlCqzx6NSSh8HGH4H8z56OmKMWEJ2nVCd92mG06hGeb7spRNaSClP/QbsudT8V2SpGHdiLiZr5IBWd2bvlDO1MwsjFuhldF3cwMHxxCKwlacxw3iFQ3LNFn6fA5nLbsD5/VxVRGNpPyhKdssfNp2U6hs725/D905s6v5cKv6J997nnjpeJpak7ytdyI+kzOEJ5/LTdSxtdyZFggmyiXvmnl/B6euRiIqrxaUvi4Qxw9fzVsn9Xlf0d7cXUVLbXH7CJKBXo1GA6Y27ImEzuYyd2VkU2kbOEpW+Z8iraLRD+8Ofmv4dr+Ry8doE1R7hwLikeduuMS/PDmuFGZNsUvbcv+4Q0TUqLNrko5r8z2kly9GipaWni9KWdhdDJstidY45rw7kV49FsaTWBawIsf3mi7xFRGKk0lwlNU542XUky6tov89SuvinneCBVWYLtIkv9yhv+0doTc/pvgp7X0B21SYQLbESSdVCg8RThPMcpTDKmeru0idOZ0Py8GLPL8t+d+T5ubWao8kvmOcVmdoUU7eU4LePKcT/i/oM1SK3kESTOVC4+owX8ei9RFIHw6efSxXcaVRZAaDIRPLQ8nW9gjyDYGwqeZTPWcx/9bHpJGIHzKefSx7I6d3zau8uaD/5tqJJVA+PTD/yGKR/EPUSA1GAhfxWTwT00hNRYIjyAeBcIjiEeB8AjiUSA8gniUb+zv/BGCIJ7kG7/u/DGCIJ4EwiOIR4HwCOJRIDyCeBQIjyAeBcIjiEeB8AjiUSA8gngUCI8gHgXCI4hHgfAI4lEgPIJ4FAiPIB4FwiOIR4HwCOJRIDyCeBQIjyAeBcIjiEeB8AjiUSA8gngUCI8gHgXCI4hHgfAI4lEgPIJ4FAiPIB4FwiOIR0lN+PzRgU9HP5z5ZGp+7uLiwsI1AEB1IL/IMnKNjCPvDBOLZ7PCv/vyocn3Prhy8bNlzhpnAwBQTciy2xzyn+wjB8lEw01nNiX8mXfep8FGeC5PBACw5ZD5ZCL5aBhqp0Lhx3qO/OE3v4PqANQIYsInK8lNw1Y1lQif7/35H+evUOvyUACA2oCsJDfJUMPZMGULT219vvg5bAegNiE3ydA458sTnlYLmNsBqHHEPO9c25cnPN0hwHYAah/ylGw1/KWUIfyZd96H7QDUC8vLy/Zz+6TCv/vyocWFBQgPQL2wtrZGzhrfzycVfvK9D2A7APUFTfJkripyUuGvXPxMtgEAqBNokidzVZETCZ8/OnDt2jXZBgCgfqBJXv29fSLhPx39EOt5AOoREp78DV1OJPzMJ1MQHoB6hFb15G/ociLh5+cu4jfzANQjZC75G7qcSPjFhQW5NwCg3iB/Q5cTCY8ndgDUL+Rv6DKEB+A+B8ID4BEQHgCPgPAAeASEB8Aj/BN+dXHqRE97dmBWbgOgsDw33p/L5vIrcltwZ+qNbEP2zdNfye36peaEn+1vbmhU0j+3sXFrvEsv7Ao/D/0lVrkoK3NTE2MHn6HKEF5lri+8hkH6Zqj35zutcp5s6/Pdh8fOLqzK/YvxxVjn0Lz8e5spTB/rORUvbWHxwumJgXZ6g1EHE0D4arJ6bqCVd6zXztyRRaTqZK9dKChcGtnb2NZ33iyPoTB1hNqpf+ELc+Mf35J/p0FhcUzo3Tl2XRZx6ON4mpVHV6ywen16aH+GCjO50cWCLI3h8lBrQ6Z3ukStLeGriQONze36u7NYHH3eFv7+oRaFpwH1VDfreYfPqt2ERG2xCjmLY3uP2KWx8EVE3Qu/NJ7rzKcp/MbG9fEX6crkxpfltmT9Ap//zSu2lM81Ufme4cvrssTBV2cOZthHeWAi4XBcRS4Pt9GZNDxT9ITFmhHCh9kS4TdWJ7rZZ2NofGmYTTWW2wujHYfPJff9fhC+MMMWQWkLL+6PLOHlgt+6YnIgeGF0URbYLI11tOdy7FPbN7ZQTLPqU7hwOJvrZG+wxTFnREB4PVsj/Ebh7GHWmbq1Oy5Z2HNavXVcnx/aY64YV84NH9iTpSGjaXfH4by56IwTfnU+f/j7u9msldndfiS/cFeWS9bvXJ4Y6NzNVhnU7METF1aMHvwVexy4N8NaXjkvTqAl+8oYb6ewkO9tZ/tm24+cWbK6fnTobNuBIatljcLlEb6cDqP2zpInWYwyhZflLcfjnpzQR/MMfYLXR/exanGDcuFG8Jxs/db0UC5LK4Jsx8GxebV2kjrFoSnk6aH5wrledpH3jS3JYhuX8IXr0/fLg95aFZ49X2G9Vl0KFs72ZrJMY219eGm4VX9WR0vNbHd+gfrC+q2pY7SKa+nMa7dtTuHZAnVP7xTv6/KuVe0W69dPdWebcmOXaaxZLyzxBwpNuXyobmHx7Kk8f97TODD+8eCJycWVr65PD3ZQ93p66ML08JtDSolxG0nT9d7nBqdpaCNdR9k6md5Ria7MH6eZM3ypkyxFmcKLBVf8/Tl9XuKNyPVa94T9jG/pbH6UX5OGrpHx/o4fHBk8fkQOZ+3ByiFJnRKsL47u4++LjUG0Y+vQJfmKhSX8jQunJoY72Y0JhK8qoj9Fl/7O6Vc6RifHjIeos/1t2of3xVh7pncqnJzX5/roo9I7pUP4RWpW6QTr8yeea2nYMzgb7LX6cU+TvtwQN4S6uuIe+M1oASKO/kzvVHi6Yhmcm4j6Ey01Mx1KvxXWdYx+IbfduIRPdpJFKC5873Q4cBTuLJ0b/kGWCtv6ZuKGJprYg3chNYt5U+KaZDqGLsmmxA2Ltr5LUicemtgzxy6IPcXo0xRsWrhm+PvmQW9NC2/0ktUzB9nHoPtAtuwZvsz/FFwebtVv8kV9/iVTgC082+sZrR0dvig1OgF/5KvvJY6ltmz3Hi6PUkKWNjw/pv4nx/z0St2fO4RPeJJFEOcfJ7yVp3KjRdbUNF4rUzrdzNMutKiW2xrmNQkEaz74cbiUS1InjjunupXRnI2wtGPcSGF/ZIy428C6o4aFZ0/jXqBPdC+f/mhgFv1bjNCikEZufVF361SO90UrqhvWh+f+jCNWJtj3VW9dkJsS/v2Npkclws8OsjsXR4r/psAWPulJFqG48Mr7untrYXLkwB4qbNn7huORBLdRX3mJoSfT4/oq25aZj4PaG0xSJwZavul3E+ybQrpvGnaOPhBez1YKz9bn9DGz71FokA6G5HDWWueLfG2VyD+tUj+/sT48Pje+mI99kDM3yG4g1XU4w9ZDlJQpPJ2M1b1KYwuf9CSLEFfZEl5w90IfW4K5zBEfnCuu+wuHzBszA1S5uPBWHSfyYZAj7qcP9kfGgPBbg+iCrUOTEweiQZo8p8KWvomJA+bjVl5fXyHbuGf4xt6puPUpt8tqVuylfmUgSsoXvsih47CFT3qSRRCVEwsvboXoJeuWgaZQW2z5hJyN1LIkIF7mjxIIH9VxQdODQ2zxxYHz1wH2R8aA8FuEfMSSaVFv1Qpne0WhPbrzLth23HjIfffsqclod/vDm+03vxFgLJ85LaYu+TTBMIE/otN6RiXC83Vpi9lr1xdPTRR9/mwLn/QkiyDO3x59YoVfGt9P180Unn3j7Zw8hWb293MOmVc+yunf8Cep44D9EMD1zDL++zkIr2eLhWfP6lhv03uh81t6wfwwe3ibyY3OB/auXx/vHlD73/RbtK8+6YlvBLTH6dfH3xgJ5yLHMyd2Z2H8hCNGeG3WtTqu/C1a2+HJwN71O9P93e4H2iFcePEgIyTZSZqQNk2Z3PgN+tPd1+N+aceGGHYbby7pF0Y7jBMLkd/PmYfg10S7Svynllq1JHUs7p49nIlZPcnxsdX6loEPkdaahQufcKFU09S88OIezPx1HS90fa9LL80OvsAGb1oC7H5h7/MvZGkhoM6f6/Mn2HOs1r5z6nxemO3nv7vM7O48Mnj8rZ72rP6FE/mfo1VA22sTiwUaBQqLp15vM78tX6XuRS3nIlftki/E79WVr+5I1I+65Q9psm10wq3Z5tbBUt/Di3Gwa+Ty8vWpExNymkpykhbiqWETXeG7Z1+zF0d0KOu39BvrhZXFs8e/z3d8bnBW+YXS6qWxzkxz+8g8OwGL1Y/fZG+TVjSj86tRBS5zWCh+jCDHoJAkdXQK19mvMDK97v/ipSC6QXPDnt6pG8pbXj3zGjuQ8pERYZ85X+JjqX1qX3hafQ30WT/SoiXZa7HfxxQWgl+bZfZ0D51XbBc3umHUx3vUh/K97ey75ZZsbuDUf1kfLfuNVzfZKJrtm1C7rLyfDEOL7ZU8LTiLlajfFK6cHzm4L/angS4KC+M92UxzZv/wtDrHFT9JJzfOHOaHzuzrGZ0zbmr0y6Ums3vv/p7j+Tn1l3z6GzRuLsTyR004gnCZXxwYOtLBfkLXmG39q+Fp53OEEnVUxAARxHiOq39YFHlzZH2IrFC/CNptVB1SB8KD+x0uZ/HFeaI6oDQQHmw7EH7rgPBg24HwWweEB9tMYX6E/7xqYDr+GXiSOiAJEB5sJ/zrrijqg8yQJHVAQiA8AB4B4QHwCAgPgEdAeAA8AsID4BEQHgCPgPAAeASEB8AjIDwAHgHhAfAICA+AR0B4ADwCwgPgERAeAI+A8AB4BIQHwCMgPAAeAeEB8AgID4BHQHgAPALCA+AREB4Aj4DwAHgEhAfAIyA8AB4B4QHwCAgPgEdAeAA8AsID4BEQHgCPgPAAeASEB8AjalH4e/fuffnll0tLS3QsAHyAejv1eer50oGqQccKXa4J4ek937x5c3l5eW1tTRYBcL9Dvf327dvU86vtfM0JT+McvXO5AYBP0DxH/V9uVIeaE57WNpjbgZ9Qz6f+LzeqQ80JX+32AahltsCv0GUID8A2A+EB8AgID4BHQHgAPALCA+AREB4Aj4DwAHgEhAfAIyA8AB4B4QHwCAgPgEdA+HRYyecauvIrcmubYSfTODArNpbznY3NfTNiY3vQzgdsKxC+TLg/DVFkP4bwRYDwtQOELwPecXPjy3JzY+PWeBeELw2Erx0gfHLm+hqbO/O35JYOhC8ChK8dIHxiipoD4YsA4WsHCJ8cWsA3x1kdCM9WAfL2vn9Ovibhu9uvWkLO9lMFRQ9WQb2PCNEbVE6sLOH54WSUauyN0Gb0qmh/ZqBIZX5c+aq6FLKFV2sWP1V9X+XyOi6RvCDi0NohamYs3nYgfDnwHkkdyOiURNC9tL4bdXqxYzQE8I4reyHvptFLsteGh2AtO/vrzIAiFW8waESTxGVRAD9W2DiXOagp1ZKb4u10RWfCDxEOQ6wyvRqdD28q3NTOR77BSFc+poimjEtB8JZFO/ol1YZF9lKOTiAcFs0j9kN4CYQvFymk6iShC8BgPTLQg/2t9WPNQ8vPgb7+sGezw0UixcMa0WxUG4wRnmkZd87aCEIoWgoUFa3KhHoO2vmwg4YqChTPjVNSNtXryYkdCwjHBQccCF8ZUvuwk6m+CZRezrqmpZzSy/kEJbo126t/TmnNuW8E9zCMS7B44W0ripyz1iZD8c15koqr6r5OFY3jhldVqWwfwriA9tlqQwAQQPjK4b1K6dNxwruVU/or/5v3TvYHqxkOAY75UCL6dChPdDj973jh+QlEg0WYSDxLIfVMKhNefdcRauNMcnuw4+/COlVVeHmsCHYCvI7+uXgOhN8MUadnXbbiGT7s5azjRmLQLs75kGFprDqj/h0vfHzjDPOctTYZ0Xt3v0FlqFL3dR7UOmF7sHNewwCn8BK2o37mXgPhN0PUC1mXjRXeNa0ZHvLOPU67qENAf15o78DUWEzXsltb/rgb0aqZmIJZlVkFVXjjDcohjP+t7us6qHF92GZnfo7/r2ifcF3DkGLCl3rVMyB8YqjfaErzLqj26VjhpXVKf7UNoZJcp6o3DQFduWDCt9Fa4McqW3jZiHraMwNBTfZSecIr9cX56JvhvtrYRLChQWuZ12fvXbeUL9GVIYB2VN+jVjl6yXHmXgPhEyOkVaMYy/tovPAMaYWI2nEFVr+3bDRQzodaUw+nHbqY8ITQL0h0uLKF75tRm9L0s/YVbzaI4z3GvHf9I4iuoUP4qJpxaM+B8GDzmKPDpkm9QSCB8GDzpOynvSIAaQHhweZJV3jWmn3LA1IBwoPNk5bwrB3t5hykDYQHwCMgPAAeAeEB8AgID4BHQHgAPALCA+AREB4Aj4DwAHgEhAfAIyA8AB4B4QHwCB+FB8BnpAnVgdoPXcYMD8A2A+EB8AgID4BHQHgAPALCA+AREB4Aj4DwAHgEhAfAIyA8AB4B4QHwCAgPgEdAeAA8AsID4BEQHgCPgPAAeASErzIzA8Y/lq7D/0115d+Zr1/wT77WBRC+IpjGyUSF8KCWgPCVMNvf3NmVrH9DeFBLQPgKmOtjDif7N5IhPKglIHzZsJ7dlV/h83xpVyE8qCUgfLkwRTvzt9ifbpnZzM/u8FkGZq06XAxZoTM/V1R4tSm1mlxcKE0VGVMY+kH5yTNkO2zkEq/ygYy/L1miLmHkALec7wxelfU5DuGVdpQzdI1xvM3wWNH5aCegn+19MUpuPRC+TFjXDPsu64KKP7LjRiWyx0c28s4aWsG7fnzfJYWi7q61LAeC8EB6sybaq6525FHES11y/UJwh/WT78p1RpLz3bXK0Tnwg0b7ihFHHMgeGnjLoh1+TcJD8AsYXAR+tbuUawLKB8KXB+usUY9XeyqDber2as5og4WAO5NsslIat/birrpNsF5SfDPbMSyVjhUZVpTGNY0d71S9Vlqz2qa1IDL2SnitQBwQviyMnmp0UPaqaZ1SwRgsOCXv4YNVgIjS9fUDWScW4DhodEpmO5q0DK1ZZcQJiSqo+7reqXYpFI1FudzRPoTSbOx7BMmB8OXAuqaiXxjRR53TbFwvlxQTntU3fCtfeNGIleoK73qn2qUwL4tsVh/dokTCm5cXlAmELwNnP+ZGxfdIpWe75r144VU9OMrR7QNpZqq4J1uJ2U5lwosW1H3dB9XeEXvjvGXtHFyHCDHPFlQAhE+O1vsjoondYS8fDhzTmoTvm0x4dvQKhHccNMJsp7Tw2qta49q+roMqAxZDDAqz+tBgnYCK/a5B2UD4pPC+6DRH8Zx1dEU8vqnsJZasYYcWmzHC87FAl60i4c2Dspb7ZM0KhFfOVh+tjH21kc559djuuc7wO04JO6I6BNA1DM7QftegbCB8Qrg2akdU0HqzlDxww5zrAslZqJxvOoUnlKaooyszpN31NTNtpKsyoZZmO6WF75/jdWRT6hGtfUWJfdAIY1AIUC+Res0hfApAeJAUIbzcSIPUGwQlgfAgKSn7GT37AFsHhAdJSVd41lrMLRKoHhAeJCUt4Vk72s052DogPAAeAeEB8AgID4BHQHgAPALCA+AREB4Aj4DwAHgEhAfAIyA8AB7hnfBLS0tff/213ADAJ6jnU/+XG9Wh5oT/kiM3APCJLej8NSf8vXv3bt68SW8b8zzwB+rt1Oep51P/l0XVoeaEJ+g905untQ0dCwAfoN5Ofb7athN0rNDlWhEeAFAlyhZ+cWFB7goAqDfI39DlRMLPz11cW1uTewMA6gcyl/wNXU4k/MwnUxAegHrk9u3b5G/ociLhPx39cHnZ/P8xBQDUPiQ8+Ru6nEj4/NEBCA9APXLt2jXyN3Q5kfCUKxc/w6oegLqDzFVFTir85HsfYJIHoL6g9TyZq4qcVPh3Xz60uLCASR6AeoFsJ2fJXFXkpMJTzrzzPiZ5AOoFEp6cNSwuQ3jKH37zO2pFtgcAqFXIU7LV8JdSnvBjPUf+OH8FzgNQy5Ch5CnZavhLKU94Sr73558vfg7nAahNyE0ylDw1zBUpW3gKtYV5HoAaRMztcbZTKhGeQqsFcT8P7QGoBdbW1paXl8lK50o+TIXCi5x55/3FhQU4D8A2IlQnE+1n8nY2JTzl3ZcPTb73wZWLn127dk1M+PiuHoBqQ5YJzwmyjxw0vm+Py2aFD5M/OvDp6Iczn0zNz12kwYb8BwBUA/KLLCPXyDj1d/JJkprwCILUfiA8gngUCI8g3qTzx/8Pue/h7jv+yxoAAAAASUVORK5CYII="}}]);