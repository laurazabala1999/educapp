import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-crearprueba',
  templateUrl: './crearprueba.page.html',
  styleUrls: ['./crearprueba.page.scss'],
})
export class CrearpruebaPage implements OnInit {
  prueba;
  pruebas;

  inicio = true;
  crearmi = false;
  asignarmi = false;
  temarioCustom = "";
  tipoCustom = "";
  grupoCustom = "";
  pizarra = [];

  verpruebacustom = false;
  tipotestcustom = false;
  buttonscustom = true;
  constructor(private router: Router, public changeDetectorRef: ChangeDetectorRef) { }
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

  temas = ["Sumas y restas con llevadas", "Multiplicar por tres cifras", "División", "Cálculo con varias operaciones", "Números Decimales", "Sumas, restas y multiplicaciones con decimales", "Divisiones con Decimales", "Mínimo común múltiplo y máximo común divisor", "Números Primos", "Fracciones"]

  temario = "";

  estados = ["ABIERTA", "CERRADA"]
  estado = "ABIERTA";

  ejercicioscustom = [
    {
      "abierta": "ABIERTA",
      "asignatura": "MATEMÁTICAS",
      "entregas": [],
      "grupos": ["6ºA"],
      "id": "SUMA Y RESTA CON LLEVADAS COMPLETAR_DEFAULT",
      "mediaNota": 0,
      "mediaTiempo": 0,
      "preguntas": [
          {
              "pregunta": "¿CUÁNTO ES LA SUMA DE 123 + 29?",
              "correcta": "152",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA RESTA DE 24 - 12?",
              "correcta": "12",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA SUMA DE 28 + 39?",
              "correcta": "67",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA SUMA DE 88 + 19?",
              "correcta": "107",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA RESTA DE 19 - 11?",
              "correcta": "8",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA SUMA DE 111 + 11?",
              "correcta": "122",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA SUMA DE 56 + 99?",
              "correcta": "155",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA RESTA DE 45 - 6?",
              "correcta": "39",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA RESTA DE 154 - 45?",
              "correcta": "109",
              "tiempoEstimado": 20
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES LA SUMA DE 23 + 9?",
              "correcta": "32",
              "tiempoEstimado": 20
  
          }
          
      ],
      "profesor": "LAURA",
      "temario": "Sumas y restas con llevadas",
      "tiempoEstimado": 200,
      "tipo": "COMPLETAR",
      "titulo": "SUMAS Y RESTAS CON LLEVADAS COMPLETAR"
  },
  
  
  
  {
      "abierta": "ABIERTA",
      "asignatura": "MATEMÁTICAS",
      "entregas": [],
      "grupos": ["6ºA"],
      "id": "MULTIPLICAR POR TRES CIFRAS COMPLETAR_DEFAULT",
      "mediaNota": 0,
      "mediaTiempo": 0,
      "preguntas": [
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 123 X 290?",
              "correcta": "35670",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 240 X 120?",
              "correcta": "28800",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 280 X 390?",
              "correcta": "109200",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 880 X 190?",
              "correcta": "167200",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 190 X 110?",
              "correcta": "20900",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 111 X 110?",
              "correcta": "12210",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 560 X 990?",
              "correcta": "554400",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 450 X 600?",
              "correcta": "270000",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 154 X 450?",
              "correcta": "69300",
              "tiempoEstimado": 100
  
          }, 
          {
              "pregunta": "¿CUÁNTO ES EL RESULTADO DE LA MULTIPLICACIÓN DE 230 X 900?",
              "correcta": "207000",
              "tiempoEstimado": 100
  
          }
          
      ],
      "profesor": "LAURA",
      "temario": "Multiplicar por tres cifras",
      "tiempoEstimado": 1000,
      "tipo": "COMPLETAR",
      "titulo": "MULTIPLICAR POR TRES CIFRAS COMPLETAR"
  }]

  ngOnInit() {

    this.inicio = true;
    this.crearmi = false;
    this.asignarmi = false;

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
    }
    this.changeDetectorRef.detectChanges();
  }

  ngDoCheck() {
    this.changeDetectorRef.detectChanges();
  }



  crearyo() {
    this.crearmi = true;
    this.asignarmi = false;
    this.inicio = false;
    this.changeDetectorRef.detectChanges();

  }

  changeName() {
    if (this.tipoCustom && this.temarioCustom && this.grupoCustom) {
      this.buttonscustom = false;

    }
    else {
      this.buttonscustom = true;
    }
    this.changeDetectorRef.detectChanges();

  }

  regeresar() {
    this.inicio = true;
    this.crearmi = false;
    this.asignarmi = false;
    this.changeDetectorRef.detectChanges();

  }
  custom() {
    this.crearmi = false;
    this.asignarmi = true;
    this.inicio = false;
    this.changeDetectorRef.detectChanges();


  }

  volverAlPanel() {
    this.verpruebacustom = false;
    this.changeDetectorRef.detectChanges();

  }

  verprueba() {
    let pruebacustom = _.find(this.ejercicioscustom, { temario: this.temarioCustom, tipo: this.tipoCustom });

    if (this.tipoCustom == "TEST") {
      this.tipotestcustom = true;
    }
    else {
      this.tipotestcustom = false;

    }
    if (pruebacustom) {
      this.pizarra = [];
      let numero = 1;

      for (let pregunta of pruebacustom.preguntas) {

        let obj = {
          numero: numero,
          correcta: pregunta.correcta,
          pregunta: pregunta.pregunta,
          a: pregunta.respuestas ? pregunta.respuestas[0].texto : "",
          b: pregunta.respuestas ? pregunta.respuestas[1].texto : "",
          c: pregunta.respuestas ? pregunta.respuestas[2].texto : "",
          d: pregunta.respuestas ? pregunta.respuestas[3].texto : "",
          respuesta: pregunta.respuesta,
        }

        this.pizarra.push(obj);
        numero++;
      }

      this.verpruebacustom = true;
    }
    else {
      alert("No tienes ninguna prueba que cumpla estos criterios, crea una desde el panel de creación de tareas.")
    }
    this.changeDetectorRef.detectChanges();

  }

  enviarcustom() {
    let pruebacustom = _.find(this.ejercicioscustom, { temario: this.temarioCustom, tipo: this.tipoCustom });
    if (pruebacustom) {

      pruebacustom.profesor = localStorage.getItem("user");
      this.pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];

      let duplicada = _.find(this.pruebas, { id: pruebacustom.id });
      if (duplicada) {
        alert("Este grupo ya ha realizado esta tarea");
      }
      else {
        this.pruebas.push(pruebacustom);
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

        this.changeDetectorRef.detectChanges();

        alert("Tarea Enviada Correctamente");
        this.salir();
      }
    }
    else {
      alert("No tienes ninguna prueba que cumpla estos criterios, crea una desde el panel de creación de tareas.")
    }

    this.changeDetectorRef.detectChanges();

  }
  empezar() {
    if (this.nombre && this.tipo && this.asignatura) {
      localStorage.setItem("tipoprueba", this.tipo);
      this.crear = true;
      this.prueba.id = this.nombre + "_X" + + this.tipo + this.asignatura + Math.floor(Math.random() * 100000);
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
      let tiempoEstim = (palabras / 1.95) + 15;  // 1,95 palabras por segundo + 15 segundos de resolución
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
      let tiempoEstim = (palabras / 1.95) + 5;  // 1,95 palabras por segundo + 6 segundos de resolución
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

  salir() {
    this.changeDetectorRef.detectChanges();

    this.router.navigate(['/home']);
  }
}
