import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/users.model';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
})
export class StarterPage implements OnInit {

  user : UserModel;

  constructor(
    private util: UtilService,
    public authSVC: AuthService,
  ) { }

  ngOnInit() {
    this.obtenerTokenGoogle()
  }

  ionViewWillEnter() {
    this.util.menuCtrl.enable(false);
  }

  goToSignIn() {
    this.util.navCtrl.navigateForward('signIn');
  }

  signinGoogle(){
    this.authSVC.loginGoogle().then(res=>{
      console.log(res);

      this.authSVC.user = res;
    
    })
    
  }

  obtenerTokenGoogle(){

    this.authSVC.obtenerToken().then(result=> {
      console.log(result);
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential;
        // ...
        console.log(token);
        
      }
      // The signed-in user info.

      if(result.user){

        this.authSVC.user = result.user.email;
        this.authSVC.usersign = result.user;

        this.user = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
          type: 'User',
          password: '',
          created: new Date(),
          updated: new Date(),
          uid: result.user.uid
        }
       
  
        this.authSVC.addUser(this.user);
      }

       if (this.authSVC.user){

        this.util.navCtrl.navigateForward("onBoarding");

       }
       
       
       
    })

  }

}
