function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-users-list-call-users-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call-users-list/call-users-list.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call-users-list/call-users-list.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCallUsersListCallUsersListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Video call</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-bottom\">\n    <div class=\"today_div\">\n        <ion-item *ngFor=\"let item of users\" lines=\"full\" (click)=\"openCall(item)\" mode=\"md\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"item?.photoUrl\">\n            </ion-avatar>\n            <ion-label>\n                <h3 class=\"name\">{{item?.displayName}}</h3>\n                <p class=\"detail\">{{item?.email}}</p>\n            </ion-label>\n        </ion-item>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CallUsersListPageRoutingModule */

  /***/
  function srcAppPagesCallUsersListCallUsersListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsersListPageRoutingModule", function () {
      return CallUsersListPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _call_users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./call-users-list.page */
    "./src/app/pages/call-users-list/call-users-list.page.ts");

    var routes = [{
      path: '',
      component: _call_users_list_page__WEBPACK_IMPORTED_MODULE_3__["CallUsersListPage"]
    }];

    var CallUsersListPageRoutingModule = function CallUsersListPageRoutingModule() {
      _classCallCheck(this, CallUsersListPageRoutingModule);
    };

    CallUsersListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CallUsersListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CallUsersListPageModule */

  /***/
  function srcAppPagesCallUsersListCallUsersListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsersListPageModule", function () {
      return CallUsersListPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _call_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./call-users-list-routing.module */
    "./src/app/pages/call-users-list/call-users-list-routing.module.ts");
    /* harmony import */


    var _call_users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./call-users-list.page */
    "./src/app/pages/call-users-list/call-users-list.page.ts");

    var CallUsersListPageModule = function CallUsersListPageModule() {
      _classCallCheck(this, CallUsersListPageModule);
    };

    CallUsersListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _call_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallUsersListPageRoutingModule"]],
      declarations: [_call_users_list_page__WEBPACK_IMPORTED_MODULE_6__["CallUsersListPage"]]
    })], CallUsersListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCallUsersListCallUsersListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-back-button {\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-title {\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2FsbC11c2Vycy1saXN0L2NhbGwtdXNlcnMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbGwtdXNlcnMtbGlzdC9jYWxsLXVzZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjtBREVJO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxsLXVzZXJzLWxpc3QvY2FsbC11c2Vycy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list.page.ts ***!
    \***************************************************************/

  /*! exports provided: snapshotToArray, CallUsersListPage */

  /***/
  function srcAppPagesCallUsersListCallUsersListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotToArray", function () {
      return snapshotToArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsersListPage", function () {
      return CallUsersListPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");

    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      return returnArr;
    };

    var CallUsersListPage = /*#__PURE__*/function () {
      function CallUsersListPage(nav, router, firebaseAuthService, chatService) {
        _classCallCheck(this, CallUsersListPage);

        this.nav = nav;
        this.router = router;
        this.firebaseAuthService = firebaseAuthService;
        this.chatService = chatService;
        this.users = [];
      }

      _createClass(CallUsersListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this = this;

          this.chatService.getUsers().orderByChild('type').equalTo('User').on('value', function (resp) {
            //console.log(resp);
            var users = snapshotToArray(resp);
            console.log(users);
            _this.users = users;
            _this.users = _this.users.filter(function (x) {
              return x.uid != _this.firebaseAuthService.usersign.uid;
            });
          });
        }
      }, {
        key: "openCall",
        value: function openCall(item) {
          var navigationExtras = {
            queryParams: {
              special: JSON.stringify(item)
            }
          };
          this.router.navigate(['call'], navigationExtras);
        }
      }]);

      return CallUsersListPage;
    }();

    CallUsersListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
      }];
    };

    CallUsersListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-call-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./call-users-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call-users-list/call-users-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./call-users-list.page.scss */
      "./src/app/pages/call-users-list/call-users-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])], CallUsersListPage);
    /***/
  },

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
        key: "getChat",
        value: function getChat() {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/members/');
        }
      }, {
        key: "getMessages",
        value: function getMessages(chatid) {
          return firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + chatid);
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
        key: "newMessageGroup",
        value: function newMessageGroup(message, idchat) {
          var _this2 = this;

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
                return key != _this2.firebaseAuthService.usersign.uid && key != 'key';
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
          var _this3 = this;

          var chatid = localStorage.getItem('idchat');
          firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(this.firebaseAuthService.usersign.uid + '/messages/' + chatid).once('value', function (resp) {
            var messages = snapshotToArray(resp);
            console.log(messages);
            messages.forEach(function (message) {
              if (message.sender != _this3.firebaseAuthService.usersign.uid) {
                firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(_this3.firebaseAuthService.usersign.uid + '/messages/' + chatid + '/' + message.key + '/read').set('true');
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
          var _this4 = this;

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
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/members/' + key + '/' + _this4.firebaseAuthService.usersign.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('/members/' + key + '/' + user.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(_this4.firebaseAuthService.usersign.uid + '/members/' + key + '/' + user.uid).set('true');
            firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref(user.uid + '/chats/' + key).set(chat);
          });
          return key;
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
//# sourceMappingURL=pages-call-users-list-call-users-list-module-es5.js.map