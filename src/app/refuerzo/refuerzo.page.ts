import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refuerzo',
  templateUrl: './refuerzo.page.html',
  styleUrls: ['./refuerzo.page.scss'],
})
export class RefuerzoPage implements OnInit {

  start = false; 
  user = localStorage.getItem("user");
  numero = 1;
  pruebas;
  correctas = [];

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


  constructor(private router: Router, public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.pruebas = JSON.parse(localStorage.getItem("falladas_" + this.user)) || [];
    this.correctas = [];
    this.numero = 1;
  }

  ngDoCheck(){
    this.changeDetectorRef.detectChanges();
  }

  volver(){
    this.router.navigate(['/home']);
  }

  salir(){
    this.router.navigate(['/home']);
  }

  empezar(){
    this.start = true;
    this.changeDetectorRef.detectChanges();

    if(this.pruebas.length > 0){
      this.pregunta = this.pruebas[0].pregunta.pregunta;
      this.respuesta = "";
      this.respuestaCorrecta = this.pruebas[0].pregunta.correcta;

      if(this.pruebas[0].tipo =="TEST"){
        this.pruebaCompletar = false;
        this.pruebaTest = true;
        this.opcionA = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[0].texto : "";
        this.opcionB = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[1].texto : "";
        this.opcionC = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[2].texto : "";
        this.opcionD = this.pruebas[0].pregunta.respuestas ? this.pruebas[0].pregunta.respuestas[3].texto : "";
      }
      else{
        this.pruebaCompletar = true;
        this.pruebaTest = false;
      }
     
    }
    this.changeDetectorRef.detectChanges();

  }

  continuar(){
    if(this.respuestaCorrecta == this.respuesta){
      this.correctas.push(this.numero -1);
    }
    this.numero ++;

    let preguntaMenos = this.numero -1;
    if(this.pruebas.length > preguntaMenos){
      this.pregunta = this.pruebas[preguntaMenos].pregunta.pregunta;
      this.respuesta = "";
      this.respuestaCorrecta = this.pruebas[preguntaMenos].pregunta.correcta;

      if(this.pruebas[preguntaMenos].tipo =="TEST"){
        this.pruebaCompletar = false;
        this.pruebaTest = true;
        this.opcionA = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[0].texto : "";
        this.opcionB = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[1].texto : "";
        this.opcionC = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[2].texto : "";
        this.opcionD = this.pruebas[preguntaMenos].pregunta.respuestas ? this.pruebas[preguntaMenos].pregunta.respuestas[3].texto : "";
      }
      else{
        this.pruebaCompletar = true;
        this.pruebaTest = false;
      }
    }
    else{
      let calificacion = (this.correctas.length)/(this.pruebas.length)*10;
      if(this.correctas.length){
        for(let i = this.correctas.length; i --; i<0){
          this.pruebas.splice(this.correctas[i], 1);
        }
      }
      localStorage.setItem("falladas_" + localStorage.getItem("user"), JSON.stringify(this.pruebas));

      let entregasRefuerzo = JSON.parse(localStorage.getItem("entregasRefuerzo_" + this.user)) || [];

      entregasRefuerzo.push(calificacion);
      localStorage.setItem("entregasRefuerzo_" + localStorage.getItem("user"), JSON.stringify(entregasRefuerzo));

      if(calificacion < 5){
        alert("Has finalizado tu tarea de repaso. Debes de prestar más atención a los enunciados y si tienes alguna duda preguntármela en clase. ¡Ánimo!");
      }
      else{
        alert("Has finalizado tu tarea de repaso. ¡Enhorabuena! Has logrado superarlo con una nota de "+calificacion+ " sobre 10 puntos. ¡Sigue así!");
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

}
