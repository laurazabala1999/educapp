(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analisis-analisis-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/analisis/analisis.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analisis/analisis.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAnalisisAnalisisPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>ANALISIS DE RIESGOS</ion-title>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-button *ngIf=\"lista\" expand=\"full\" color=\"success\" (click)=\"analizar()\">ACTUALIZAR ESTUDIO</ion-button>\n\n  <ion-list *ngIf=\"lista\">\n    <ion-list-header *ngIf=\"riesgos && riesgos.length\">\n      Riesgos detectados\n    </ion-list-header>\n    <ion-list-header *ngIf=\"!riesgos.length\">\n      No se ha detectado ningun riesgo\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let item of riesgos\">\n      <ion-item>\n        <ion-label>\n          <h2>Estudiante: {{item.alumno}}</h2>\n          <h3>Asingatura: Matemáticas</h3>\n          <p>{{item.mensaje}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"abrir(item)\">ABRIR</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card *ngIf=\"detalle\">\n    <ion-card-header>\n      <ion-card-title>Estudiante: {{modalData.alumno}}</ion-card-title>\n      <ion-card-subtitle>Asingatura: Matemáticas</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      {{modalData.mensaje}}\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n  <ag-grid-angular *ngIf=\"detalle\" style=\"width: 100%; height: 30%;\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n    [columnDefs]=\"columnDefs\" [rowSelection]=\"rowSelection\" (firstDataRendered)=\"onFirstDataRendered($event)\">\n  </ag-grid-angular>\n  <ion-button *ngIf=\"detalle\" expand=\"full\" (click)=\"cerrar()\">CERRAR</ion-button>\n  <ion-button *ngIf=\"detalle\" expand=\"full\" color=\"success\" (click)=\"normalizar(modalData)\">IGNORAR RIESGO</ion-button>";
      /***/
    },

    /***/
    "./src/app/analisis/analisis-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/analisis/analisis-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AnalisisPageRoutingModule */

    /***/
    function srcAppAnalisisAnalisisRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalisisPageRoutingModule", function () {
        return AnalisisPageRoutingModule;
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


      var _analisis_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./analisis.page */
      "./src/app/analisis/analisis.page.ts");

      var routes = [{
        path: '',
        component: _analisis_page__WEBPACK_IMPORTED_MODULE_3__["AnalisisPage"]
      }];

      var AnalisisPageRoutingModule = function AnalisisPageRoutingModule() {
        _classCallCheck(this, AnalisisPageRoutingModule);
      };

      AnalisisPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AnalisisPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/analisis/analisis.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/analisis/analisis.module.ts ***!
      \*********************************************/

    /*! exports provided: AnalisisPageModule */

    /***/
    function srcAppAnalisisAnalisisModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalisisPageModule", function () {
        return AnalisisPageModule;
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


      var _analisis_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./analisis-routing.module */
      "./src/app/analisis/analisis-routing.module.ts");
      /* harmony import */


      var _analisis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./analisis.page */
      "./src/app/analisis/analisis.page.ts");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ag-grid-angular */
      "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);

      var AnalisisPageModule = function AnalisisPageModule() {
        _classCallCheck(this, AnalisisPageModule);
      };

      AnalisisPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _analisis_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnalisisPageRoutingModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])],
        declarations: [_analisis_page__WEBPACK_IMPORTED_MODULE_6__["AnalisisPage"]]
      })], AnalisisPageModule);
      /***/
    },

    /***/
    "./src/app/analisis/analisis.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/analisis/analisis.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAnalisisAnalisisPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".red {\n  background-color: lightcoral;\n}\n\n.green {\n  background-color: lightgreen;\n}\n\n.amber {\n  background-color: lightsalmon;\n}\n\n.yellow {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbGlzaXMvYW5hbGlzaXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFDQTtFQUNBLDRCQUFBO0FBRUE7O0FBQUE7RUFDQSw2QkFBQTtBQUdBOztBQUFBO0VBQ0Usd0JBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2FuYWxpc2lzL2FuYWxpc2lzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICB9XHJcbi5ncmVlbiB7XHJcbmJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuLmFtYmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XHJcbn1cclxuXHJcbi55ZWxsb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/analisis/analisis.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/analisis/analisis.page.ts ***!
      \*******************************************/

    /*! exports provided: AnalisisPage */

    /***/
    function srcAppAnalisisAnalisisPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalisisPage", function () {
        return AnalisisPage;
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

      var AnalisisPage = /*#__PURE__*/function () {
        function AnalisisPage(changeDetectorRef, router) {
          _classCallCheck(this, AnalisisPage);

          this.changeDetectorRef = changeDetectorRef;
          this.router = router;
          this.lista = true;
          this.detalle = false;
          this.profesor = localStorage.getItem("user");
          this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
          this.misPruebas = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.pruebas, {
            profesor: this.profesor
          }) || [];
          this.modalData = {};
          this.riesgos = JSON.parse(localStorage.getItem("riesgos")) || [];
          this.columnDefs = [{
            headerName: 'Nombre de la Prueba',
            field: 'titulo',
            sortable: true,
            filter: true
          }, {
            headerName: 'Asignatura',
            field: 'asignatura',
            sortable: true,
            filter: true
          }, {
            headerName: 'Calificación',
            field: 'nota',
            sortable: true,
            filter: true,
            valueParser: this.numberParser,
            cellStyle: this.cellStyle
          }, {
            headerName: 'Tiempo',
            field: 'tiempo',
            sortable: true,
            filter: true,
            valueParser: this.numberParser,
            cellStyle: this.cellStyle
          }];
          this.rowData = [];
          this.rowSelection = 'single';
        }

        _createClass(AnalisisPage, [{
          key: "cellStyle",
          value: function cellStyle(params) {
            var color = "";
            var pruebascolor = JSON.parse(localStorage.getItem("pruebas")) || [];
            var mediaTiempo = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](pruebascolor, {
              id: params.data.id
            }) ? lodash__WEBPACK_IMPORTED_MODULE_3__["find"](pruebascolor, {
              id: params.data.id
            }).mediaTiempo : null;
            var mediaNota = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](pruebascolor, {
              id: params.data.id
            }) ? lodash__WEBPACK_IMPORTED_MODULE_3__["find"](pruebascolor, {
              id: params.data.id
            }).mediaNota : null;
            var tiempoEstimado = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](pruebascolor, {
              id: params.data.id
            }) ? lodash__WEBPACK_IMPORTED_MODULE_3__["find"](pruebascolor, {
              id: params.data.id
            }).tiempoEstimado : null;

            if (params.colDef.field == "nota") {
              if (params.value < mediaNota) {
                color = "lightcoral";
              } else if (params.value == mediaNota) {
                color = "";
              } else if (params.value > mediaNota) {
                color = "lightgreen";
              }

              return {
                backgroundColor: color
              };
            } else {
              var media = (mediaTiempo + tiempoEstimado) / 2;
              media = Math.trunc(media);

              if (params.value > media) {
                color = "lightcoral";
              } else if (params.value == media) {
                color = "";
              } else if (params.value < media) {
                color = "lightgreen";
              }

              return {
                backgroundColor: color
              };
            }
          }
        }, {
          key: "numberParser",
          value: function numberParser(params) {
            var newValue = params.newValue;
            var valueAsNumber;

            if (newValue === null || newValue === undefined || newValue === '') {
              valueAsNumber = null;
            } else {
              valueAsNumber = parseFloat(params.newValue);
            }

            return valueAsNumber;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.riesgos.length) {
              var avisos = {};
              var lentos = [];
              var malasNotas = [];

              var _iterator = _createForOfIteratorHelper(this.misPruebas),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var prueba = _step.value;

                  var _iterator3 = _createForOfIteratorHelper(prueba.entregas),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var entrega = _step3.value;

                      if (entrega.calificación < 5 && entrega.calificación < prueba.mediaNota) {
                        malasNotas.push(entrega);
                      }

                      if (entrega.tiempoTotal > prueba.mediaTiempo && entrega.tiempoTotal > prueba.tiempoEstimado) {
                        lentos.push(entrega);
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              for (var _i = 0, _malasNotas = malasNotas; _i < _malasNotas.length; _i++) {
                var malo = _malasNotas[_i];
                avisos[malo.alumno] ? avisos[malo.alumno] : avisos[malo.alumno] = {
                  notas: [],
                  tiempo: []
                };
                avisos[malo.alumno].notas.push(malo);
              }

              for (var _i2 = 0, _lentos = lentos; _i2 < _lentos.length; _i2++) {
                var lento = _lentos[_i2];
                avisos[lento.alumno] ? avisos[lento.alumno] : avisos[lento.alumno] = {
                  notas: [],
                  tiempo: []
                };
                avisos[lento.alumno].tiempo.push(lento);
              }

              var totalPruebas = this.misPruebas.length;

              for (var alumno in avisos) {
                var obj = {
                  alumno: alumno,
                  mensaje: null,
                  id: Math.floor(Math.random() * 100000),
                  nota: avisos[alumno].notas,
                  tiempo: avisos[alumno].tiempo
                };
                var refuerzos = JSON.parse(localStorage.getItem("entregasRefuerzo_" + alumno)) || [];
                var deficitRefuerzos = "";

                if (refuerzos) {
                  var suspensos = 0;

                  var _iterator2 = _createForOfIteratorHelper(refuerzos),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var refuerzo = _step2.value;

                      if (refuerzo < 5) {
                        suspensos++;
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  if (suspensos > refuerzos.length / 3) {
                    deficitRefuerzos = " Por último, indicar que de las " + refuerzos.length + " tareas de refuerzo entregadas, no ha cumplido los requisitos mínimos en " + suspensos + " de ellas. ";
                  }
                }

                if (avisos[alumno]["notas"].length >= totalPruebas / 2 && avisos[alumno]["tiempo"].length < totalPruebas / 2) {
                  obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en la asigntara de Matemáticas. De las últimas " + totalPruebas + " pruebas ha suspendido " + avisos[alumno]["notas"].length + ". Además la nota media de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante no ha dado el nivel esperado:";
                }

                if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length < totalPruebas / 2) {
                  obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en los tiempos de lectura / ejecución de los ejercicios de la asigntara de Matemáticas. De las últimas " + totalPruebas + " ha tenido un tiempo de ejecución elevado en  " + avisos[alumno]["tiempo"].length + " ocasiones. Además la capacidad lectora / resolutiva de la clase es superior a su nivel actual. " + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido una resolución con un tiempo demasiado elevado:";
                }

                if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length >= totalPruebas / 2) {
                  obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades, tanto a nivel de tiempos de resolución como de resultados, en la asigntara de Matemáticas. De las últimas " + totalPruebas + " pruebas ha suspendido " + avisos[alumno]["notas"].length + ", superando el tiempo de resolución esperado en " + avisos[alumno]["tiempo"].length + " ejercicios. El nivel general de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido problemas:";
                }

                if (obj.mensaje) {
                  this.riesgos.push(obj);
                }

                localStorage.setItem("riesgos", JSON.stringify(this.riesgos));
              }
            }
          }
        }, {
          key: "analizar",
          value: function analizar() {
            this.riesgos = [];
            var avisos = {};
            var lentos = [];
            var malasNotas = [];

            var _iterator4 = _createForOfIteratorHelper(this.misPruebas),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var prueba = _step4.value;

                var _iterator6 = _createForOfIteratorHelper(prueba.entregas),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var entrega = _step6.value;

                    if (entrega.calificación < 5 && entrega.calificación < prueba.mediaNota) {
                      malasNotas.push(entrega);
                    }

                    if (entrega.tiempoTotal > prueba.mediaTiempo && entrega.tiempoTotal > prueba.tiempoEstimado) {
                      lentos.push(entrega);
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            for (var _i3 = 0, _malasNotas2 = malasNotas; _i3 < _malasNotas2.length; _i3++) {
              var malo = _malasNotas2[_i3];
              avisos[malo.alumno] ? avisos[malo.alumno] : avisos[malo.alumno] = {
                notas: [],
                tiempo: []
              };
              avisos[malo.alumno].notas.push(malo);
            }

            for (var _i4 = 0, _lentos2 = lentos; _i4 < _lentos2.length; _i4++) {
              var lento = _lentos2[_i4];
              avisos[lento.alumno] ? avisos[lento.alumno] : avisos[lento.alumno] = {
                notas: [],
                tiempo: []
              };
              avisos[lento.alumno].tiempo.push(lento);
            }

            var totalPruebas = this.misPruebas.length;

            for (var alumno in avisos) {
              var obj = {
                alumno: alumno,
                mensaje: null,
                id: Math.floor(Math.random() * 100000),
                nota: avisos[alumno].notas,
                tiempo: avisos[alumno].tiempo
              };
              var refuerzos = JSON.parse(localStorage.getItem("entregasRefuerzo_" + alumno)) || [];
              var deficitRefuerzos = "";

              if (refuerzos) {
                var suspensos = 0;

                var _iterator5 = _createForOfIteratorHelper(refuerzos),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var refuerzo = _step5.value;

                    if (refuerzo < 5) {
                      suspensos++;
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                if (suspensos > refuerzos.length / 3) {
                  deficitRefuerzos = " Por último, indicar que de las " + refuerzos.length + " tareas de refuerzo entregadas, no ha cumplido los requisitos mínimos en " + suspensos + " de ellas. ";
                }
              }

              if (avisos[alumno]["notas"].length >= totalPruebas / 2 && avisos[alumno]["tiempo"].length < totalPruebas / 2) {
                obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en la asigntara de Matemáticas. De las últimas " + totalPruebas + " pruebas ha suspendido " + avisos[alumno]["notas"].length + ". Además la nota media de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante no ha dado el nivel esperado:";
              }

              if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length < totalPruebas / 2) {
                obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en los tiempos de lectura / ejecución de los ejercicios de la asigntara de Matemáticas. De las últimas " + totalPruebas + " ha tenido un tiempo de ejecución elevado en  " + avisos[alumno]["tiempo"].length + " ocasiones. Además la capacidad lectora / resolutiva de la clase es superior a su nivel actual. " + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido una resolución con un tiempo demasiado elevado:";
              }

              if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length >= totalPruebas / 2) {
                obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades, tanto a nivel de tiempos de resolución como de resultados, en la asigntara de Matemáticas. De las últimas " + totalPruebas + " pruebas ha suspendido " + avisos[alumno]["notas"].length + ", superando el tiempo de resolución esperado en " + avisos[alumno]["tiempo"].length + " ejercicios. El nivel general de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido problemas:";
              }

              if (obj.mensaje) {
                this.riesgos.push(obj);
              }

              localStorage.setItem("riesgos", JSON.stringify(this.riesgos));
            }
          }
        }, {
          key: "salir",
          value: function salir() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "onFirstDataRendered",
          value: function onFirstDataRendered(params) {
            this.gridApi = params.api;
            params.api.sizeColumnsToFit();
          }
        }, {
          key: "abrir",
          value: function abrir(msg) {
            this.modalData = msg;
            this.lista = false;
            this.detalle = true;
            var arrayPruebas = msg.nota.concat(msg.tiempo);
            this.rowData = [];

            var _iterator7 = _createForOfIteratorHelper(arrayPruebas),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var prueba = _step7.value;
                var titulo = prueba.idPrueba.split("_X")[0];
                var obj = {
                  titulo: titulo,
                  id: prueba.idPrueba,
                  asignatura: "Matemáticas",
                  nota: prueba.calificación,
                  tiempo: prueba.tiempoTotal
                };
                var existe = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.rowData, {
                  id: prueba.idPrueba
                });

                if (!existe) {
                  this.rowData.push(obj);
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

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
          key: "normalizar",
          value: function normalizar(msg) {
            this.lista = true;
            this.detalle = false;
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.riesgos, function (e) {
              return e.id == msg.id;
            });
            this.changeDetectorRef.detectChanges();
            localStorage.setItem("riesgos", JSON.stringify(this.riesgos));
            this.changeDetectorRef.detectChanges();
          }
        }]);

        return AnalisisPage;
      }();

      AnalisisPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AnalisisPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analisis',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./analisis.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/analisis/analisis.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./analisis.page.scss */
        "./src/app/analisis/analisis.page.scss"))["default"]]
      })], AnalisisPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=analisis-analisis-module-es5.js.map