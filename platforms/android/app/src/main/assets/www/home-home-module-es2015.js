(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-title>BIENVENID@ {{user}}</ion-title>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button color=\"primary\" class=\"home\" (click)=\"salir()\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"profesor\">\n    <ion-row>\n      <ion-col>\n        <ion-card (click)=\"crear()\">\n          <img src=\"assets/icon/crear.png\" />\n          <ion-card-header>\n            <ion-card-title>CREAR PRUEBA</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Crear una prueba.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card (click)=\"anadir()\">\n          <img src=\"assets/icon/anadir.png\" />\n          <ion-card-header>\n            <ion-card-title>GESTIONAR PRUEBAS</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Gestionar las pruebas creadas.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card (click)=\"consultar()\">\n          <img src=\"assets/icon/resultados.png\" />\n          <ion-card-header>\n            <ion-card-title>CONSULTAR RESULTADOS</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Consultar resultados de los estudiantes.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card (click)=\"analisis()\">\n          <img src=\"assets/icon/analisis.png\" />\n          <ion-card-header>\n            <ion-card-title>ANÁLISIS DE RIESGOS</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Consultar situaciones de riesgo.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"alumno\">\n    <ion-row>\n      <ion-col>\n        <ion-card (click)=\"tareas()\">\n          <ion-badge color=\"warning\" class=\"alert\">{{numTareasPendientes}}</ion-badge>\n          <img src=\"assets/icon/tareas.png\" />\n          <ion-card-header>\n            <ion-card-title>MIS TAREAS PENDIENTES</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Consultar tus tareas pendientes.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card (click)=\"realizadas()\">\n          <img src=\"assets/icon/realizadas.png\" />\n          <ion-card-header>\n            <ion-card-title>MIS TAREAS ENTREGADAS</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Consultar el resultado de tus tareas.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card (click)=\"avisos()\">\n          <ion-badge color=\"warning\" class=\"alert\">{{numAvisosPendientes}}</ion-badge>\n          <img src=\"assets/icon/aviso.png\" />\n          <ion-card-header>\n            <ion-card-title>AVISOS</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Mensajes importantes para ti.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngIf=\"ejerciciosRefuerzo\">\n        <ion-card (click)=\"refuerzo()\">\n          <img src=\"assets/icon/libro.jpg\" />\n          <ion-card-header>\n            <ion-card-title>EJERCICIOS REPASO</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              Tienes ejercicios de repaso pendientes. \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  border-radius: 8px;\n  width: 150px;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HomePage = class HomePage {
    constructor(router, changeDetectorRef) {
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.profesor = false;
        this.alumno = false;
        this.user = localStorage.getItem("user");
        this.tipo = localStorage.getItem("tipo");
        this.cuestionarioFalladas = [];
        this.ejerciciosRefuerzo = false;
    }
    ngOnInit() {
        this.changeDetectorRef.detectChanges();
        if (this.tipo == "alumno") {
            this.alumno = true;
            this.profesor = false;
        }
        else {
            this.alumno = false;
            this.profesor = true;
        }
        this.changeDetectorRef.detectChanges();
        this.checkAlerts();
    }
    ngDoCheck() {
        this.checkAlerts();
        console.log("alumno");
        if (this.tipo == "alumno") {
            this.alumno = true;
            this.profesor = false;
            this.cuestionarioFalladas = JSON.parse(localStorage.getItem("falladas_" + this.user)) || [];
            if (this.cuestionarioFalladas.length >= 1) {
                this.ejerciciosRefuerzo = true;
            }
            else {
                this.ejerciciosRefuerzo = false;
            }
        }
        else {
            this.alumno = false;
            this.profesor = true;
        }
        this.changeDetectorRef.detectChanges();
    }
    checkAlerts() {
        this.tipo = localStorage.getItem("tipo");
        this.user = localStorage.getItem("user");
        let pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
        let completadasUser = JSON.parse(localStorage.getItem("completadas_" + this.user)) || [];
        let grupo = localStorage.getItem("grupo");
        let rowData = [];
        for (let item of pruebas) {
            if (item.grupos.indexOf(grupo) != -1) {
                if (completadasUser.indexOf(item.id) == -1) {
                    if (item.abierta == "ABIERTA") {
                        rowData.push(item);
                    }
                }
            }
        }
        this.numTareasPendientes = rowData.length == 0 ? null : rowData.length;
        let pruebaStorageMsg = JSON.parse(localStorage.getItem("Msg_" + this.user)) || [];
        let sinLeer = [];
        for (let itemLeer of pruebaStorageMsg) {
            if (!itemLeer.leido) {
                sinLeer.push(itemLeer);
            }
        }
        this.numAvisosPendientes = sinLeer.length == 0 ? null : sinLeer.length;
        this.changeDetectorRef.detectChanges();
    }
    crear() {
        this.router.navigate(['/crearprueba']);
    }
    anadir() {
        this.router.navigate(['/asignarprueba']);
    }
    consultar() {
        this.router.navigate(['/consultarresultados']);
    }
    analisis() {
        this.router.navigate(['/analisis']);
    }
    tareas() {
        this.router.navigate(['/tareaspendientes']);
    }
    realizadas() {
        this.router.navigate(['/tareascompletadas']);
    }
    avisos() {
        this.router.navigate(['/avisos']);
    }
    refuerzo() {
        this.router.navigate(['/refuerzo']);
    }
    salir() {
        if (this.tipo == "alumno") {
            this.router.navigate(['/tabs/tab2']);
        }
        else {
            this.router.navigate(['/tabs/tab1']);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map