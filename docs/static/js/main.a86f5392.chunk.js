(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(6),r=n.n(c),i=n(2),s=n(12),o=n(0),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],j=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),j(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){j(e.target.value)}})})},u=n(13),m=function(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__bounceIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},p=n(7),d=n.n(p),b=n(10),l=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=kryDwjqhKwUh4bCKs7IBOL1XIY69kmeH"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(11),f=n.n(O),g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){l(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),2e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(f.a,{children:[Object(o.jsx)("title",{children:"Page 12"}),Object(o.jsx)("meta",{name:"description",content:"Some description."}),Object(o.jsx)("meta",{property:"og:url",content:"produccion.url.com"}),Object(o.jsx)("meta",{property:"og:type",content:"website"}),Object(o.jsx)("meta",{property:"og:title",content:"Buscamos hacer el meta"}),Object(o.jsx)("meta",{property:"og:description",content:"implementando los metas"}),Object(o.jsx)("meta",{property:"og:image",content:"images/balanz.jpg"})]}),Object(o.jsxs)("h3",{className:"animate__animated animate__backInLeft",children:[" ",t," "]}),Object(o.jsx)("img",{src:"images/balanz.jpg"}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash animate__infinite",children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(m,Object(u.a)({},e),e.id)}))})]})},x=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(g,{category:e},e)}))})]})};n(22);r.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a86f5392.chunk.js.map