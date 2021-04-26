import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.page.html',
  styleUrls: ['./analisis.page.scss'],
})
export class AnalisisPage implements OnInit {

  lista = true;
  detalle = false;
  profesor = localStorage.getItem("user");
  pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
  misPruebas = _.filter(this.pruebas, { profesor: this.profesor }) || [];
  modalData: any = {};
  riesgos = JSON.parse(localStorage.getItem("riesgos")) || [];

  columnDefs = [
    { headerName: 'Nombre de la Prueba', field: 'titulo', sortable: true, filter: true },
    { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
    { headerName: 'Calificación', field: 'nota', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle },
    { headerName: 'Tiempo', field: 'tiempo', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle },
  ];

  rowData = [];
  rowSelection = 'single';
  gridApi;

  constructor(public changeDetectorRef: ChangeDetectorRef, private router: Router) { }

  cellStyle(params) {
    let color = "";

    let pruebascolor = JSON.parse(localStorage.getItem("pruebas")) || [];

    let mediaTiempo = _.find(pruebascolor, { id: params.data.id }) ? _.find(pruebascolor, { id: params.data.id }).mediaTiempo : null;
    let mediaNota = _.find(pruebascolor, { id: params.data.id }) ? _.find(pruebascolor, { id: params.data.id }).mediaNota : null;

    let tiempoEstimado = _.find(pruebascolor, { id: params.data.id }) ? _.find(pruebascolor, { id: params.data.id }).tiempoEstimado : null;

    if (params.colDef.field == "nota") {
      if (params.value < mediaNota) {
        color = "lightcoral";
      }
      else if (params.value == mediaNota) {
        color = "";
      }
      else if (params.value > mediaNota) {
        color = "lightgreen";
      }
      return { backgroundColor: color };
    }
    else {
      let media = (mediaTiempo + tiempoEstimado) / 2;
      media = Math.trunc(media);
      if (params.value > media) {
        color = "lightcoral";
      }
      else if (params.value == media) {
        color = "";
      }
      else if (params.value < media) {
        color = "lightgreen";
      }
      return { backgroundColor: color };
    }

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


  ngOnInit() {

    if (!this.riesgos.length) {

      let avisos = {};
      let lentos = [];
      let malasNotas = [];

      for (let prueba of this.misPruebas) {
        for (let entrega of prueba.entregas) {
          if (entrega.calificación < 5 && entrega.calificación < prueba.mediaNota) {
            malasNotas.push(entrega);
          }
          if (entrega.tiempoTotal > prueba.mediaTiempo && entrega.tiempoTotal > prueba.tiempoEstimado) {
            lentos.push(entrega);
          }
        }
      }

      for (let malo of malasNotas) {
        avisos[malo.alumno] ? avisos[malo.alumno] : avisos[malo.alumno] = { notas: [], tiempo: [] }
        avisos[malo.alumno].notas.push(malo);
      }
      for (let lento of lentos) {
        avisos[lento.alumno] ? avisos[lento.alumno] : avisos[lento.alumno] = { notas: [], tiempo: [] }
        avisos[lento.alumno].tiempo.push(lento);

      }
      let totalPruebas = this.misPruebas.length;

      for (let alumno in avisos) {
        let obj = {
          alumno: alumno,
          mensaje: null,
          id: Math.floor(Math.random() * 100000),
          nota: avisos[alumno].notas,
          tiempo: avisos[alumno].tiempo
        }

        let refuerzos = JSON.parse(localStorage.getItem("entregasRefuerzo_"+ alumno)) || [];
        let deficitRefuerzos = "";
        if (refuerzos) {
          let suspensos = 0;
          for (let refuerzo of refuerzos) {
            if (refuerzo < 5) {
              suspensos++;
            }
          }
          if (suspensos > (refuerzos.length / 3)) {
            deficitRefuerzos = " Por último, indicar que de las " + refuerzos.length + " tareas de refuerzo entregadas, no ha cumplido los requisitos mínimos en " + suspensos + " de ellas. ";
          }
        }
        if (avisos[alumno]["notas"].length >= totalPruebas / 2 && avisos[alumno]["tiempo"].length < totalPruebas / 2) {
          obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en la asigntara de Matemáticas. De las últimas " + totalPruebas +
            " pruebas ha suspendido " + avisos[alumno]["notas"].length + ". Además la nota media de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante no ha dado el nivel esperado:"
        }
        if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length < totalPruebas / 2) {
          obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en los tiempos de lectura / ejecución de los ejercicios de la asigntara de Matemáticas. De las últimas " + totalPruebas +
            " ha tenido un tiempo de ejecución elevado en  " + avisos[alumno]["tiempo"].length + " ocasiones. Además la capacidad lectora / resolutiva de la clase es superior a su nivel actual. " + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido una resolución con un tiempo demasiado elevado:"
        }
        if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length >= totalPruebas / 2) {
          obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades, tanto a nivel de tiempos de resolución como de resultados, en la asigntara de Matemáticas. De las últimas " + totalPruebas +
            " pruebas ha suspendido " + avisos[alumno]["notas"].length + ", superando el tiempo de resolución esperado en " + avisos[alumno]["tiempo"].length + " ejercicios. El nivel general de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido problemas:"
        }

        if (obj.mensaje) {
          this.riesgos.push(obj);
        }

        localStorage.setItem("riesgos", JSON.stringify(this.riesgos));

      }
    }

  }

