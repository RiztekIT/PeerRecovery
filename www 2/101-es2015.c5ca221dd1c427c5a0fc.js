(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{CzNJ:function(n,l,o){"use strict";o.r(l);var t=o("8Y7J");class e{}var i=o("pMnS"),a=o("MKJQ"),c=o("sZkV"),r=o("mrSG"),u=o("2Rin"),s=o("AytR"),b=o("lGQG"),h=o("Pn9U"),g=o("rKbp"),d=o("jBiw");class m{constructor(n,l,o,t,e,i,a,c){this.route=n,this.router=l,this.camera=o,this.util=t,this.alertController=e,this.authSVC=i,this.cameraPreview=a,this.zoomService=c,this.SDK_KEY="xqvI8YnZzEcm2wr4U0DYUl7eB90sPD2iiBjQ",this.SDK_SECRET="iQWxlbFuiEzn4zIJjP1xK1rAYS07uMmgTCiN",this.zoom=12,this.lat=28.6532358,this.lng=-106.0991318,this.styles=s.b,this.markers=[{img:this.authSVC.usersign.photoURL,select:!0,isOpen:!0,lat:28.6532358,lng:-106.0991318}],this.route.queryParams.subscribe(n=>{n&&n.special&&(this.callData=JSON.parse(n.special),console.log(this.callData))})}ngOnInit(){this.initZoom()}openCamera(){const n={quality:100,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE};console.log(n),this.camera.getPicture(n).then(n=>{console.log(n);let l="data:image/jpeg;base64,"+n;console.log(l),this.img=l},n=>{})}openCam(){console.log("CAMARA"),this.startCamera()}onMarkerSelect(n){return r.b(this,void 0,void 0,(function*(){n.isOpen&&(yield this.markers.forEach(n=>{n.select=!1}),n.select=yield!0)}))}presentAlert(){return r.b(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",message:"Do you want to share your courrent location?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:n=>{console.log("Confirm Cancel: blah")}},{text:"Share!",handler:()=>{console.log("Confirm Okay")}}]});yield n.present()}))}startCamera(){let n=document.getElementById("video");const l={x:0,y:0,width:+n.getAttribute("width"),height:+n.getAttribute("heigth"),camera:"rear",tapPhoto:!0,previewDrag:!0,toBack:!1,alpha:1};this.cameraPreview.startCamera(l).then(n=>{console.log(n)},n=>{console.log(n)})}startVideo(){var n={cameraDirection:"BACK",width:window.screen.width/2,height:window.screen.height/2,quality:60,withFlash:!1};this.cameraPreview.startRecordVideo(n).then(n=>{console.log(n)})}recordVideo(){}initZoom(){this.zoomService.initialize(this.SDK_KEY,this.SDK_SECRET).then(n=>{console.log(n),this.loginZoom()}).catch(n=>console.log(n))}joinMeeting(){this.zoomService.joinMeeting("74695593469","phc5T9","CEL PEERRCOVERY",{no_driving_mode:!0,no_invite:!0,no_meeting_end_message:!0,no_titlebar:!1,no_bottom_toolbar:!1,no_dial_in_via_phone:!0,no_dial_out_to_phone:!0,no_disconnect_audio:!0,no_share:!0,no_audio:!0,no_video:!0,no_meeting_error_message:!0}).then(n=>console.log(n)).catch(n=>console.log(n))}initMeeting2(){let n="ivan.talamantes@live.com";console.log(n),this.zoomService.startMeetingWithZAK("123456789","CEL PEERRCOVERY","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw",n,{no_driving_mode:!0,no_invite:!0,no_meeting_end_message:!0,no_titlebar:!1,no_bottom_toolbar:!1,no_dial_in_via_phone:!0,no_dial_out_to_phone:!0,no_disconnect_audio:!0,no_share:!0,no_audio:!0,no_video:!0,no_meeting_error_message:!0}).then(n=>console.log(n)).catch(n=>console.log(n))}loginZoom(){this.zoomService.login("losarcoscongregacion2020@gmail.com","LosArcos2020.").then(n=>console.log(n)).catch(n=>console.log(n))}initMeeting(){this.zoomService.startInstantMeeting({no_driving_mode:!0,no_invite:!0,no_meeting_end_message:!0,no_titlebar:!1,no_bottom_toolbar:!1,no_dial_in_via_phone:!0,no_dial_out_to_phone:!0,no_disconnect_audio:!0,no_share:!0,no_audio:!0,no_video:!0,no_meeting_error_message:!0}).then(n=>console.log(n)).catch(n=>console.log(n))}}var _=o("iInd"),p=t.ob({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--ion-color-primary-dark)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:var(--ion-color-primary-dark);text-align:center;font-size:18px;font-family:sfUi-m;text-transform:capitalize}.call-red[_ngcontent-%COMP%]{float:left;margin-top:25px}.call-green[_ngcontent-%COMP%]{float:right;margin-top:25px}.avatar[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}ion-avatar[_ngcontent-%COMP%]{height:80px;width:80px}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;width:80px;border-radius:50%;border:2px solid var(--ion-color-white)}#background-content[_ngcontent-%COMP%]{background-color:red!important}ion-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]{position:absolute;bottom:0;margin:16px;width:91%}.pt-5[_ngcontent-%COMP%]{padding-top:10px}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%], ion-app[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{background-color:transparent}.video[_ngcontent-%COMP%]{background-color:#0ff;position:absolute;top:0;margin:16px;width:91%}"]],data:{}});function v(n){return t.Mb(0,[t.Ib(402653184,1,{search:0}),(n()(),t.qb(1,0,null,null,32,"ion-content",[],null,null,null,a.W,a.j)),t.pb(2,49152,null,0,c.u,[t.h,t.k,t.x],null,null),(n()(),t.qb(3,0,null,0,4,"ion-buttons",[],null,null,null,a.S,a.f)),t.pb(4,49152,null,0,c.l,[t.h,t.k,t.x],null,null),(n()(),t.qb(5,0,null,0,2,"ion-back-button",[["defaultHref","home"],["icon","chevron-back-outline"],["mode","md"],["text",""]],null,[[null,"click"]],(function(n,l,o){var e=!0;return"click"===l&&(e=!1!==t.Cb(n,7).onClick(o)&&e),e}),a.P,a.c)),t.pb(6,49152,null,0,c.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],mode:[2,"mode"],text:[3,"text"]},null),t.pb(7,16384,null,0,c.h,[[2,c.fb],c.Fb],{defaultHref:[0,"defaultHref"]},null),(n()(),t.qb(8,0,null,0,2,"div",[["class","video"],["id","video"]],null,null,null,null,null)),(n()(),t.qb(9,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Kb(-1,null,[" hola "])),(n()(),t.qb(11,0,null,0,21,"div",[["class","bottom-content"]],null,null,null,null,null)),(n()(),t.qb(12,0,null,null,20,"ion-grid",[],null,null,null,a.bb,a.o)),t.pb(13,49152,null,0,c.A,[t.h,t.k,t.x],null,null),(n()(),t.qb(14,0,null,0,18,"ion-row",[],null,null,null,a.pb,a.C)),t.pb(15,49152,null,0,c.gb,[t.h,t.k,t.x],null,null),(n()(),t.qb(16,0,null,0,5,"ion-col",[],null,null,null,a.V,a.i)),t.pb(17,49152,null,0,c.t,[t.h,t.k,t.x],null,null),(n()(),t.qb(18,0,null,0,3,"ion-fab-button",[["class","call-green"],["d",""]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.openCam()&&t),t}),a.Y,a.m)),t.pb(19,49152,null,0,c.x,[t.h,t.k,t.x],null,null),(n()(),t.qb(20,0,null,0,1,"ion-icon",[["name","call-outline"]],null,null,null,a.db,a.q)),t.pb(21,49152,null,0,c.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.qb(22,0,null,0,4,"ion-col",[],null,null,null,a.V,a.i)),t.pb(23,49152,null,0,c.t,[t.h,t.k,t.x],null,null),(n()(),t.qb(24,0,null,0,2,"ion-avatar",[["class","avatar"]],null,null,null,a.O,a.b)),t.pb(25,49152,null,0,c.f,[t.h,t.k,t.x],null,null),(n()(),t.qb(26,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.qb(27,0,null,0,5,"ion-col",[],null,null,null,a.V,a.i)),t.pb(28,49152,null,0,c.t,[t.h,t.k,t.x],null,null),(n()(),t.qb(29,0,null,0,3,"ion-fab-button",[["class","call-red"],["color","danger"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.initMeeting()&&t),t}),a.Y,a.m)),t.pb(30,49152,null,0,c.x,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.qb(31,0,null,0,1,"ion-icon",[["name","call-outline"]],null,null,null,a.db,a.q)),t.pb(32,49152,null,0,c.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.qb(33,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],(function(n,l){n(l,6,0,"home","chevron-back-outline","md",""),n(l,7,0,"home"),n(l,21,0,"call-outline"),n(l,30,0,"danger"),n(l,32,0,"call-outline")}),(function(n,l){var o=l.component;n(l,26,0,o.callData.photoUrl),n(l,33,0,o.img)}))}function C(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,1,"app-call",[],null,null,null,v,p)),t.pb(1,114688,null,0,m,[_.a,_.m,h.a,u.a,c.a,b.a,g.a,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var x=t.mb("app-call",m,C,{},{},[]),f=o("SVse"),M=o("s7LF"),k=o("LSHg"),w=o("KJxK");class y{}o.d(l,"CallPageModuleNgFactory",(function(){return A}));var A=t.nb(e,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[i.a,x]],[3,t.j],t.v]),t.Ab(4608,f.l,f.k,[t.s,[2,f.r]]),t.Ab(4608,M.o,M.o,[]),t.Ab(4608,c.b,c.b,[t.x,t.g]),t.Ab(4608,c.Eb,c.Eb,[c.b,t.j,t.p]),t.Ab(4608,c.Hb,c.Hb,[c.b,t.j,t.p]),t.Ab(4608,k.r,k.r,[]),t.Ab(4608,k.s,k.s,[]),t.Ab(4608,k.l,k.k,[[2,k.i],k.r,k.s,t.s]),t.Ab(1073742336,f.b,f.b,[]),t.Ab(1073742336,M.n,M.n,[]),t.Ab(1073742336,M.e,M.e,[]),t.Ab(1073742336,c.Bb,c.Bb,[]),t.Ab(1073742336,w.b,w.b,[]),t.Ab(1073742336,k.a,k.a,[]),t.Ab(1073742336,_.o,_.o,[[2,_.t],[2,_.m]]),t.Ab(1073742336,y,y,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,_.k,(function(){return[[{path:"",component:m}]]}),[]),t.Ab(256,k.i,{apiKey:""},[])])}))}}]);