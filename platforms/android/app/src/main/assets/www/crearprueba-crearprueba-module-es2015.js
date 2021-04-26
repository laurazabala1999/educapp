(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crearprueba-crearprueba-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crearprueba/crearprueba.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crearprueba/crearprueba.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>CREAR PRUEBA</ion-title>\n      </ion-col>\n      <ion-col  size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"!crear\">\n    <ion-item>\n      <ion-label position=\"stacked\">Nombre de la prueba</ion-label>\n      <ion-input [(ngModel)]=\"nombre\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo de Prueba</ion-label>\n      <ion-select [(ngModel)]=\"tipo\">\n        <ion-select-option value=\"TEST\">Test</ion-select-option>\n        <ion-select-option value=\"COMPLETAR\">Completar</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Asignatura</ion-label>\n      <ion-select [(ngModel)]=\"asignatura\">\n        <ion-select-option value=\"MATEMÁTICAS\">Matemáticas</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Temario</ion-label>\n      <ion-select [(ngModel)]=\"temario\"> \n        <ion-select-option *ngFor=\"let item of temas\" [value]=\"item\">{{item}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]=\"estado\"> \n        <ion-select-option *ngFor=\"let item of estados\" [value]=\"item\">{{item}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Asignar a Grupos</ion-label>\n      <ion-select [(ngModel)]=\"grupo\" multiple>\n        <ion-select-option value=\"6ºA\">6ºA Primaria </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button expand=\"full\" color=\"success\" (click)=\"empezar()\">EMPEZAR</ion-button>\n  </ion-grid>\n\n<ion-grid *ngIf=\"crear\">\n  <ion-col *ngIf=\"tipo == 'TEST'\">\n    <ion-item>\n      <ion-label position=\"floating\">Pregunta número {{numero}}</ion-label>\n      <ion-textarea [(ngModel)]=\"pregunta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción A</ion-label>\n      <ion-input [(ngModel)]=\"opcionA\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción B</ion-label>\n      <ion-input [(ngModel)]=\"opcionB\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción C</ion-label>\n      <ion-input [(ngModel)]=\"opcionC\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Opción D</ion-label>\n      <ion-input [(ngModel)]=\"opcionD\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Selecciona la opción correcta</ion-label>\n      <ion-select [(ngModel)]=\"correcta\">\n        <ion-select-option value=\"A\">Opción A</ion-select-option>\n        <ion-select-option value=\"B\">Opción B</ion-select-option>\n        <ion-select-option value=\"C\">Opción C</ion-select-option>\n        <ion-select-option value=\"D\">Opción D</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-col>\n  <ion-col *ngIf=\"tipo == 'COMPLETAR'\">\n    <ion-item>\n      <ion-label position=\"floating\">Pregunta número {{numero}}</ion-label>\n      <ion-textarea [(ngModel)]=\"pregunta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Indica la respuesta correcta</ion-label>\n      <ion-input [(ngModel)]=\"respuesta\" onkeyup=\"this.value = this.value.toUpperCase();\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-button expand=\"full\" (click)=\"siguiente()\">SIGUIENTE PREGUNTA</ion-button>\n  <ion-button expand=\"full\" color=\"success\" (click)=\"finalizar()\">GUARDAR Y FINALIZAR</ion-button>\n\n</ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/crearprueba/crearprueba-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/crearprueba/crearprueba-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CrearpruebaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearpruebaPageRoutingModule", function() { return CrearpruebaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crearprueba_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crearprueba.page */ "./src/app/crearprueba/crearprueba.page.ts");




const routes = [
    {
        path: '',
        component: _crearprueba_page__WEBPACK_IMPORTED_MODULE_3__["CrearpruebaPage"]
    }
];
let CrearpruebaPageRoutingModule = class CrearpruebaPageRoutingModule {
};
CrearpruebaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearpruebaPageRoutingModule);



/***/ }),

/***/ "./src/app/crearprueba/crearprueba.module.ts":
/*!***************************************************!*\
  !*** ./src/app/crearprueba/crearprueba.module.ts ***!
  \***************************************************/
/*! exports provided: CrearpruebaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearpruebaPageModule", function() { return CrearpruebaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crearprueba_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crearprueba-routing.module */ "./src/app/crearprueba/crearprueba-routing.module.ts");
/* harmony import */ var _crearprueba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crearprueba.page */ "./src/app/crearprueba/crearprueba.page.ts");







let CrearpruebaPageModule = class CrearpruebaPageModule {
};
CrearpruebaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crearprueba_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearpruebaPageRoutingModule"]
        ],
        declarations: [_crearprueba_page__WEBPACK_IMPORTED_MODULE_6__["CrearpruebaPage"]]
    })
], CrearpruebaPageModule);



/***/ }),

/***/ "./src/app/crearprueba/crearprueba.page.scss":
/*!***************************************************!*\
  !*** ./src/app/crearprueba/crearprueba.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWFycHJ1ZWJhL2NyZWFycHJ1ZWJhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/crearprueba/crearprueba.page.ts":
/*!*************************************************!*\
  !*** ./src/app/crearprueba/crearprueba.page.ts ***!
  \*************************************************/
/*! exports provided: CrearpruebaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearpruebaPage", function() { return CrearpruebaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CrearpruebaPage = class CrearpruebaPage {
    constructor(router, changeDetectorRef) {
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
    ngOnInit() {
        this.prueba =
            {
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
                temario: this.temario,
            };
        this.changeDetectorRef.detectChanges();
    }
    ngDoCheck() {
        this.changeDetectorRef.detectChanges();
    }
    // pruebas array de pruebas
    // prueba: {
    //   id: "unico",
    //   asignatura: "",
    //   grupos: ["id", "id2"],
    //   preguntas: [{pregunta: "pregunta", respuestas: [{"texto":"texto", "id": "id"}], correcta: "id"}]
    // }
    empezar() {
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
                for (let item of this.grupo) {
                    this.prueba.grupos.push(item);
                }
            }
        }
        else {
            alert("Faltan campos por completar");
        }
        this.changeDetectorRef.detectChanges();
    }
    siguiente() {
        if (this.tipo == "TEST") {
            let palabras = this.pregunta.split(" ").length + this.opcionA.split(" ").length + this.opcionB.split(" ").length + this.opcionC.split(" ").length + this.opcionD.split(" ").length;
            let tiempoEstim = (palabras / 1.95) + 4; // 1,95 palabras por segundo + 4 segundos de resolución
            let obj = {
                pregunta: this.pregunta,
                respuestas: [
                    { "texto": this.opcionA, "id": "A" },
                    { "texto": this.opcionB, "id": "B" },
                    { "texto": this.opcionC, "id": "C" },
                    { "texto": this.opcionD, "id": "D" }
                ],
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
        }
        else if (this.tipo == "COMPLETAR") {
            let palabras = this.pregunta.split(" ").length;
            let tiempoEstim = (palabras / 1.95) + 5; // 1,95 palabras por segundo + 6 segundos de resolución
            let obj = {
                pregunta: this.pregunta,
                correcta: this.respuesta,
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
        }
        this.numero++;
        this.changeDetectorRef.detectChanges();
    }
    finalizar() {
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
    salir() {
        this.changeDetectorRef.detectChanges();
        this.router.navigate(['/home']);
    }
};
CrearpruebaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CrearpruebaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crearprueba',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crearprueba.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crearprueba/crearprueba.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crearprueba.page.scss */ "./src/app/crearprueba/crearprueba.page.scss")).default]
    })
], CrearpruebaPage);



/***/ })

}]);
//# sourceMappingURL=crearprueba-crearprueba-module-es2015.js.map