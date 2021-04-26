(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asignarprueba-asignarprueba-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/asignarprueba/asignarprueba.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asignarprueba/asignarprueba.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>GESTIONAR PRUEBAS</ion-title>\n      </ion-col>\n      <ion-col  size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ag-grid-angular style=\"width: 100%; height: 50%;\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n    [columnDefs]=\"columnDefs\" [rowSelection]=\"rowSelection\" (selectionChanged)=\"onSelectionChanged($event)\"\n    (firstDataRendered)=\"onFirstDataRendered($event)\">\n  </ag-grid-angular>\n\n  <ion-item *ngIf=\"show\">\n    <ion-label>Grupos Asignados a la Tarea \"{{tarea}}\"</ion-label>\n    <ion-select [(ngModel)]=\"grupo\" multiple>\n      <ion-select-option value=\"6ºA\">6ºA Primaria </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-button *ngIf=\"show\" expand=\"full\" (click)=\"asignar()\">ASIGNAR</ion-button>\n  <ion-button *ngIf=\"show && abierto\" color=\"success\" expand=\"full\" (click)=\"open()\">ABRIR</ion-button>\n  <ion-button *ngIf=\"show && cerrado\" color=\"medium\" expand=\"full\" (click)=\"close()\">CERRAR</ion-button>\n  <ion-button *ngIf=\"show && finalizado\" color=\"warning\" expand=\"full\" (click)=\"end()\">FINALIZAR TAREA</ion-button>\n  <ion-button *ngIf=\"show\" color=\"danger\" expand=\"full\" (click)=\"delete()\">ELIMINAR TAREA</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/asignarprueba/asignarprueba-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/asignarprueba/asignarprueba-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AsignarpruebaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarpruebaPageRoutingModule", function() { return AsignarpruebaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asignarprueba_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asignarprueba.page */ "./src/app/asignarprueba/asignarprueba.page.ts");




const routes = [
    {
        path: '',
        component: _asignarprueba_page__WEBPACK_IMPORTED_MODULE_3__["AsignarpruebaPage"]
    }
];
let AsignarpruebaPageRoutingModule = class AsignarpruebaPageRoutingModule {
};
AsignarpruebaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AsignarpruebaPageRoutingModule);



/***/ }),

/***/ "./src/app/asignarprueba/asignarprueba.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/asignarprueba/asignarprueba.module.ts ***!
  \*******************************************************/
/*! exports provided: AsignarpruebaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarpruebaPageModule", function() { return AsignarpruebaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _asignarprueba_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asignarprueba-routing.module */ "./src/app/asignarprueba/asignarprueba-routing.module.ts");
/* harmony import */ var _asignarprueba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asignarprueba.page */ "./src/app/asignarprueba/asignarprueba.page.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);








let AsignarpruebaPageModule = class AsignarpruebaPageModule {
};
AsignarpruebaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _asignarprueba_routing_module__WEBPACK_IMPORTED_MODULE_5__["AsignarpruebaPageRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])
        ],
        declarations: [_asignarprueba_page__WEBPACK_IMPORTED_MODULE_6__["AsignarpruebaPage"]]
    })
], AsignarpruebaPageModule);



/***/ }),

/***/ "./src/app/asignarprueba/asignarprueba.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/asignarprueba/asignarprueba.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  cursor: url(\"http://ionicframework.com/img/finger.png\"), auto;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNpZ25hcnBydWViYS9hc2lnbmFycHJ1ZWJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZEQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FzaWduYXJwcnVlYmEvYXNpZ25hcnBydWViYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGN1cnNvcjogdXJsKCdodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2ltZy9maW5nZXIucG5nJyksIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIgLmNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNvbDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XHJcbn1cclxuXHJcbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/asignarprueba/asignarprueba.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/asignarprueba/asignarprueba.page.ts ***!
  \*****************************************************/
