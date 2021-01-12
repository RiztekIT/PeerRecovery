import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UserModel } from "src/app/models/users.model";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from "src/app/services/chat.service";


@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.page.html",
  styleUrls: ["./chat-list.page.scss"],
})
export class ChatListPage implements OnInit {
  newUSer = [
    {
      img: "../../../assets/image/patricia.png",
      name: "Denise Jones",
      ago: "10 min ago",
      detail:
        "Hi, I am Denise Jones and I have problem about related gynecologist  ",
    },
    {
      img: "../../../assets/image/pearson.png",
      name: "Anthony Cunningham",
      ago: "10 min ago",
      detail: "Hi, I am Anthony and I have some question about Coronavirus",
    },
  ];
  today = [
    {
      img: "../../../assets/image/jacob.png",
      name: "Nick Adams",
      detail: "Book Appointment 11,Nov 2019 10:00am",
      ago: "5min ago",
    },
    {
      img: "../../../assets/image/fionna.png",
      name: "Kelly Gomez",
      detail: "Cancel Appointment 11,Nov 2019 10:00am",
      ago: "3 Hour ago",
    },
    {
      img: "../../../assets/image/pearson.png",
      name: "Alex Griffin",
      detail: "Book Appointment 11,Nov 2019 10:00am",
      ago: "4 Hour ago",
    },
    {
      img: "../../../assets/image/sara.png",
      name: "Fionna Foster",
      detail: "Give 5 Star And good doctor I change...",
      ago: "4 Hour ago",
    },
  ];
  yesterday = [
    {
      img: "../../../assets/image/benjamin.png",
      name: "Amanda Clark",
      detail: "Book Appointment 11,Nov 2019 10:00am",
      ago: "5min ago",
    },
    {
      img: "../../../assets/image/fionna.png",
      name: "Kelly Gomez",
      detail: "Cancel Appointment 11,Nov 2019 10:00am",
      ago: "3 Hour ago",
    },
    {
      img: "../../../assets/image/pearson.png",
      name: "Alex Griffin",
      detail: "Book Appointment 11,Nov 2019 10:00am",
      ago: "4 Hour ago",
    },
    {
      img: "../../../assets/image/sara.png",
      name: "Fionna Foster",
      detail: "Give 5 Star And good doctor I change...",
      ago: "4 Hour ago",
    },
  ];

  user:UserModel;
  users: any[] = [];

  usersDBRef:any;
  constructor(private nav: NavController,
              private chatService: ChatService,
              private firebaseAuthService: AuthService) {

    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');

}

  ngOnInit() {



    this.user = new UserModel();
    this.user.ID_User = 10;
    this.user.Name = 'Alan Alexis';
    this.user.LastName = 'Ramírez Lugo';
    //this.chatService.postUser(this.user);


    
    this.getUsers();
  }
  
  getUsers(){
      this.usersDBRef.onSnapshot(  snap =>{
        this.users = [];
        snap.forEach( snapHijo =>{
            this.users.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        });
        console.log(this.users);
      });
  }


  /*setLastHourForBets(){
    this.chatService.getUsers();

    this.chatService.getUsers().subscribe(message => {
      console.log(message);
    });
  }*/


  openUsersPage() {
    this.nav.navigateForward("/chat-users-list");
  }

  openChat(){
    this.nav.navigateForward("/chat");
  }
}
