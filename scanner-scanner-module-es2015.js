(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanner-scanner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Barcode-Scanner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/scanner/scanner-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/scanner/scanner-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ScannerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPageRoutingModule", function() { return ScannerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scanner.page */ "./src/app/scanner/scanner.page.ts");




const routes = [
    {
        path: '',
        component: _scanner_page__WEBPACK_IMPORTED_MODULE_3__["ScannerPage"]
    }
];
let ScannerPageRoutingModule = class ScannerPageRoutingModule {
};
ScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScannerPageRoutingModule);



/***/ }),

/***/ "./src/app/scanner/scanner.module.ts":
/*!*******************************************!*\
  !*** ./src/app/scanner/scanner.module.ts ***!
  \*******************************************/
/*! exports provided: ScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPageModule", function() { return ScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scanner-routing.module */ "./src/app/scanner/scanner-routing.module.ts");
/* harmony import */ var _scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanner.page */ "./src/app/scanner/scanner.page.ts");







let ScannerPageModule = class ScannerPageModule {
};
ScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScannerPageRoutingModule"]
        ],
        declarations: [_scanner_page__WEBPACK_IMPORTED_MODULE_6__["ScannerPage"]]
    })
], ScannerPageModule);



/***/ }),

/***/ "./src/app/scanner/scanner.page.scss":
/*!*******************************************!*\
  !*** ./src/app/scanner/scanner.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYW5uZXIvc2Nhbm5lci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/scanner/scanner.page.ts":
/*!*****************************************!*\
  !*** ./src/app/scanner/scanner.page.ts ***!
  \*****************************************/
/*! exports provided: ScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPage", function() { return ScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/__ivy_ngcc__/ngx/index.js");




let ScannerPage = class ScannerPage {
    constructor(barcodeScanner, dialogs) {
        this.barcodeScanner = barcodeScanner;
        this.dialogs = dialogs;
    }
    ngOnInit() {
        try {
            this.barcodeScanner.scan().then(barcodeData => {
                this.dialogs.alert(barcodeData.text);
                console.log('Barcode data', barcodeData);
            }).catch(err => {
                console.log('Error', err);
            });
        }
        catch (e) {
            console.log(e);
        }
    }
};
ScannerPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_3__["Dialogs"] }
];
ScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scanner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scanner.page.scss */ "./src/app/scanner/scanner.page.scss")).default]
    })
], ScannerPage);



/***/ })

}]);
//# sourceMappingURL=scanner-scanner-module-es2015.js.map