(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{Wrxl:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),i=t("SVse"),s=t("MKJQ"),a=t("sZkV"),c=t("s7LF"),r=t("lGQG"),b=t("sjK5"),g=t("TPCJ"),h=t("JZFu");class d{constructor(n,l,t,e,o){this.nav=n,this.route=l,this.router=t,this.firebaseAuthService=e,this.chatService=o,this.ID_Chat="",this.message="",this.chatMessages=[]}ngOnInit(){this.getChat(),this.getUserWith(),this.chatService.readChats()}getUserWith(){JSON.parse(localStorage.getItem("user2"))?(this.chatUser=JSON.parse(localStorage.getItem("user2")),console.log(this.chatUser)):(this.chatUser=JSON.parse(localStorage.getItem("users2")),console.log(this.chatUser))}ngOnDestroy(){this.chatService.stopread()}getChat(){console.log(localStorage.getItem("idchat")),this.chatService.getMessages(localStorage.getItem("idchat")).on("value",n=>{let l=Object(g.b)(n);console.log(l),this.chatMessages=l,console.log(this.chatMessages),setTimeout(()=>{this.scrollToBottom()},500)})}sendMessage(){console.log(this.message);let n={message:this.message,sender:this.firebaseAuthService.usersign.uid,read:"false",sent:h.a.firestore.Timestamp.fromDate(new Date)};"chatGroup"!=this.chatUser.displayName?(this.chatService.newMessage(n),this.message=""):(this.chatService.newMessageGroup(n,this.chatUser.uid),this.message="")}goToChatList(){this.nav.navigateBack("/chatList"),localStorage.removeItem("user2"),localStorage.removeItem("users2"),localStorage.removeItem("idchat")}scrollToBottom(){this.content.scrollToBottom(300)}eventoMensaje(n){console.log(n),13==n&&this.sendMessage()}}var p=t("iInd"),m=e.ob({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--blue)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:var(--blue);text-align:center;font-size:18px;font-family:sf_ui_sb;text-transform:capitalize}ion-content[_ngcontent-%COMP%]   .td_lbl[_ngcontent-%COMP%]{font-size:12px;color:var(--blue);font-family:sf_ui_md;text-align:center;margin-top:12px;margin-bottom:12px}ion-content[_ngcontent-%COMP%]   .chat_div[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;align-items:center}ion-content[_ngcontent-%COMP%]   .chat_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:57px;width:57px;border-radius:50%;border:solid 3px var(--white);box-shadow:0 0 5px 0 rgba(31,140,237,.25)}ion-content[_ngcontent-%COMP%]   .chat_div[_ngcontent-%COMP%]   .message_div[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]{width:230px;box-shadow:0 0 3px 0 rgba(0,0,0,.3);padding:15px;margin-left:15px;border-radius:5px}ion-content[_ngcontent-%COMP%]   .chat_div[_ngcontent-%COMP%]   .message_div[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat_lbl[_ngcontent-%COMP%]{font-size:14px;color:var(--blue);font-family:sf_ui_md_i;margin-top:0;margin-bottom:5px}ion-content[_ngcontent-%COMP%]   .chat_div[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:12px;color:var(--lht_blue);font-family:sf_ui_md;margin-top:8px;margin-bottom:0;text-align:end}ion-content[_ngcontent-%COMP%]   .replay_div[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}ion-content[_ngcontent-%COMP%]   .replay_div[_ngcontent-%COMP%]   .message_div[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]{width:250px;margin-right:15px;margin-left:0;background-color:var(--my_theme);box-shadow:none}ion-content[_ngcontent-%COMP%]   .replay_div[_ngcontent-%COMP%]   .message_div[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat_lbl[_ngcontent-%COMP%]{color:var(--white)}ion-content[_ngcontent-%COMP%]   .replay_div[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{text-align:start}ion-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;box-shadow:0 -1px 6px 0 rgba(0,0,0,.2)}ion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}ion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:12px;font-family:rubik_i;color:var(--gray)}ion-footer[_ngcontent-%COMP%]   .send_btn[_ngcontent-%COMP%]{height:50px;width:50px;--background:var(--my_theme);margin:0;--border-radius:0px;min-width:50px;--padding-start:0;--padding-end:0}ion-footer[_ngcontent-%COMP%]   .send_btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:27px;height:27px}"]],data:{}});function _(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,7,"div",[["class","chat_div "]],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,6,"div",[["class","message_div "]],null,null,null,null,null)),(n()(),e.qb(2,0,null,null,2,"div",[["class","chat "]],null,null,null,null,null)),(n()(),e.qb(3,0,null,null,1,"p",[["class","chat_lbl "]],null,null,null,null,null)),(n()(),e.Kb(4,null,["",""])),(n()(),e.qb(5,0,null,null,2,"p",[["class","time "]],null,null,null,null,null)),(n()(),e.Kb(6,null,["",""])),e.Gb(7,2)],null,(function(n,l){n(l,4,0,l.parent.context.$implicit.message);var t=e.Lb(l,6,0,n(l,7,0,e.Cb(l.parent.parent,0),1e3*l.parent.context.$implicit.sent.seconds,"h:mm a"));n(l,6,0,t)}))}function f(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,7,"div",[["class","chat_div replay_div "]],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,6,"div",[["class","message_div "]],null,null,null,null,null)),(n()(),e.qb(2,0,null,null,2,"div",[["class","chat "]],null,null,null,null,null)),(n()(),e.qb(3,0,null,null,1,"p",[["class","chat_lbl "]],null,null,null,null,null)),(n()(),e.Kb(4,null,["",""])),(n()(),e.qb(5,0,null,null,2,"p",[["class","time "]],null,null,null,null,null)),(n()(),e.Kb(6,null,["",""])),e.Gb(7,2)],null,(function(n,l){n(l,4,0,l.parent.context.$implicit.message);var t=e.Lb(l,6,0,n(l,7,0,e.Cb(l.parent.parent,0),1e3*l.parent.context.$implicit.sent.seconds,"h:mm a"));n(l,6,0,t)}))}function C(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,_)),e.pb(2,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,f)),e.pb(4,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0,l.context.$implicit.sender!=t.firebaseAuthService.usersign.uid),n(l,4,0,l.context.$implicit.sender==t.firebaseAuthService.usersign.uid)}),null)}function v(n){return e.Mb(0,[e.Eb(0,i.d,[e.s]),e.Ib(671088640,1,{content:0}),(n()(),e.qb(2,0,null,null,15,"ion-header",[["class","ion-no-border"]],null,null,null,s.cb,s.p)),e.pb(3,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(n()(),e.qb(4,0,null,0,13,"ion-toolbar",[["mode","md"]],null,null,null,s.zb,s.M)),e.pb(5,49152,null,0,a.zb,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.qb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.S,s.f)),e.pb(7,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.qb(8,0,null,0,2,"ion-back-button",[["defaultHref","chatList"],["icon","chevron-back-outline"],["mode","md"],["text",""]],null,[[null,"click"]],(function(n,l,t){var o=!0,u=n.component;return"click"===l&&(o=!1!==e.Cb(n,10).onClick(t)&&o),"click"===l&&(o=!1!==u.goToChatList()&&o),o}),s.P,s.c)),e.pb(9,49152,null,0,a.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],mode:[2,"mode"],text:[3,"text"]},null),e.pb(10,16384,null,0,a.h,[[2,a.fb],a.Fb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.qb(11,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,s.S,s.f)),e.pb(12,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.qb(13,0,null,0,1,"ion-menu-button",[],null,null,null,s.jb,s.x)),e.pb(14,49152,null,0,a.R,[e.h,e.k,e.x],null,null),(n()(),e.qb(15,0,null,0,2,"ion-title",[],null,null,null,s.xb,s.K)),e.pb(16,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["chat"])),(n()(),e.qb(18,0,null,null,7,"ion-header",[],null,null,null,s.cb,s.p)),e.pb(19,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(n()(),e.qb(20,0,null,0,2,"ion-title",[],null,null,null,s.xb,s.K)),e.pb(21,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(22,0,["",""])),(n()(),e.qb(23,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,s.O,s.b)),e.pb(24,49152,null,0,a.f,[e.h,e.k,e.x],null,null),(n()(),e.qb(25,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.qb(26,0,null,null,3,"ion-content",[["class","ion-padding-horizontal"]],null,null,null,s.W,s.j)),e.pb(27,49152,[[1,4],["chatcontent",4]],0,a.u,[e.h,e.k,e.x],{scrollEvents:[0,"scrollEvents"]},null),(n()(),e.fb(16777216,null,0,1,null,C)),e.pb(29,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(30,0,null,null,14,"ion-footer",[["class","ion-no-border "]],null,null,null,s.ab,s.n)),e.pb(31,49152,null,0,a.z,[e.h,e.k,e.x],null,null),(n()(),e.qb(32,0,null,0,8,"ion-item",[["lines","none "],["mode","md"]],null,null,null,s.fb,s.s)),e.pb(33,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(n()(),e.qb(34,0,null,0,6,"ion-input",[["placeholder","Type your message... "]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keypress"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.Cb(n,35)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Cb(n,35)._handleInputEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(u.message=t)&&o),"keypress"===l&&(o=!1!==u.eventoMensaje(t.keyCode)&&o),o}),s.eb,s.r)),e.pb(35,16384,null,0,a.Lb,[e.k],null,null),e.Hb(1024,null,c.f,(function(n){return[n]}),[a.Lb]),e.pb(37,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,c.g,null,[c.k]),e.pb(39,16384,null,0,c.h,[[4,c.g]],null,null),e.pb(40,49152,null,0,a.G,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(n()(),e.qb(41,0,null,0,3,"ion-button",[["class","send_btn"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sendMessage()&&e),e}),s.R,s.e)),e.pb(42,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(n()(),e.qb(43,0,null,0,1,"ion-icon",[["src","../../../assets/image_icon/send.svg "]],null,null,null,s.db,s.q)),e.pb(44,49152,null,0,a.C,[e.h,e.k,e.x],{src:[0,"src"]},null)],(function(n,l){var t=l.component;n(l,5,0,"md"),n(l,9,0,"chatList","chevron-back-outline","md",""),n(l,10,0,"chatList"),n(l,27,0,!0),n(l,29,0,t.chatMessages),n(l,33,0,"none ","md"),n(l,37,0,t.message),n(l,40,0,"Type your message... "),n(l,44,0,"../../../assets/image_icon/send.svg ")}),(function(n,l){var t=l.component;n(l,22,0,t.chatUser.displayName),n(l,25,0,t.chatUser.photoUrl),n(l,34,0,e.Cb(l,39).ngClassUntouched,e.Cb(l,39).ngClassTouched,e.Cb(l,39).ngClassPristine,e.Cb(l,39).ngClassDirty,e.Cb(l,39).ngClassValid,e.Cb(l,39).ngClassInvalid,e.Cb(l,39).ngClassPending)}))}function x(n){return e.Mb(0,[(n()(),e.qb(0,0,null,null,1,"app-chat",[],null,null,null,v,m)),e.pb(1,245760,null,0,d,[a.Fb,p.a,p.m,r.a,b.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=e.mb("app-chat",d,x,{},{},[]);class O{}t.d(l,"ChatPageModuleNgFactory",(function(){return P}));var P=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[u.a,M]],[3,e.j],e.v]),e.Ab(4608,i.l,i.k,[e.s,[2,i.r]]),e.Ab(4608,c.o,c.o,[]),e.Ab(4608,a.b,a.b,[e.x,e.g]),e.Ab(4608,a.Eb,a.Eb,[a.b,e.j,e.p]),e.Ab(4608,a.Hb,a.Hb,[a.b,e.j,e.p]),e.Ab(1073742336,i.b,i.b,[]),e.Ab(1073742336,c.n,c.n,[]),e.Ab(1073742336,c.e,c.e,[]),e.Ab(1073742336,a.Bb,a.Bb,[]),e.Ab(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),e.Ab(1073742336,O,O,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);