import { UtilService } from "./services/util.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";

import { Platform, IonRouterOutlet, ToastController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Home",
      url: "/home",
    },/*
    {
      title: "Find Doctor",
      url: "/search",
    },
    {
      title: "Find Specialist",
      url: "/doctorCardView",
    },
    {
      title: "Appointment",
      url: "/appointmentList",
    },
    {
      title: "Chat",
      url: "/chatWithDoctor",
    },
    {
      title: "Chat List",
      url: "/chatList",
    },
    {
      title: "Notification",
      url: "/notification",
    },
    {
      title: "Health Tips",
      url: "/healthTips",
    },
    {
      title: "Medicine Buy",
      url: "/buyMedicine",
    },
    {
      title: "Setting",
      url: "/setting",
    },*/
    {
      title: "Calendar",
      url: "/calendar",
    },
    {
      title: "Chat",
      url: "/chatList",
    }, {
      title: "Rewards",
      url: "/rewards",
    },{
      title: "Tracking",
      url: "/tracking",
    },{
      title: "Video call",
      url: "/call-users-list",
    },

  ];
  widthOfScreen: any = window.innerWidth;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private util: UtilService,
    private router: Router,
    private toastCtrl: ToastController,
    public authSVC: AuthService,
  ) {
    // this.util.navCtrl.navigateForward('home');
    this.initializeApp();
    this.backButtonEvent();
  }

  user;

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
        //this.getMenu();
      }, 2000);
    });
  }

  ngOnInit() {
 /*    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    } */
  }

  getMenu(){
    let menu
   
    
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
    this.authSVC.getMenu(this.user).orderByChild('order').on('value', (resp:any)=>{
      console.log(resp);
      //const menu = snapshotToArray(resp);
      menu = []
      
      resp.forEach((childSnapshot: any) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        if (item.titulo!='Settings'){

          menu.push(item);
        }
    });
      console.log(menu,'menu');
      this.authSVC.menu = menu;

    })
  }

  goToProfile() {}

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {

    console.log("atras");
    
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === "/home" ||
          this.router.url === "home" ||
          this.router.url === "starter"
        ) {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            navigator["app"].exitApp();
          } else {
            this.showToast();
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: "press back again to exit App.",
      duration: 2000,
      cssClass: "leaveToast",
    });
    toast.present();
  }

  logout() {
    /* this.navCtrl.navigateRoot('/'); */

    this.authSVC.cerrarSession().then(res=>{
      console.log(res);
      console.log(this.authSVC.user)
      sessionStorage.removeItem('user')
      this.authSVC.getUser();
    });

  }
}
