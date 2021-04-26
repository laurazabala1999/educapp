(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refuerzo-refuerzo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/refuerzo/refuerzo.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/refuerzo/refuerzo.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>EJERCICIOS DE REPASO</ion-title>\n      </ion-col>\n      <ion-col  size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"!start\">\n  <ion-item>\n    <ion-label style=\"text-align:center;\">A continuación se le mostrarán ejercicios personalizados, basados en sus pruebas anteriores. ¿Estás preparado?</ion-label>\n  </ion-item>\n  <ion-button expand=\"full\" (click)=\"empezar()\">EMPEZAR</ion-button>\n  <ion-button expand=\"full\" color=\"warning\" (click)=\"volver()\">VOLVER</ion-button>\n\n</ion-content>\n\n<ion-content *ngIf=\"start\">\n  <ion-item>\n    <ion-label position=\"floating\">Pregunta número {{numero}}</ion-label>\n    <ion-textarea [(ngModel)]=\"pregunta\" disabled=\"true\"></ion-textarea>\n  </ion-item>\n  <ion-item *ngIf=\"pruebaCompletar\">\n    <ion-label position=\"stacked\">Responda aquí</ion-label>\n    <ion-input [(ngModel)]=\"respuesta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-input>\n  </ion-item>\n\n  <ion-list *ngIf=\"pruebaTest\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item color=\"{{claseSeleccionadaA}}\" (click)=\"seleccionarOopcion('A')\">\n            <ion-label>A) {{opcionA}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n\n          <ion-item color=\"{{claseSeleccionadaB}}\" (click)=\"seleccionarOopcion('B')\">\n            <ion-label>B) {{opcionB}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item color=\"{{claseSeleccionadaC}}\" (click)=\"seleccionarOopcion('C')\">\n            <ion-label>C) {{opcionC}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n\n          <ion-item color=\"{{claseSeleccionadaD}}\" (click)=\"seleccionarOopcion('D')\">\n            <ion-label>D) {{opcionD}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-list>\n\n  <ion-button expand=\"full\" (click)=\"continuar()\">CONTINUAR</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/refuerzo/refuerzo-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/refuerzo/refuerzo-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RefuerzoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefuerzoPageRoutingModule", function() { return RefuerzoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _refuerzo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refuerzo.page */ "./src/app/refuerzo/refuerzo.page.ts");




const routes = [
    {
        path: '',
        component: _refuerzo_page__WEBPACK_IMPORTED_MODULE_3__["RefuerzoPage"]
    }
];
let RefuerzoPageRoutingModule = class RefuerzoPageRoutingModule {
};
RefuerzoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RefuerzoPageRoutingModule);



/***/ }),

/***/ "./src/app/refuerzo/refuerzo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/refuerzo/refuerzo.module.ts ***!
  \*********************************************/
/*! exports provided: RefuerzoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefuerzoPageModule", function() { return RefuerzoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _refuerzo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refuerzo-routing.module */ "./src/app/refuerzo/refuerzo-routing.module.ts");
/* harmony import */ var _refuerzo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refuerzo.page */ "./src/app/refuerzo/refuerzo.page.ts");







let RefuerzoPageModule = class RefuerzoPageModule {
};
RefuerzoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _refuerzo_routing_module__WEBPACK_IMPORTED_MODULE_5__["RefuerzoPageRoutingModule"]
        ],
        declarations: [_refuerzo_page__WEBPACK_IMPORTED_MODULE_6__["RefuerzoPage"]]
    })
], RefuerzoPageModule);



/***/ }),

/***/ "./src/app/refuerzo/refuerzo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/refuerzo/refuerzo.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZnVlcnpvL3JlZnVlcnpvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/refuerzo/refuerzo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/refuerzo/refuerzo.page.ts ***!
  \*******************************************/
