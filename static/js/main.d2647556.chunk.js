(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(14),n(7)),u=n(3),i=n(8);n(5);function d(e,t){switch(t.type){case"reset":return t.payload;case"add":return[].concat(Object(i.a)(e),[{id:Date.now(),text:"",completed:!1}]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"completed":return e.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}));default:return e}}var s=r.a.createContext();function p(e){return e.items.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))}function m(e){var t=e.id,n=e.completed,c=e.text,o=Object(a.useContext)(s);return r.a.createElement("div",{style:{display:"block",flexDirection:"row",justifyContent:"space-between",margin:"2px",padding:"2px"}},r.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return o({type:"completed",payload:t})}}),r.a.createElement("input",{type:"text",defaultValue:c}),r.a.createElement("button",{onClick:function(){return o({type:"delete",payload:t})}},"Delete"))}var f=function(){var e=Object(a.useReducer)(d,[]),t=Object(l.a)(e,2),n=t[0],c=t[1];return function(e){var t=Object(a.useRef)(!1);Object(a.useEffect)((function(){t.current||(e(),t.current=!0)}))}((function(){var e=localStorage.getItem("data");c({type:"reset",payload:JSON.parse(e)})})),Object(a.useEffect)((function(){localStorage.setItem("data",JSON.stringify(n))}),[n]),r.a.createElement(s.Provider,{value:c},r.a.createElement("h1",null,"Todos App"),r.a.createElement("button",{onClick:function(){return c({type:"add"})}},"New Todo"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p,{items:n}))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d2647556.chunk.js.map