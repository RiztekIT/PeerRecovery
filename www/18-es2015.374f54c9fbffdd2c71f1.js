(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{CzNJ:function(l,n,e){"use strict";e.r(n);var o=e("8Y7J");class t{}var i=e("pMnS"),s=e("MKJQ"),a=e("sZkV"),r=e("mrSG"),c=e("2Rin"),u=e("AytR"),h=e("lGQG"),d=e("Pn9U"),g=e("rKbp"),b=e("jBiw"),m=e("+/my"),p=e("JZFu"),v=e("4zgz");class _{constructor(l,n,e,o,t,i,s,a,r,c,h){this.route=l,this.router=n,this.camera=e,this.util=o,this.alertController=t,this.authSVC=i,this.cameraPreview=s,this.videocallSVC=a,this.afDb=r,this.androidPermissions=c,this.zoomService=h,this.SDK_KEY="xqvI8YnZzEcm2wr4U0DYUl7eB90sPD2iiBjQ",this.SDK_SECRET="iQWxlbFuiEzn4zIJjP1xK1rAYS07uMmgTCiN",this.zoom=12,this.lat=28.6532358,this.lng=-106.0991318,this.styles=u.b,this.markers=[{img:this.authSVC.usersign.photoURL,select:!0,isOpen:!0,lat:28.6532358,lng:-106.0991318}],this.callActive=!1,console.log("ENTRO"),this.route.queryParams.subscribe(l=>{console.log(l,"PARAMS"),l&&l.special&&(this.callData=JSON.parse(l.special),this.user=this.callData.user,this.usercall=this.callData.usercall,this.data=this.callData)})}ngOnInit(){console.log(this.data),this.user=JSON.parse(sessionStorage.getItem("user")),this.status="Calling",this.getCall()}openCamera(){const l={quality:100,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE};console.log(l),this.camera.getPicture(l).then(l=>{console.log(l);let n="data:image/jpeg;base64,"+l;console.log(n),this.img=n},l=>{})}openCam(){console.log("CAMARA"),this.openCamera()}onMarkerSelect(l){return r.a(this,void 0,void 0,(function*(){l.isOpen&&(yield this.markers.forEach(l=>{l.select=!1}),l.select=yield!0)}))}presentAlert(){return r.a(this,void 0,void 0,(function*(){const l=yield this.alertController.create({cssClass:"my-custom-class",message:"Do you want to share your courrent location?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:l=>{console.log("Confirm Cancel: blah")}},{text:"Share!",handler:()=>{console.log("Confirm Okay")}}]});yield l.present()}))}startCamera(){let l=document.getElementById("");const n={x:0,y:0,width:+l.getAttribute("width"),height:+l.getAttribute("heigth"),camera:"rear",tapPhoto:!0,previewDrag:!0,toBack:!1,alpha:1};this.cameraPreview.startCamera(n).then(l=>{console.log(l)},l=>{console.log(l)})}startVideo(){var l={cameraDirection:"BACK",width:window.screen.width/2,height:window.screen.height/2,quality:60,withFlash:!1};this.cameraPreview.startRecordVideo(l).then(l=>{console.log(l)})}recordVideo(){}initZoom(){this.zoomService.initialize(this.SDK_KEY,this.SDK_SECRET).then(l=>{console.log(l),this.loginZoom()}).catch(l=>console.log(l))}joinMeeting(){this.zoomService.joinMeeting("74695593469","phc5T9","CEL PEERRCOVERY",{no_driving_mode:!0,no_invite:!0,no_meeting_end_message:!0,no_titlebar:!1,no_bottom_toolbar:!1,no_dial_in_via_phone:!0,no_dial_out_to_phone:!0,no_disconnect_audio:!0,no_share:!0,no_audio:!0,no_video:!0,no_meeting_error_message:!0}).then(l=>console.log(l)).catch(l=>console.log(l))}initMeeting2(){let l="ivan.talamantes@live.com";console.log(l),this.zoomService.startMeetingWithZAK("123456789","CEL PEERRCOVERY","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw",l,{no_driving_mode:!0,no_invite:!0,no_meeting_end_message:!0,no_titlebar:!1,no_bottom_toolbar:!1,no_dial_in_via_phone:!0,no_dial_out_to_phone:!0,no_disconnect_audio:!0,no_share:!0,no_audio:!0,no_video:!0,no_meeting_error_message:!0}).then(l=>console.log(l)).catch(l=>console.log(l))}loginZoom(){this.zoomService.login("losarcoscongregacion2020@gmail.com","LosArcos2020.").then(l=>console.log(l)).catch(l=>console.log(l))}initMeeting(){this.zoomService.startInstantMeeting({no_driving_mode:!0,no_invite:!0,no_meeting_end_message:!0,no_titlebar:!1,no_bottom_toolbar:!1,no_dial_in_via_phone:!0,no_dial_out_to_phone:!0,no_disconnect_audio:!0,no_share:!0,no_audio:!0,no_video:!0,no_meeting_error_message:!0}).then(l=>console.log(l)).catch(l=>console.log(l))}getCall(){this.listener=this.videocallSVC.getCall(this.videocallSVC.keycall).once("value",l=>{console.log(l.val()),this.call();let n=Object.keys(l.val().Members);console.log(n),console.log(l.val().Members[n[0]]),console.log(l.val().Members[n[1]]),l.val().Members[n[0]]&&l.val().Members[n[1]]&&(this.status="Ready")})}call(){console.log("Llamando"),this.recordedBlobs=new Array,this.setupWebRtc()}setupWebRtc(){this.senderId=this.guid(),console.log(this.senderId);var l="/webrtc/"+this.videocallSVC.keycall;console.log(l),this.channel=this.afDb.list(l),this.database=p.a.database().ref(l),this.database.on("child_added",this.readMessage.bind(this));try{this.pc=new RTCPeerConnection({iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:0.0.0.0:6200"}]},{optional:[]})}catch(n){console.log(n),this.pc=new RTCPeerConnection({iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:0.0.0.0:6200"}]},{optional:[]})}console.log(this.pc),this.pc.onicecandidate=l=>{console.log(l),l.candidate?this.sendMessage(this.senderId,JSON.stringify({ice:l.candidate})):console.log("Sent All Ice")},this.pc.onremovestream=l=>{console.log("Stream Ended")},this.pc.ontrack=l=>this.remote.nativeElement.srcObject=l.streams[0],this.showMe(),"caller"==this.data.type&&this.showRemote()}readMessage(l){if(console.log(l,"DATA"),console.log(l.val(),"DATAs"),l)try{console.log(l.val().message);var n=JSON.parse(l.val().message);l.val(),l.val().sender!=this.senderId&&(null!=n.ice&&null!=this.pc?this.pc.addIceCandidate(new RTCIceCandidate(n.ice)):"offer"==n.sdp.type?(this.callActive=!0,this.pc.setRemoteDescription(new RTCSessionDescription(n.sdp)).then(()=>this.pc.createAnswer()).then(l=>this.pc.setLocalDescription(l)).then(()=>this.sendMessage(this.senderId,JSON.stringify({sdp:this.pc.localDescription})))):"answer"==n.sdp.type&&(this.callActive=!0,this.pc.setRemoteDescription(new RTCSessionDescription(n.sdp))))}catch(e){console.log(e)}}sendMessage(l,n){this.channel.push({sender:l,message:n}).remove()}ngOnDestroy(){}guid(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}handleDataAvailable(){try{this.mediaRecorder.ondataavailable=l=>{l.data&&l.data.size>0&&this.recordedBlobs.push(l.data)}}catch(l){console.log(l)}}onStopRecordingEvent(){try{console.log("onstop"),this.mediaRecorder.onstop=l=>{const n=new Blob(this.recordedBlobs,{type:"video/webm"});this.downloadUrl=window.URL.createObjectURL(n),this.videocallSVC.tareaCloudStorage(this.videocallSVC.keycall+"/"+this.user.uid,n).percentageChanges().subscribe(l=>{Math.round(l)})}}catch(l){console.log(l)}}startRecording(l){this.recordedBlobs=[];try{this.mediaRecorder=new MediaRecorder(l)}catch(n){console.log("Try different mimeType",n)}console.log("Created MediaRecorder",this.mediaRecorder,"with options"),this.handleDataAvailable(),this.onStopRecordingEvent(),this.mediaRecorder.start(100),console.log("MediaRecorder started",this.mediaRecorder)}stopRecording(){console.log("stop"),this.mediaRecorder.stop(),console.log("Recorded Blobs: ",this.recordedBlobs)}showMe(){console.log("showme"),this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(l=>{console.log(l,"RESULT"),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(l=>{console.log(l,"STREAM"),this.me.nativeElement.srcObject=l,console.log(l,"STREAM2"),this.pc.addStream(l),console.log(l,"STREAM3"),this.localStream=l,console.log(this.localStream),this.startRecording(l)}).catch(l=>{console.log(JSON.stringify(l),"ERROR1")})}).catch(l=>{console.log(l,"ERROR3")})}showRemote(){console.log("Contesto");try{this.pc.createOffer().then(l=>this.pc.setLocalDescription(l)).then(()=>{this.sendMessage(this.senderId,JSON.stringify({sdp:this.pc.localDescription})),this.callActive=!0})}catch(l){this.setupWebRtc(),console.log(l)}}reconnect(){this.videocallSVC.reconnect(this.user,this.videocallSVC.keycall),this.showRemote()}hangup(){this.videocallSVC.hangup(this.user,this.videocallSVC.keycall),console.log("Colgaron"),this.stopRecording(),this.pc.close();let l=this.localStream.getTracks();for(let n=0;n<l.length;n++)l[n].stop();this.callActive=!1,this.router.navigate(["video"])}}var C=e("iInd"),y=e("bSaC"),R=o.pb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--ion-color-primary-dark)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:var(--ion-color-primary-dark);text-align:center;font-size:18px;font-family:sfUi-m;text-transform:capitalize}.call-red[_ngcontent-%COMP%]{float:left;margin-top:25px}.call-green[_ngcontent-%COMP%]{float:right;margin-top:25px}.avatar[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}ion-avatar[_ngcontent-%COMP%]{height:80px;width:80px}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;width:80px;border-radius:50%;border:2px solid var(--ion-color-white)}#background-content[_ngcontent-%COMP%]{background-color:red!important}ion-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]{position:absolute;bottom:0;margin:16px;width:91%}.pt-5[_ngcontent-%COMP%]{padding-top:10px}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%], ion-app[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{background-color:transparent}.video[_ngcontent-%COMP%]{background-color:#0ff;position:absolute;top:0;margin:16px;width:91%}"]],data:{}});function S(l){return o.Mb(0,[o.Ib(402653184,1,{search:0}),o.Ib(671088640,2,{me:0}),o.Ib(671088640,3,{remote:0}),(l()(),o.rb(3,0,null,null,10,"ion-header",[["class","ion-no-border"]],null,null,null,s.eb,s.q)),o.qb(4,49152,null,0,a.B,[o.h,o.k,o.x],null,null),(l()(),o.rb(5,0,null,0,8,"ion-toolbar",[["mode","md"]],null,null,null,s.Bb,s.N)),o.qb(6,49152,null,0,a.zb,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(l()(),o.rb(7,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,s.T,s.f)),o.qb(8,49152,null,0,a.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(9,0,null,0,1,"ion-menu-button",[],null,null,null,s.lb,s.y)),o.qb(10,49152,null,0,a.R,[o.h,o.k,o.x],null,null),(l()(),o.rb(11,0,null,0,2,"ion-title",[],null,null,null,s.zb,s.L)),o.qb(12,49152,null,0,a.xb,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Video call"])),(l()(),o.rb(14,0,null,null,38,"ion-content",[],null,null,null,s.X,s.j)),o.qb(15,49152,null,0,a.u,[o.h,o.k,o.x],null,null),(l()(),o.rb(16,0,null,0,9,"ion-row",[],null,null,null,s.rb,s.D)),o.qb(17,49152,null,0,a.gb,[o.h,o.k,o.x],null,null),(l()(),o.rb(18,0,null,0,3,"ion-col",[],null,null,null,s.W,s.i)),o.qb(19,49152,null,0,a.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(20,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Kb(21,null,["",""])),(l()(),o.rb(22,0,null,0,3,"ion-col",[],null,null,null,s.W,s.i)),o.qb(23,49152,null,0,a.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(24,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Kb(25,null,[" "," "])),(l()(),o.rb(26,0,null,0,4,"div",[["style","position: relative; width: 100%; height: 100%;"]],null,null,null,null,null)),(l()(),o.rb(27,0,null,null,1,"div",[["style","border: solid; width: 100%; height: 100%; position: absolute; left: 0px; top: 0px;"]],null,null,null,null,null)),(l()(),o.rb(28,0,[[3,0],["remote",1]],null,0,"video",[["autoplay",""],["controls",""],["id","device"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(l()(),o.rb(29,0,null,null,1,"div",[["style","border: solid; width: 30%; position: absolute; left: 65%; top: 10%;"]],null,null,null,null,null)),(l()(),o.rb(30,0,[[2,0],["me",1]],null,0,"video",[["autoplay",""],["controls",""],["id","me"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(l()(),o.rb(31,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),o.rb(32,0,null,0,1,"ion-row",[],null,null,null,s.rb,s.D)),o.qb(33,49152,null,0,a.gb,[o.h,o.k,o.x],null,null),(l()(),o.rb(34,0,null,0,18,"div",[["class","bottom-content"]],null,null,null,null,null)),(l()(),o.rb(35,0,null,null,17,"ion-grid",[],null,null,null,s.db,s.p)),o.qb(36,49152,null,0,a.A,[o.h,o.k,o.x],null,null),(l()(),o.rb(37,0,null,0,15,"ion-row",[],null,null,null,s.rb,s.D)),o.qb(38,49152,null,0,a.gb,[o.h,o.k,o.x],null,null),(l()(),o.rb(39,0,null,0,5,"ion-col",[],null,null,null,s.W,s.i)),o.qb(40,49152,null,0,a.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(41,0,null,0,3,"ion-fab-button",[["class","call-green"],["d",""]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.reconnect()&&o),o}),s.Z,s.m)),o.qb(42,49152,null,0,a.x,[o.h,o.k,o.x],null,null),(l()(),o.rb(43,0,null,0,1,"ion-icon",[["name","call-outline"]],null,null,null,s.fb,s.r)),o.qb(44,49152,null,0,a.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(45,0,null,0,1,"ion-col",[],null,null,null,s.W,s.i)),o.qb(46,49152,null,0,a.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(47,0,null,0,5,"ion-col",[],null,null,null,s.W,s.i)),o.qb(48,49152,null,0,a.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(49,0,null,0,3,"ion-fab-button",[["class","call-red"],["color","danger"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.hangup()&&o),o}),s.Z,s.m)),o.qb(50,49152,null,0,a.x,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(51,0,null,0,1,"ion-icon",[["name","call-outline"]],null,null,null,s.fb,s.r)),o.qb(52,49152,null,0,a.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,6,0,"md"),l(n,44,0,"call-outline"),l(n,50,0,"danger"),l(n,52,0,"call-outline")}),(function(l,n){var e=n.component;l(n,21,0,e.user.displayName),l(n,25,0,e.usercall.displayName)}))}function M(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,1,"app-call",[],null,null,null,S,R)),o.qb(1,245760,null,0,_,[C.a,C.m,d.a,c.a,a.a,h.a,g.a,m.a,y.a,v.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=o.nb("app-call",_,M,{},{},[]),A=e("SVse"),x=e("s7LF"),f=e("LSHg"),k=e("KJxK");class O{}e.d(n,"CallPageModuleNgFactory",(function(){return E}));var E=o.ob(t,[],(function(l){return o.zb([o.Ab(512,o.j,o.Z,[[8,[i.a,w]],[3,o.j],o.v]),o.Ab(4608,A.m,A.l,[o.s,[2,A.v]]),o.Ab(4608,x.o,x.o,[]),o.Ab(4608,a.b,a.b,[o.x,o.g]),o.Ab(4608,a.Fb,a.Fb,[a.b,o.j,o.p]),o.Ab(4608,a.Jb,a.Jb,[a.b,o.j,o.p]),o.Ab(4608,f.r,f.r,[]),o.Ab(4608,f.s,f.s,[]),o.Ab(4608,f.l,f.k,[[2,f.i],f.r,f.s,o.s]),o.Ab(1073742336,A.c,A.c,[]),o.Ab(1073742336,x.n,x.n,[]),o.Ab(1073742336,x.e,x.e,[]),o.Ab(1073742336,a.Bb,a.Bb,[]),o.Ab(1073742336,k.b,k.b,[]),o.Ab(1073742336,f.a,f.a,[]),o.Ab(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),o.Ab(1073742336,O,O,[]),o.Ab(1073742336,t,t,[]),o.Ab(1024,C.k,(function(){return[[{path:"",component:_}]]}),[]),o.Ab(256,f.i,{apiKey:"AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE"},[])])}))}}]);