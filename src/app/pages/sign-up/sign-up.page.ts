import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  public myForm: FormGroup;
  constructor(private util: UtilService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      username: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ]),
      ],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      birthDate: ["", Validators.compose([Validators.required])],
      phoneNumber: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.compose([Validators.required])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }

  ngOnInit() {}

  goToVerification() {
    this.util.navCtrl.navigateForward("signIn");
  }

  goToSignIn() {
    this.util.navCtrl.navigateBack("signIn");
  }
}
