(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,n){e.exports=n.p+"static/media/png-tree-bulb.a49b22b8.png"},69:function(e,t,n){e.exports=n(92)},75:function(e,t,n){},79:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=n(21),m=(n(74),n(75),n(7)),u=n(60),g=n.n(u),d=n(116),p=n(119),f=n(118),h=Object(d.a)(function(e){return{paperContainer:{backgroundColor:"#000000",backgroundImage:"url(".concat(g.a,")"),minHeight:"100vh",backgroundPositionX:"center",backgroundPositionY:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain"},text:{color:f.a[50]}}}),E=function(){var e=h();return r.a.createElement(p.a,{elevation:1,className:e.paperContainer})},v=(n(79),function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#fff",marginTop:"80px"}},"I love you, mom!"))}),w=n(26),b=n(123),x=n(125),k=n(65),y=n.n(k),N=n(66),O=n.n(N),C=n(121),I=n(43),T=Object(d.a)(function(e){return{root:{display:"flex",position:"fixed",right:0,left:0,marginRight:"auto",marginLeft:"auto",top:0,bottom:0,marginTop:"75vh",marginBottom:"auto",minHeight:"80px",minWidth:"80px",height:"80px",width:"80px",zIndex:1350},menuStyles:{fontSize:60},teal:{color:"#000000",backgroundColor:C.a[400]},grey:{color:e.palette.getContrastText(I.a[500]),backgroundColor:I.a[700]},large:{width:e.spacing(10),height:e.spacing(10)}}}),j=function(){var e=T();return r.a.createElement("div",{className:e.root},r.a.createElement(x.a,{className:"".concat(e.teal," ").concat(e.large)},r.a.createElement(y.a,{className:e.menuStyles})))},S=function(){var e=T();return r.a.createElement("div",{className:e.root},r.a.createElement(x.a,{className:"".concat(e.grey," ").concat(e.large)},r.a.createElement(O.a,{className:e.menuStyles})))},L=n(47),P=n.n(L);P.a.setAppElement("#root");var R=Object(d.a)(function(e){return{root:{}}});function B(e){var t=e.isOpen,n=e.closeModal;R();return r.a.createElement("div",null,r.a.createElement(P.a,{isOpen:t},r.a.createElement("h2",null,"Login"),r.a.createElement("form",null,r.a.createElement("h4",null,"Username"),r.a.createElement("input",null),r.a.createElement("h4",null,"Password"),r.a.createElement("input",null)),r.a.createElement("p",{style:{color:"#ff0042"}},"Close login screen here"),r.a.createElement("button",{onClick:n},"close")))}var D=n(122),M=n(124),W=n(126),z=n(32),A=n.n(z),H=Object(d.a)(function(e){return{root:{},linkText:{color:A.a[50],"&:hover":{color:A.a[200],textDecoration:"none"}},disabledLinkText:{color:A.a[800],"&:hover":{color:A.a[800],textDecoration:"none"}},listItemText:{flex:1,textAlign:"right"}}});function G(e){var t=e.toggleModal,n=e.closeDrawer,a=e.modalIsOpen,o=H();return r.a.createElement("div",null,r.a.createElement(s.b,{to:"/",onClick:n,className:o.linkText},r.a.createElement(D.a,null,r.a.createElement(M.a,{button:!0,key:"Home"},r.a.createElement(W.a,{style:{fontSize:"large"},className:o.listItemText,primary:"Home"})))),r.a.createElement(s.b,{to:"/test-page",onClick:n,className:o.linkText},r.a.createElement(D.a,null,r.a.createElement(M.a,{button:!0,key:"Test Page"},r.a.createElement(W.a,{className:o.listItemText,primary:"Click Me"})))),a?r.a.createElement(s.b,{to:"#",disabled:!0,className:o.disabledLinkText},r.a.createElement(D.a,null,r.a.createElement(M.a,{button:!0,key:"Login"},r.a.createElement(W.a,{className:o.listItemText,primary:"Login"})))):r.a.createElement(s.b,{to:"#",onClick:t,className:o.linkText},r.a.createElement(D.a,null,r.a.createElement(M.a,{button:!0,key:"Login"},r.a.createElement(W.a,{className:o.listItemText,primary:"Login"})))))}var J=1e3;Object(d.a)(function(e){return{content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:J}),marginRight:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:J}),marginRight:0},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundColor:"rgba(60,12,120,0.5)",display:"flex",alignItems:"flex-end",justifyContent:"flex-end",paddingBottom:"80px"}}});var U=1e3,X=Object(d.a)(function(e){return{content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:U}),marginRight:NaN},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:U}),marginRight:0},drawer:{width:"100vw",flexShrink:0},drawerPaper:{width:"100vw",height:"90vh",backgroundColor:"rgba(60,12,120,0.6)",display:"flex",alignItems:"flex-end",justifyContent:"flex-end",paddingBottom:"80px"}}});function Y(){var e=X(),t=Object(a.useState)(!1),n=Object(w.a)(t,2),o=n[0],i=n[1];function l(){i(!1)}console.log("drawerIsOpen: "+o);var c=Object(a.useState)(!1),s=Object(w.a)(c,2),m=s[0],u=s[1];return console.log("modalIsOpen: "+m),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){i(function(e){return!e})}},o?r.a.createElement(S,null):r.a.createElement(j,null)),r.a.createElement(b.a,{open:o,onClose:l,className:e.drawer,variant:"temporary",elevation:10,anchor:"bottom",transitionDuration:{enter:U,exit:U},classes:{paper:e.drawerPaper},PaperProps:{elevation:20}},r.a.createElement(G,{toggleModal:function(){u(function(e){return!e}),i(!1)},closeDrawer:l,modalIsOpen:m})),r.a.createElement(B,{isOpen:m,closeModal:function(){u(!1)}}))}var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(E,null)),r.a.createElement(m.a,{exact:!0,path:"/test-page"},r.a.createElement(v,null))),r.a.createElement(Y,null)))};i.a.render(r.a.createElement(s.a,{basename:"/new-mern-practice"},r.a.createElement($,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/new-mern-practice",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/new-mern-practice","/service-worker.js");l?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):c(e)})}}()}},[[69,1,2]]]);
//# sourceMappingURL=main.902b46bb.chunk.js.map