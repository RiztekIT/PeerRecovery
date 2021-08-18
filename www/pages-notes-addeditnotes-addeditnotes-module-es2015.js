(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notes-addeditnotes-addeditnotes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/addeditnotes/addeditnotes.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/addeditnotes/addeditnotes.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Note</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class=\"date_div\" style=\"margin: 10px 15px 15px 15px;background: #ffffff; border-radius: 5px;\">\n\n\n\n        <ion-row>\n            <ion-col style=\"padding-top: 0px;\">\n                <ion-item>\n                    <ion-label position=\"stacked\" class=\"stacked-lbl\">Title</ion-label>\n                    <ion-input [(ngModel)]=\"title\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col style=\"padding-top: 0px;\">\n                <ion-item>\n                    <ion-label position=\"floating\" class=\"stacked-lbl\">Note</ion-label>\n                    <ion-textarea rows=\"40\" [(ngModel)]=\"note\"></ion-textarea>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n\n        <!--      <ion-row>\n          <ion-col class=\"first_Col\" style=\"background-color: white;\">\n              <h3 class=\"date_lbl\">Date</h3>\n              <ion-datetime displayFormat=\"MMM DD YYYY\" placeholder=\"Nov 01 2019\" [(ngModel)]=\"date\"></ion-datetime>\n          </ion-col>\n          <ion-col style=\"background-color: white;\">\n              <h3 class=\"date_lbl\">Time</h3>\n              <ion-datetime displayFormat=\"hh:mm a\" placeholder=\"10:00 am\" [(ngModel)]=\"date\"></ion-datetime>\n          </ion-col>\n     \n      </ion-row> -->\n\n\n        <!--  <ion-row>\n          <ion-col>\n          </ion-col>\n          <ion-col>\n              <ion-button *ngIf=\"!this.edit\" expand=\"block\" class=\"plan-btn margin-top-30\" (click)=\"addNotes()\">\n                  Save\n              </ion-button>\n              <ion-button *ngIf=\"this.edit\" expand=\"block\" class=\"plan-btn margin-top-30\" (click)=\"editNote()\">\n                  Edit\n              </ion-button>\n          </ion-col>\n          <ion-col>\n          </ion-col>\n      </ion-row> -->\n\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n\n            <ion-fab-button *ngIf=\"!this.edit\" (click)=\"addNotes()\">\n                <ion-icon name=\"save\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button *ngIf=\"this.edit\" (click)=\"editNote()\">\n                <ion-icon name=\"save\"></ion-icon>\n            </ion-fab-button>\n\n\n        </ion-fab>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/notes/addeditnotes/addeditnotes-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/notes/addeditnotes/addeditnotes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddeditnotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditnotesPageRoutingModule", function() { return AddeditnotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addeditnotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addeditnotes.page */ "./src/app/pages/notes/addeditnotes/addeditnotes.page.ts");




const routes = [
    {
        path: '',
        component: _addeditnotes_page__WEBPACK_IMPORTED_MODULE_3__["AddeditnotesPage"]
    }
];
let AddeditnotesPageRoutingModule = class AddeditnotesPageRoutingModule {
};
AddeditnotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddeditnotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/notes/addeditnotes/addeditnotes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/notes/addeditnotes/addeditnotes.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddeditnotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditnotesPageModule", function() { return AddeditnotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _addeditnotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addeditnotes-routing.module */ "./src/app/pages/notes/addeditnotes/addeditnotes-routing.module.ts");
/* harmony import */ var _addeditnotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addeditnotes.page */ "./src/app/pages/notes/addeditnotes/addeditnotes.page.ts");







let AddeditnotesPageModule = class AddeditnotesPageModule {
};
AddeditnotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addeditnotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddeditnotesPageRoutingModule"]
        ],
        declarations: [_addeditnotes_page__WEBPACK_IMPORTED_MODULE_6__["AddeditnotesPage"]]
    })
], AddeditnotesPageModule);



/***/ }),

/***/ "./src/app/pages/notes/addeditnotes/addeditnotes.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/notes/addeditnotes/addeditnotes.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGVzL2FkZGVkaXRub3Rlcy9hZGRlZGl0bm90ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/notes/addeditnotes/addeditnotes.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/notes/addeditnotes/addeditnotes.page.ts ***!
  \***************************************************************/
/*! exports provided: AddeditnotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditnotesPage", function() { return AddeditnotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");





let AddeditnotesPage = class AddeditnotesPage {
    constructor(router, route, utilSVC) {
        this.router = router;
        this.route = route;
        this.utilSVC = utilSVC;
        this.edit = false;
        this.title = "";
        this.note = "";
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = JSON.parse(params.special);
                this.edit = true;
                this.getNote(this.data);
            }
            else {
                this.date = new Date().toString();
                this.edit = false;
            }
        });
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    getNote(note) {
        console.log(note);
        let fecha = new Date();
        let hoy = new Date();
        fecha.setTime(note.timestamp.seconds * 1000);
        let h = +fecha - +hoy;
        console.log(fecha, 'fecha');
        console.log(hoy, 'hoy');
        console.log(h, 'dif');
        /*     fecha.setHours(fecha.getHours()-6)
        
           console.log(fecha);
           console.log(fecha.toISOString().split('T')[1]);   */
        this.title = note.title;
        this.note = note.note;
        this.appkey = note.appkey;
        this.date = fecha.toString();
        console.log(this.date);
    }
    addNotes() {
        let note = {
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.fromDate(new Date()),
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
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.fromDate(new Date()),
            title: this.title,
            note: this.note,
            user: this.user.uid,
            appkey: this.appkey
        };
        console.log(note);
        this.utilSVC.editNote(note);
        this.router.navigate(['notes']);
    }
};
AddeditnotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
AddeditnotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addeditnotes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addeditnotes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/addeditnotes/addeditnotes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addeditnotes.page.scss */ "./src/app/pages/notes/addeditnotes/addeditnotes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
], AddeditnotesPage);



/***/ })

}]);
//# sourceMappingURL=pages-notes-addeditnotes-addeditnotes-module-es2015.js.map