/*! exports provided: RefuerzoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefuerzoPage", function() { return RefuerzoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let RefuerzoPage = class RefuerzoPage {
    constructor(router, changeDetectorRef) {
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.start = false;
        this.user = localStorage.getItem("user");
        this.numero = 1;
        this.correctas = [];
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
    }
    ngOnInit() {
        this.pruebas = JSON.parse(localStorage.getItem("falladas_" + this.user)) || [];
        this.correctas = [];
        this.numero = 1;
    }
    ngDoCheck() {
        this.changeDetectorRef.detectChanges();
    }
    volver() {
        this.router.navigate(['/home']);
    }
    salir() {
        this.router.navigate(['/home']);
    }
    empezar() {
        this.start = true;
        this.changeDetectorRef.detectChanges();
        if (this.pruebas.length > 0) {
            this.pregunta = this.pruebas[0].pregunta.pregunta;
            this.respuesta = "";
            this.respuestaCorrecta = this.pruebas[0].pregunta.correcta;
            if (this.pruebas[0].tipo == "TEST") {
                this.pruebaCompletar = false;
                this.pruebaTest = true;
                this.opcionA = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[0].texto : "";
                this.opcionB = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[1].texto : "";
                this.opcionC = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[2].texto : "";
                this.opcionD = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[3].texto : "";
            }
            else {
                this.pruebaCompletar = true;
                this.pruebaTest = false;
            }
        }
        this.changeDetectorRef.detectChanges();
    }
    continuar() {
        if (this.respuestaCorrecta == this.respuesta) {
            this.correctas.push(this.numero - 1);
        }
        this.numero++;
        let preguntaMenos = this.numero - 1;
        if (this.pruebas.length > preguntaMenos) {
            this.pregunta = this.pruebas[preguntaMenos].pregunta.pregunta;
            this.respuesta = "";
            this.respuestaCorrecta = this.pruebas[preguntaMenos].pregunta.correcta;
            if (this.pruebas[preguntaMenos].tipo == "TEST") {
                this.pruebaCompletar = false;
                this.pruebaTest = true;
                this.opcionA = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[0].texto : "";
                this.opcionB = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[1].texto : "";
                this.opcionC = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[2].texto : "";
                this.opcionD = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[3].texto : "";
            }
            else {
                this.pruebaCompletar = true;
                this.pruebaTest = false;
            }
        }
        else {
            let calificacion = (this.correctas.length) / (this.pruebas.length) * 10;
            if (this.correctas.length) {
                for (let i = this.correctas.length; i--; i < 0) {
                    this.pruebas.splice(this.correctas[i], 1);
                }
            }
            localStorage.setItem("falladas_" + localStorage.getItem("user"), JSON.stringify(this.pruebas));
            let entregasRefuerzo = JSON.parse(localStorage.getItem("entregasRefuerzo_" + this.user)) || [];
            entregasRefuerzo.push(calificacion);
            localStorage.setItem("entregasRefuerzo_" + localStorage.getItem("user"), JSON.stringify(entregasRefuerzo));
            if (calificacion < 5) {
                alert("Has finalizado tu tarea de repaso. Debes de prestar más atención a los enunciados y si tienes alguna duda preguntármela en clase. ¡Ánimo!");
            }
            else {
                alert("Has finalizado tu tarea de repaso. ¡Enhorabuena! Has logrado superarlo con una nota de " + calificacion + " sobre 10 puntos. ¡Sigue así!");
            }
            this.router.navigate(['/home']);
        }
        this.claseSeleccionadaA = "";
        this.claseSeleccionadaB = "";
        this.claseSeleccionadaC = "";
        this.claseSeleccionadaD = "";
        this.respuesta = "";
        this.changeDetectorRef.detectChanges();
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
};
RefuerzoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
RefuerzoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refuerzo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./refuerzo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/refuerzo/refuerzo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./refuerzo.page.scss */ "./src/app/refuerzo/refuerzo.page.scss")).default]
    })
], RefuerzoPage);



/***/ })

}]);
//# sourceMappingURL=refuerzo-refuerzo-module-es2015.js.map