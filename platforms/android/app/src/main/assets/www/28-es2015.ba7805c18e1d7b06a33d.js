(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{hlDB:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J");class o{}var e=u("pMnS"),i=u("MKJQ"),s=u("sZkV"),r=u("SVse"),b=u("2Rin");class a{constructor(n,l){this.util=n,this.router=l,this.activeIndex=0,this.slideOpts={speed:400,autoplay:{delay:200}}}ngOnInit(){this.usersign=JSON.parse(sessionStorage.getItem("user"))}onSlideChange(){this.slides.getActiveIndex().then(n=>{this.activeIndex=n})}goToHome(){console.log("home"),console.log(this.usersign,"home"),this.util.navCtrl.navigateRoot("/home")}}var c=u("iInd"),g=t.pb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:transparent}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{--icon-font-size:27px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:86%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{width:80%;display:block}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:18vh;font-family:sfUi-sb;color:var(--ion-color-primary-dark);font-size:22px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5;color:var(--ion-color-primary-light);font-size:14px;font-family:sfUi-r}ion-content[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%]{position:absolute;right:0;margin:0;--border-radius:20px 0 0px 20px;width:105px;height:40px}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:80%;height:auto;max-height:100%;margin-top:40px}"]],data:{}});function d(n){return t.Mb(0,[(n()(),t.rb(0,0,null,null,2,"ion-button",[["class","start-btn"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.goToHome()&&t),t}),i.S,i.e)),t.qb(1,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(n()(),t.Kb(-1,0,[" Start "]))],null,null)}function h(n){return t.Mb(0,[t.Ib(402653184,1,{slides:0}),(n()(),t.rb(1,0,null,null,10,"ion-header",[["class","ion-no-border"]],null,null,null,i.eb,i.q)),t.qb(2,49152,null,0,s.B,[t.h,t.k,t.x],null,null),(n()(),t.rb(3,0,null,0,8,"ion-toolbar",[],null,null,null,i.Bb,i.N)),t.qb(4,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(n()(),t.rb(5,0,null,0,6,"ion-buttons",[["class","margin-top-24"]],null,null,null,i.T,i.f)),t.qb(6,49152,null,0,s.l,[t.h,t.k,t.x],null,null),(n()(),t.rb(7,0,null,0,4,"ion-button",[],null,null,null,i.S,i.e)),t.qb(8,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(n()(),t.rb(9,0,null,0,2,"ion-back-button",[["defaultHref","signIn"],["icon","chevron-back-outline"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.Cb(n,11).onClick(u)&&o),o}),i.Q,i.c)),t.qb(10,49152,null,0,s.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"],icon:[1,"icon"]},null),t.qb(11,16384,null,0,s.h,[[2,s.fb],s.Gb,s.d],{defaultHref:[0,"defaultHref"]},null),(n()(),t.rb(12,0,null,null,29,"ion-content",[["class","ion-padding"]],null,null,null,i.X,i.j)),t.qb(13,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(n()(),t.rb(14,0,null,0,25,"ion-slides",[["pager","true"]],null,[[null,"ionSlideTransitionStart"]],(function(n,l,u){var t=!0;return"ionSlideTransitionStart"===l&&(t=!1!==n.component.onSlideChange()&&t),t}),i.vb,i.H)),t.qb(15,49152,[[1,4],["slides",4]],0,s.ob,[t.h,t.k,t.x],{pager:[0,"pager"]},null),(n()(),t.rb(16,0,null,0,7,"ion-slide",[],null,null,null,i.ub,i.G)),t.qb(17,49152,null,0,s.nb,[t.h,t.k,t.x],null,null),(n()(),t.rb(18,0,null,0,5,"div",[["class","slide"]],null,null,null,null,null)),(n()(),t.rb(19,0,null,null,0,"img",[["src","../../../assets/imgs/slides/slide6.svg"]],null,null,null,null,null)),(n()(),t.rb(20,0,null,null,1,"h2",[["class","margin-bottom-23"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,["Chat 24/7 "])),(n()(),t.rb(22,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Kb(-1,null,[" Be in contact with your mentor all time "])),(n()(),t.rb(24,0,null,0,7,"ion-slide",[],null,null,null,i.ub,i.G)),t.qb(25,49152,null,0,s.nb,[t.h,t.k,t.x],null,null),(n()(),t.rb(26,0,null,0,5,"div",[["class","slide"]],null,null,null,null,null)),(n()(),t.rb(27,0,null,null,0,"img",[["src","../../../assets/imgs/slides/slide7.svg"]],null,null,null,null,null)),(n()(),t.rb(28,0,null,null,1,"h2",[["class","margin-bottom-23"],["style","margin-top: 28vh;"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,["Mentoring Program"])),(n()(),t.rb(30,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Kb(-1,null,[" Get goals and meet them with your mentor. "])),(n()(),t.rb(32,0,null,0,7,"ion-slide",[],null,null,null,i.ub,i.G)),t.qb(33,49152,null,0,s.nb,[t.h,t.k,t.x],null,null),(n()(),t.rb(34,0,null,0,5,"div",[["class","slide"]],null,null,null,null,null)),(n()(),t.rb(35,0,null,null,0,"img",[["src","../../../assets/imgs/slides/slide3.svg"]],null,null,null,null,null)),(n()(),t.rb(36,0,null,null,1,"h2",[["class","margin-bottom-23"],["style","margin-top: 20vh;"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,["Mentoring Program"])),(n()(),t.rb(38,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Kb(-1,null,[" Welcome! "])),(n()(),t.gb(16777216,null,0,1,null,d)),t.qb(41,16384,null,0,r.k,[t.O,t.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,10,0,"signIn","chevron-back-outline"),n(l,11,0,"signIn"),n(l,15,0,"true"),n(l,41,0,2==u.activeIndex)}),null)}function p(n){return t.Mb(0,[(n()(),t.rb(0,0,null,null,1,"app-on-boarding",[],null,null,null,h,g)),t.qb(1,114688,null,0,a,[b.a,c.m],null,null)],(function(n,l){n(l,1,0)}),null)}var m=t.nb("app-on-boarding",a,p,{},{},[]),M=u("s7LF");class f{}u.d(l,"OnBoardingPageModuleNgFactory",(function(){return C}));var C=t.ob(o,[],(function(n){return t.zb([t.Ab(512,t.j,t.Z,[[8,[e.a,m]],[3,t.j],t.v]),t.Ab(4608,r.m,r.l,[t.s,[2,r.v]]),t.Ab(4608,M.o,M.o,[]),t.Ab(4608,s.b,s.b,[t.x,t.g]),t.Ab(4608,s.Fb,s.Fb,[s.b,t.j,t.p]),t.Ab(4608,s.Jb,s.Jb,[s.b,t.j,t.p]),t.Ab(1073742336,r.c,r.c,[]),t.Ab(1073742336,M.n,M.n,[]),t.Ab(1073742336,M.e,M.e,[]),t.Ab(1073742336,s.Bb,s.Bb,[]),t.Ab(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Ab(1073742336,f,f,[]),t.Ab(1073742336,o,o,[]),t.Ab(1024,c.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);