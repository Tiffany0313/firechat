(this.webpackJsonpfirechat=this.webpackJsonpfirechat||[]).push([[0],{49:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),i=n(21),a=n.n(i),s=n(23),o=(n(49),n(20)),d=o.a.initializeApp({apiKey:"AIzaSyBqHWdDg-ijdxQ_d7QOP-fvxvfaCFG5ygU",authDomain:"firechat-37187.firebaseapp.com",projectId:"firechat-37187",storageBucket:"firechat-37187.appspot.com",messagingSenderId:"1029907543038",appId:"1:1029907543038:web:73889e7981a440d976c6af",measurementId:"G-VQ7XT8RGFP"}).firestore(),u=o.a.auth(),j=n(76),l=n(6);var h=function(){return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"},children:Object(l.jsx)(j.a,{style:{padding:"30px",fontSize:"20px",borderRadius:"0",fontWeight:"600"},onClick:function(){var e=new o.a.auth.GoogleAuthProvider;u.signInWithPopup(e)},children:"Sign In With Google"})})},p=n(32),f=n.n(p),x=n(40),b=n(77);var O=function(e){var t=e.scroll,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],a=c[1];function h(){return(h=Object(x.a)(f.a.mark((function e(n){var r,c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=u.currentUser,c=r.uid,s=r.photoURL,e.next=4,d.collection("messages").add({text:i,photoURL:s,uid:c,createdAt:o.a.firestore.FieldValue.serverTimestamp()});case 4:a(""),t.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsx)("div",{children:Object(l.jsx)("form",{onSubmit:function(e){return h.apply(this,arguments)},children:Object(l.jsxs)("div",{className:"sendMsg",children:[Object(l.jsx)(b.a,{style:{width:"78%",fontSize:"15px",fontWeight:"550",marginLeft:"5px",marginBottom:"-3px"},placeholder:"Message...",type:"text",value:i,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)(j.a,{style:{width:"18%",fontSize:"15px",fontWeight:"550",margin:"4px 5% -13px 5%",maxWidth:"200px"},type:"submit",children:"Send"})]})})})};var m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{onClick:function(){return u.signOut()},children:"Sign Out"})})};var v=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useRef)();return Object(r.useEffect)((function(){d.collection("messages").orderBy("createdAt").limit(50).onSnapshot((function(e){c(e.docs.map((function(e){return e.data()})))}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{}),Object(l.jsx)("div",{className:"msgs",children:n.map((function(e){var t=e.id,n=e.text,r=e.photoURL,c=e.uid;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"msg ".concat(c===u.currentUser.uid?"sent":"received"),children:[Object(l.jsx)("img",{src:r,alt:""}),Object(l.jsx)("p",{children:n})]},t)})}))}),Object(l.jsx)(O,{scroll:i}),Object(l.jsx)("div",{ref:i})]})},g=n(41);var y=function(){var e=Object(g.a)(u),t=Object(s.a)(e,1)[0];return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(v,{}):Object(l.jsx)(h,{})})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.6be81da7.chunk.js.map