/*! exports provided: AsignarpruebaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarpruebaPage", function() { return AsignarpruebaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AsignarpruebaPage = class AsignarpruebaPage {
    constructor(changeDetectorRef, router) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.profesor = localStorage.getItem("user");
        this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
        this.rowSelection = 'single';
        this.show = false;
        this.tarea = "";
        this.idSelect = "";
        this.abierto = false;
        this.cerrado = false;
        this.finalizado = false;
        this.rowData = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.pruebas, { profesor: this.profesor }) || [];
        this.columnDefs = [
            { headerName: 'Nombre de la Prueba', field: 'titulo', sortable: true, filter: true },
            { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
            { headerName: 'Grupos Asignados', field: 'grupos', sortable: true, filter: true },
            { headerName: 'Estado', field: 'abierta', sortable: true, filter: true },
        ];
        this.grupo = [];
    }
    ngOnInit() {
    }
    onFirstDataRendered(params) {
        this.gridApi = params.api;
        params.api.sizeColumnsToFit();
    }
    onSelectionChanged(selected) {
        this.tarea = "";
        this.gruposSelect = [];
        this.idSelect = "";
        this.grupo = [];
        let selectedRows = selected.api.getSelectedRows();
        this.tarea = selectedRows[0].titulo;
        this.gruposSelect = selectedRows[0].grupos;
        this.idSelect = selectedRows[0].id;
        this.grupo = this.gruposSelect;
        this.show = true;
        this.abierto = false;
        this.cerrado = false;
        this.finalizado = false;
        if (selectedRows[0].abierta == "ABIERTA") {
            this.cerrado = true;
            this.finalizado = true;
        }
        else if (selectedRows[0].abierta == "CERRADA") {
            this.abierto = true;
            this.finalizado = true;
        }
        else if (selectedRows[0].abierta == "FINALIZADA") {
            this.abierto = true;
            this.cerrado = true;
        }
        this.changeDetectorRef.detectChanges();
    }
    asignar() {
        if (this.idSelect) {
            let index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.pruebas, { id: this.idSelect });
            let obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.pruebas, { id: this.idSelect });
            obj.grupos = [];
            if (this.grupo) {
                for (let item of this.grupo) {
                    obj.grupos.push(item);
                }
            }
            this.pruebas.splice(index, 1, obj);
            localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
            alert("Tarea Asignada Correctamente");
            this.gridApi.redrawRows();
            this.rowData = this.pruebas;
            this.changeDetectorRef.detectChanges();
        }
        else {
            alert("Selecciona en la lista que tarea quieres asignar");
        }
    }
    salir() {
        this.router.navigate(['/home']);
    }
    ngDoCheck() {
        this.changeDetectorRef.detectChanges();
    }
    delete() {
        if (this.idSelect) {
            let id = this.idSelect;
            lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](this.pruebas, function (e) {
                return e.id == id;
            });
            this.changeDetectorRef.detectChanges();
            localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
            alert("Tarea Eliminada Correctamente");
            this.gridApi.redrawRows();
            this.rowData = this.pruebas;
            let alumnos = JSON.parse(localStorage.getItem("alumnos"));
            for (let item of alumnos) {
                let pruebaAl = JSON.parse(localStorage.getItem("completadas_" + item));
                if (pruebaAl) {
                    lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](pruebaAl, function (e) {
                        return e == id;
                    });
                    localStorage.setItem("completadas_" + item, JSON.stringify(pruebaAl));
                }
            }
            this.changeDetectorRef.detectChanges();
        }
        else {
            alert("Selecciona en la lista que tarea quieres asignar");
        }
    }
    end() {
        if (this.idSelect) {
            let index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.pruebas, { id: this.idSelect });
            let obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.pruebas, { id: this.idSelect });
            obj.abierta = "FINALIZADA";
            this.pruebas.splice(index, 1, obj);
            localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
            alert("Tarea Finalizada Correctamente");
            this.gridApi.redrawRows();
            this.rowData = this.pruebas;
            this.abierto = true;
            this.cerrado = true;
            this.finalizado = false;
            this.changeDetectorRef.detectChanges();
        }
        else {
            alert("Selecciona en la lista que tarea quieres asignar");
        }
    }
    close() {
        if (this.idSelect) {
            let index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.pruebas, { id: this.idSelect });
            let obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.pruebas, { id: this.idSelect });
            obj.abierta = "CERRADA";
            this.pruebas.splice(index, 1, obj);
            localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
            alert("Tarea Cerrada Correctamente");
            this.gridApi.redrawRows();
            this.rowData = this.pruebas;
            this.abierto = true;
            this.cerrado = false;
            this.finalizado = true;
            this.changeDetectorRef.detectChanges();
        }
        else {
            alert("Selecciona en la lista que tarea quieres asignar");
        }
    }
    open() {
        if (this.idSelect) {
            let index = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.pruebas, { id: this.idSelect });
            let obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.pruebas, { id: this.idSelect });
            obj.abierta = "ABIERTA";
            this.pruebas.splice(index, 1, obj);
            localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
            alert("Tarea Abierta Correctamente");
            this.gridApi.redrawRows();
            this.rowData = this.pruebas;
            this.abierto = false;
            this.cerrado = true;
            this.finalizado = true;
            this.changeDetectorRef.detectChanges();
        }
        else {
            alert("Selecciona en la lista que tarea quieres asignar");
        }
    }
};
AsignarpruebaPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AsignarpruebaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asignarprueba',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asignarprueba.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/asignarprueba/asignarprueba.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asignarprueba.page.scss */ "./src/app/asignarprueba/asignarprueba.page.scss")).default]
    })
], AsignarpruebaPage);



/***/ })

}]);
//# sourceMappingURL=asignarprueba-asignarprueba-module-es2015.js.map