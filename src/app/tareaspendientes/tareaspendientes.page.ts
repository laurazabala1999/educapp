import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-tareaspendientes',
  templateUrl: './tareaspendientes.page.html',
  styleUrls: ['./tareaspendientes.page.scss'],
})
export class TareaspendientesPage implements OnInit {
  numero = 1;
  user = localStorage.getItem("user");
  pruebas;
  rowSelection = 'single';
  gridApi;
  show = false;
  idSelect = "";
  tipoSelect = "";
  pruebaSelect;
  grupo = localStorage.getItem("grupo");
  showPrueba = false;
  showTabla = true;
  rowData = [];
  columnDefs = [
    { headerName: 'Nombre de la Prueba', field: 'titulo', sortable: true, filter: true },
    { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
  ];


  pregunta = "";
  respuestaCorrecta = "";

  respuesta = "";
  pruebaCompletar = false;
  pruebaTest = false;
  opcionA = "";
  opcionB = "";
  opcionC = "";
  opcionD = "";

  preguntaActual;

  claseSeleccionadaA = "";
  claseSeleccionadaB = "";
  claseSeleccionadaC = "";
  claseSeleccionadaD = "";

  examen = {
    preguntas: [],
    tiempoTotal: 0,
    calificación: 0,
    alumno: this.user,
    grupo: this.grupo,
    idPrueba: this.idSelect,
    opinion : "" 
  };

  cronoInit;
  cronoEnd;
  cronoResta;


  showEvaluacion= false;
  opinion = "";

  constructor(public changeDetectorRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
    let completadasUser = JSON.parse(localStorage.getItem("completadas_" + this.user)) || [];

    for (let item of this.pruebas) {
      if (item.grupos.indexOf(this.grupo) != -1) {
        if (completadasUser.indexOf(item.id) == -1) {
          if(item.abierta == "ABIERTA"){
            this.rowData.push(item);
          }
        }
      }
    }
  }

  ngDoCheck(){
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

  finalizar(){

    this.examen.opinion = this.opinion;
    this.examen.calificación = (this.examen.calificación / this.pruebaSelect.preguntas.length) * 10;

    let index = _.findIndex(this.pruebas, { id: this.idSelect });
    let obj = _.find(this.pruebas, { id: this.idSelect });

    obj.entregas.push(this.examen);

    let acumNota = 0;
    let acumTiempo = 0;

    for(let item of obj.entregas){
      acumNota = acumNota + item.calificación;
      acumTiempo = acumTiempo + item.tiempoTotal;
    }

    let mediaNota = acumNota /  obj.entregas.length;
    let mediaTiempo = acumTiempo /  obj.entregas.length;

    obj.mediaNota = mediaNota;
    obj.mediaTiempo = mediaTiempo;

    this.pruebas.splice(index, 1, obj);
    localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
    let completadasUser = JSON.parse(localStorage.getItem("completadas_" + this.user)) || [];
    completadasUser.push(this.idSelect);
    localStorage.setItem("completadas_" + localStorage.getItem("user"), JSON.stringify(completadasUser));

    let cuestionarioFalladas = JSON.parse(localStorage.getItem("falladas_" + this.user)) || [];

    let numPregunta = 0;
    for(let pregunta of this.examen.preguntas){
      if(pregunta.correcta == "NO"){
        let itemIncorrecto = {
          tipo : obj.tipo,
          pregunta: obj.preguntas[numPregunta]
        }
        cuestionarioFalladas.push(itemIncorrecto);
      }
      numPregunta ++;
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
    this.changeDetectorRef.detectChanges();

    this.cronometro("restart");

    let obj = {
      correcta: this.respuestaCorrecta == this.respuesta ? "SI" : "NO",
      tiempo: this.cronoResta,
      respuesta: this.respuesta
    }

    this.respuesta = null;

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
      this.respuesta = "";
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
}
