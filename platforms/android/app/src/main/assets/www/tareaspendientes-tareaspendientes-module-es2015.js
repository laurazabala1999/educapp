(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tareaspendientes-tareaspendientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tareaspendientes/tareaspendientes.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tareaspendientes/tareaspendientes.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>MIS TAREAS PENDIENTES</ion-title>\n      </ion-col>\n      <ion-col  size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"showTabla\">\n  <ag-grid-angular style=\"width: 100%; height: 50%;\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n    [columnDefs]=\"columnDefs\" [rowSelection]=\"rowSelection\" (selectionChanged)=\"onSelectionChanged($event)\"\n    (firstDataRendered)=\"onFirstDataRendered($event)\">\n  </ag-grid-angular>\n  <ion-button *ngIf=\"show\" expand=\"full\" (click)=\"empezar()\">EMPEZAR</ion-button>\n</ion-content>\n\n<ion-content *ngIf=\"showEvaluacion\">\n  <ion-item>\n    <ion-label style=\"text-align:center;\">¿Qué te ha parecido la prueba? ¿Has tenido algún problema? ¿Lo has entendido bien?</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"opinion\"></ion-textarea>\n  </ion-item>\n  <ion-button expand=\"full\" (click)=\"finalizar()\">FINALIZAR TAREA</ion-button>\n\n</ion-content>\n\n<ion-content *ngIf=\"showPrueba\">\n  <ion-item>\n    <ion-label position=\"floating\">Pregunta número {{numero}}</ion-label>\n    <ion-textarea [(ngModel)]=\"pregunta\" disabled=\"true\"></ion-textarea>\n  </ion-item>\n  <ion-item *ngIf=\"pruebaCompletar\">\n    <ion-label position=\"stacked\">Responda aquí</ion-label>\n    <ion-input [(ngModel)]=\"respuesta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-input>\n  </ion-item>\n\n  <ion-list *ngIf=\"pruebaTest\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item color=\"{{claseSeleccionadaA}}\" (click)=\"seleccionarOopcion('A')\">\n            <ion-label>A) {{opcionA}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n\n          <ion-item color=\"{{claseSeleccionadaB}}\" (click)=\"seleccionarOopcion('B')\">\n            <ion-label>B) {{opcionB}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item color=\"{{claseSeleccionadaC}}\" (click)=\"seleccionarOopcion('C')\">\n            <ion-label>C) {{opcionC}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n\n          <ion-item color=\"{{claseSeleccionadaD}}\" (click)=\"seleccionarOopcion('D')\">\n            <ion-label>D) {{opcionD}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-list>\n\n  <ion-button expand=\"full\" (click)=\"continuar()\">CONTINUAR</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tareaspendientes/tareaspendientes-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tareaspendientes/tareaspendientes-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TareaspendientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaspendientesPageRoutingModule", function() { return TareaspendientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tareaspendientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tareaspendientes.page */ "./src/app/tareaspendientes/tareaspendientes.page.ts");




const routes = [
    {
        path: '',
        component: _tareaspendientes_page__WEBPACK_IMPORTED_MODULE_3__["TareaspendientesPage"]
    }
];
let TareaspendientesPageRoutingModule = class TareaspendientesPageRoutingModule {
};
TareaspendientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TareaspendientesPageRoutingModule);



/***/ }),

/***/ "./src/app/tareaspendientes/tareaspendientes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/tareaspendientes/tareaspendientes.module.ts ***!
  \*************************************************************/
/*! exports provided: TareaspendientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaspendientesPageModule", function() { return TareaspendientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tareaspendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tareaspendientes-routing.module */ "./src/app/tareaspendientes/tareaspendientes-routing.module.ts");
/* harmony import */ var _tareaspendientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tareaspendientes.page */ "./src/app/tareaspendientes/tareaspendientes.page.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);








let TareaspendientesPageModule = class TareaspendientesPageModule {
};
TareaspendientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tareaspendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["TareaspendientesPageRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])
        ],
        declarations: [_tareaspendientes_page__WEBPACK_IMPORTED_MODULE_6__["TareaspendientesPage"]]
    })
], TareaspendientesPageModule);



/***/ }),

/***/ "./src/app/tareaspendientes/tareaspendientes.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/tareaspendientes/tareaspendientes.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmVhc3BlbmRpZW50ZXMvdGFyZWFzcGVuZGllbnRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tareaspendientes/tareaspendientes.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/tareaspendientes/tareaspendientes.page.ts ***!
  \***********************************************************/
