(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanner-scanner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"product\">\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\" integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">\n  <ion-header translucent>\n    <ion-toolbar>\n      <ion-title>{{ product.product_name }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">Schliessen</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content fullscreen>\n    <img [src]=\"product.image_url\">\n    <button (click)=\"confirmAdding()\">Produkt hinzufügen</button>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Menge</th>\n          <th>Nährwert</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Kohlenhydrate</td>\n          <td>{{ product.nutriments.carbohydrates }}</td>\n        </tr>\n        <tr>\n          <td>davon Zucker</td>\n          <td>{{ product.nutriments.fat }}</td>\n        </tr>\n        <tr>\n          <td>Energie</td>\n          <td>{{ product.nutriments.energy }}kJ / {{ product.nutriments['energy-kcal'] }}kJ</td>\n        </tr>\n        <tr>\n          <td>Fett</td>\n          <td>{{ product.nutriments.fat }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-content>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Barcode-Scanner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"enabled\">\n  <zxing-scanner [(device)]=\"currentDevice\" (scanSuccess)=\"onCodeResult($event)\"\n  [formats]=\"formatsEnabled\"  [enable]=\"enabled\" (permissionResponse)=\"onHasPermission($event)\"\n  (camerasFound)=\"onCamerasFound($event)\" tryHarder=\"true\"></zxing-scanner>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-product/add-product.component.scss":
/*!********************************************************!*\
  !*** ./src/app/add-product/add-product.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");




let AddProductComponent = class AddProductComponent {
    constructor(modalController, productsService) {
        this.modalController = modalController;
        this.productsService = productsService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.code) {
                var product = yield this.productsService.getProductDetails(this.code);
                this.product = product;
                console.log(product);
            }
        });
    }
    confirmAdding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var status = yield this.productsService.addProduct(this.product);
            this.modalController.dismiss();
        });
    }
    dismissModal() {
        if (this.modalController) {
            this.modalController.dismiss({});
        }
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
AddProductComponent.propDecorators = {
    code: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-product.component.scss */ "./src/app/add-product/add-product.component.scss")).default]
    })
], AddProductComponent);



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
        path: "",
        component: _scanner_page__WEBPACK_IMPORTED_MODULE_3__["ScannerPage"],
    },
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
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");









let ScannerPageModule = class ScannerPageModule {
};
ScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScannerPageRoutingModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__["ZXingScannerModule"],
        ],
        exports: [
            _scanner_page__WEBPACK_IMPORTED_MODULE_6__["ScannerPage"],
            _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"]
        ],
        declarations: [_scanner_page__WEBPACK_IMPORTED_MODULE_6__["ScannerPage"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("zxing-scanner {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nhbm5lci9zY2FubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NjYW5uZXIvc2Nhbm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ6eGluZy1zY2FubmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/umd/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");






let ScannerPage = class ScannerPage {
    constructor(modalController, productsService, alertController) {
        this.modalController = modalController;
        this.productsService = productsService;
        this.alertController = alertController;
        this.modalOpen = false;
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].DATA_MATRIX,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].QR_CODE,
        ];
        this.enabled = true;
        this.modal = null;
    }
    ionViewWillEnter() {
        console.log('enter');
        this.enabled = true;
    }
    ionViewWillLeave() {
        console.log('leave');
        this.enabled = false;
    }
    generateModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"],
                componentProps: {
                    code: this.qrResultString
                }
            });
            yield this.modal.present();
            let { data } = yield this.modal.onWillDismiss();
            this.modalOpen = false;
        });
    }
    clearResult() {
        this.qrResultString = null;
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }
    onCodeResult(resultString) {
        this.qrResultString = resultString;
        console.log(resultString);
        var errorDialog = this.errorDialog.bind(this);
        var generateModal = this.generateModal.bind(this);
        if (this.modalOpen === false) {
            this.modalOpen = true;
            this.productsService.getProductDetails(resultString).then(function () {
                generateModal();
            }).catch(function (error) {
                errorDialog();
            });
        }
    }
    errorDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Fehler',
                message: 'Das gescannte Produkt ist nicht in unserer Datenbank erfasst. Möchten Sie dies dem Entwickler melden?',
                buttons: [
                    {
                        text: 'Nein',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.modalOpen = false;
                        }
                    }, {
                        text: 'Ja',
                        handler: () => {
                            window.location.href = "mailto:nutriinfo.app@gmail.com?subject=Fehlerbericht%20NutriInfo&body=Ein%20Fehler%20mit%20dem%20Barcode%20Scanner%20wurde%20erkannt.%20Der%20Barcode%20\"[]\"%20konnte%20nicht%20in%20unserer%20Datenbank%20gefunden%20werden.%0D%0ABitte%20geben%20Sie%20manuell%20den%20Namen%20des%20Produktes%20an:".replace("[]", this.qrResultString);
                            this.modalOpen = false;
                        }
                    }
                ]
            });
            yield alert.present().then(function () {
            }.bind(this));
        });
    }
    onDeviceSelectChange(selected) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
        console.log("new device", device);
    }
    onHasPermission(has) {
        this.hasPermission = has;
    }
    openInfoDialog() {
        const data = {
            hasDevices: this.hasDevices,
            hasPermission: this.hasPermission,
        };
        // this._dialog.open(AppInfoDialogComponent, { data });
    }
};
ScannerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ScannerPage.propDecorators = {
    modalOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scanner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scanner.page.scss */ "./src/app/scanner/scanner.page.scss")).default]
    })
], ScannerPage);



/***/ })

}]);
//# sourceMappingURL=scanner-scanner-module-es2015.js.map