(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resource-dir-resource-dir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resource-dir/resource-dir.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resource-dir/resource-dir.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Resources Dir</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- <ion-button expand=\"full\" (click)=\"openPDF2()\">Abrir Archivo</ion-button> -->\n    <ion-button expand=\"full\" (click)=\"openPDF()\">Resources File</ion-button>\n    <!-- <ion-text>\n        {{this.pdf}}\n    </ion-text> -->\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/resource-dir/resource-dir-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/resource-dir/resource-dir-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ResourceDirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDirPageRoutingModule", function() { return ResourceDirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resource_dir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-dir.page */ "./src/app/pages/resource-dir/resource-dir.page.ts");




const routes = [
    {
        path: '',
        component: _resource_dir_page__WEBPACK_IMPORTED_MODULE_3__["ResourceDirPage"]
    }
];
let ResourceDirPageRoutingModule = class ResourceDirPageRoutingModule {
};
ResourceDirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResourceDirPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/resource-dir/resource-dir.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/resource-dir/resource-dir.module.ts ***!
  \***********************************************************/
/*! exports provided: ResourceDirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDirPageModule", function() { return ResourceDirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _resource_dir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-dir-routing.module */ "./src/app/pages/resource-dir/resource-dir-routing.module.ts");
/* harmony import */ var _resource_dir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource-dir.page */ "./src/app/pages/resource-dir/resource-dir.page.ts");







let ResourceDirPageModule = class ResourceDirPageModule {
};
ResourceDirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resource_dir_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourceDirPageRoutingModule"]
        ],
        declarations: [_resource_dir_page__WEBPACK_IMPORTED_MODULE_6__["ResourceDirPage"]]
    })
], ResourceDirPageModule);



/***/ }),

/***/ "./src/app/pages/resource-dir/resource-dir.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/resource-dir/resource-dir.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc291cmNlLWRpci9yZXNvdXJjZS1kaXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/resource-dir/resource-dir.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/resource-dir/resource-dir.page.ts ***!
  \*********************************************************/
/*! exports provided: ResourceDirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDirPage", function() { return ResourceDirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");





/* import { File } from '@ionic-native/file/ngx'; */


let ResourceDirPage = class ResourceDirPage {
    constructor(document, utilSVC, fileOpener, ft, file) {
        this.document = document;
        this.utilSVC = utilSVC;
        this.fileOpener = fileOpener;
        this.ft = ft;
        this.file = file;
        this.options = {
            title: 'My PDF'
        };
    }
    ngOnInit() {
        /* this.openPDF()   */
    }
    openPDF() {
        this.utilSVC.getPDF().getDownloadURL().then(resp => {
            console.log(resp);
            this.pdf = resp;
            //    this.document.viewDocument(resp, 'application/pdf', this.options)
            const transfer = this.ft.create();
            let path = this.file.dataDirectory;
            transfer.download(resp, `${path}myfile.pdf`).then(resp => {
                let url = resp.toURL();
                this.fileOpener.open(url, 'application/pdf')
                    .then(() => console.log('File is opened'));
            });
        });
    }
    openPDF2() {
        this.utilSVC.getPDF().getDownloadURL().then(resp => {
            let fakeName = Date.now();
            this.file.copyFile(resp, 'resource-dir.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
                this.fileOpener.showOpenWithDialog(result.nativeURL, 'application/pdf').then(() => console.log('File is opened'));
            });
        });
    }
};
ResourceDirPage.ctorParameters = () => [
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["DocumentViewer"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] }
];
ResourceDirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource-dir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resource-dir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resource-dir/resource-dir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resource-dir.page.scss */ "./src/app/pages/resource-dir/resource-dir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["DocumentViewer"],
        _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])
], ResourceDirPage);



/***/ })

}]);
//# sourceMappingURL=pages-resource-dir-resource-dir-module-es2015.js.map