(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(e,t,s)=>{const r=`${e*t/s-e}ms`,a=2*Math.PI*t/s;return{r:5,style:{top:`${9*Math.sin(a)}px`,left:`${9*Math.cos(a)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,s)=>{const r=t/s,a=`${e*r-e}ms`,i=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":a}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/s-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/s-e}ms`}})}}},KwJk:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return i})),s.d(t,"c",(function(){return r})),s.d(t,"d",(function(){return o}));const r=(e,t)=>null!==t.closest(e),a=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},n=/^[a-z][a-z0-9+\-.]*:/,o=async(e,t,s)=>{if(null!=e&&"#"!==e[0]&&!n.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,s)}return!1}},NqGI:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return a}));const r=async(e,t,s,r,a)=>{if(e)return e.attachViewToDom(t,s,a,r);if("string"!=typeof s&&!(s instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof s?t.ownerDocument&&t.ownerDocument.createElement(s):s;return r&&r.forEach(e=>i.classList.add(e)),a&&Object.assign(i,a),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},a=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Oz3r:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("lGQG"),a=s("JZFu"),i=s("8Y7J");let n=(()=>{class e{constructor(e){this.firebaseAuthService=e}getAppointment(e){return a.a.database().ref("Appointments").child(e)}updateAppointment(e,t){return a.a.database().ref("Appointments").child(e).update(t)}getAppointments(){return a.a.database().ref("Appointments/").orderByChild("userID").equalTo(this.firebaseAuthService.usersign.uid)}postAppointment(e){var t=this.firebaseAuthService.usersign.uid+"_"+Date.now();a.a.database().ref("/Appointments/"+t).set(e)}}return e.ngInjectableDef=i.Pb({factory:function(){return new e(i.Qb(r.a))},token:e,providedIn:"root"}),e})()},TPCJ:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return a})),s("lGQG"),s("sjK5");const r=e=>{const t=[];return e.forEach(e=>{const s=e.val();s.key=e.key,t.push(s)}),t};class a{constructor(e,t,s,r){this.nav=e,this.router=t,this.firebaseAuthService=s,this.chatService=r,this.users=[],this.chats=[],this.group=!1,this.groupusers=[],this.usersDBRef=this.firebaseAuthService.firebaseDB.collection("messages")}ngOnInit(){this.getUsers()}getUsers(){this.chatService.getUsers().orderByChild("type").equalTo("User").on("value",e=>{const t=r(e);console.log(t),this.users=t,this.users=this.users.filter(e=>e.uid!=this.firebaseAuthService.usersign.uid)})}openChat(e){this.group||(console.log(e.uid),this.chatService.getChat().orderByChild(e.uid).equalTo("true").once("value",t=>{console.log(t);const s=r(t);if(console.log(s),s.length>0)s.forEach(t=>{console.log(t);let r=Object.keys(t).filter(e=>e!=this.firebaseAuthService.usersign.uid&&"key"!=e);if(console.log(r),1==r.length)localStorage.setItem("user2",JSON.stringify(e)),localStorage.setItem("idchat",s[0].key),this.nav.navigateForward("/chat");else{localStorage.setItem("user2",JSON.stringify(e));let t=this.chatService.newChat(e);localStorage.setItem("idchat",t),this.nav.navigateForward("/chat")}});else{localStorage.setItem("user2",JSON.stringify(e));let t=this.chatService.newChat(e);localStorage.setItem("idchat",t),this.nav.navigateForward("/chat")}}))}openChatGroup(){console.log(this.users),this.groupusers=this.users.filter(e=>0!=e.isChecked&&e.isChecked),console.log(this.groupusers),localStorage.setItem("users2",JSON.stringify({displayName:"chatGroup"}));let e=this.chatService.newChatGroup(this.groupusers);localStorage.setItem("idchat",e),this.nav.navigateForward("/chat")}}},Uwmq:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));const r=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),s=document.createElement("div");t.appendChild(s),s.innerHTML=e,o.forEach(e=>{const s=t.querySelectorAll(e);for(let r=s.length-1;r>=0;r--){const e=s[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const n=i(e);for(let t=0;t<n.length;t++)a(n[t])}});const r=i(t);for(let e=0;e<r.length;e++)a(r[e]);const n=document.createElement("div");n.appendChild(t);const u=n.querySelector("div");return null!==u?u.innerHTML:n.innerHTML}catch(t){return console.error(t),""}},a=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let s=e.attributes.length-1;s>=0;s--){const t=e.attributes.item(s),r=t.name;if(!n.includes(r.toLowerCase())){e.removeAttribute(r);continue}const a=t.value;null!=a&&a.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const t=i(e);for(let s=0;s<t.length;s++)a(t[s])},i=e=>null!=e.children?e.children:e.childNodes,n=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},dDfN:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));class r{transform(e){var t=e.split(":"),s=t[0];return s>=12?e+" PM":"00"==s?"12:"+t[1]+"AM":e+" AM"}}},fzvj:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return i})),s.d(t,"c",(function(){return n})),s.d(t,"d",(function(){return r}));const r=()=>{const e=window.TapticEngine;e&&e.selection()},a=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},n=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}},sjK5:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s("lGQG"),a=s("XNiG"),i=s("JZFu"),n=s("8Y7J");let o=(()=>{class e{constructor(e){this.firebaseAuthService=e,this.subject=new a.a,this.chatsUsers=[],this.users=[]}getUserChats(){return i.a.database().ref(this.firebaseAuthService.usersign.uid+"/members/")}getChatsMembers(e){return i.a.database().ref(this.firebaseAuthService.usersign.uid+"/members/"+e)}getChats(){return i.a.database().ref(this.firebaseAuthService.usersign.uid+"/chats/")}getUser(e){return i.a.database().ref("Users/"+e)}getUsers(){return i.a.database().ref("Users/")}getChat(){return i.a.database().ref(this.firebaseAuthService.usersign.uid+"/members/")}getMessages(e){return i.a.database().ref(this.firebaseAuthService.usersign.uid+"/messages/"+e)}newChat(e){let t={timestamp:new Date,type:"single"},s=i.a.database().ref(this.firebaseAuthService.usersign.uid+"/chats/").push(t).key;return i.a.database().ref(e.uid+"/chats/"+s).set(t),i.a.database().ref("/chats/"+s).set(t),i.a.database().ref(this.firebaseAuthService.usersign.uid+"/members/"+s+"/"+e.uid).set("true"),i.a.database().ref(this.firebaseAuthService.usersign.uid+"/members/"+s+"/"+this.firebaseAuthService.usersign.uid).set("true"),i.a.database().ref(e.uid+"/members/"+s+"/"+e.uid).set("true"),i.a.database().ref(e.uid+"/members/"+s+"/"+this.firebaseAuthService.usersign.uid).set("true"),i.a.database().ref("/members/"+s+"/"+e.uid).set("true"),i.a.database().ref("/members/"+s+"/"+this.firebaseAuthService.usersign.uid).set("true"),s}newMessage(e){console.log(e);let t=JSON.parse(localStorage.getItem("user2"));i.a.database().ref(this.firebaseAuthService.usersign.uid+"/messages/"+localStorage.getItem("idchat")).push(e),i.a.database().ref(t.uid+"/messages/"+localStorage.getItem("idchat")).push(e),i.a.database().ref("/messages/"+localStorage.getItem("idchat")).push(e)}newMessageGroup(e,t){console.log(e),JSON.parse(localStorage.getItem("user2")),i.a.database().ref(this.firebaseAuthService.usersign.uid+"/messages/"+localStorage.getItem("idchat")).push(e),i.a.database().ref("/messages/"+localStorage.getItem("idchat")).push(e),i.a.database().ref("/members/").orderByKey().equalTo(t).on("value",t=>{let s=(e=>{const t=[];return e.forEach(e=>{const s=e.val();t.push(s)}),t})(t);console.log(s),s.forEach(t=>{console.log(t);let s=Object.keys(t).filter(e=>e!=this.firebaseAuthService.usersign.uid&&"key"!=e);console.log(s),s.forEach(t=>{i.a.database().ref(t+"/messages/"+localStorage.getItem("idchat")).push(e)})})})}readChats(){let e=localStorage.getItem("idchat");i.a.database().ref(this.firebaseAuthService.usersign.uid+"/messages/"+e).once("value",t=>{let s=(e=>{const t=[];return e.forEach(e=>{const s=e.val();s.key=e.key,t.push(s)}),t})(t);console.log(s),s.forEach(t=>{t.sender!=this.firebaseAuthService.usersign.uid&&i.a.database().ref(this.firebaseAuthService.usersign.uid+"/messages/"+e+"/"+t.key+"/read").set("true")})})}stopread(){console.log("stop read"),localStorage.getItem("idchat"),i.a.database().ref(this.firebaseAuthService.usersign.uid+"/messages/").off()}unreadChats(e){return i.a.database().ref(this.firebaseAuthService.usersign.uid+"/messages/"+e)}newChatGroup(e){let t={timestamp:new Date,type:"group"};console.log(e);let s=i.a.database().ref(this.firebaseAuthService.usersign.uid+"/chats/").push(t).key;return i.a.database().ref("/chats/"+s).set(t),i.a.database().ref(this.firebaseAuthService.usersign.uid+"/members/"+s+"/"+this.firebaseAuthService.usersign.uid).set("true"),i.a.database().ref("/members/"+s+"/"+this.firebaseAuthService.usersign.uid).set("true"),e.forEach(e=>{i.a.database().ref(e.uid+"/members/"+s+"/"+e.uid).set("true"),i.a.database().ref(e.uid+"/members/"+s+"/"+this.firebaseAuthService.usersign.uid).set("true"),i.a.database().ref("/members/"+s+"/"+e.uid).set("true"),i.a.database().ref(this.firebaseAuthService.usersign.uid+"/members/"+s+"/"+e.uid).set("true"),i.a.database().ref(e.uid+"/chats/"+s).set(t)}),s}}return e.ngInjectableDef=n.Pb({factory:function(){return new e(n.Qb(r.a))},token:e,providedIn:"root"}),e})()}}]);