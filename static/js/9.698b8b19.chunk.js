(this["webpackJsonpdulwich-kiln-ceramics"]=this["webpackJsonpdulwich-kiln-ceramics"]||[]).push([[9],{29:function(t,e,n){"use strict";n(0),n(33);var r=n(1);e.a=function(t){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:t.className,type:t.type||"button",onClick:t.onClick,children:t.action})})}},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(31);function i(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},31:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},32:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(30);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,c=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(s){i=!0,c=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},33:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(32),c=n(29),o=(n(58),n(1)),a=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],s=function(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(t){return a(t)}))};Object(r.useEffect)((function(){s()}),[]);var u=n.content,l=n.author;return Object(o.jsxs)("div",{className:"quotes-box",children:[Object(o.jsx)("div",{className:"text-box",children:Object(o.jsxs)("p",{className:"quote-text",children:["\u201c",u,"\u201d"]})}),Object(o.jsx)("p",{children:l}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)(c.a,{onClick:s,action:"new quote"})})]})};n(59),e.default=function(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{className:"page-intro",children:[Object(o.jsx)("h1",{children:"About"}),Object(o.jsx)("p",{className:"subtitle",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consequatur iure nihil, quidem omnis nemo aut ipsum at saepe totam, quos est accusamus dignissimos dicta, voluptate expedita ipsa quisquam ea."})]}),Object(o.jsx)("section",{id:"quotes-section",children:Object(o.jsx)(a,{})})]})}}}]);
//# sourceMappingURL=9.698b8b19.chunk.js.map