/*! exports provided: TareaspendientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaspendientesPage", function() { return TareaspendientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let TareaspendientesPage = class TareaspendientesPage {
    constructor(changeDetectorRef, router) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.numero = 1;
        this.user = localStorage.getItem("user");
        this.rowSelection = 'single';
        this.show = false;
        this.idSelect = "";
        this.tipoSelect = "";
        this.grupo = localStorage.getItem("grupo");
        this.showPrueba = false;
        this.showTabla = true;
        this.rowData = [];
        this.columnDefs = [
            { headerName: 'Nombre de la Prueba', field: 'titulo', sortable: true, filter: true },
            { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
        ];
        this.pregunta = "";
        this.respuestaCorrecta = "";
        this.respuesta = "";
        this.pruebaCompletar = false;
        this.pruebaTest = false;
        this.opcionA = "";
        this.opcionB = "";
        this.opcionC = "";
        this.opcionD = "";
        this.claseSeleccionadaA = "";
        this.claseSeleccionadaB = "";
        this.claseSeleccionadaC = "";
        this.claseSeleccionadaD = "";
        this.examen = {
            preguntas: [],
            tiempoTotal: 0,
            calificación: 0,
            alumno: this.user,
            grupo: this.grupo,
            idPrueba: this.idSelect,
            opinion: ""
        };
        this.showEvaluacion = false;
        this.opinion = "";
    }
    ngOnInit() {
        this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
        let completadasUser = JSON.parse(localStorage.getItem("completadas_" + this.user)) || [];
        for (let item of this.pruebas) {
            if (item.grupos.indexOf(this.grupo) != -1) {
                if (completadasUser.indexOf(item.id) == -1) {
                    if (item.abierta == "ABIERTA") {
                        this.rowData.push(item);
                    }
                }
            }
        }
    }
    ngDoCheck() {
        this.changeDetectorRef.detectChanges();
    }
    onFirstDataRendered(params) {
        this.gridApi = params.api;
        params.api.sizeColumnsToFit();
    }
    onSelectionChanged(selected) {
        this.idSelect = "";
        this.tipoSelect = "";
        let selectedRows = selected.api.getSelectedRows();
        this.idSelect = selectedRows[0].id;
        this.tipoSelect = selectedRows[0].tipo;
        this.pruebaSelect = selectedRows[0];
        this.show = true;
        this.changeDetectorRef.detectChanges();
    }
    empezar() {
        this.showTabla = false;
        this.showPrueba = true;
        this.pruebaCompletar = false;
        this.pruebaTest = false;
        this.examen.idPrueba = this.idSelect;
        if (this.tipoSelect == "TEST") {
            this.pruebaTest = true;
            this.pruebaCompletar = false;
        }
        else if (this.tipoSelect == "COMPLETAR") {
            this.pruebaCompletar = true;
            this.pruebaTest = false;
        }
        this.preguntaActual = 0;
        this.pregunta = this.pruebaSelect.preguntas[this.preguntaActual].pregunta;
        this.respuesta = "";
        this.respuestaCorrecta = this.pruebaSelect.preguntas[this.preguntaActual].correcta;
        this.opcionA = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[0].texto : "";
        this.opcionB = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[1].texto : "";
        this.opcionC = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[2].texto : "";
        this.opcionD = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[3].texto : "";
        this.cronometro("start");
        this.changeDetectorRef.detectChanges();
    }
    finalizar() {
        this.examen.opinion = this.opinion;
        this.examen.calificación = (this.examen.calificación / this.pruebaSelect.preguntas.length) * 10;
        let index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.pruebas, { id: this.idSelect });
        let obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.pruebas, { id: this.idSelect });
        obj.entregas.push(this.examen);
        let acumNota = 0;
        let acumTiempo = 0;
        for (let item of obj.entregas) {
            acumNota = acumNota + item.calificación;
            acumTiempo = acumTiempo + item.tiempoTotal;
        }
        let mediaNota = acumNota / obj.entregas.length;
        let mediaTiempo = acumTiempo / obj.entregas.length;
        obj.mediaNota = mediaNota;
        obj.mediaTiempo = mediaTiempo;
        this.pruebas.splice(index, 1, obj);
        localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
        let completadasUser = JSON.parse(localStorage.getItem("completadas_" + this.user)) || [];
        completadasUser.push(this.idSelect);
        localStorage.setItem("completadas_" + localStorage.getItem("user"), JSON.stringify(completadasUser));
        let cuestionarioFalladas = JSON.parse(localStorage.getItem("falladas_" + this.user)) || [];
        let numPregunta = 0;
        for (let pregunta of this.examen.preguntas) {
            if (pregunta.correcta == "NO") {
                let itemIncorrecto = {
                    tipo: obj.tipo,
                    pregunta: obj.preguntas[numPregunta]
                };
                cuestionarioFalladas.push(itemIncorrecto);
            }
            numPregunta++;
        }
        localStorage.setItem("falladas_" + localStorage.getItem("user"), JSON.stringify(cuestionarioFalladas));
        alert("Tarea finalizada y guardada correctamente");
        this.showPrueba = false;
        this.showEvaluacion = false;
        this.showTabla = true;
        this.changeDetectorRef.detectChanges();
        this.router.navigate(['/home']);
    }
    continuar() {
        this.cronometro("restart");
        let obj = {
            correcta: this.respuestaCorrecta == this.respuesta ? "SI" : "NO",
            tiempo: this.cronoResta,
            respuesta: this.respuesta
        };
        this.examen.preguntas.push(obj);
        this.examen.tiempoTotal = this.examen.tiempoTotal + this.cronoResta;
        if (obj.correcta == "SI") {
            this.examen.calificación = this.examen.calificación + 1;
        }
        this.preguntaActual++;
        if (this.pruebaSelect.preguntas.length == this.preguntaActual) {
            this.showPrueba = false;
            this.showEvaluacion = true;
            this.showTabla = false;
            this.cronometro("end");
        }
        else {
            this.claseSeleccionadaA = "";
            this.claseSeleccionadaB = "";
            this.claseSeleccionadaC = "";
            this.claseSeleccionadaD = "";
            this.pregunta = this.pruebaSelect.preguntas[this.preguntaActual].pregunta;
            this.respuesta = null;
            this.respuestaCorrecta = this.pruebaSelect.preguntas[this.preguntaActual].correcta;
            this.opcionA = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[0].texto : "";
            this.opcionB = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[1].texto : "";
            this.opcionC = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[2].texto : "";
            this.opcionD = this.pruebaSelect.preguntas[this.preguntaActual].respuestas ? this.pruebaSelect.preguntas[this.preguntaActual].respuestas[3].texto : "";
            this.numero++;
            this.changeDetectorRef.detectChanges();
        }
    }
    cronometro(accion) {
        if (accion == "start") {
            this.cronoInit = new Date();
        }
        else if (accion == "end") {
            this.cronoResta = "";
            this.cronoInit = "";
            this.cronoEnd = "";
        }
        else {
            this.cronoEnd = new Date();
            this.cronoResta = this.cronoEnd.getTime() - this.cronoInit.getTime();
            this.cronoResta = Math.round(this.cronoResta / (1000));
            this.cronoInit = this.cronoEnd;
            this.cronoEnd = "";
        }
    }
    seleccionarOopcion(opcion) {
        if (opcion == "A") {
            this.respuesta = "A";
            this.claseSeleccionadaA = "secondary";
            this.claseSeleccionadaB = "";
            this.claseSeleccionadaC = "";
            this.claseSeleccionadaD = "";
        }
        else if (opcion == "B") {
            this.respuesta = "B";
            this.claseSeleccionadaA = "";
            this.claseSeleccionadaB = "secondary";
            this.claseSeleccionadaC = "";
            this.claseSeleccionadaD = "";
        }
        else if (opcion == "C") {
            this.respuesta = "C";
            this.claseSeleccionadaA = "";
            this.claseSeleccionadaB = "";
            this.claseSeleccionadaC = "secondary";
            this.claseSeleccionadaD = "";
        }
        else if (opcion == "D") {
            this.respuesta = "D";
            this.claseSeleccionadaA = "";
            this.claseSeleccionadaB = "";
            this.claseSeleccionadaC = "";
            this.claseSeleccionadaD = "secondary";
        }
        this.changeDetectorRef.detectChanges();
    }
    salir() {
        this.router.navigate(['/home']);
    }
};
TareaspendientesPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TareaspendientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tareaspendientes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tareaspendientes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tareaspendientes/tareaspendientes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tareaspendientes.page.scss */ "./src/app/tareaspendientes/tareaspendientes.page.scss")).default]
    })
], TareaspendientesPage);



/***/ })

}]);
//# sourceMappingURL=tareaspendientes-tareaspendientes-module-es2015.js.map