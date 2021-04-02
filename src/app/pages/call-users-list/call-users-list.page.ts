import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { UserModel } from "src/app/models/users.model";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from "src/app/services/chat.service";
import { NavigationExtras } from '@angular/router';

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

  constructor(private nav: NavController,
              private router: Router,
              private firebaseAuthService: AuthService,
              private chatService: ChatService) {         
}

  ngOnInit() {
    this.getUsers();
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

  openCall(item){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['call'], navigationExtras);
  }



}
