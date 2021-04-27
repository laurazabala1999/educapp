import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearprueba',
  templateUrl: './crearprueba.page.html',
  styleUrls: ['./crearprueba.page.scss'],
})
export class CrearpruebaPage implements OnInit {
  prueba;
  pruebas;

  constructor(private router: Router,  public changeDetectorRef: ChangeDetectorRef) { }
  nombre = "";
  tipo = "";
  asignatura = "";
  grupo;
  crear: boolean = false;

  numero = 1;

  pregunta = "";
  opcionA = "";
  opcionB = "";
  opcionC = "";
  opcionD = "";
  correcta = "";

  respuesta = "";

  temas = ["Sumas y restas con llevadas", "Multiplicar por tres cifras", "División", "Cálculo con varias operaciones", "Números Decimales", "Sumas, restas y multiplicaciones con decimales", "Divisiones con Decimales", "Mínimo común múltiplo y máximo común divisor", "Números Primos" ,"Fracciones"]

  temario = "";

  estados = ["ABIERTA", "CERRADA"]
  estado = "ABIERTA";

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
      mediaTiempo : null,
      tiempoEstimado: 0,
      temario: this.temario,
    }
    this.changeDetectorRef.detectChanges();
  }

  ngDoCheck(){
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
      this.prueba.id = this.nombre+ "_X" + + this.tipo + this.asignatura + Math.floor(Math.random() * 100000);
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
      let tiempoEstim = (palabras / 1.95)  + 4;  // 1,95 palabras por segundo + 4 segundos de resolución
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
      }
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
      let tiempoEstim = (palabras / 1.95)  + 5;  // 1,95 palabras por segundo + 6 segundos de resolución
      let obj = {
        pregunta: this.pregunta,
        correcta: this.respuesta,
        tiempoEstimado: tiempoEstim
      }
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

  salir(){
    this.changeDetectorRef.detectChanges();

    this.router.navigate(['/home']);
  }
}
