import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { domainToASCII } from 'url';

@Component({
  selector: 'app-consultarresultados',
  templateUrl: './consultarresultados.page.html',
  styleUrls: ['./consultarresultados.page.scss'],
})
export class ConsultarresultadosPage implements OnInit {

  constructor(public changeDetectorRef: ChangeDetectorRef, private router: Router) { }
  profesor = localStorage.getItem("user");
  pruebas;

  pruebasFilter = [];
  disabled = true;

  rowSelection = 'single';
  gridApi;
  rowData = [];
  rowDataFilter = [];
  idSelect = null;

  sTabla = true;
  sGrafico = false;

  mediaTiempo = 0;
  mediaNota = 0;
  miNota = 0;
  miTiempo = 0;
  show = false;
  seleccion;

  mensajeShow = false;
  mensajeEnviar = "";
  columnDefs = [
    { headerName: 'Nombre de la Prueba', field: 'titulo', sortable: true, filter: true },
    { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
    { headerName: 'Estudiante', field: 'alumno', sortable: true, filter: true },
    { headerName: 'Calificación', field: 'nota', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle },
    { headerName: 'Tiempo', field: 'tiempo', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle },
    { headerName: 'Opinion', field: 'opinion', sortable: true, filter: true },
  ];

  columnDefsMobile = [   
    { headerName: 'Tarea', field: 'titulo', sortable: true, filter: true },
    { headerName: 'Estudiante', field: 'alumno', sortable: true, filter: true },
    { headerName: 'Nota', field: 'nota', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle },
    { headerName: 'Tiempo', field: 'tiempo', sortable: true, filter: true, valueParser: this.numberParser, cellStyle: this.cellStyle },
  ];

  opinion = "";

  sAlumno = false;
  sGrupo = false;
  sPrueba = false;
  options: any = null;


  alumnosG = JSON.parse(localStorage.getItem("alumnos")) || [];
  pruebasG = [];
  gruposG = ["6ºA"];



  alumnoS = "";
  pruebaS = "";
  grupoS = "";


  bAlumno = false;
  bGrupo = false;
  bPrueba = false;

  lineaSeleccionada = null;

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

  showTabla() {
    this.sTabla = true;
    this.sGrafico = false;
    this.show = false;
    this.opinion = null;

    this.changeDetectorRef.detectChanges();

  }
  showGrafico() {
    this.sTabla = false;
    this.sGrafico = true;
    this.changeDetectorRef.detectChanges();

  }

  mensaje() {
    this.mensajeShow = true;
    this.changeDetectorRef.detectChanges();

  }


  cerrar() {
    this.mensajeShow = false;
    this.changeDetectorRef.detectChanges();

  }

  changeAlumno(item) {
    this.sAlumno = false;
    this.sGrupo = false;
    this.sPrueba = false;

    if (this.alumnoS) {
      this.bAlumno = true;
    }
    else {
      this.bAlumno = false;

    }
    this.changeDetectorRef.detectChanges();

  }

  changeGrupo(item) {
    this.sAlumno = false;
    this.sGrupo = false;
    this.sPrueba = false;

    if (this.grupoS) {
      this.bGrupo = true;
    }
    else {
      this.bGrupo = false;

    }
    this.changeDetectorRef.detectChanges();
  }

  changePrueba(item) {
    this.sAlumno = false;
    this.sGrupo = false;
    this.sPrueba = false;

    if (this.pruebaS) {
      this.bPrueba = true;
    }
    else {
      this.bPrueba = false;

    }
    this.changeDetectorRef.detectChanges();
  }

  alumno() {

    this.sAlumno = true;
    this.sGrupo = false;
    this.sPrueba = false;

    let data = [];

    for (let prueba of this.pruebasFilter) {

      for (let entrega of prueba.entregas) {
        if (entrega.alumno == this.alumnoS) {
          let obj = {
            prueba: prueba.titulo,
            puntuacion: entrega.calificación,
            tiempo: entrega.tiempoTotal,
          }
          data.push(obj)
        }
      }
    }


    this.options = {
      autoSize: true,
      data: data,
      title: {
        text: 'Resultados del estudiante ' + this.alumnoS,
        fontSize: 18,
      },
      subtitle: {
        text:
          'El gráfico muestra los resultado de todas las pruebas del estudiante seleccionado',
      },
      series: [
        {
          type: 'column',
          xKey: 'prueba',
          yKeys: ['puntuacion', 'tiempo'],
          yNames: ['Puntuación', 'Tiempo'],
          grouped: true,
          fills: ['#19A0AA', '#F15F36'],
          strokes: ['#19A0AA', '#F15F36'],
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
        },
        {
          type: 'number',
          position: 'left',
        },
      ],
    };

    this.changeDetectorRef.detectChanges();

  }
  grupo() {
    this.sAlumno = false;
    this.sGrupo = true;
    this.sPrueba = false;

    let data = [];

    for (let prueba of this.pruebasFilter) {

      for (let entrega of prueba.grupos) {
        if (entrega == this.grupoS) {
          let obj = {
            prueba: prueba.titulo,
            puntuacion: prueba.mediaNota,
            tiempo: prueba.mediaTiempo,
          }
          data.push(obj)
        }
      }
    }

    this.options = {
      autoSize: true,
      data: data,
      title: {
        text: 'Resultados del Grupo ' + this.grupoS,
        fontSize: 18,
      },
      subtitle: {
        text:
          'El gráfico muestra los resultados de todas las pruebas del grupo seleccionado',
      },
      series: [
        {
          type: 'column',
          xKey: 'prueba',
          yKeys: ['puntuacion', 'tiempo'],
          yNames: ['Puntuación', 'Tiempo'],
          grouped: true,
          fills: ['#19A0AA', '#F15F36'],
          strokes: ['#19A0AA', '#F15F36'],
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
        },
        {
          type: 'number',
          position: 'left',
        },
      ],
    };
    this.changeDetectorRef.detectChanges();

  }
  prueba() {
    this.sAlumno = false;
    this.sGrupo = false;
    this.sPrueba = true;

    let data = [];

    for (let prueba of this.pruebasFilter) {
      if (prueba.titulo == this.pruebaS) {
        for (let entrega of prueba.entregas) {
          let obj = {
            alumno: entrega.alumno,
            puntuacion: entrega.calificación,
            tiempo: entrega.tiempoTotal,
          }
          data.push(obj)
        }
      }
    }

    this.options = {
      autoSize: true,
      data: data,
      title: {
        text: 'Resultados de los estudiantes en la prueba ' + this.pruebaS,
        fontSize: 18,
      },
      subtitle: {
        text:
          'El gráfico muestra los resultados de todas los estudiantes en la prueba seleccionada',
      },
      series: [
        {
          type: 'column',
          xKey: 'alumno',
          yKeys: ['puntuacion', 'tiempo'],
          yNames: ['Puntuación', 'Tiempo'],
          grouped: true,
          fills: ['#19A0AA', '#F15F36'],
          strokes: ['#19A0AA', '#F15F36'],
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
        },
        {
          type: 'number',
          position: 'left',
        },
      ],
    };
    this.changeDetectorRef.detectChanges();
  }

  enviar() {
    let seleccionado = this.seleccion[0];

    let pruebaStorageMsg = JSON.parse(localStorage.getItem("Msg_" + seleccionado.alumno)) || [];

    let msgtest = _.find(pruebaStorageMsg, { id: seleccionado.id });
    if (msgtest) {
      alert("Ya se ha enviado un mensaje al alumno referente a esta prueba");
    }

    else {
      let obj = {
        id: seleccionado.id,
        asignatura: seleccionado.asignatura,
        profesor: this.profesor,
        alumno: seleccionado.alumno,
        titulo: seleccionado.titulo,
        img: this.profesor == "ANDRES" || this.profesor == "LAURA" ? "assets/icon/" + this.profesor + ".png" : "assets/icon/DEFAULT.png",
        msg: this.mensajeEnviar,
        leido: false
      }
      pruebaStorageMsg.push(obj);
      localStorage.setItem("Msg_" + seleccionado.alumno, JSON.stringify(pruebaStorageMsg));

      alert("Mensaje enviado con éxito");
      this.mensajeShow = false;
      this.changeDetectorRef.detectChanges();

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
    this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
    this.pruebasFilter = _.filter(this.pruebas, { profesor: this.profesor });

    for (let prueba of this.pruebasFilter) {
      for (let entrega of prueba.entregas) {
        let obj = {
          id: prueba.id,
          titulo: prueba.titulo,
          asignatura: prueba.asignatura,
          alumno: entrega.alumno,
          nota: entrega.calificación,
          tiempo: entrega.tiempoTotal,
          grupo: entrega.grupo,
          opinion: entrega.opinion || null
        }
        this.rowData.push(obj);
      }

      this.pruebasG.push(prueba.titulo);
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
    console.log(selected)
    if (selected) {
      this.seleccion = selected.api.getSelectedRows();

      let seleccionado = this.seleccion[0];

      this.lineaSeleccionada = seleccionado;

      let pruebaStorageMsg = JSON.parse(localStorage.getItem("Msg_" + seleccionado.alumno)) || [];

      let msgtest = _.find(pruebaStorageMsg, { id: seleccionado.id });
      if (!msgtest) {
        this.show = true;
      }
      else {
        this.show = false;
      }

      this.opinion = this.seleccion[0].opinion || null;

    }
    else {
      this.show = false;
      this.seleccion = null;
    }
    this.changeDetectorRef.detectChanges();

  }

  felicitar() {
    let seleccionado = this.seleccion[0];

    let pruebaStorageMsg = JSON.parse(localStorage.getItem("Msg_" + seleccionado.alumno)) || [];

    let msgtest = _.find(pruebaStorageMsg, { id: seleccionado.id });
    if (msgtest) {
      alert("Ya se ha enviado un mensaje al estudiante referente a esta prueba");
    }

    else {
      let obj = {
        id: seleccionado.id,
        asignatura: seleccionado.asignatura,
        profesor: this.profesor,
        alumno: seleccionado.alumno,
        titulo: seleccionado.titulo,
        img: this.profesor == "ANDRES" || this.profesor == "LAURA" ? "assets/icon/" + this.profesor + ".png" : "assets/icon/DEFAULT.png",
        msg: "Hola " + seleccionado.alumno + ". Enhorabuena por la puntuación obtenida en la prueba de " + seleccionado.titulo + ". Has logrado una nota de " + seleccionado.nota + " / 10. ¡Sigue asi! Felicidades.",
        leido: false
      }
      pruebaStorageMsg.push(obj);
      localStorage.setItem("Msg_" + seleccionado.alumno, JSON.stringify(pruebaStorageMsg));

      alert("Mensaje enviado con éxito");

    }

  }

}
