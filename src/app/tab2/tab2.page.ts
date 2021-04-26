import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  grupo: string = "";
  nombre1: string = "";

  grupo1: boolean = false;
  invalido: boolean = true;
  usuarios = [];
  constructor(private router: Router, public changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.nombre1 = "";
    this.grupo = "";
    this.usuarios = JSON.parse(localStorage.getItem("alumnos"));
    this.changeDetectorRef.detectChanges();

  }
  change(){
    this.nombre1 = "";
    if(this.grupo == "6ºA"){
      this.grupo1=true;
      
    }
    else{
      this.grupo1=false;
    }
    this.changeDetectorRef.detectChanges();

  }

  changeName(){
    if(this.nombre1){
      this.invalido = false;
    }
    else{
      this.invalido = true;
    }
    this.changeDetectorRef.detectChanges();

  }

  ngDoCheck(){
    this.usuarios = JSON.parse(localStorage.getItem("alumnos"));
    this.changeDetectorRef.detectChanges();
  }

  entrar(){
    this.changeDetectorRef.detectChanges();
    localStorage.setItem("tipo", "alumno");
    localStorage.setItem("user", this.nombre1);
    localStorage.setItem("grupo", this.grupo);
    this.router.navigate(['/home']);
  }

}
