(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(14),a(4)),u=a(2),i=a(8);a(6);function d(e,t){switch(t.type){case"clear":return[];case"reset":return t.payload;case"add":return[].concat(Object(i.a)(e),[{id:Date.now(),text:"",completed:!1}]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"completed":return e.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}));case"text":return e.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{text:t.payload.input}):e}));default:return e}}var s=r.a.createContext();function p(e){return e.items.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))}function m(e){var t=e.id,a=e.completed,c=e.text,o=Object(n.useContext)(s),u=Object(n.useState)(""),i=Object(l.a)(u,2),d=(i[0],i[1]);return r.a.createElement("div",{className:"Todo"},r.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return o({type:"completed",payload:t})}}),r.a.createElement("input",{type:"text",autoFocus:!0,name:t,index:t,placeholder:"Type in Todo",defaultValue:c,onChange:function(e){var a=e.target.value;d(e.target.value),o({type:"text",payload:{id:t,input:a}})}}),r.a.createElement("button",{onClick:function(){return o({type:"delete",payload:t})}},"Delete"))}var f=function(){var e=Object(n.useReducer)(d,[]),t=Object(l.a)(e,2),a=t[0],c=t[1];return function(e){var t=Object(n.useRef)(!1);Object(n.useEffect)((function(){t.current||(e(),t.current=!0)}))}((function(){var e=localStorage.getItem("data");c({type:"reset",payload:JSON.parse(e)})})),Object(n.useEffect)((function(){localStorage.setItem("data",JSON.stringify(a))}),[a]),r.a.createElement(s.Provider,{value:c},r.a.createElement("h1",null,"Todos App"),r.a.createElement("button",{style:{margin:"4px"},onClick:function(){return c({type:"add"})}},"Create Todo"),r.a.createElement("button",{style:{margin:"4px"},onClick:function(){return c({type:"clear"})}},"Delete All Todos"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"Row"},r.a.createElement(p,{items:a})))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.598a188f.chunk.js.map