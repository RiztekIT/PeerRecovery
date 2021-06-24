import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/users.model';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import firebase from 'firebase';
/* import { AngularFireAuth } from '@angular/fire/auth'; */

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
    private router: Router,
    private google: GooglePlus,
    
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
      this.obtenerTokenGoogle()

      this.authSVC.user = res;
      
    
    })
    
  }

  login(){

/*     this.authSVC.usersign = JSON.parse('{"uid":"2ZrxjV7h9yNEQNOEv41Pn0Oaedr2","displayName":"Ivan Talamantes","photoURL":"https://lh4.googleusercontent.com/-QC-QP6iHIE8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxXbClVOHAd1Jg5C0wC29ky4HddA/s96-c/photo.jpg","email":"riztekti@gmail.com","emailVerified":true,"phoneNumber":null,"isAnonymous":false,"tenantId":null,"providerData":[{"uid":"102916484924080225541","displayName":"Ivan Talamantes","photoURL":"https://lh4.googleusercontent.com/-QC-QP6iHIE8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxXbClVOHAd1Jg5C0wC29ky4HddA/s96-c/photo.jpg","email":"riztekti@gmail.com","phoneNumber":null,"providerId":"google.com"}],"apiKey":"AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs","appName":"[DEFAULT]","authDomain":"peerrecovery-app.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs","refreshToken":"AOvuKvQR5C8EhjW3WN8gtzBQFd1XQmsU1-dNcsOsHwX_35trAYLG_UWASni_Of73U9RzQ8DPqdNXyRVMBXp6AA-miYHxgLXIBWYwF3P58AfVZB_ZW86I8RllD5Z7p0YEBnp0wzhX_i4WMQA76eAvjrJyob7OdmUo_3HsicPG5YTSaO7atuUDLUcTIfjSMv4bBh3kBfh750ILXhIxPzHO4azE5XarpWZ6xWQVHcSCTODEkUHvNEh6DLr4EZT4UVH2nSwtEdXABJgPyGqCl0D49CkhKlUCF2vaEfXopgfXVgxSKv1xiCUUtlntjtv4VAmbIjRwIbjodEfv3PHSi1sfl91GbkcsvWZxlv31x0jQnsW9JL706Q5c4eH0ZxpxOrHMiRV5LR9UOLLcC-ZMBb143uHz1828GcEfR_XFF4GDxffj4iQyaeG9QhJ06ftyXev_kJgvIsQ4Q4osdaFO9eF6OG8bPHhbqcpHaQ","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSXZhbiBUYWxhbWFudGVzIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tUUMtUVA2aUhJRTgvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbHhYYkNsVk9IQWQxSmc1QzB3QzI5a3k0SGRkQS9zOTYtYy9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGVlcnJlY292ZXJ5LWFwcCIsImF1ZCI6InBlZXJyZWNvdmVyeS1hcHAiLCJhdXRoX3RpbWUiOjE2MTc0MDA3MDQsInVzZXJfaWQiOiIyWnJ4alY3aDl5TkVRTk9FdjQxUG4wT2FlZHIyIiwic3ViIjoiMlpyeGpWN2g5eU5FUU5PRXY0MVBuME9hZWRyMiIsImlhdCI6MTYxNzQwMDcwNCwiZXhwIjoxNjE3NDA0MzA0LCJlbWFpbCI6InJpenRla3RpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAyOTE2NDg0OTI0MDgwMjI1NTQxIl0sImVtYWlsIjpbInJpenRla3RpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.ETG1-BqBhePWKSQ89e7zu0YwEMlkIm3FlhJAqdbrXCy2lcA30tqVdq7XyQhHQwfyao8JFV3pyHXSp3fW20PEJfZUe0u2OXRtiCY3quGYE-oQB1qxL-VkvziFyEqzpQ3uGjfrqSc8qHzyVwmUQaEHLorooY5kuel2cPBVuJBz7IsGF7KVoU_GF3p5F9tLaRTGKxpyepzEOftTIXfSaR6u09Reqct15zSI9VNWTKU9NuFO8B00alrK1RhwwFRMFDQ12Ivf070Cpd13-Rcy3kda5wx0J89X7xRfdSAcSTxmg4CEB25dG9gRQUoCYIJ9LNdDBHB197yyyHOYxcBw5agZwA","expirationTime":1617404304214},"redirectEventId":null,"lastLoginAt":"1617400704170","createdAt":"1609375217824","multiFactor":{"enrolledFactors":[]}}')
    
    this.router.navigate(['/onBoarding']) */
    this.google.login({}).then(res=>{
      console.log(res);
      /* this.router.navigate(['/home']) */
      this.router.navigate(['/onBoarding'])
      this.authSVC.usersign = res;
      this.authSVC.user = res.email;
      console.log(this.authSVC.usersign,'1');
      console.log('2',this.authSVC.user);
    })
 /*    let params = {};
    this.google.login(params)
      .then((response) => {
        const { idToken, accessToken } = response;
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error);
        alert('error:' + JSON.stringify(error));
      }); */

  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);

            this.authSVC.loginwithCredential(credential) .then((success) => {
              alert('successfully');
              //this.isGoogleLogin = true;
              this.authSVC.user  =  success.user.email;
              this.authSVC.usersign = success.user;
              sessionStorage.setItem('user',JSON.stringify(this.authSVC.usersign))

        //this.util.navCtrl.navigateForward("onBoarding");
        this.router.navigate(['/onBoarding'])
              //this.loading.dismiss();
            });

    
     

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
