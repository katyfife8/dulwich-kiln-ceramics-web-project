(this["webpackJsonpdulwich-kiln-ceramics"]=this["webpackJsonpdulwich-kiln-ceramics"]||[]).push([[5],{29:function(e,t,a){"use strict";a(0),a(33);var n=a(1);t.a=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:e.className,type:e.type||"button",onClick:e.onClick,children:e.action})})}},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(31);function s(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},31:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(30);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,s=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){s=!0,r=l}finally{try{n||null==i.return||i.return()}finally{if(s)throw r}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},33:function(e,t,a){},34:function(e,t,a){"use strict";a(0),a(35);var n=a(1);t.a=function(e){return Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("label",{htmlFor:e.id,className:e.className,children:e.title}),Object(n.jsx)("input",{type:e.type,id:e.id,placeholder:e.placeholder,value:e.value,onChange:e.onChange}),e.error&&Object(n.jsx)("p",{className:"input-error",children:e.error})]})}},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a(0);var n=a(9),s=a(29),r=(a(39),a(1));t.a=function(e){return Object(r.jsxs)("div",{className:e.className,children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)(n.b,{to:e.path,children:Object(r.jsx)("img",{src:e.img,alt:e.alt})})}),Object(r.jsxs)("div",{className:"text-container",children:[Object(r.jsx)("h2",{children:e.heading}),Object(r.jsx)("p",{className:"summary",children:e.summary})]}),Object(r.jsx)(n.b,{to:e.path,children:Object(r.jsx)(s.a,{action:"find out more"})})]})}},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";t.a=a.p+"static/media/kintsugibowl.0217e692.jpg"},42:function(e,t,a){"use strict";t.a=a.p+"static/media/glazedbowl.4af1ff20.jpg"},43:function(e,t,a){"use strict";t.a=a.p+"static/media/colourfulcups.525594c6.jpg"},44:function(e,t,a){"use strict";var n=a(0),s=a(32),r=a(34),c=a(29),i=(a(36),a(1)),l=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(" "),u=Object(s.a)(o,2),d=u[0],m=u[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d?alert("Please enter a valid email address."):alert("Thank you for signing up!")},className:"subscribe",children:[Object(i.jsx)(r.a,{type:"email",title:"Email",className:"visually-hidden",id:"email",placeholder:"email@address.com",value:a,onChange:function(e){var t=e.target.value;l(t),0===t.length?m("Please enter a valid email address."):/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?m(""):m("Please enter a valid email address.")},error:d}),Object(i.jsx)(c.a,{type:"submit",action:"sign up"})]})};a(40),t.a=function(e){return Object(i.jsxs)("div",{className:"card-wide",children:[Object(i.jsx)("div",{className:"image-container-wide",children:Object(i.jsx)("img",{src:e.img,alt:e.alt})}),Object(i.jsxs)("div",{className:"text-panel",children:[Object(i.jsx)("h2",{children:e.heading}),Object(i.jsx)("p",{class:"summary",children:e.summary}),Object(i.jsx)(l,{})]})]})}},65:function(e,t,a){"use strict";a.r(t);a(0);var n=a(38),s=a(44),r=a(41),c=a(42),i=a(43),l=a(1);t.default=function(){return Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"page-intro",children:[Object(l.jsx)("h1",{children:"Workshops"}),Object(l.jsx)("p",{className:"subtitle",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),Object(l.jsxs)("section",{className:"card-row",children:[Object(l.jsx)(n.a,{className:"card col-2",img:r.a,alt:"Kintsugi bowl",heading:"The Art of Kintsugi",summary:"A summary of this amazing course and why you should sign up.",path:"../Workshops",action:"explore collection"}),Object(l.jsx)(n.a,{className:"card col-2",img:c.a,alt:"Glazed bowl",heading:"The Art of Glazing",summary:"A summary of this amazing course and why you should sign up.",path:"../Workshops",action:"explore collection"})]}),Object(l.jsx)("section",{className:"card-row",children:Object(l.jsx)(s.a,{img:i.a,alt:"Colourful glazed cups",heading:"Sign up to emails",summary:"Subscribe to our newsletter for the latest news, courses and offers."})})]})}}}]);
//# sourceMappingURL=5.147851a8.chunk.js.map