(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avisos-avisos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/avisos/avisos.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/avisos/avisos.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAvisosAvisosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>AVISOS</ion-title>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-list *ngIf=\"lista\">\n    <ion-list-header *ngIf=\"pruebaStorageMsg && pruebaStorageMsg.length\">\n      Mensajes Recientes\n    </ion-list-header>\n    <ion-list-header *ngIf=\"!pruebaStorageMsg.length\">\n      No tienes ningún mensaje\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let item of pruebaStorageMsg\">\n      <ion-item>\n        <div [class]=\"item.leido.toString()\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.img\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{item.profesor}}</h2>\n            <h3>{{item.asignatura}} // {{item.titulo}}</h3>\n            <p>{{item.msg}}</p>\n          </ion-label>\n        </div>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"eliminar(item)\">ELIMINAR</ion-item-option>\n      </ion-item-options>\n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"abrir(item)\">ABRIR</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card *ngIf=\"detalle\">\n    <img style=\"width: 81px;\" [src]=\"modalData.img\" />\n    <ion-card-header>\n      <ion-card-title>{{modalData.profesor}}</ion-card-title>\n      <ion-card-subtitle>{{modalData.asignatura}} // {{modalData.titulo}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      {{modalData.msg}}\n    </ion-card-content>\n    <ion-button expand=\"full\" (click)=\"cerrar()\">CERRAR</ion-button>\n  </ion-card>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/avisos/avisos-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/avisos/avisos-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: AvisosPageRoutingModule */

    /***/
    function srcAppAvisosAvisosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvisosPageRoutingModule", function () {
        return AvisosPageRoutingModule;
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


      var _avisos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./avisos.page */
      "./src/app/avisos/avisos.page.ts");

      var routes = [{
        path: '',
        component: _avisos_page__WEBPACK_IMPORTED_MODULE_3__["AvisosPage"]
      }];

      var AvisosPageRoutingModule = function AvisosPageRoutingModule() {
        _classCallCheck(this, AvisosPageRoutingModule);
      };

      AvisosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AvisosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/avisos/avisos.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/avisos/avisos.module.ts ***!
      \*****************************************/

    /*! exports provided: AvisosPageModule */

    /***/
    function srcAppAvisosAvisosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvisosPageModule", function () {
        return AvisosPageModule;
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


      var _avisos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./avisos-routing.module */
      "./src/app/avisos/avisos-routing.module.ts");
      /* harmony import */


      var _avisos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./avisos.page */
      "./src/app/avisos/avisos.page.ts");

      var AvisosPageModule = function AvisosPageModule() {
        _classCallCheck(this, AvisosPageModule);
      };

      AvisosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _avisos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvisosPageRoutingModule"]],
        declarations: [_avisos_page__WEBPACK_IMPORTED_MODULE_6__["AvisosPage"]]
      })], AvisosPageModule);
      /***/
    },

    /***/
    "./src/app/avisos/avisos.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/avisos/avisos.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppAvisosAvisosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".true {\n  background-color: gainsboro !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZpc29zL2F2aXNvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXZpc29zL2F2aXNvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJ1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/avisos/avisos.page.ts":
    /*!***************************************!*\
      !*** ./src/app/avisos/avisos.page.ts ***!
      \***************************************/

    /*! exports provided: AvisosPage */

    /***/
    function srcAppAvisosAvisosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvisosPage", function () {
        return AvisosPage;
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


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

      var AvisosPage = /*#__PURE__*/function () {
        function AvisosPage(changeDetectorRef, router) {
          _classCallCheck(this, AvisosPage);

          this.changeDetectorRef = changeDetectorRef;
          this.router = router;
          this.user = localStorage.getItem("user");
          this.pruebaStorageMsg = JSON.parse(localStorage.getItem("Msg_" + this.user)) || [];
          this.lista = true;
          this.detalle = false;
          this.modalData = {};
        }

        _createClass(AvisosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "salir",
          value: function salir() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "abrir",
          value: function abrir(msg) {
            this.modalData = msg;
            this.lista = false;
            this.detalle = true;
            var index = lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"](this.pruebaStorageMsg, {
              id: msg.id
            });
            var obj = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.pruebaStorageMsg, {
              id: msg.id
            });
            obj.leido = true;
            this.pruebaStorageMsg.splice(index, 1, obj);
            localStorage.setItem("Msg_" + this.user, JSON.stringify(this.pruebaStorageMsg));
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "cerrar",
          value: function cerrar() {
            this.lista = true;
            this.detalle = false;
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "eliminar",
          value: function eliminar(msg) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.pruebaStorageMsg, function (e) {
              return e.id == msg.id;
            });
            this.changeDetectorRef.detectChanges();
            localStorage.setItem("Msg_" + this.user, JSON.stringify(this.pruebaStorageMsg));
            this.changeDetectorRef.detectChanges();
          }
        }]);

        return AvisosPage;
      }();

      AvisosPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AvisosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avisos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./avisos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/avisos/avisos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./avisos.page.scss */
        "./src/app/avisos/avisos.page.scss"))["default"]]
      })], AvisosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=avisos-avisos-module-es5.js.map