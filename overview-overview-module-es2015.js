(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overview-overview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <label for=\"timespan\">NutriInfo</label>\n    <select id=\"timespan\" (change)=\"changeTimespan($event)\">\n      <option value=\"0\">Monat</option>\n      <option value=\"1\">Woche</option>\n      <option value=\"2\">Tag</option>\n    </select>\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"generateModal()\"\n      >Produkt hinzufügen</ion-button\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"asyncProductRange | async; let productRange\">\n    <ion-item-group *ngFor=\"let currentTimespan of productRange; index as i\">\n      <ion-item-divider>\n        <ion-text color=\"dark\">\n          <h1>{{ currentTimespan.range }}</h1>\n        </ion-text>\n      </ion-item-divider>\n      <ion-label>\n        <ion-item>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Nährwerte</th>\n                <th>Menge</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Kohlenhydrate</td>\n                <td>{{ currentTimespan.nutriments.carbohydrates }}g</td>\n              </tr>\n              <tr>\n                <td>davon Zucker</td>\n                <td>{{ currentTimespan.nutriments.fat }}g</td>\n              </tr>\n              <tr>\n                <td>Energie</td>\n                <td>\n                  {{ currentTimespan.nutriments.energy }}kJ / {{\n                  currentTimespan.nutriments['energy-kcal'] }}kcal\n                </td>\n              </tr>\n              <tr>\n                <td>Fett</td>\n                <td>{{ currentTimespan.nutriments.fat }}g</td>\n              </tr>\n              <tr>\n                <td>Proteine</td>\n                <td>{{ currentTimespan.nutriments.proteins }}g</td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-item>\n      </ion-label>\n      <ion-label *ngFor=\"let product of currentTimespan.items; index as i\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img *ngIf=\"product.image_url\" src=\"{{ product.image_url}}\" />\n            <img *ngIf=\"!product.image_url\" src=\"/svg/fast-food.svg\" />\n          </ion-avatar>\n          <h2>{{ product.product_name }}</h2>\n          <ion-button color=\"danger\" (click)=\"deleteProduct(product)\"\n            >Löschen</ion-button\n          >\n          <ion-button color=\"success\" (click)=\"editProduct(product)\"\n            >Bearbeiten</ion-button\n          >\n        </ion-item>\n        <ion-item>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Nährwert</th>\n                <th>Menge</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Kohlenhydrate</td>\n                <td>{{ product.nutriments.carbohydrates }}g</td>\n              </tr>\n              <tr>\n                <td>davon Zucker</td>\n                <td>{{ product.nutriments.fat }}g</td>\n              </tr>\n              <tr>\n                <td>Energie</td>\n                <td>\n                  {{ product.nutriments.energy }}kJ / {{\n                  product.nutriments['energy-kcal'] }}kJ\n                </td>\n              </tr>\n              <tr>\n                <td>Fett</td>\n                <td>{{ product.nutriments.fat }}g</td>\n              </tr>\n              <tr>\n                <td>Proteine</td>\n                <td>{{ product.nutriments.proteins }}g</td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-item>\n      </ion-label>\n    </ion-item-group>\n    <ion-item *ngIf=\"productRange.length === 0\"\n      >Keine Produkte hinzugefügt.</ion-item\n    >\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/overview/overview-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/overview/overview-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: OverviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageRoutingModule", function() { return OverviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.page */ "./src/app/overview/overview.page.ts");




const routes = [
    {
        path: '',
        component: _overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPage"]
    }
];
let OverviewPageRoutingModule = class OverviewPageRoutingModule {
};
OverviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OverviewPageRoutingModule);



/***/ }),

/***/ "./src/app/overview/overview.module.ts":
/*!*********************************************!*\
  !*** ./src/app/overview/overview.module.ts ***!
  \*********************************************/
/*! exports provided: OverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function() { return OverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview-routing.module */ "./src/app/overview/overview-routing.module.ts");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview.page */ "./src/app/overview/overview.page.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");








let OverviewPageModule = class OverviewPageModule {
};
OverviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__["OverviewPageRoutingModule"]
        ],
        providers: [
            _products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"]
        ],
        declarations: [_overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]]
    })
], OverviewPageModule);



/***/ }),

/***/ "./src/app/overview/overview.page.scss":
/*!*********************************************!*\
  !*** ./src/app/overview/overview.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  margin-bottom: 0;\n  margin-left: 0;\n  color: #000;\n}\n\ntr > :first-child {\n  width: 40vw;\n}\n\nth,\ntd {\n  padding: 0.25em !important;\n}\n\nlabel {\n  font-size: 20px;\n  padding: 0 8px;\n}\n\n@media (max-width: 340px) {\n  label {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBOztFQUVFLDBCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxhQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGNvbG9yOiAjMDAwO1xufVxudHIgPiA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNDB2dztcbn1cbnRoLFxudGQge1xuICBwYWRkaW5nOiAwLjI1ZW0gIWltcG9ydGFudDtcbn1cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/overview/overview.page.ts":
/*!*******************************************!*\
  !*** ./src/app/overview/overview.page.ts ***!
  \*******************************************/
/*! exports provided: OverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPage", function() { return OverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _data_timespan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/timespan */ "./src/app/data/timespan.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");






let OverviewPage = class OverviewPage {
    constructor(productsService, modalController, alertController) {
        this.productsService = productsService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.Timespan = _data_timespan__WEBPACK_IMPORTED_MODULE_4__["Timespan"];
        this.viewTimespan = 0;
        this.Object = Object;
        this.modal = null;
        this.updateProducts();
        this.productSubscription = productsService.productListChange().subscribe(this.updateProducts.bind(this)
        // this.productsService.getProductsByTimespan.bind(this, this.viewTimespan)
        );
    }
    generateModal(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"],
                componentProps: {
                    product
                }
            });
            yield this.modal.present();
            yield this.modal.onWillDismiss();
        });
    }
    deleteProduct(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Dieses Produkt wirklich löschen?',
                buttons: [
                    {
                        text: 'Nein',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Ja',
                        handler: () => {
                            this.productsService.deleteProduct(product);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    editProduct(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.generateModal(product);
        });
    }
    updateProducts() {
        this.asyncProductRange = this.productsService.getProductsByTimespan(this.viewTimespan);
    }
    changeTimespan(event) {
        this.viewTimespan = +event.target.value;
        this.updateProducts();
    }
    ngOnInit() {
    }
};
OverviewPage.ctorParameters = () => [
    { type: _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
OverviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./overview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./overview.page.scss */ "./src/app/overview/overview.page.scss")).default]
    })
], OverviewPage);



/***/ })

}]);
//# sourceMappingURL=overview-overview-module-es2015.js.map