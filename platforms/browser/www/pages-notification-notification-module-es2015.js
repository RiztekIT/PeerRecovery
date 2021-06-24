(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"signIn\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-menu-button></ion-menu-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">Notification</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-list *ngFor=\"let i of notification\">\n        <ion-list-header>\n            {{i?.date}}\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let j of i?.notification\" lines=\"full\">\n            <ion-avatar class=\"margin-bottom-11\" slot=\"start\">\n                <img [src]=\"j?.img\">\n            </ion-avatar>\n            <ion-label>\n                <h2 class=\"title\">{{j?.title}}\n                    <p class=\"time ion-float-end\">{{j?.date}}</p>\n                </h2>\n                <p class=\"text\">{{j?.text}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/notification/notification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/notification/notification-routing.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "./src/app/pages/notification/notification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-toolbar ion-buttons ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-buttons ion-button ion-back-button,\nion-header ion-toolbar ion-buttons ion-button ion-menu-button {\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-list-header {\n  padding-left: 0;\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\nion-content ion-list {\n  padding: 0;\n}\nion-content ion-list ion-item {\n  --padding-start: 0;\n}\nion-content ion-list ion-item ion-avatar {\n  box-shadow: 0 0 3px rgba(31, 140, 237, 0.3);\n  border: 3px solid var(--ion-color-white);\n  height: 55px;\n  width: 55px;\n}\nion-content ion-list ion-item ion-avatar img {\n  height: 55px;\n  width: 55px;\n  border-radius: 50%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content ion-list ion-item ion-label {\n  white-space: normal;\n}\nion-content ion-list ion-item ion-label .title {\n  margin: 0;\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-list ion-item ion-label .time {\n  margin: 0;\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\nion-content ion-list ion-item ion-label .text {\n  margin: 0;\n  font-size: 13px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUNEWjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBREdnQjs7RUFFSSxvQ0FBQTtBQ0RwQjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0FDTlI7QURRSTtFQUNJLFVBQUE7QUNOUjtBRE9RO0VBQ0ksa0JBQUE7QUNMWjtBRE1ZO0VBQ0ksMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSmhCO0FES2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNIcEI7QURNWTtFQUNJLG1CQUFBO0FDSmhCO0FES2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDSHBCO0FES2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0FDSHBCO0FES2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0FDSHBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1zYic7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICBpb24tYmFjay1idXR0b24sXHJcbiAgICAgICAgICAgICAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgfVxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDMxLCAxNDAsIDIzNywgMzAlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktc2JcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5cbmlvbi1jb250ZW50IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgzMSwgMTQwLCAyMzcsIDAuMyk7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDU1cHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tYXZhdGFyIGltZyB7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgLnRpbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgLnRleHQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/notification/notification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationPage = class NotificationPage {
    constructor() {
        this.notification = [
            {
                date: '26,Nov 2019',
                notification: [
                    {
                        img: '../../../assets/imgs/data/notification/notify1.png',
                        title: 'Dr.Nick Adams',
                        date: '5min ago',
                        text: 'Doctor Cancel Your Appointment'
                    }, {
                        img: '../../../assets/imgs/data/notification/notify2.png',
                        title: 'Dr.Kelly Gomez',
                        date: '3 Hour ago',
                        text: 'Change your appointment time please...'
                    }, {
                        img: '../../../assets/imgs/data/notification/notify3.png',
                        title: 'Dr.Alex Griffin',
                        date: '4 Hour ago',
                        text: 'Book Appointment 11,Nov 2019 10:00am'
                    }, {
                        img: '../../../assets/imgs/data/notification/notify4.png',
                        title: 'Dr.Fionna Foster',
                        date: '4 Hour ago',
                        text: 'Give 5 Star And good doctor I change...'
                    },
                ]
            }, {
                date: '25,Nov 2019',
                notification: [
                    {
                        img: '../../../assets/imgs/data/notification/notify5.png',
                        title: 'Dr.Amanda Clark',
                        date: '5 Hour ago',
                        text: 'Change your appointment time please...'
                    }, {
                        img: '../../../assets/imgs/data/notification/notify6.png',
                        title: 'Dr.Kelly Gomez',
                        date: '3 Hour ago',
                        text: 'Cancel Appointment 11,Nov 2019 10:00am'
                    }, {
                        img: '../../../assets/imgs/data/notification/notify7.png',
                        title: 'Dr.Alex Griffin',
                        date: '4 Hour ago',
                        text: 'Book Appointment 11,Nov 2019 10:00am'
                    }, {
                        img: '../../../assets/imgs/data/notification/notify8.png',
                        title: 'Dr.Fionna Foster',
                        date: '4 Hour ago',
                        text: 'Give 5 Star And good doctor I change...'
                    },
                ]
            },
        ];
    }
    ngOnInit() {
    }
};
NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.page.scss */ "./src/app/pages/notification/notification.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationPage);



/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module-es2015.js.map