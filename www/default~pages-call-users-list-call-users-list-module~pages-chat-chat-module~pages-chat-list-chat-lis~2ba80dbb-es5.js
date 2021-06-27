function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-call-users-list-call-users-list-module~pages-chat-chat-module~pages-chat-list-chat-lis~2ba80dbb"], {
  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js"); //import { UserModel } from 'app/models/users.model';


    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      return returnArr;
    };

    var snapshotToArray2 = function snapshotToArray2(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        /* item.key = childSnapshot.key; */

        returnArr.push(item);
      });
      return returnArr;
    };

    var ChatService = /*#__PURE__*/function () {
      /*  */
      function ChatService(firebaseAuthService) {
        _classCallCheck(this, ChatService);

        //this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');
        this.firebaseAuthService = firebaseAuthService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.chatsUsers = [];
        this.users = []; //    this.myObservable$ = this.usersDBRef.onSnapshot();
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


      _createClass(ChatService, [{
        key: "getUserChats",
        value: function getUserChats() {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/'); //return this.afDB.object('cliente/').valueChanges()
        }
      }, {
        key: "getChatsMembers",
        value: function getChatsMembers(idchat) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/' + idchat);
        }
      }, {
        key: "getChats",
        value: function getChats() {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/chats/');
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Users/' + uid);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Users/');
        }
      }, {
        key: "getRel",
        value: function getRel(user, key) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Relations/' + user.uid + '/' + key);
        }
      }, {
        key: "getChat2",
        value: function getChat2(user, userchat) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid).orderByValue().equalTo(userchat);
        }
        /*   getChat(){
            return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/');
          } */

      }, {
        key: "getChat",
        value: function getChat(user, userchat) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid + '/' + userchat);
        }
        /*  getMessages(chatid){
           return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid);
         } */

      }, {
        key: "getMessages",
        value: function getMessages() {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Messages/' + this.keymessage);
        }
      }, {
        key: "addChat",
        value: function addChat(user, userchat) {
          //firebase.database().ref(user.uid+'/data/type').set(type);
          var chat = {
            name: 'single',
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            members: {
              user1: user.uid,
              user2: userchat.uid
            }
          };
          var key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/').push(chat).key;
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid + '/' + key).set(userchat.uid);
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + userchat.uid + '/' + key).set(user.uid);
          this.keymessage = key;
        }
      }, {
        key: "addGroup",
        value: function addGroup(user, namegroup, usergroup) {
          var users = [];
          users.push(user.uid);

          for (var j = 0; j < usergroup.length; j++) {
            users.push(usergroup[j].uid);
          }

          var chat = {
            name: namegroup,
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            members: {
              users: users
            }
          };
          var key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/').push(chat).key;

          for (var i = 0; i < usergroup.length; i++) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid + '/' + key).set(usergroup[i].uid);
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + usergroup[i].uid + '/' + key).set(user.uid);
          }

          this.keymessage = key;
        }
      }, {
        key: "newChat",
        value: function newChat(user) {
          //let key = this.afDB.list('/cliente/').push(cliente).key;
          var chat = {
            timestamp: new Date(),
            type: 'single'
          };
          var key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/chats/').push(chat).key;
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
      }, {
        key: "newMessage",
        value: function newMessage(message) {
          console.log(message);
          var user2 = JSON.parse(localStorage.getItem('user2'));
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + localStorage.getItem('idchat')).push(message);
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user2.uid + '/messages/' + localStorage.getItem('idchat')).push(message);
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/messages/' + localStorage.getItem('idchat')).push(message);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message, user, userrec) {
          var sendmessage = {
            message: message,
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            sender: user.uid
          };
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Messages/' + this.keymessage).push(sendmessage);
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Unread/' + userrec.uid + '/' + this.keymessage).push(sendmessage);
        }
      }, {
        key: "newMessageGroup",
        value: function newMessageGroup(message, idchat) {
          var _this = this;

          console.log(message);
          var user2 = JSON.parse(localStorage.getItem('user2'));
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + localStorage.getItem('idchat')).push(message);
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/messages/' + localStorage.getItem('idchat')).push(message);
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/').orderByKey().equalTo(idchat).on('value', function (resp) {
            var users = snapshotToArray2(resp);
            console.log(users);
            users.forEach(function (user) {
              console.log(user);
              var keyusers = Object.keys(user).filter(function (key) {
                return key != _this.firebaseAuthService.usersign.uid && key != 'key';
              });
              console.log(keyusers);
              keyusers.forEach(function (keyuser) {
                firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(keyuser + '/messages/' + localStorage.getItem('idchat')).push(message);
              });
            });
          });
        }
      }, {
        key: "readChats",
        value: function readChats() {
          var _this2 = this;

          var chatid = localStorage.getItem('idchat');
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + chatid).once('value', function (resp) {
            var messages = snapshotToArray(resp);
            console.log(messages);
            messages.forEach(function (message) {
              if (message.sender != _this2.firebaseAuthService.usersign.uid) {
                firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(_this2.firebaseAuthService.usersign.uid + '/messages/' + chatid + '/' + message.key + '/read').set('true');
              }
            });
          });
        }
      }, {
        key: "stopread",
        value: function stopread() {
          console.log('stop read');
          var chatid = localStorage.getItem('idchat');
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/').off();
        }
      }, {
        key: "unreadChats",
        value: function unreadChats(chatid) {
          var count = 0;
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + chatid);
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
      }, {
        key: "newChatGroup",
        value: function newChatGroup(users) {
          var _this3 = this;

          //let key = this.afDB.list('/cliente/').push(cliente).key;
          var chat = {
            timestamp: new Date(),
            type: 'group'
          };
          console.log(users);
          /* agregar al chat */

          var key = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/chats/').push(chat).key;
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/chats/' + key).set(chat);
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/' + key + '/' + this.firebaseAuthService.usersign.uid).set('true');
          /* users */

          users.forEach(function (user) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/members/' + key + '/' + user.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/members/' + key + '/' + _this3.firebaseAuthService.usersign.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/' + key + '/' + user.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(_this3.firebaseAuthService.usersign.uid + '/members/' + key + '/' + user.uid).set('true');
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

      }, {
        key: "getUsersChat",
        value: function getUsersChat(user) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + user.uid);
        }
      }, {
        key: "getChatType",
        value: function getChatType(keychat) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('Chats/Chats/' + keychat);
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], ChatService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-call-users-list-call-users-list-module~pages-chat-chat-module~pages-chat-list-chat-lis~2ba80dbb-es5.js.map