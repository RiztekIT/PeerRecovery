function _defineProperties(n,l){for(var t=0;t<l.length;t++){var o=l[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4HZI":function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=function n(){_classCallCheck(this,n)},u=t("pMnS"),i=t("MKJQ"),r=t("sZkV"),a=t("s7LF"),c=t("SVse"),s=t("lGQG"),g=t("sjK5"),d=function(){function n(l,t,o,e){_classCallCheck(this,n),this.nav=l,this.router=t,this.firebaseAuthService=o,this.chatService=e,this.chats=[],this.group=!1,this.groupusers=[],this.Users=[],this.usersDBRef=this.firebaseAuthService.firebaseDB.collection("messages")}return _createClass(n,[{key:"ngOnInit",value:function(){this.user=JSON.parse(sessionStorage.getItem("user")),this.getUsers()}},{key:"getUsers",value:function(){var n=this;console.log(this.user),this.chatService.getUsers().on("value",(function(l){n.Users=[],l.forEach((function(l){var t=l.val();t.key=l.key,t.key!=n.user.uid&&(console.log(t),console.log(n.user),n.chatService.getRel(n.user,t.key).once("value",(function(l){console.log(l),console.log(l.val()),t.selected=l.val(),l.val()&&n.Users.push(t)})))})),console.log(n.Users)}))}},{key:"openChat",value:function(n){var l=this;this.group||(console.log(n.uid),this.chatService.getChat2(this.user,n.uid).on("value",(function(t){if(console.log(t.val()),console.log(t.key),t.val()){var o=Object.keys(t.val());l.chatService.keymessage=o[0],l.chatService.user2=n,l.nav.navigateForward("/chat2")}else l.chatService.addChat(l.user,n),l.chatService.user2=n,l.nav.navigateForward("/chat2")})))}},{key:"openChatGroup",value:function(){console.log(this.Users),this.groupusers=this.Users.filter((function(n){return 0!=n.isChecked&&n.isChecked})),console.log(this.groupusers),this.chatService.addGroup(this.user,this.namegroup,this.groupusers),this.nav.navigateForward("/chat2")}}]),n}(),b=t("iInd"),C=o.pb({encapsulation:0,styles:[[".main_lbl[_ngcontent-%COMP%]{margin-top:18px;margin-bottom:18px}.newuser[_ngcontent-%COMP%]{margin-bottom:12px}ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--ion-color-primary-dark)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:var(--ion-color-primary-dark);text-align:center;font-size:18px;font-family:sfUi-m;text-transform:capitalize}ion-content[_ngcontent-%COMP%]   .main_lbl[_ngcontent-%COMP%]{font-size:18px;color:var(--ion-color-primary-dark);font-family:sfUi-m}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]{padding-left:16px;display:-webkit-box;overflow-x:auto}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 1px 4px 0 rgba(0,0,0,.16);width:285px;margin:10px 20px 10px 0}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]{display:flex;padding:15px;border-bottom:1px solid;border-bottom-color:var(--ion-color-silver)}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:45px;width:45px;border-radius:50px;border:solid 3px var(--ion-color-white);box-shadow:0 0 4px 0 rgba(0,0,0,.25)}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]{padding-left:15px}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:15px;color:var(--ion-color-primary-dark);font-family:sfUi-m;margin-top:3px;margin-bottom:2px}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .ago[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-primary-light);font-family:sfUi-m;margin:0}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .detail_div[_ngcontent-%COMP%]{padding:15px}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .detail_div[_ngcontent-%COMP%]   .detail_lbl[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-primary-light);font-family:sfUi-m;margin:0}ion-content[_ngcontent-%COMP%]   .newuser[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-content[_ngcontent-%COMP%]   .info_lbl[_ngcontent-%COMP%]{font-size:12px;font-family:sfUi-m;color:var(--ion-color-primary-light)}ion-content[_ngcontent-%COMP%]   .today_div[_ngcontent-%COMP%]{padding:0 16px}ion-content[_ngcontent-%COMP%]   .today_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0;--inner-padding-end:0}ion-content[_ngcontent-%COMP%]   .today_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{height:55px;width:55px}ion-content[_ngcontent-%COMP%]   .today_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:solid 3px var(--ion-color-white);box-shadow:0 0 3px 0 rgba(31,140,237,.3)}ion-content[_ngcontent-%COMP%]   .today_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:15px;font-family:sfUi-m;color:var(--ion-color-primary-dark)}ion-content[_ngcontent-%COMP%]   .today_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;font-family:sfUi-r;color:var(--ion-color-primary-dark)}ion-content[_ngcontent-%COMP%]   .today_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{font-size:13px;font-family:sfUi-m;color:var(--ion-color-primary-light)}"]],data:{}});function h(n){return o.Mb(0,[(n()(),o.rb(0,0,null,null,8,"ion-item",[],null,null,null,i.hb,i.t)),o.qb(1,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(n()(),o.rb(2,0,null,0,6,"ion-input",[["placeholder","Group Name"],["style","font-size: 20px !important;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var e=!0,u=n.component;return"ionBlur"===l&&(e=!1!==o.Cb(n,3)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Cb(n,3)._handleInputEvent(t.target)&&e),"ngModelChange"===l&&(e=!1!==(u.namegroup=t)&&e),e}),i.gb,i.s)),o.qb(3,4341760,null,0,r.Nb,[o.p,o.k],null,null),o.Hb(1024,null,a.f,(function(n){return[n]}),[r.Nb]),o.qb(5,671744,null,0,a.k,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Hb(2048,null,a.g,null,[a.k]),o.qb(7,16384,null,0,a.h,[[4,a.g]],null,null),o.qb(8,49152,null,0,r.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"]},null)],(function(n,l){n(l,5,0,l.component.namegroup),n(l,8,0,"Group Name")}),(function(n,l){n(l,2,0,o.Cb(l,7).ngClassUntouched,o.Cb(l,7).ngClassTouched,o.Cb(l,7).ngClassPristine,o.Cb(l,7).ngClassDirty,o.Cb(l,7).ngClassValid,o.Cb(l,7).ngClassInvalid,o.Cb(l,7).ngClassPending)}))}function p(n){return o.Mb(0,[(n()(),o.rb(0,0,null,null,6,"ion-checkbox",[["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var e=!0;return"ionBlur"===l&&(e=!1!==o.Cb(n,1)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Cb(n,1)._handleIonChange(t.target)&&e),"ngModelChange"===l&&(e=!1!==(n.parent.context.$implicit.isChecked=t)&&e),e}),i.V,i.h)),o.qb(1,4341760,null,0,r.c,[o.p,o.k],null,null),o.Hb(1024,null,a.f,(function(n){return[n]}),[r.c]),o.qb(3,671744,null,0,a.k,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Hb(2048,null,a.g,null,[a.k]),o.qb(5,16384,null,0,a.h,[[4,a.g]],null,null),o.qb(6,49152,null,0,r.r,[o.h,o.k,o.x],{color:[0,"color"]},null)],(function(n,l){n(l,3,0,l.parent.context.$implicit.isChecked),n(l,6,0,"primary")}),(function(n,l){n(l,0,0,o.Cb(l,5).ngClassUntouched,o.Cb(l,5).ngClassTouched,o.Cb(l,5).ngClassPristine,o.Cb(l,5).ngClassDirty,o.Cb(l,5).ngClassValid,o.Cb(l,5).ngClassInvalid,o.Cb(l,5).ngClassPending)}))}function f(n){return o.Mb(0,[(n()(),o.rb(0,0,null,null,12,"ion-item",[["lines","full"],["mode","md"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openChat(n.context.$implicit)&&o),o}),i.hb,i.t)),o.qb(1,49152,null,0,r.H,[o.h,o.k,o.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(n()(),o.rb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,i.P,i.b)),o.qb(3,49152,null,0,r.f,[o.h,o.k,o.x],null,null),(n()(),o.rb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.rb(5,0,null,0,5,"ion-label",[],null,null,null,i.ib,i.u)),o.qb(6,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(n()(),o.rb(7,0,null,0,1,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(8,null,["",""])),(n()(),o.rb(9,0,null,0,1,"p",[["class","detail"]],null,null,null,null,null)),(n()(),o.Kb(10,null,["",""])),(n()(),o.gb(16777216,null,0,1,null,p)),o.qb(12,16384,null,0,c.k,[o.O,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,1,0,"full","md"),n(l,12,0,t.group)}),(function(n,l){n(l,4,0,null==l.context.$implicit?null:l.context.$implicit.photoUrl),n(l,8,0,null==l.context.$implicit?null:l.context.$implicit.displayName),n(l,10,0,null==l.context.$implicit?null:l.context.$implicit.email)}))}function m(n){return o.Mb(0,[(n()(),o.rb(0,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openChatGroup()&&o),o}),i.bb,i.l)),o.qb(1,49152,null,0,r.w,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),o.rb(2,0,null,0,3,"ion-fab-button",[],null,null,null,i.Z,i.m)),o.qb(3,49152,null,0,r.x,[o.h,o.k,o.x],null,null),(n()(),o.rb(4,0,null,0,1,"ion-icon",[["name","add-circle-outline"]],null,null,null,i.fb,i.r)),o.qb(5,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"end","bottom"),n(l,5,0,"add-circle-outline")}),null)}function _(n){return o.Mb(0,[(n()(),o.rb(0,0,null,null,15,"ion-header",[["class","ion-no-border"]],null,null,null,i.eb,i.q)),o.qb(1,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(n()(),o.rb(2,0,null,0,13,"ion-toolbar",[["mode","md"]],null,null,null,i.Bb,i.N)),o.qb(3,49152,null,0,r.zb,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.T,i.f)),o.qb(5,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(n()(),o.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","home"],["icon","chevron-back-outline"],["mode","md"],["text",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Cb(n,8).onClick(t)&&e),e}),i.Q,i.c)),o.qb(7,49152,null,0,r.g,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],mode:[2,"mode"],text:[3,"text"]},null),o.qb(8,16384,null,0,r.h,[[2,r.fb],r.Gb,r.d],{defaultHref:[0,"defaultHref"]},null),(n()(),o.rb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,i.T,i.f)),o.qb(10,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(n()(),o.rb(11,0,null,0,1,"ion-menu-button",[],null,null,null,i.lb,i.y)),o.qb(12,49152,null,0,r.R,[o.h,o.k,o.x],null,null),(n()(),o.rb(13,0,null,0,2,"ion-title",[],null,null,null,i.zb,i.L)),o.qb(14,49152,null,0,r.xb,[o.h,o.k,o.x],null,null),(n()(),o.Kb(-1,0,["chat"])),(n()(),o.rb(16,0,null,null,19,"ion-content",[["class","ion-padding-bottom"]],null,null,null,i.X,i.j)),o.qb(17,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.rb(18,0,null,0,10,"ion-item",[],null,null,null,i.hb,i.t)),o.qb(19,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(n()(),o.rb(20,0,null,0,1,"h3",[["class","main_lbl ion-padding-start"]],null,null,null,null,null)),(n()(),o.Kb(-1,null,["New chat with:"])),(n()(),o.rb(22,0,null,0,6,"ion-toggle",[["color","primary"],["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var e=!0,u=n.component;return"ionBlur"===l&&(e=!1!==o.Cb(n,23)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Cb(n,23)._handleIonChange(t.target)&&e),"ngModelChange"===l&&(e=!1!==(u.group=t)&&e),e}),i.Ab,i.M)),o.qb(23,4341760,null,0,r.c,[o.p,o.k],null,null),o.Hb(1024,null,a.f,(function(n){return[n]}),[r.c]),o.qb(25,671744,null,0,a.k,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Hb(2048,null,a.g,null,[a.k]),o.qb(27,16384,null,0,a.h,[[4,a.g]],null,null),o.qb(28,49152,null,0,r.yb,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.gb(16777216,null,0,1,null,h)),o.qb(30,16384,null,0,c.k,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.rb(31,0,null,0,2,"div",[["class","today_div"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,f)),o.qb(33,278528,null,0,c.j,[o.O,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.gb(16777216,null,0,1,null,m)),o.qb(35,16384,null,0,c.k,[o.O,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"md"),n(l,7,0,"home","chevron-back-outline","md",""),n(l,8,0,"home"),n(l,25,0,t.group),n(l,28,0,"primary"),n(l,30,0,t.group),n(l,33,0,t.Users),n(l,35,0,t.group)}),(function(n,l){n(l,22,0,o.Cb(l,27).ngClassUntouched,o.Cb(l,27).ngClassTouched,o.Cb(l,27).ngClassPristine,o.Cb(l,27).ngClassDirty,o.Cb(l,27).ngClassValid,o.Cb(l,27).ngClassInvalid,o.Cb(l,27).ngClassPending)}))}var v=o.nb("app-chat-list",d,(function(n){return o.Mb(0,[(n()(),o.rb(0,0,null,null,1,"app-chat-list",[],null,null,null,_,C)),o.qb(1,114688,null,0,d,[r.Gb,b.m,s.a,g.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),M=function n(){_classCallCheck(this,n)};t.d(l,"ChatUsersListPageModuleNgFactory",(function(){return P}));var P=o.ob(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Z,[[8,[u.a,v]],[3,o.j],o.v]),o.Ab(4608,c.m,c.l,[o.s,[2,c.v]]),o.Ab(4608,a.o,a.o,[]),o.Ab(4608,r.b,r.b,[o.x,o.g]),o.Ab(4608,r.Fb,r.Fb,[r.b,o.j,o.p]),o.Ab(4608,r.Jb,r.Jb,[r.b,o.j,o.p]),o.Ab(1073742336,c.c,c.c,[]),o.Ab(1073742336,a.n,a.n,[]),o.Ab(1073742336,a.e,a.e,[]),o.Ab(1073742336,r.Bb,r.Bb,[]),o.Ab(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),o.Ab(1073742336,M,M,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,b.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);