  analizar() {

    this.riesgos = [];

    let avisos = {};
    let lentos = [];
    let malasNotas = [];

    for (let prueba of this.misPruebas) {
      for (let entrega of prueba.entregas) {
        if (entrega.calificación < 5 && entrega.calificación < prueba.mediaNota) {
          malasNotas.push(entrega);
        }
        if (entrega.tiempoTotal > prueba.mediaTiempo && entrega.tiempoTotal > prueba.tiempoEstimado) {
          lentos.push(entrega);
        }
      }
    }

    for (let malo of malasNotas) {
      avisos[malo.alumno] ? avisos[malo.alumno] : avisos[malo.alumno] = { notas: [], tiempo: [] }
      avisos[malo.alumno].notas.push(malo);
    }
    for (let lento of lentos) {
      avisos[lento.alumno] ? avisos[lento.alumno] : avisos[lento.alumno] = { notas: [], tiempo: [] }
      avisos[lento.alumno].tiempo.push(lento);

    }
    let totalPruebas = this.misPruebas.length;

    for (let alumno in avisos) {
      let obj = {
        alumno: alumno,
        mensaje: null,
        id: Math.floor(Math.random() * 100000),
        nota: avisos[alumno].notas,
        tiempo: avisos[alumno].tiempo
      }

      let refuerzos = JSON.parse(localStorage.getItem("entregasRefuerzo_"+ alumno)) || [];
      let deficitRefuerzos = "";
      if (refuerzos) {
        let suspensos = 0;
        for (let refuerzo of refuerzos) {
          if (refuerzo < 5) {
            suspensos++;
          }
        }
        if (suspensos > (refuerzos.length / 3)) {
          deficitRefuerzos = " Por último, indicar que de las " + refuerzos.length + " tareas de refuerzo entregadas, no ha cumplido los requisitos mínimos en " + suspensos + " de ellas. ";
        }
      }
      if (avisos[alumno]["notas"].length >= totalPruebas / 2 && avisos[alumno]["tiempo"].length < totalPruebas / 2) {
        obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en la asigntara de Matemáticas. De las últimas " + totalPruebas +
          " pruebas ha suspendido " + avisos[alumno]["notas"].length + ". Además la nota media de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante no ha dado el nivel esperado:"
      }
      if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length < totalPruebas / 2) {
        obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades en los tiempos de lectura / ejecución de los ejercicios de la asigntara de Matemáticas. De las últimas " + totalPruebas +
          " ha tenido un tiempo de ejecución elevado en  " + avisos[alumno]["tiempo"].length + " ocasiones. Además la capacidad lectora / resolutiva de la clase es superior a su nivel actual. " + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido una resolución con un tiempo demasiado elevado:"
      }
      if (avisos[alumno]["tiempo"].length >= totalPruebas / 2 && avisos[alumno]["notas"].length >= totalPruebas / 2) {
        obj.mensaje = alumno + ",del grupo de 6ºA Primaria, está teniendo dificultades, tanto a nivel de tiempos de resolución como de resultados, en la asigntara de Matemáticas. De las últimas " + totalPruebas +
          " pruebas ha suspendido " + avisos[alumno]["notas"].length + ", superando el tiempo de resolución esperado en " + avisos[alumno]["tiempo"].length + " ejercicios. El nivel general de la clase es superior a su nivel actual." + deficitRefuerzos + "A continuación se mostrarán los datos de las pruebas en las que el estudiante ha tenido problemas:"
      }

      if (obj.mensaje) {
        this.riesgos.push(obj);
      }

      localStorage.setItem("riesgos", JSON.stringify(this.riesgos));

    }

  }

  salir() {
    this.router.navigate(['/home']);
  }


  onFirstDataRendered(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  abrir(msg) {
    this.modalData = msg;
    this.lista = false;
    this.detalle = true;

    let arrayPruebas = msg.nota.concat(msg.tiempo);
    this.rowData = [];

    for (let prueba of arrayPruebas) {
      let titulo = prueba.idPrueba.split("_X")[0];

      let obj = {
        titulo: titulo,
        id: prueba.idPrueba,
        asignatura: "Matemáticas",
        nota: prueba.calificación,
        tiempo: prueba.tiempoTotal
      }

      let existe = _.find(this.rowData, { id: prueba.idPrueba });
      if (!existe) {
        this.rowData.push(obj);
      }
    }


    this.changeDetectorRef.detectChanges();
  }


  cerrar() {
    this.lista = true;
    this.detalle = false;
    this.changeDetectorRef.detectChanges();
  }

  normalizar(msg) {
    this.lista = true;
    this.detalle = false;

    _.remove(this.riesgos, function (e) {
      return e.id == msg.id
    });
    this.changeDetectorRef.detectChanges();
    localStorage.setItem("riesgos", JSON.stringify(this.riesgos));
    this.changeDetectorRef.detectChanges();

  }

}
