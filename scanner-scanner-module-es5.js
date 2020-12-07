(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanner-scanner-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Modal Content</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppScannerScannerPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Barcode-Scanner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <zxing-scanner [(device)]=\"currentDevice\" (scanSuccess)=\"onCodeResult($event)\"\n  [formats]=\"formatsEnabled\" [tryHarder]=\"tryHarder\" (permissionResponse)=\"onHasPermission($event)\"\n  (camerasFound)=\"onCamerasFound($event)\"></zxing-scanner>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/add-product/add-product.component.scss":
    /*!********************************************************!*\
      !*** ./src/app/add-product/add-product.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAddProductAddProductComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/add-product/add-product.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/add-product/add-product.component.ts ***!
      \******************************************************/

    /*! exports provided: AddProductComponent */

    /***/
    function srcAppAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
        return AddProductComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AddProductComponent = /*#__PURE__*/function () {
        function AddProductComponent(modalController) {
          _classCallCheck(this, AddProductComponent);

          this.modalController = modalController;
        }

        _createClass(AddProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.code);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            if (this.modalController) {
              this.modalController.dismiss({});
            }
          }
        }]);

        return AddProductComponent;
      }();

      AddProductComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      AddProductComponent.propDecorators = {
        code: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-product.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-product.component.scss */
        "./src/app/add-product/add-product.component.scss"))["default"]]
      })], AddProductComponent);
      /***/
    },

    /***/
    "./src/app/scanner/scanner-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/scanner/scanner-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ScannerPageRoutingModule */

    /***/
    function srcAppScannerScannerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScannerPageRoutingModule", function () {
        return ScannerPageRoutingModule;
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


      var _scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scanner.page */
      "./src/app/scanner/scanner.page.ts");

      var routes = [{
        path: "",
        component: _scanner_page__WEBPACK_IMPORTED_MODULE_3__["ScannerPage"]
      }];

      var ScannerPageRoutingModule = function ScannerPageRoutingModule() {
        _classCallCheck(this, ScannerPageRoutingModule);
      };

      ScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ScannerPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/scanner/scanner.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/scanner/scanner.module.ts ***!
      \*******************************************/

    /*! exports provided: ScannerPageModule */

    /***/
    function srcAppScannerScannerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScannerPageModule", function () {
        return ScannerPageModule;
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


      var _scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scanner-routing.module */
      "./src/app/scanner/scanner-routing.module.ts");
      /* harmony import */


      var _scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scanner.page */
      "./src/app/scanner/scanner.page.ts");
      /* harmony import */


      var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @zxing/ngx-scanner */
      "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");

      var ScannerPageModule = function ScannerPageModule() {
        _classCallCheck(this, ScannerPageModule);
      };

      ScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScannerPageRoutingModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__["ZXingScannerModule"]],
        declarations: [_scanner_page__WEBPACK_IMPORTED_MODULE_6__["ScannerPage"]]
      })], ScannerPageModule);
      /***/
    },

    /***/
    "./src/app/scanner/scanner.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/scanner/scanner.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppScannerScannerPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "zxing-scanner {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nhbm5lci9zY2FubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NjYW5uZXIvc2Nhbm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ6eGluZy1zY2FubmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/scanner/scanner.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/scanner/scanner.page.ts ***!
      \*****************************************/

    /*! exports provided: ScannerPage */

    /***/
    function srcAppScannerScannerPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScannerPage", function () {
        return ScannerPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _zxing_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @zxing/library */
      "./node_modules/@zxing/library/umd/index.js");
      /* harmony import */


      var _zxing_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../add-product/add-product.component */
      "./src/app/add-product/add-product.component.ts");

      var ScannerPage = /*#__PURE__*/function () {
        function ScannerPage(modalController) {
          _classCallCheck(this, ScannerPage);

          this.modalController = modalController;
          this.modalOpen = false;
          this.currentDevice = null;
          this.formatsEnabled = [_zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].CODE_128, _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].DATA_MATRIX, _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].EAN_13, _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].QR_CODE];
          this.tryHarder = true;
          this.modal = null;
        }

        _createClass(ScannerPage, [{
          key: "generateModal",
          value: function generateModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _yield$this$modal$onW, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.modalOpen === false)) {
                        _context.next = 12;
                        break;
                      }

                      this.modalOpen = true;
                      _context.next = 4;
                      return this.modalController.create({
                        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"],
                        componentProps: {
                          code: this.qrResultString
                        }
                      });

                    case 4:
                      this.modal = _context.sent;
                      _context.next = 7;
                      return this.modal.present();

                    case 7:
                      _context.next = 9;
                      return this.modal.onWillDismiss();

                    case 9:
                      _yield$this$modal$onW = _context.sent;
                      data = _yield$this$modal$onW.data;
                      // console.log(data);
                      this.modalOpen = false;

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "clearResult",
          value: function clearResult() {
            this.qrResultString = null;
          }
        }, {
          key: "onCamerasFound",
          value: function onCamerasFound(devices) {
            this.availableDevices = devices;
            this.hasDevices = Boolean(devices && devices.length);
          }
        }, {
          key: "onCodeResult",
          value: function onCodeResult(resultString) {
            this.qrResultString = resultString;
            this.generateModal();
          }
        }, {
          key: "onDeviceSelectChange",
          value: function onDeviceSelectChange(selected) {
            var device = this.availableDevices.find(function (x) {
              return x.deviceId === selected;
            });
            this.currentDevice = device || null;
            console.log("new device", device);
          }
        }, {
          key: "onHasPermission",
          value: function onHasPermission(has) {
            this.hasPermission = has;
          }
        }, {
          key: "openInfoDialog",
          value: function openInfoDialog() {
            var data = {
              hasDevices: this.hasDevices,
              hasPermission: this.hasPermission
            }; // this._dialog.open(AppInfoDialogComponent, { data });
          }
        }, {
          key: "toggleTryHarder",
          value: function toggleTryHarder() {
            this.tryHarder = !this.tryHarder;
          }
        }]);

        return ScannerPage;
      }();

      ScannerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ScannerPage.propDecorators = {
        modalOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./scanner.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/scanner/scanner.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./scanner.page.scss */
        "./src/app/scanner/scanner.page.scss"))["default"]]
      })], ScannerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=scanner-scanner-module-es5.js.map