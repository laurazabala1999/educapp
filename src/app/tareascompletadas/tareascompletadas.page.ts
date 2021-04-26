import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-tareascompletadas',
  templateUrl: './tareascompletadas.page.html',
  styleUrls: ['./tareascompletadas.page.scss'],
})
export class TareascompletadasPage implements OnInit {
  pruebas;
  user = localStorage.getItem("user");
  rowSelection = 'single';
  gridApi;
  rowData = [];
  columnDefs = [
    { headerName: 'Tarea', field: 'titulo', sortable: true, filter: true },
    { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
    {
      headerName: 'Calificación', field: 'calificacion', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle,

    },
    { headerName: 'Docente', field: 'profesor', sortable: true, filter: true }
  ];

   pizarra = [];
   test = false;
   completar = false;
   informe = false;

   volver(){
     this.informe = false;
     this.changeDetectorRef.detectChanges();

   }

  cellStyle(params){
    let color = "";
    if(params.value<5){
      color = "lightcoral";
    }
    else if( params.value >=5 && params.value < 7){
      color = "lightsalmon";
    }
    else if( params.value >= 7){
      color = "lightgreen";
    }
    return { backgroundColor: color };
  }


  constructor(public changeDetectorRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
    let completadasUser = JSON.parse(localStorage.getItem("completadas_" + this.user)) || [];

    for (let item of this.pruebas) {
      if (completadasUser.indexOf(item.id) != -1) {
        let nota = _.find(item.entregas, { alumno: this.user });
        let obj = {
          titulo: item.titulo,
          asignatura: item.asignatura,
          calificacion: nota.calificación,
          profesor: item.profesor,
          id: item.id
        }
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
      selection= selected.api.getSelectedRows();
      this.mostrarResultado(selection);
    }
    else {
      selection = null;
    }
    this.changeDetectorRef.detectChanges();

  }

  mostrarResultado(selected){

    this.informe = true;
    this.changeDetectorRef.detectChanges();

    this.pizarra = [];

    let prueba = _.find(this.pruebas, { id: selected[0].id });

    this.test = false;
    this.completar = false;

    let numero = 1;
    for(let pregunta of prueba.preguntas){

      let alumnoRespuesta = _.find(prueba.entregas, {alumno: this.user}).preguntas[numero-1].respuesta
      let colorCorrecta = _.find(prueba.entregas, {alumno: this.user}).preguntas[numero-1].correcta

      let obj = {
        numero: numero,
        correcta : pregunta.correcta,
        pregunta : pregunta.pregunta,
        a : pregunta.respuestas ? pregunta.respuestas[0].texto : "",
        b : pregunta.respuestas ? pregunta.respuestas[1].texto : "",
        c : pregunta.respuestas ? pregunta.respuestas[2].texto : "",
        d : pregunta.respuestas ? pregunta.respuestas[3].texto : "",
        respuesta : pregunta.respuesta,
        respuestaAlumno : alumnoRespuesta,
        color: colorCorrecta == "SI" ? "green" : "red"
      }

      this.pizarra.push(obj);
      numero ++;
    }

    let tipo = prueba.tipo;
    if(tipo == "TEST"){
      this.test = true;
      this.completar = false;
    }
    else if(tipo == "COMPLETAR"){
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
    } else {
      valueAsNumber = parseFloat(params.newValue);
    }
    return valueAsNumber;
  }

}
  