(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(15),n(3)),i=n(5),u=n(2),s=n(9);n(7);function d(e,t,n){switch(t.type){case"clear":return[];case"reset":return t.payload;case"add":return[].concat(Object(s.a)(e),[{id:Date.now(),text:"",completed:!1}]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"completed":return e.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}));case"text":return console.log(e),console.log(t.payload),console.log(Object.getOwnPropertyNames(t.payload)),e.map((function(e){return e.id===Object.getOwnPropertyNames(t.payload)?Object(u.a)(Object(u.a)({},e),{},{text:e.id in t.payload?t.payload:""}):e}));default:return e}}var p=o.a.createContext();function m(e){return e.items.map((function(e){return o.a.createElement(f,Object.assign({key:e.id},e))}))}function f(e){var t=e.id,n=e.completed,r=e.text,c=(e.index,Object(a.useContext)(p)),u=Object(a.useState)(""),s=Object(i.a)(u,2),d=(s[0],s[1]);return o.a.createElement("div",{style:{display:"block",flexDirection:"row",justifyContent:"space-between",margin:"2px",padding:"2px"}},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return c({type:"completed",payload:t})}}),o.a.createElement("input",{type:"text",name:t,index:t,placeholder:"Type in Todo",defaultValue:r,onChange:function(e){d(e.target.value),console.log({id:t}),c({type:"text",payload:Object(l.a)({},e.target.name,e.target.value)}),console.log(t)}}),o.a.createElement("button",{onClick:function(){return c({type:"delete",payload:t})}},"Delete"))}var y=function(){var e=Object(a.useReducer)(d,[]),t=Object(i.a)(e,2),n=t[0],r=t[1];return function(e){var t=Object(a.useRef)(!1);Object(a.useEffect)((function(){t.current||(e(),t.current=!0)}))}((function(){var e=localStorage.getItem("data");console.log("After getItem",n),r({type:"reset",payload:JSON.parse(e)})})),Object(a.useEffect)((function(){localStorage.setItem("data",JSON.stringify(n)),console.log("After setItem",n)}),[n]),o.a.createElement(p.Provider,{value:r},o.a.createElement("h1",null,"Todos App"),o.a.createElement("button",{style:{margin:"4px"},onClick:function(){return r({type:"add"})}},"New Todo"),o.a.createElement("button",{style:{margin:"4px"},onClick:function(){return r({type:"clear"})}},"Clear Todos"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(m,{items:n}))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.d040752d.chunk.js.map