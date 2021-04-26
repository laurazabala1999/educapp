import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profesor: boolean = false;
  alumno: boolean = false;
  user = localStorage.getItem("user");
  tipo = localStorage.getItem("tipo");
  numTareasPendientes;
  numAvisosPendientes;
  cuestionarioFalladas = [];
  ejerciciosRefuerzo = false;

  constructor(private router: Router, public changeDetectorRef: ChangeDetectorRef) { }
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

      if(this.cuestionarioFalladas.length >= 1){
        this.ejerciciosRefuerzo = true;
      }
      else{
        this.ejerciciosRefuerzo = false;
      }
    }
    else {
      this.alumno = false;
      this.profesor = true;
    }
    this.changeDetectorRef.detectChanges();
  }

  private checkAlerts() {

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


    let pruebaStorageMsg = JSON.parse(localStorage.getItem("Msg_"+ this.user)) || [];

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

}
