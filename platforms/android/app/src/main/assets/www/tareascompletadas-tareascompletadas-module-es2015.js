(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tareascompletadas-tareascompletadas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tareascompletadas/tareascompletadas.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tareascompletadas/tareascompletadas.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>TAREAS COMPLETADAS</ion-title>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!informe\">\n  <ag-grid-angular style=\"width: 100%; height: 100%;\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n    [columnDefs]=\"columnDefs\" [rowSelection]=\"rowSelection\" (firstDataRendered)=\"onFirstDataRendered($event)\"\n    (selectionChanged)=\"onSelectionChanged($event)\">\n  </ag-grid-angular>\n</ion-content>\n\n\n<ion-content *ngIf=\"informe\">\n  <ion-button expand=\"full\" (click)=\"volver()\">VOLVER</ion-button>\n\n  <div *ngFor=\"let item of pizarra\">\n    <ion-item>\n      <ion-label style=\"text-align:center;\">Pregunta número {{item.numero}}</ion-label>\n    </ion-item>\n    <ion-item> \n      <ion-label>{{item.pregunta}}</ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"completar\">\n      <ion-row [class]= \"item.color\">\n        <ion-col>\n          <ion-label position=\"stacked\">Respuesta</ion-label>\n          <ion-input disabled=\"true\"> {{item.respuestaAlumno}}</ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label position=\"stacked\">Respuesta Correcta</ion-label>\n          <ion-input disabled=\"true\">{{item.correcta}}</ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-list *ngIf=\"test\">\n      <ion-grid style=\"background-color: beige;\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>A) {{item.a}}</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n\n            <ion-item>\n              <ion-label>B) {{item.b}}</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>C) {{item.c}}</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n\n            <ion-item>\n              <ion-label>D) {{item.d}}</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row [class]= \"item.color\">\n        <ion-col>\n          <ion-label position=\"stacked\">Respuesta</ion-label>\n          <ion-input disabled=\"true\"> {{item.respuestaAlumno}}</ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label position=\"stacked\">Respuesta Correcta</ion-label>\n          <ion-input disabled=\"true\">{{item.correcta}}</ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tareascompletadas/tareascompletadas-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tareascompletadas/tareascompletadas-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TareascompletadasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareascompletadasPageRoutingModule", function() { return TareascompletadasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tareascompletadas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tareascompletadas.page */ "./src/app/tareascompletadas/tareascompletadas.page.ts");




const routes = [
    {
        path: '',
        component: _tareascompletadas_page__WEBPACK_IMPORTED_MODULE_3__["TareascompletadasPage"]
    }
];
let TareascompletadasPageRoutingModule = class TareascompletadasPageRoutingModule {
};
TareascompletadasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TareascompletadasPageRoutingModule);



/***/ }),

/***/ "./src/app/tareascompletadas/tareascompletadas.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/tareascompletadas/tareascompletadas.module.ts ***!
  \***************************************************************/
/*! exports provided: TareascompletadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareascompletadasPageModule", function() { return TareascompletadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tareascompletadas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tareascompletadas-routing.module */ "./src/app/tareascompletadas/tareascompletadas-routing.module.ts");
/* harmony import */ var _tareascompletadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tareascompletadas.page */ "./src/app/tareascompletadas/tareascompletadas.page.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);








let TareascompletadasPageModule = class TareascompletadasPageModule {
};
TareascompletadasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tareascompletadas_routing_module__WEBPACK_IMPORTED_MODULE_5__["TareascompletadasPageRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])
        ],
        declarations: [_tareascompletadas_page__WEBPACK_IMPORTED_MODULE_6__["TareascompletadasPage"]]
    })
], TareascompletadasPageModule);



/***/ }),

