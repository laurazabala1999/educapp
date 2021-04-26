(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crearprueba-crearprueba-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/crearprueba/crearprueba.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crearprueba/crearprueba.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCrearpruebaCrearpruebaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>CREAR PRUEBA</ion-title>\n      </ion-col>\n      <ion-col  size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"!crear\">\n    <ion-item>\n      <ion-label position=\"stacked\">Nombre de la prueba</ion-label>\n      <ion-input [(ngModel)]=\"nombre\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo de Prueba</ion-label>\n      <ion-select [(ngModel)]=\"tipo\">\n        <ion-select-option value=\"TEST\">Test</ion-select-option>\n        <ion-select-option value=\"COMPLETAR\">Completar</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Asignatura</ion-label>\n      <ion-select [(ngModel)]=\"asignatura\">\n        <ion-select-option value=\"MATEMÁTICAS\">Matemáticas</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Temario</ion-label>\n      <ion-select [(ngModel)]=\"temario\"> \n        <ion-select-option *ngFor=\"let item of temas\" [value]=\"item\">{{item}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]=\"estado\"> \n        <ion-select-option *ngFor=\"let item of estados\" [value]=\"item\">{{item}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Asignar a Grupos</ion-label>\n      <ion-select [(ngModel)]=\"grupo\" multiple>\n        <ion-select-option value=\"6ºA\">6ºA Primaria </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button expand=\"full\" color=\"success\" (click)=\"empezar()\">EMPEZAR</ion-button>\n  </ion-grid>\n\n<ion-grid *ngIf=\"crear\">\n  <ion-col *ngIf=\"tipo == 'TEST'\">\n    <ion-item>\n      <ion-label position=\"floating\">Pregunta número {{numero}}</ion-label>\n      <ion-textarea [(ngModel)]=\"pregunta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción A</ion-label>\n      <ion-input [(ngModel)]=\"opcionA\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción B</ion-label>\n      <ion-input [(ngModel)]=\"opcionB\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción C</ion-label>\n      <ion-input [(ngModel)]=\"opcionC\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción D</ion-label>\n      <ion-input [(ngModel)]=\"opcionD\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Selecciona la opción correcta</ion-label>\n      <ion-select [(ngModel)]=\"correcta\">\n        <ion-select-option value=\"A\">Opción A</ion-select-option>\n        <ion-select-option value=\"B\">Opción B</ion-select-option>\n        <ion-select-option value=\"C\">Opción C</ion-select-option>\n        <ion-select-option value=\"D\">Opción D</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-col>\n  <ion-col *ngIf=\"tipo == 'COMPLETAR'\">\n    <ion-item>\n      <ion-label position=\"floating\">Pregunta número {{numero}}</ion-label>\n      <ion-textarea [(ngModel)]=\"pregunta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Indica la respuesta correcta</ion-label>\n      <ion-input [(ngModel)]=\"respuesta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-button expand=\"full\" (click)=\"siguiente()\">SIGUIENTE PREGUNTA</ion-button>\n  <ion-button expand=\"full\" color=\"success\" (click)=\"finalizar()\">GUARDAR Y FINALIZAR</ion-button>\n\n</ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/crearprueba/crearprueba-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/crearprueba/crearprueba-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CrearpruebaPageRoutingModule */

    /***/
    function srcAppCrearpruebaCrearpruebaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearpruebaPageRoutingModule", function () {
        return CrearpruebaPageRoutingModule;
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


      var _crearprueba_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crearprueba.page */
      "./src/app/crearprueba/crearprueba.page.ts");

      var routes = [{
        path: '',
        component: _crearprueba_page__WEBPACK_IMPORTED_MODULE_3__["CrearpruebaPage"]
      }];

      var CrearpruebaPageRoutingModule = function CrearpruebaPageRoutingModule() {
        _classCallCheck(this, CrearpruebaPageRoutingModule);
      };

      CrearpruebaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CrearpruebaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/crearprueba/crearprueba.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/crearprueba/crearprueba.module.ts ***!
      \***************************************************/

    /*! exports provided: CrearpruebaPageModule */

    /***/
    function srcAppCrearpruebaCrearpruebaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearpruebaPageModule", function () {
        return CrearpruebaPageModule;
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


      var _crearprueba_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crearprueba-routing.module */
      "./src/app/crearprueba/crearprueba-routing.module.ts");
      /* harmony import */


      var _crearprueba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./crearprueba.page */
      "./src/app/crearprueba/crearprueba.page.ts");

      var CrearpruebaPageModule = function CrearpruebaPageModule() {
        _classCallCheck(this, CrearpruebaPageModule);
      };

      CrearpruebaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crearprueba_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearpruebaPageRoutingModule"]],
        declarations: [_crearprueba_page__WEBPACK_IMPORTED_MODULE_6__["CrearpruebaPage"]]
      })], CrearpruebaPageModule);
      /***/
    },

    /***/
    "./src/app/crearprueba/crearprueba.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/crearprueba/crearprueba.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCrearpruebaCrearpruebaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWFycHJ1ZWJhL2NyZWFycHJ1ZWJhLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/crearprueba/crearprueba.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/crearprueba/crearprueba.page.ts ***!
      \*************************************************/

    /*! exports provided: CrearpruebaPage */

    /***/
    function srcAppCrearpruebaCrearpruebaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearpruebaPage", function () {
        return CrearpruebaPage;
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

      var CrearpruebaPage = /*#__PURE__*/function () {
        function CrearpruebaPage(router, changeDetectorRef) {
          _classCallCheck(this, CrearpruebaPage);

          this.router = router;
          this.changeDetectorRef = changeDetectorRef;
          this.nombre = "";
          this.tipo = "";
          this.asignatura = "";
          this.crear = false;
          this.numero = 1;
          this.pregunta = "";
          this.opcionA = "";
          this.opcionB = "";
          this.opcionC = "";
          this.opcionD = "";
          this.correcta = "";
          this.respuesta = "";
          this.temas = ["Numeros decimales", "Mínimo común múltiplo", "Operaciones con decimales"];
          this.temario = "";
          this.estados = ["ABIERTA", "CERRADA"];
          this.estado = "ABIERTA";
        }

        _createClass(CrearpruebaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.prueba = {
              profesor: "",
              titulo: "",
              tipo: "",
              id: "",
              asignatura: "",
              grupos: [],
              preguntas: [],
              entregas: [],
              abierta: this.estado || "ABIERTA",
              mediaNota: null,
              mediaTiempo: null,
              tiempoEstimado: 0,
              temario: this.temario
            };
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.changeDetectorRef.detectChanges();
          } // pruebas array de pruebas
          // prueba: {
          //   id: "unico",
          //   asignatura: "",
          //   grupos: ["id", "id2"],
          //   preguntas: [{pregunta: "pregunta", respuestas: [{"texto":"texto", "id": "id"}], correcta: "id"}]
          // }

        }, {
          key: "empezar",
          value: function empezar() {
            if (this.nombre && this.tipo && this.asignatura) {
              localStorage.setItem("tipoprueba", this.tipo);
              this.crear = true;
              this.prueba.id = this.nombre + "_X" + +this.tipo + this.asignatura + Math.floor(Math.random() * 100000);
              this.prueba.asignatura = this.asignatura;
              this.prueba.tipo = this.tipo;
              this.prueba.titulo = this.nombre;
              this.prueba.profesor = localStorage.getItem("user");
              this.prueba.temario = this.temario;
              this.prueba.abierta = this.estado || "ABIERTA";

              if (this.grupo) {
                var _iterator = _createForOfIteratorHelper(this.grupo),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    this.prueba.grupos.push(item);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            } else {
              alert("Faltan campos por completar");
            }

            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "siguiente",
          value: function siguiente() {
            if (this.tipo == "TEST") {
              var palabras = this.pregunta.split(" ").length + this.opcionA.split(" ").length + this.opcionB.split(" ").length + this.opcionC.split(" ").length + this.opcionD.split(" ").length;
              var tiempoEstim = palabras / 1.95 + 4; // 1,95 palabras por segundo + 4 segundos de resolución

              var obj = {
                pregunta: this.pregunta,
                respuestas: [{
                  "texto": this.opcionA,
                  "id": "A"
                }, {
                  "texto": this.opcionB,
                  "id": "B"
                }, {
                  "texto": this.opcionC,
                  "id": "C"
                }, {
                  "texto": this.opcionD,
                  "id": "D"
                }],
                correcta: this.correcta,
                tiempoEstimado: tiempoEstim
              };
              this.prueba.tiempoEstimado = this.prueba.tiempoEstimado + tiempoEstim;
              this.prueba.preguntas.push(obj);
              this.pregunta = "";
              this.opcionA = "";
              this.opcionB = "";
              this.opcionC = "";
              this.opcionD = "";
              this.correcta = "";
              this.respuesta = "";
            } else if (this.tipo == "COMPLETAR") {
              var _palabras = this.pregunta.split(" ").length;

              var _tiempoEstim = _palabras / 1.95 + 5; // 1,95 palabras por segundo + 6 segundos de resolución


              var _obj = {
                pregunta: this.pregunta,
                correcta: this.respuesta,
                tiempoEstimado: _tiempoEstim
              };
              this.prueba.tiempoEstimado = this.prueba.tiempoEstimado + _tiempoEstim;
              this.prueba.preguntas.push(_obj);
              this.pregunta = "";
              this.opcionA = "";
              this.opcionB = "";
              this.opcionC = "";
              this.opcionD = "";
              this.correcta = "";
              this.respuesta = "";
            }

            this.numero++;
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "finalizar",
          value: function finalizar() {
            this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
            this.pruebas.push(this.prueba);
            localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
            this.pregunta = "";
            this.opcionA = "";
            this.opcionB = "";
            this.opcionC = "";
            this.opcionD = "";
            this.correcta = "";
            this.respuesta = "";
            this.numero = 1;
            this.nombre = "";
            this.tipo = "";
            this.asignatura = "";
            this.grupo = [];
            this.crear = false;
            alert("Tarea Creada Correctamente");
            this.changeDetectorRef.detectChanges();
            this.router.navigate(['/home']);
          }
        }, {
          key: "salir",
          value: function salir() {
            this.changeDetectorRef.detectChanges();
            this.router.navigate(['/home']);
          }
        }]);

        return CrearpruebaPage;
      }();

      CrearpruebaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      CrearpruebaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crearprueba',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./crearprueba.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/crearprueba/crearprueba.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./crearprueba.page.scss */
        "./src/app/crearprueba/crearprueba.page.scss"))["default"]]
      })], CrearpruebaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=crearprueba-crearprueba-module-es5.js.map