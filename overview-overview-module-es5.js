(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overview-overview-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOverviewOverviewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Übersicht</ion-title>\n    <select\n      class=\"form-control\"\n      id=\"power\"\n      (change)=\"changeTimespan($event)\"\n      required\n    >\n      <option value=\"0\">Monat</option>\n      <option value=\"1\">Woche</option>\n      <option value=\"2\">Tag</option>\n    </select>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"asyncProductRange | async; let productRange\">\n    <ion-item-group *ngFor=\"let currentTimespan of productRange; index as i\">\n      <ion-item-divider>\n        <h1>{{ currentTimespan.range }}</h1>\n      </ion-item-divider>\n\n      <ion-label *ngFor=\"let product of currentTimespan.items; index as i\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{ product.image_url}}\" />\n          </ion-avatar>\n          <h2>{{ product.product_name }}</h2>\n        </ion-item>\n        <ion-item>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Nährwert</th>\n                <th>Menge</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Kohlenhydrate</td>\n                <td>{{ product.nutriments.carbohydrates }}</td>\n              </tr>\n              <tr>\n                <td>davon Zucker</td>\n                <td>{{ product.nutriments.fat }}</td>\n              </tr>\n              <tr>\n                <td>Energie</td>\n                <td>\n                  {{ product.nutriments.energy }}kJ / {{\n                  product.nutriments['energy-kcal'] }}kJ\n                </td>\n              </tr>\n              <tr>\n                <td>Fett</td>\n                <td>{{ product.nutriments.fat }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-item>\n      </ion-label>\n    </ion-item-group>\n    <ion-item *ngIf=\"productRange.length === 0\"\n      >Keine Produkte hinzugefügt.</ion-item\n    >\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/overview/overview-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/overview/overview-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: OverviewPageRoutingModule */

    /***/
    function srcAppOverviewOverviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverviewPageRoutingModule", function () {
        return OverviewPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _overview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./overview.page */
      "./src/app/overview/overview.page.ts");

      var routes = [{
        path: '',
        component: _overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPage"]
      }];

      var OverviewPageRoutingModule = function OverviewPageRoutingModule() {
        _classCallCheck(this, OverviewPageRoutingModule);
      };

      OverviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OverviewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/overview/overview.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/overview/overview.module.ts ***!
      \*********************************************/

    /*! exports provided: OverviewPageModule */

    /***/
    function srcAppOverviewOverviewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function () {
        return OverviewPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./overview-routing.module */
      "./src/app/overview/overview-routing.module.ts");
      /* harmony import */


      var _overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./overview.page */
      "./src/app/overview/overview.page.ts");
      /* harmony import */


      var _products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../products.service */
      "./src/app/products.service.ts");

      var OverviewPageModule = function OverviewPageModule() {
        _classCallCheck(this, OverviewPageModule);
      };

      OverviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__["OverviewPageRoutingModule"]],
        providers: [_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"]],
        declarations: [_overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]]
      })], OverviewPageModule);
      /***/
    },

    /***/
    "./src/app/overview/overview.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/overview/overview.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppOverviewOverviewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  margin-bottom: 0;\n  margin-left: 0;\n  color: #000;\n}\n\ntr > :first-child {\n  width: 40vw;\n}\n\nth,\ntd {\n  padding: 0.25em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBOztFQUVFLDBCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9vdmVydmlldy9vdmVydmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbnRyID4gOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDQwdnc7XG59XG50aCxcbnRkIHtcbiAgcGFkZGluZzogMC4yNWVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/overview/overview.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/overview/overview.page.ts ***!
      \*******************************************/

    /*! exports provided: OverviewPage */

    /***/
    function srcAppOverviewOverviewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverviewPage", function () {
        return OverviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _data_timespan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/timespan */
      "./src/app/data/timespan.ts");
      /* harmony import */


      var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../products.service */
      "./src/app/products.service.ts");

      var OverviewPage = /*#__PURE__*/function () {
        function OverviewPage(productsService) {
          _classCallCheck(this, OverviewPage);

          this.productsService = productsService;
          this.Timespan = _data_timespan__WEBPACK_IMPORTED_MODULE_2__["Timespan"];
          this.viewTimespan = 0;
          this.Object = Object;
          this.updateProducts();
          this.productSubscription = productsService.productListChange().subscribe(console.log // this.productsService.getProductsByTimespan.bind(this, this.viewTimespan)
          );
        }

        _createClass(OverviewPage, [{
          key: "updateProducts",
          value: function updateProducts() {
            this.asyncProductRange = this.productsService.getProductsByTimespan(this.viewTimespan);
            this.asyncProductRange.then(console.log);
          }
        }, {
          key: "changeTimespan",
          value: function changeTimespan(event) {
            this.viewTimespan = +event.target.value;
            this.updateProducts();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OverviewPage;
      }();

      OverviewPage.ctorParameters = function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
        }];
      };

      OverviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./overview.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./overview.page.scss */
        "./src/app/overview/overview.page.scss"))["default"]]
      })], OverviewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=overview-overview-module-es5.js.map