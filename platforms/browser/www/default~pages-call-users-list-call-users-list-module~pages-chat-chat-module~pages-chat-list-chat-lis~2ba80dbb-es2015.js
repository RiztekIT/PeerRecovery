(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-call-users-list-call-users-list-module~pages-chat-chat-module~pages-chat-list-chat-lis~2ba80dbb"],{

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");





//import { UserModel } from 'app/models/users.model';
const snapshotToArray = (snapshot) => {
    const returnArr = [];
    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
const snapshotToArray2 = (snapshot) => {
    const returnArr = [];
    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        /* item.key = childSnapshot.key; */
        returnArr.push(item);
    });
    return returnArr;
};
let ChatService = class ChatService {
    /*  */
    constructor(firebaseAuthService) {
        //this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');
        this.firebaseAuthService = firebaseAuthService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.chatsUsers = [];
        this.users = [];
        //    this.myObservable$ = this.usersDBRef.onSnapshot();
        //  console.log(this.myObservable$);
    }
    /*   postUser(user:UserModel){
         
         this.usersDBRef
         .add(Object.assign({}, user)).then(docRef=>{
             console.log(docRef);
         }).catch(e=> console.log("error: "+ e));
      } */
    /*getUsers(){
     this.usersDBRef.onSnapshot(  snap =>{
       snap.forEach( snapHijo =>{
           this.users.push({
               id: snapHijo.id,
               ...snapHijo.data()
           })
       });
     });
    }*/
    getUserChats() {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/');
        //return this.afDB.object('cliente/').valueChanges()
    }
    getChatsMembers(idchat) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/' + idchat);
    }
    getChats() {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/chats/');
    }
    getUser(uid) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Users/' + uid);
    }
    getUsers() {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Users/');
    }
    getRel(user, key) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Relations/' + user.uid + '/' + key);
    }
    getChat2(user, userchat) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid).orderByValue().equalTo(userchat);
    }
    /*   getChat(){
        return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/');
      } */
    getChat(user, userchat) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid + '/' + userchat);
    }
    /*  getMessages(chatid){
       return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid);
     } */
    getMessages() {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Messages/' + this.keymessage);
    }
    addChat(user, userchat) {
        //firebase.database().ref(user.uid+'/data/type').set(type);
        let chat = {
            name: 'single',
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            members: {
                user1: user.uid,
                user2: userchat.uid
            }
        };
        let key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/').push(chat).key;
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid + '/' + key).set(userchat.uid);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + userchat.uid + '/' + key).set(user.uid);
        this.keymessage = key;
    }
    addGroup(user, namegroup, usergroup) {
        let users = [];
        users.push(user.uid);
        for (let j = 0; j < usergroup.length; j++) {
            users.push(usergroup[j].uid);
        }
        let chat = {
            name: namegroup,
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            members: {
                users: users
            }
        };
        let key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/').push(chat).key;
        for (let i = 0; i < usergroup.length; i++) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid + '/' + key).set(usergroup[i].uid);
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + usergroup[i].uid + '/' + key).set(user.uid);
        }
        this.keymessage = key;
    }
    newChat(user) {
        //let key = this.afDB.list('/cliente/').push(cliente).key;
        let chat = {
            timestamp: new Date(),
            type: 'single'
        };
        let key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/chats/').push(chat).key;
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/chats/' + key).set(chat);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/chats/' + key).set(chat);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/' + key + '/' + user.uid).set('true');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/members/' + key + '/' + user.uid).set('true');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/' + key + '/' + user.uid).set('true');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
        return key;
    }
    newMessage(message) {
        console.log(message);
        let user2 = JSON.parse(localStorage.getItem('user2'));
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + localStorage.getItem('idchat')).push(message);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user2.uid + '/messages/' + localStorage.getItem('idchat')).push(message);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/messages/' + localStorage.getItem('idchat')).push(message);
    }
    sendMessage(message, user, userrec) {
        let sendmessage = {
            message: message,
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            sender: user.uid
        };
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Messages/' + this.keymessage).push(sendmessage);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Unread/' + userrec.uid + '/' + this.keymessage).push(sendmessage);
    }
    getTokenID(userid) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Token/' + userid + '/id');
    }
    newMessageGroup(message, idchat) {
        console.log(message);
        let user2 = JSON.parse(localStorage.getItem('user2'));
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + localStorage.getItem('idchat')).push(message);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/messages/' + localStorage.getItem('idchat')).push(message);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/').orderByKey().equalTo(idchat).on('value', resp => {
            let users = snapshotToArray2(resp);
            console.log(users);
            users.forEach(user => {
                console.log(user);
                let keyusers = Object.keys(user).filter(key => key != this.firebaseAuthService.usersign.uid && key != 'key');
                console.log(keyusers);
                keyusers.forEach(keyuser => {
                    firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(keyuser + '/messages/' + localStorage.getItem('idchat')).push(message);
                });
            });
        });
    }
    readChats() {
        let chatid = localStorage.getItem('idchat');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + chatid).once('value', resp => {
            let messages = snapshotToArray(resp);
            console.log(messages);
            messages.forEach(message => {
                if (message.sender != this.firebaseAuthService.usersign.uid) {
                    firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + chatid + '/' + message.key + '/read').set('true');
                }
            });
        });
    }
    stopread() {
        console.log('stop read');
        let chatid = localStorage.getItem('idchat');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/').off();
    }
    unreadChats(uid, chatid) {
        let count = 0;
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Unread/' + uid + '/' + chatid);
        /* return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid) */
        /*  .on('value', resp=>{
           
           let messages = snapshotToArray(resp);
           console.log(messages);
     
           messages.forEach(message=>{
             if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
               count = count + 1;
             }
           })
     
           
           console.log(count);
         }); */
    }
    cleanUnread(uid, chatid) {
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Unread/' + uid + '/' + chatid).remove();
    }
    newChatGroup(users) {
        //let key = this.afDB.list('/cliente/').push(cliente).key;
        let chat = {
            timestamp: new Date(),
            type: 'group'
        };
        console.log(users);
        /* agregar al chat */
        let key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/chats/').push(chat).key;
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/chats/' + key).set(chat);
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
        /* users */
        users.forEach(user => {
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/members/' + key + '/' + user.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/' + key + '/' + user.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/' + key + '/' + user.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/chats/' + key).set(chat);
        });
        return key;
    }
    /*  newChat2(user,idchat){
   
       //let key = this.afDB.list('/cliente/').push(cliente).key;
   
       let chat = {
         timestamp: new Date(),
         type: 'single'
       }
   
      
   
       console.log(user);
   
       let key  = idchat;
     
       
   
       return key;
     } */
    /*  */
    getUsersChat(user) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid);
    }
    getChatType(keychat) {
        return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + keychat);
    }
};
ChatService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ChatService);



/***/ })

}]);
//# sourceMappingURL=default~pages-call-users-list-call-users-list-module~pages-chat-chat-module~pages-chat-list-chat-lis~2ba80dbb-es2015.js.map