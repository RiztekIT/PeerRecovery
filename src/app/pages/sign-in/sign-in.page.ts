import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"],
})
export class SignInPage implements OnInit {
  constructor(private util: UtilService) {}

  ngOnInit() {}

  goToSignUp() {
    this.util.navCtrl.navigateForward("signUp");
  }

  goToForgotPassword() {}

  goToOnBoarding() {
    this.util.navCtrl.navigateForward("onBoarding");
  }
}
