(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,n,e){},12:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o=e(1),c=e.n(o),a=e(6),r=e.n(a),i=(e(11),e(2));e(12);var s=function(t,n){var e=Object(o.useState)((function(){return function(t,n){if("undefined"!==typeof window){var e=localStorage.getItem(t);return null!==e?JSON.parse(e):n}}(t,n)})),c=Object(i.a)(e,2),a=c[0],r=c[1];return Object(o.useEffect)((function(){localStorage.setItem(t,JSON.stringify(a))}),[t,a]),[a,r]},l=e(4),u=e.n(l),f=e(0);var d=function(){"localStorage"in window||(window.localStorage=u.a,localStorage=u.a);var t=s("data",""),n=Object(i.a)(t,2),c=n[0],a=n[1];c||window.fetch("https://jsonplaceholder.typicode.com/photos").then((function(t){200===t.status?t.json().then((function(t){a(JSON.stringify(t))})):console.log("Looks like there was a problem. Status Code: "+t.status)})).catch((function(t){console.log("Fetch Error :-S",t)}));var r=Object(o.lazy)((function(){return e.e(3).then(e.bind(null,19))}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)("h1",{children:"Still Loading\u2026"}),children:Object(f.jsx)(r,{data:c})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"btn",onClick:function(){if(c){var t=JSON.parse(c);t.sort((function(){return Math.random()-.5})),a(JSON.stringify(t))}},children:"Shuffe"})]})},j=function(t){t&&t instanceof Function&&e.e(4).then(e.bind(null,20)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;e(t),o(t),c(t),a(t),r(t)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(d,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.86f978b1.chunk.js.map