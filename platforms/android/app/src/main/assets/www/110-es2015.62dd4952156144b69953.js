(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{TbC0:function(n,t,l){"use strict";l.r(t);var o=l("8Y7J");class e{}var i=l("pMnS"),c=l("dDfN"),u=l("SVse"),a=l("MKJQ"),r=l("sZkV"),s=l("mrSG"),g=l("2Rin"),p=l("lGQG"),d=l("gTw3"),b=l("23JA"),_=l("Oz3r");class m{constructor(n,t,l,o,e,i,c,u,a,r,s,g){this.util=n,this.authSVC=t,this.geolocation=l,this.nativeGeocoder=o,this.platform=e,this.zone=i,this.alertController=c,this.nav=u,this.router=a,this.modalCtr=r,this.firebaseAuthService=s,this.appointmentService=g,this.Appointments=[],this.totalAppointments=4,this.specialist=[{name:"Dr.Janice Bailey",specialist:"Gynaecology",img:"../../../assets/imgs/data/Specialist/Specialist1.png"},{name:"Dr.Matthew Willis",specialist:"General Surgeon",img:"../../../assets/imgs/data/Specialist/Specialist2.png"},{name:"Dr.Diana Willis",specialist:"Homeopathic",img:"../../../assets/imgs/data/Specialist/Specialist3.png"}],this.treatments=[{img:"../../../assets/imgs/data/home/treat1.svg",name:"General Medicine",color:"#81BA83"},{img:"../../../assets/imgs/data/home/treat2.svg",name:"Woman's Health",color:"#E48A84"},{img:"../../../assets/imgs/data/home/treat3.svg",name:"Bone & Joints",color:"#A585BD"},{img:"../../../assets/imgs/data/home/treat4.svg",name:"Skin & Hair",color:"#00A8E5"}]}ngOnInit(){this.locatio="Chihuahua, Chihuahua"}ionViewWillEnter(){this.util.menuCtrl.enable(!0)}getAppointments(){this.appointmentService.getAppointments().on("value",n=>{this.Appointments=[],n.forEach(n=>{const t=n.val();t.key=n.key,this.Appointments.push(t)}),console.log(n),console.log(this.Appointments)})}openAppointmentPage(n){let t={queryParams:{special:JSON.stringify({appointmentID:n.key})}};this.router.navigate(["appointment"],t)}newAppointmentPage(){this.router.navigate(["appointment"])}presentAlert(){return s.b(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Confirm!",message:"<strong>Are you in trouble?, click on confirm to continue!</strong>!!!",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:n=>{console.log("Confirm Cancel: blah")}},{text:"Confirm!",handler:()=>{console.log("Confirm Okay")}}]});yield n.present()}))}goToSearch(){this.util.navCtrl.navigateForward("search")}goToAppointmentDetail(){}goToAllSpecialist(){this.util.navCtrl.navigateForward("doctorCardView")}goToDoctorDetail(){}goToAllTreatments(){}goToAllFavoriteDoctor(){}goToChatWithDoc(){this.util.navCtrl.navigateForward("chatWithDoctor")}goToBuyPlan(){}getLocation(){this.geolocation.getCurrentPosition().then(n=>{console.log(n)}).catch(n=>{console.log("Error getting location",n)}),this.geolocation.watchPosition().subscribe(n=>{console.log(n)})}getLocation2(){this.nativeGeocoder.reverseGeocode(52.5072095,13.1452818,{useLocale:!0,maxResults:5}).then(n=>console.log(JSON.stringify(n[0]))).catch(n=>console.log(n))}initializeApp(){this.platform.ready().then(()=>{this.getUserLocation()})}getUserLocation(){this.geolocation.getCurrentPosition().then(n=>{this.platform.is("cordova")?this.nativeGeocoder.reverseGeocode(n.coords.latitude,n.coords.longitude,{useLocale:!0,maxResults:5}).then(n=>{console.log(n),this.userLocation=n[0],console.log(this.userLocation)}).catch(n=>console.log(n)):this.getGeoLocation(n.coords.latitude,n.coords.longitude)}).catch(n=>{}),this.geolocation.watchPosition().subscribe(n=>{this.platform.is("cordova")?this.nativeGeocoder.reverseGeocode(n.coords.latitude,n.coords.longitude,{useLocale:!0,maxResults:5}).then(n=>{console.log(n),this.userLocation=n[0],console.log(this.userLocation)}).catch(n=>console.log(n)):(console.log("not cordove"),this.getGeoLocation(n.coords.latitude,n.coords.longitude))})}getGeoLocation(n,t,l){return s.b(this,void 0,void 0,(function*(){if(navigator.geolocation){let o=yield new google.maps.Geocoder,e={latLng:yield new google.maps.LatLng(n,t)};yield o.geocode(e,(n,t)=>{if(t==google.maps.GeocoderStatus.OK){let t=n[0];this.zone.run(()=>{null!=t&&(this.userCity=t.formatted_address,"reverseGeocode"===l&&(this.latLngResult=t.formatted_address))})}})}}))}reverseGeocode(n,t){this.platform.is("cordova")?this.nativeGeocoder.reverseGeocode(n,t,{useLocale:!0,maxResults:5}).then(n=>this.userLocationFromLatLng=n[0]).catch(n=>console.log(n)):this.getGeoLocation(n,t,"reverseGeocode")}forwardGeocode(n){this.platform.is("cordova")?this.nativeGeocoder.forwardGeocode(n,{useLocale:!0,maxResults:5}).then(n=>{this.zone.run(()=>{this.lat=n[0].latitude,this.lng=n[0].longitude})}).catch(n=>console.log(n)):(new google.maps.Geocoder).geocode({address:n},(n,t)=>{t==google.maps.GeocoderStatus.OK?this.zone.run(()=>{this.lat=n[0].geometry.location.lat(),this.lng=n[0].geometry.location.lng()}):alert("Error - "+n+" & Status - "+t)})}}var C=l("iInd"),P=o.ob({encapsulation:0,styles:[["ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{height:30px;border-top-right-radius:100%;border-top-left-radius:100%}ion-fab-button[_ngcontent-%COMP%]{margin:-17px 2px;width:65px;height:54px;line-height:40px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, -0.8),0 6px 10px 0 rgba(0, 0, 0, -0.86),0 1px 18px 0 rgba(0, 0, 0, -0.95);--box-shadow:none!important}ion-content[_ngcontent-%COMP%]   .main_lbl[_ngcontent-%COMP%]{font-size:16px;color:var(--blue);font-family:sf_ui_md;display:flex;align-items:center;justify-content:space-between}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]{background-color:var(--div_back);margin-top:10px}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center;padding:11px 0 0}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .date_lbl[_ngcontent-%COMP%]{font-size:14px;color:var(--blue);font-family:sf_ui_md;margin:0}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{color:var(--my_theme);font-family:sf_ui_md;font-size:14px;padding-left:0;padding-top:5px;padding-bottom:0}ion-content[_ngcontent-%COMP%]   .date_div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .time_l[_ngcontent-%COMP%]{color:var(--blue);margin-bottom:10px}ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]{height:40px;background-color:var(--div_back);padding:0 16px;display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%]{margin:0;width:100%}ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:var(--lht_blue)}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]{display:flex;padding:10px 16px;align-items:center;margin-bottom:10px;margin-top:10px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:16px;color:var(--lht_blue);font-family:sf_ui_md;margin:0;width:50px;text-align:center}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]{display:flex;margin-left:10px;padding:10px 10px 10px 5px;border-radius:5px;box-shadow:0 1px 4px 0 rgba(0,0,0,.16);width:100%}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:58px;width:58px;border-radius:5px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]{padding-left:15px;width:100%;padding-top:3px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;color:var(--blue);font-family:sf_ui_md;margin:0;display:flex;justify-content:space-between;align-items:center}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%]{font-size:12px;color:var(--blue);font-family:sf_ui_md;margin:3px 0}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{font-size:12px;color:var(--lht_blue);font-family:sf_ui_r;margin:0}.stacked-lbl[_ngcontent-%COMP%]{font-size:19px;color:var(--blue);font-family:sf_ui_md;margin:0}ion-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-primary-dark);font-family:sfUi-m;display:flex;justify-content:space-between;align-items:center}ion-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]{height:auto;width:auto;--padding-start:0;--padding-end:0;font-size:11px;font-family:sfUi-m;color:var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]{box-shadow:0 2px 4px rgba(0,0,0,.16);--padding-start:6px;border-radius:5px}ion-content[_ngcontent-%COMP%]   .fav-doctors.inProgress[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment.inProgress[_ngcontent-%COMP%]{--background:var(--ion-color-primary)!important}ion-content[_ngcontent-%COMP%]   .fav-doctors.inProgress[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .fav-doctors.inProgress[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .fav-doctors.inProgress[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .fav-doctors.inProgress[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment.inProgress[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment.inProgress[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment.inProgress[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment.inProgress[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-white)!important}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{height:78px;width:78px;margin-right:10px;position:relative}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;top:3px;right:3px;--padding-start:0;--padding-end:0;height:auto;width:auto;margin:0}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:15px;color:var(--ion-color-gray)}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon.active[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon.active[_ngcontent-%COMP%]{color:var(--ion-color-red)}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:78px;width:78px;border-radius:5px}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .dr-name[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .dr-name[_ngcontent-%COMP%]{font-size:15px;font-family:sfUi-m;color:var(--ion-color-primary-dark)}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .dr-name[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .dr-name[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:11px;font-family:sfUi-m;color:var(--ion-color-primary-light)}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .specialist[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .specialist[_ngcontent-%COMP%]{font-size:13px;font-family:sfUi-m;color:var(--ion-color-primary-dark)}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .last-line[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .last-line[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{font-size:12px;font-family:sfUi-m;color:var(--ion-color-primary-light)}ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .last-line[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .fav-doctors[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .last-line[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .upcoming-appointment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:12px;font-family:sfUi-m;color:var(--ion-color-primary-dark)}ion-content[_ngcontent-%COMP%]   .specialist-container[_ngcontent-%COMP%]{display:flex;overflow:scroll;padding:10px 0}ion-content[_ngcontent-%COMP%]   .specialist-container[_ngcontent-%COMP%]   .specialist[_ngcontent-%COMP%]{text-align:center;width:140px;min-width:140px;box-shadow:0 2px 4px rgba(0,0,0,.16)}ion-content[_ngcontent-%COMP%]   .specialist-container[_ngcontent-%COMP%]   .specialist[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:97px;height:90px;border-radius:5px}ion-content[_ngcontent-%COMP%]   .specialist-container[_ngcontent-%COMP%]   .specialist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:12px;font-family:sfUi-m;color:var(--ion-color-primary-dark)}ion-content[_ngcontent-%COMP%]   .specialist-container[_ngcontent-%COMP%]   .specialist[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:11px;font-family:sfUi-m;color:var(--ion-color-primary-light)}ion-content[_ngcontent-%COMP%]   .offer-container[_ngcontent-%COMP%]{display:flex;overflow:scroll;position:relative}ion-content[_ngcontent-%COMP%]   .offer-container[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]{border-radius:5px;overflow:hidden;position:relative;min-width:170px}ion-content[_ngcontent-%COMP%]   .offer-container[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]   .black-wrapper[_ngcontent-%COMP%]{background:linear-gradient(180deg,#0000 25%,#000 138%);height:100%;width:100%;position:absolute}ion-content[_ngcontent-%COMP%]   .offer-container[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:absolute;bottom:0;font-size:12px;color:var(--ion-color-white);font-family:sfUi-m}ion-content[_ngcontent-%COMP%]   .looking-container[_ngcontent-%COMP%]{display:flex;overflow:scroll}ion-content[_ngcontent-%COMP%]   .looking-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;background:#fce5f9;width:165px;min-width:165px;box-shadow:0 3px 6px rgba(0,0,0,.16)}ion-content[_ngcontent-%COMP%]   .looking-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:42%;display:flex;flex-direction:column;justify-content:space-around}ion-content[_ngcontent-%COMP%]   .looking-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-family:sfUi-m;color:var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   .looking-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;font-family:sfUi-r;color:var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   .looking-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:nth-child(2){background:#f8e9e6}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]{background:#eeecf9;border-radius:5px;position:relative;box-shadow:0 2px 4px rgba(0,0,0,.16)}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;bottom:0;right:7px}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:63%}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top-line[_ngcontent-%COMP%]{display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top-line[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%]{font-size:16px;font-family:sfUi-m;color:var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top-line[_ngcontent-%COMP%]   .plus-label[_ngcontent-%COMP%]{width:75px;height:30px;background:var(--ion-color-primary);font-size:16px;font-family:sfUi-m;color:var(--ion-color-white);display:flex;justify-content:center;align-items:center;border-radius:5px}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .offer-txt[_ngcontent-%COMP%]{font-size:18px;font-family:sfUi-m;color:var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:14px;font-family:sfUi-m;color:var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .plan-btn[_ngcontent-%COMP%]{--padding-start:8px;--padding-end:0;--border-radius:5px;--box-shadow:none;width:148px;height:40px;font-size:16px;text-transform:capitalize;font-family:sfUi-r;position:relative;z-index:99}ion-content[_ngcontent-%COMP%]   .plan-offer-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .plan-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:15px}ion-content[_ngcontent-%COMP%]   .treatments[_ngcontent-%COMP%]{display:flex;overflow:scroll}ion-content[_ngcontent-%COMP%]   .treatments[_ngcontent-%COMP%]   .treatment[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:66px;width:66px;position:relative;display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .treatments[_ngcontent-%COMP%]   .treatment[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:66px}ion-content[_ngcontent-%COMP%]   .treatments[_ngcontent-%COMP%]   .treatment[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;min-height:30px;min-width:30px;max-height:30px;max-width:30px;-o-object-fit:contain;object-fit:contain}ion-content[_ngcontent-%COMP%]   .treatments[_ngcontent-%COMP%]   .treatment[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:12px;font-family:sfUi-sb;color:var(--ion-color-primary-dark);text-align:center}"]],data:{}});function O(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function M(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function f(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function h(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function v(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function x(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function q(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function y(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function w(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,12,"div",[["class","data_div"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.openAppointmentPage(n.context.$implicit)&&o),o}),null,null)),(n()(),o.qb(1,0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(n()(),o.Kb(2,null,["",""])),o.Gb(3,1),(n()(),o.qb(4,0,null,null,8,"div",[["class","card_div"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,7,"div",[["class","info_div"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,4,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Kb(7,null,[""," "])),(n()(),o.qb(8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Kb(9,null,["",""])),o.Gb(10,2),(n()(),o.qb(11,0,null,null,1,"p",[["class","add"]],null,null,null,null,null)),(n()(),o.Kb(12,null,["",""]))],null,(function(n,t){var l=o.Lb(t,2,0,n(t,3,0,o.Cb(t.parent,0),t.context.$implicit.time));n(t,2,0,l),n(t,7,0,t.context.$implicit.title);var e=o.Lb(t,9,0,n(t,10,0,o.Cb(t.parent,1),t.context.$implicit.date,"mediumDate"));n(t,9,0,e),n(t,12,0,t.context.$implicit.description)}))}function k(n){return o.Mb(0,[o.Eb(0,c.a,[]),o.Eb(0,u.d,[o.s]),(n()(),o.qb(2,0,null,null,17,"ion-header",[["class","ion-no-border searchable-header"]],null,null,null,a.cb,a.p)),o.pb(3,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(n()(),o.qb(4,0,null,0,15,"ion-toolbar",[],null,null,null,a.zb,a.M)),o.pb(5,49152,null,0,r.zb,[o.h,o.k,o.x],null,null),(n()(),o.qb(6,0,null,0,9,"div",[["class","location-content"]],null,null,null,null,null)),(n()(),o.qb(7,0,null,null,1,"ion-icon",[["class","loc-icon margin-right-6 margin-left-15"],["src","../../../assets/imgs/appicons/location-top.svg"]],null,null,null,a.db,a.q)),o.pb(8,49152,null,0,r.C,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.qb(9,0,null,null,6,"div",[["class","content"]],null,null,null,null,null)),(n()(),o.qb(10,0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),o.Kb(11,null,[""," "])),(n()(),o.qb(12,0,null,null,1,"ion-icon",[["class","margin-left-14"],["src","../../../assets/imgs/appicons/down-arrow.svg"]],null,null,null,a.db,a.q)),o.pb(13,49152,null,0,r.C,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.qb(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Kb(15,null,["",""])),(n()(),o.qb(16,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,a.S,a.f)),o.pb(17,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(n()(),o.qb(18,0,null,0,1,"ion-menu-button",[],null,null,null,a.jb,a.x)),o.pb(19,49152,null,0,r.R,[o.h,o.k,o.x],null,null),(n()(),o.qb(20,0,null,null,25,"ion-content",[["class","ion-padding-bottom"]],null,null,null,a.W,a.j)),o.pb(21,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.qb(22,0,null,0,4,"div",[["class","head_div"]],null,null,null,null,null)),(n()(),o.qb(23,0,null,null,3,"h3",[["class","main_lbl head_lbl"]],null,null,null,null,null)),(n()(),o.Kb(-1,null,["Next appointments "])),(n()(),o.qb(25,0,null,null,1,"span",[["class","ion-float-right"]],null,null,null,null,null)),(n()(),o.Kb(26,null,["Total: ",""])),(n()(),o.fb(16777216,null,0,1,null,O)),o.pb(28,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,M)),o.pb(30,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,f)),o.pb(32,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,h)),o.pb(34,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,v)),o.pb(36,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,x)),o.pb(38,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,q)),o.pb(40,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,y)),o.pb(42,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.fb(16777216,null,0,1,null,w)),o.pb(44,278528,null,0,u.i,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.qb(45,0,null,0,0,"div",[],null,null,null,null,null)),(n()(),o.qb(46,0,null,null,3,"ion-footer",[["class","ion-no-border"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.presentAlert()&&o),o}),a.ab,a.n)),o.pb(47,49152,null,0,r.z,[o.h,o.k,o.x],null,null),(n()(),o.qb(48,0,null,0,1,"ion-toolbar",[["color","danger"]],null,null,null,a.zb,a.M)),o.pb(49,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.qb(50,0,null,null,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.presentAlert()&&o),o}),a.Z,a.l)),o.pb(51,49152,null,0,r.w,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),o.qb(52,0,null,0,3,"ion-fab-button",[["color","danger"]],null,null,null,a.Y,a.m)),o.pb(53,49152,null,0,r.x,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.qb(54,0,null,0,1,"ion-icon",[["name","radio-outline"]],null,null,null,a.db,a.q)),o.pb(55,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,t){var l=t.component;n(t,8,0,"../../../assets/imgs/appicons/location-top.svg"),n(t,13,0,"../../../assets/imgs/appicons/down-arrow.svg"),n(t,28,0,l.Appointments),n(t,30,0,l.Appointments),n(t,32,0,l.Appointments),n(t,34,0,l.Appointments),n(t,36,0,l.Appointments),n(t,38,0,l.Appointments),n(t,40,0,l.Appointments),n(t,42,0,l.Appointments),n(t,44,0,l.Appointments),n(t,49,0,"danger"),n(t,51,0,"center","bottom"),n(t,53,0,"danger"),n(t,55,0,"radio-outline")}),(function(n,t){var l=t.component;n(t,11,0,l.authSVC.usersign.displayName),n(t,15,0,l.locatio),n(t,26,0,l.totalAppointments)}))}function A(n){return o.Mb(0,[(n()(),o.qb(0,0,null,null,1,"app-home",[],null,null,null,k,P)),o.pb(1,114688,null,0,m,[g.a,p.a,d.a,b.a,r.Gb,o.x,r.a,r.Fb,C.m,r.Eb,p.a,_.a],null,null)],(function(n,t){n(t,1,0)}),null)}var K=o.mb("app-home",m,A,{},{},[]),z=l("s7LF"),G=l("iTUp");class ${}l.d(t,"HomePageModuleNgFactory",(function(){return L}));var L=o.nb(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Y,[[8,[i.a,K]],[3,o.j],o.v]),o.Ab(4608,u.l,u.k,[o.s,[2,u.r]]),o.Ab(4608,z.o,z.o,[]),o.Ab(4608,r.b,r.b,[o.x,o.g]),o.Ab(4608,r.Eb,r.Eb,[r.b,o.j,o.p]),o.Ab(4608,r.Hb,r.Hb,[r.b,o.j,o.p]),o.Ab(1073742336,u.b,u.b,[]),o.Ab(1073742336,G.a,G.a,[]),o.Ab(1073742336,z.n,z.n,[]),o.Ab(1073742336,z.e,z.e,[]),o.Ab(1073742336,r.Bb,r.Bb,[]),o.Ab(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),o.Ab(1073742336,$,$,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,C.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);