/***/ "./src/app/tareascompletadas/tareascompletadas.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/tareascompletadas/tareascompletadas.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".red {\n  background-color: lightcoral;\n}\n\n.green {\n  background-color: lightgreen;\n}\n\n.amber {\n  background-color: lightsalmon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyZWFzY29tcGxldGFkYXMvdGFyZWFzY29tcGxldGFkYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFDQTtFQUNBLDRCQUFBO0FBRUE7O0FBQUE7RUFDQSw2QkFBQTtBQUdBIiwiZmlsZSI6InNyYy9hcHAvdGFyZWFzY29tcGxldGFkYXMvdGFyZWFzY29tcGxldGFkYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIH1cclxuLmdyZWVuIHtcclxuYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxufVxyXG4uYW1iZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tareascompletadas/tareascompletadas.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/tareascompletadas/tareascompletadas.page.ts ***!
  \*************************************************************/
/*! exports provided: TareascompletadasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareascompletadasPage", function() { return TareascompletadasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let TareascompletadasPage = class TareascompletadasPage {
    constructor(changeDetectorRef, router) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.user = localStorage.getItem("user");
        this.rowSelection = 'single';
        this.rowData = [];
        this.columnDefs = [
            { headerName: 'Tarea', field: 'titulo', sortable: true, filter: true },
            { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
            {
                headerName: 'Calificación', field: 'calificacion', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle,
            },
            { headerName: 'Docente', field: 'profesor', sortable: true, filter: true }
        ];
        this.pizarra = [];
        this.test = false;
        this.completar = false;
        this.informe = false;
    }
    volver() {
        this.informe = false;
        this.changeDetectorRef.detectChanges();
    }
    cellStyle(params) {
        let color = "";
        if (params.value < 5) {
            color = "lightcoral";
        }
        else if (params.value >= 5 && params.value < 7) {
            color = "lightsalmon";
        }
        else if (params.value >= 7) {
            color = "lightgreen";
        }
        return { backgroundColor: color };
    }
    ngOnInit() {
        this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
        let completadasUser = JSON.parse(localStorage.getItem("completadas_" + this.user)) || [];
        for (let item of this.pruebas) {
            if (completadasUser.indexOf(item.id) != -1) {
                let nota = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](item.entregas, { alumno: this.user });
                let obj = {
                    titulo: item.titulo,
                    asignatura: item.asignatura,
                    calificacion: nota.calificación,
                    profesor: item.profesor,
                    id: item.id
                };
                this.rowData.push(obj);
            }
        }
        this.changeDetectorRef.detectChanges();
    }
    onFirstDataRendered(params) {
        this.gridApi = params.api;
        params.api.sizeColumnsToFit();
    }
    salir() {
        this.router.navigate(['/home']);
    }
    onSelectionChanged(selected) {
        let selection;
        if (selected) {
            selection = selected.api.getSelectedRows();
            this.mostrarResultado(selection);
        }
        else {
            selection = null;
        }
        this.changeDetectorRef.detectChanges();
    }
    mostrarResultado(selected) {
        this.informe = true;
        this.changeDetectorRef.detectChanges();
        this.pizarra = [];
        let prueba = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.pruebas, { id: selected[0].id });
        this.test = false;
        this.completar = false;
        let numero = 1;
        for (let pregunta of prueba.preguntas) {
            let alumnoRespuesta = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](prueba.entregas, { alumno: this.user }).preguntas[numero - 1].respuesta;
            let colorCorrecta = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](prueba.entregas, { alumno: this.user }).preguntas[numero - 1].correcta;
            let obj = {
                numero: numero,
                correcta: pregunta.correcta,
                pregunta: pregunta.pregunta,
                a: pregunta.respuestas ? pregunta.respuestas[0].texto : "",
                b: pregunta.respuestas ? pregunta.respuestas[1].texto : "",
                c: pregunta.respuestas ? pregunta.respuestas[2].texto : "",
                d: pregunta.respuestas ? pregunta.respuestas[3].texto : "",
                respuesta: pregunta.respuesta,
                respuestaAlumno: alumnoRespuesta,
                color: colorCorrecta == "SI" ? "green" : "red"
            };
            this.pizarra.push(obj);
            numero++;
        }
        let tipo = prueba.tipo;
        if (tipo == "TEST") {
            this.test = true;
            this.completar = false;
        }
        else if (tipo == "COMPLETAR") {
            this.test = false;
            this.completar = true;
        }
        this.changeDetectorRef.detectChanges();
    }
    numberParser(params) {
        var newValue = params.newValue;
        var valueAsNumber;
        if (newValue === null || newValue === undefined || newValue === '') {
            valueAsNumber = null;
        }
        else {
            valueAsNumber = parseFloat(params.newValue);
        }
        return valueAsNumber;
    }
};
TareascompletadasPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TareascompletadasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tareascompletadas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tareascompletadas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tareascompletadas/tareascompletadas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tareascompletadas.page.scss */ "./src/app/tareascompletadas/tareascompletadas.page.scss")).default]
    })
], TareascompletadasPage);



/***/ })

}]);
//# sourceMappingURL=tareascompletadas-tareascompletadas-module-es2015.js.map