import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/users.model';
import { Router } from '@angular/router';

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
    private router: Router
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

        console.log(result.user);

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
      console.log(this.authSVC.usersign);
       if (this.authSVC.user){
         sessionStorage.setItem('user',JSON.stringify(this.authSVC.usersign))

        //this.util.navCtrl.navigateForward("onBoarding");
        this.router.navigate(['/onBoarding'])

       }else{

        this.authSVC.usersign = JSON.parse(sessionStorage.getItem('user'));
        this.authSVC.user = this.authSVC.usersign.email;

        if (this.authSVC.user){
  
         //this.util.navCtrl.navigateForward("onBoarding");
         this.router.navigate(['/onBoarding'])
 
        }



       }
       
       
       
    })

  }

}
