(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{R6gs:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var i=t("pMnS"),u=t("dDfN"),a=t("SVse"),c=t("MKJQ"),d=t("sZkV"),r=t("lGQG"),p=t("Oz3r");class b{constructor(n,l,t,o,e,i){this.alertController=n,this.nav=l,this.router=t,this.modalCtr=o,this.firebaseAuthService=e,this.appointmentService=i,this.Appointments=[],this.totalAppointments=4,this.appointmentsDBRef=this.firebaseAuthService.firebaseDB.collection("Appointments"),this.getAppointments()}ngOnInit(){}getAppointments(){this.appointmentService.getAppointments().on("value",n=>{this.Appointments=[],n.forEach(n=>{const l=n.val();l.key=n.key,this.Appointments.push(l)}),console.log(n),console.log(this.Appointments)})}openAppointmentPage(n){let l={queryParams:{special:JSON.stringify({appointmentID:n.key})}};this.router.navigate(["appointment"],l)}newAppointmentPage(){this.router.navigate(["appointment"])}}var _=t("iInd"),s=o.ob({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--blue)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:var(--blue);text-align:center;font-size:18px;font-family:sf_ui_sb;text-transform:capitalize}ion-content[_ngcontent-%COMP%]   .main_lbl[_ngcontent-%COMP%]{font-size:16px;color:var(--blue);font-family:sf_ui_md;display:flex;align-items:center;justify-content:space-between}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]{background-color:var(--div_back);margin-top:10px}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center;padding:11px 0 0}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .date_lbl[_ngcontent-%COMP%]{font-size:14px;color:var(--blue);font-family:sf_ui_md;margin:0}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{color:var(--my_theme);font-family:sf_ui_md;font-size:14px;padding-left:0;padding-top:5px;padding-bottom:0}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .time_l[_ngcontent-%COMP%]{color:var(--blue);margin-bottom:10px}ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]{height:40px;background-color:var(--div_back);padding:0 16px;display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%]{margin:0;width:100%}ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:var(--lht_blue)}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]{display:flex;padding:10px 16px;align-items:center;margin-bottom:10px;margin-top:10px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:16px;color:var(--lht_blue);font-family:sf_ui_md;margin:0;width:50px;text-align:center}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]{display:flex;margin-left:10px;padding:10px 10px 10px 5px;border-radius:5px;box-shadow:0 1px 4px 0 rgba(0,0,0,.16);width:100%}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:58px;width:58px;border-radius:5px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]{padding-left:15px;width:100%;padding-top:3px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;color:var(--blue);font-family:sf_ui_md;margin:0;display:flex;justify-content:space-between;align-items:center}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%]{font-size:12px;color:var(--blue);font-family:sf_ui_md;margin:3px 0}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{font-size:12px;color:var(--lht_blue);font-family:sf_ui_r;margin:0}.stacked-lbl[_ngcontent-%COMP%]{font-size:19px;color:var(--blue);font-family:sf_ui_md;margin:0}ion-fab-button[_ngcontent-%COMP%]{color:var(--ion-color-primary-dark)}"]],data:{}});function g(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,l){var t=o.Lb(l,2,0,n(l,3,0,o.Cb(l.parent,0),l.context.$implicit.time));n(l,2,0,t),n(l,7,0,l.context.$implicit.title);var e=o.Lb(l,9,0,n(l,10,0,o.Cb(l.parent,1),l.context.$implicit.date,"mediumDate"));n(l,9,0,e),n(l,12,0,l.context.$implicit.description)}))}function m(n){return o.Mb(0,[o.Eb(0,u.a,[]),o.Eb(0,a.d,[o.s]),(n()(),o.qb(2,0,null,null,15,"ion-header",[["class","ion-no-border"]],null,null,null,c.cb,c.p)),o.pb(3,49152,null,0,d.B,[o.h,o.k,o.x],null,null),(n()(),o.qb(4,0,null,0,13,"ion-toolbar",[["mode","md"]],null,null,null,c.zb,c.M)),o.pb(5,49152,null,0,d.zb,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.qb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.S,c.f)),o.pb(7,49152,null,0,d.l,[o.h,o.k,o.x],null,null),(n()(),o.qb(8,0,null,0,2,"ion-back-button",[["defaultHref","home"],["icon","chevron-back-outline"],["mode","md"],["text",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Cb(n,10).onClick(t)&&e),e}),c.P,c.c)),o.pb(9,49152,null,0,d.g,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],mode:[2,"mode"],text:[3,"text"]},null),o.pb(10,16384,null,0,d.h,[[2,d.fb],d.Fb],{defaultHref:[0,"defaultHref"]},null),(n()(),o.qb(11,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,c.S,c.f)),o.pb(12,49152,null,0,d.l,[o.h,o.k,o.x],null,null),(n()(),o.qb(13,0,null,0,1,"ion-menu-button",[],null,null,null,c.jb,c.x)),o.pb(14,49152,null,0,d.R,[o.h,o.k,o.x],null,null),(n()(),o.qb(15,0,null,0,2,"ion-title",[],null,null,null,c.xb,c.K)),o.pb(16,49152,null,0,d.xb,[o.h,o.k,o.x],null,null),(n()(),o.Kb(-1,0,["Appointments"])),(n()(),o.qb(18,0,null,null,14,"ion-content",[["class","ion-padding-bottom"]],null,null,null,c.W,c.j)),o.pb(19,49152,null,0,d.u,[o.h,o.k,o.x],null,null),(n()(),o.qb(20,0,null,0,4,"div",[["class","head_div"]],null,null,null,null,null)),(n()(),o.qb(21,0,null,null,3,"h3",[["class","main_lbl head_lbl"]],null,null,null,null,null)),(n()(),o.Kb(-1,null,["Next appointments "])),(n()(),o.qb(23,0,null,null,1,"span",[["class","ion-float-right"]],null,null,null,null,null)),(n()(),o.Kb(24,null,["Total: ",""])),(n()(),o.fb(16777216,null,0,1,null,g)),o.pb(26,278528,null,0,a.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.qb(27,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.newAppointmentPage()&&o),o}),c.Z,c.l)),o.pb(28,49152,null,0,d.w,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),o.qb(29,0,null,0,3,"ion-fab-button",[],null,null,null,c.Y,c.m)),o.pb(30,49152,null,0,d.x,[o.h,o.k,o.x],null,null),(n()(),o.qb(31,0,null,0,1,"ion-icon",[["name","calendar-outline"]],null,null,null,c.db,c.q)),o.pb(32,49152,null,0,d.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,5,0,"md"),n(l,9,0,"home","chevron-back-outline","md",""),n(l,10,0,"home"),n(l,26,0,t.Appointments),n(l,28,0,"end","bottom"),n(l,32,0,"calendar-outline")}),(function(n,l){n(l,24,0,l.component.totalAppointments)}))}function f(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,1,"app-calendar",[],null,null,null,m,s)),o.pb(1,114688,null,0,b,[d.a,d.Fb,_.m,d.Eb,r.a,p.a],null,null)],(function(n,l){n(l,1,0)}),null)}var v=o.mb("app-calendar",b,f,{},{},[]),C=t("s7LF"),M=t("iTUp");class P{}t.d(l,"CalendarPageModuleNgFactory",(function(){return O}));var O=o.nb(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Y,[[8,[i.a,v]],[3,o.j],o.v]),o.Ab(4608,a.l,a.k,[o.s,[2,a.r]]),o.Ab(4608,C.o,C.o,[]),o.Ab(4608,d.b,d.b,[o.x,o.g]),o.Ab(4608,d.Eb,d.Eb,[d.b,o.j,o.p]),o.Ab(4608,d.Hb,d.Hb,[d.b,o.j,o.p]),o.Ab(1073742336,a.b,a.b,[]),o.Ab(1073742336,M.a,M.a,[]),o.Ab(1073742336,C.n,C.n,[]),o.Ab(1073742336,C.e,C.e,[]),o.Ab(1073742336,d.Bb,d.Bb,[]),o.Ab(1073742336,_.o,_.o,[[2,_.t],[2,_.m]]),o.Ab(1073742336,P,P,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,_.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);