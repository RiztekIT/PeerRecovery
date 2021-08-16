(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notes-notes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/notes.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/notes.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Notes</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of notes\">\n\n            <ion-item-options side=\"end\">\n\n                <ion-item-option (click)=\"delete(item)\" color=\"danger\">\n\n\n                    <ion-icon slot=\"icon-only\" name=\"trash\">\n\n                    </ion-icon>\n\n                </ion-item-option>\n\n            </ion-item-options>\n\n            <ion-item (click)=\"openNote(item)\" class=\"transparentbg\">\n                <ion-icon name=\"document\"> </ion-icon>\n                <ion-label>\n\n                    <h3 class=\"name\">{{item.title}} <span>{{item.timestamp.seconds * 1000| date: 'dd/MM/yy h:mm a' }}</span></h3>\n\n                    <!-- <p class=\"add\">{{item.description}}</p> -->\n\n                </ion-label>\n\n\n            </ion-item>\n\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"openNote()\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n        <!--  <ion-fab-list side=\"top\">\n          <ion-fab-button (click)=\"newAppointmentPage()\">\n              <ion-icon name=\"add-outline\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button (click)=\"searchDates()\">\n              <ion-icon name=\"calendar-outline\"></ion-icon>\n          </ion-fab-button>\n      </ion-fab-list> -->\n    </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/notes/notes-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/notes/notes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageRoutingModule", function() { return NotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes.page */ "./src/app/pages/notes/notes.page.ts");




const routes = [
    {
        path: '',
        component: _notes_page__WEBPACK_IMPORTED_MODULE_3__["NotesPage"]
    },
];
let NotesPageRoutingModule = class NotesPageRoutingModule {
};
NotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/notes/notes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/notes/notes.module.ts ***!
  \*********************************************/
/*! exports provided: NotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes-routing.module */ "./src/app/pages/notes/notes-routing.module.ts");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes.page */ "./src/app/pages/notes/notes.page.ts");







let NotesPageModule = class NotesPageModule {
};
NotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotesPageRoutingModule"]
        ],
        declarations: [_notes_page__WEBPACK_IMPORTED_MODULE_6__["NotesPage"]]
    })
], NotesPageModule);



/***/ }),

/***/ "./src/app/pages/notes/notes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/notes/notes.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGVzL25vdGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/notes/notes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/notes/notes.page.ts ***!
  \*******************************************/
/*! exports provided: NotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPage", function() { return NotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");





let NotesPage = class NotesPage {
    constructor(utilSVC, router) {
        this.utilSVC = utilSVC;
        this.router = router;
        this.title = "";
        this.note = "";
        this.notes = [];
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.getNotes();
    }
    getNotes() {
        this.utilSVC.getNotes(this.user.uid).on('value', resp => {
            this.notes = [];
            console.log(resp.val());
            resp.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.appkey = childSnapshot.key;
                this.notes.push(item);
            });
        });
    }
    addNotes() {
        let note = {
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            title: this.title,
            note: this.note,
            user: this.user.uid,
        };
        console.log(note);
        this.utilSVC.addNote(note);
        this.router.navigate(['notes']);
    }
    editNote() {
        let note;
        note = {
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp.fromDate(new Date()),
            title: this.title,
            note: this.note,
            user: this.user.uid,
        };
        console.log(note);
        this.utilSVC.editNote(note);
        this.router.navigate(['notes']);
    }
    delete(item) {
        this.utilSVC.deleteNote(item);
    }
    openNote(item) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(item)
            }
        };
        this.router.navigate(['addeditnotes'], navigationExtras);
    }
};
NotesPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/notes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.page.scss */ "./src/app/pages/notes/notes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NotesPage);



/***/ })

}]);
//# sourceMappingURL=pages-notes-notes-module-es2015.js.map