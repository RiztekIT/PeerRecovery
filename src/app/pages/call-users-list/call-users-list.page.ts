import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { UserModel } from "src/app/models/users.model";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from "src/app/services/chat.service";
import { NavigationExtras } from '@angular/router';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { VideocallService } from "src/app/services/videocall.service";


export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};


@Component({
  selector: "app-call-list",
  templateUrl: "./call-users-list.page.html",
  styleUrls: ["./call-users-list.page.scss"],
})
export class CallUsersListPage implements OnInit {

  
 
  user:UserModel;
  users: any[] = [];
  data: any;

  Users: any[] = [];

  llamando = false;
  keycall;
  usercall;

  constructor(private nav: NavController,
              private router: Router,
              private firebaseAuthService: AuthService,
              private chatService: ChatService,
              private cameraPreview: CameraPreview,
              public videocallSVC: VideocallService) {   
}



  ngOnInit() {
    //this.getUsers();
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getUser();
    this.getCalls();
  }
  
  getUsers(){
      this.chatService.getUsers().orderByChild('type').equalTo('User').on('value', (resp:any) =>{
        //console.log(resp);
         const users = snapshotToArray(resp);
        console.log(users);
        this.users = users;
        this.users = this.users.filter(x => x.uid != this.firebaseAuthService.usersign.uid);
       })
  }

  openCall(user){
    let data = {
      user: this.user,
      usercall: user,
      type: 'caller'
 
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    };

    console.log(data,'DATA');
    this.videocallSVC.newcall(this.user, user);
    this.router.navigate(['call'], navigationExtras);
    //this.router.navigate(['call']);
  }




/*  */
  getUser(){
    /* console.log(this.user); */
    this.videocallSVC.getUsers().on('value', resp=>{
      this.Users  = [];
      let c = 0;
      resp.forEach((childSnapshot: any) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          /* item.selected = true; */
          if (item.key!=this.user.uid){
            console.log(item);
            console.log(this.user);
            this.videocallSVC.getRel(this.user,item.key).once('value', (resp: any) =>{
              console.log(resp);
              console.log(resp.val());
        
              item.selected = resp.val();
              if (resp.val()){

                this.Users.push(item);
              }
   
            })
            

          }
      });
      //this.selected = this.Users
      console.log(this.Users);
      

    })
  }

  getCalls(){
    this.videocallSVC.getCalls(this.user).on('value', calls=>{
      console.log(calls.val());
      calls.forEach((childSnapshot: any) => {
        console.log(childSnapshot.key);
        this.videocallSVC.getCall(childSnapshot.key).on('value', call=>{
          console.log(call.val());
          if ((call.val().state)){
            this.llamando = true;
            this.keycall = call.val().channel;

            let keys = Object.keys(call.val().Members)

            for (let i=0; i<keys.length; i++){

              if (keys[i]!=this.user.uid){
                this.videocallSVC.getUser(keys[i]).once('value', user=>{
                  this.usercall = user.val();
                  console.log(this.usercall);
                })
              }
              

            }


          }else{
            this.llamando = false;
          }
        })
      })
    })
  }

  resVideoCall(){

    let data = {
      user: this.user,
      usercall: this.usercall,
      type: 'answer'
 
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    };

    this.videocallSVC.keycall = this.keycall;
    this.videocallSVC.answerccall(this.user,this.keycall)

    console.log(data,'DATA');
    
    this.router.navigate(['call'], navigationExtras);
    //this.router.navigate(['call']);

  }

  

 

  



}
