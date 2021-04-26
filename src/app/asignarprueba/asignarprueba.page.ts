import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignarprueba',
  templateUrl: './asignarprueba.page.html',
  styleUrls: ['./asignarprueba.page.scss'],
})
export class AsignarpruebaPage implements OnInit {
  profesor = localStorage.getItem("user");
  pruebas = JSON.parse(localStorage.getItem("pruebas")) || [];
  rowSelection = 'single';
  gridApi;

  show = false;
  tarea = "";
  gruposSelect;
  idSelect = "";

  abierto = false;
  cerrado = false;
  finalizado = false;

  rowData  = _.filter(this.pruebas, {profesor: this.profesor}) || [];
  columnDefs = [
    { headerName: 'Nombre de la Prueba', field: 'titulo', sortable: true, filter: true },
    { headerName: 'Asignatura', field: 'asignatura', sortable: true, filter: true },
    { headerName: 'Grupos Asignados', field: 'grupos', sortable: true, filter: true },
    { headerName: 'Estado', field: 'abierta', sortable: true, filter: true},
  ];
  grupo = [];

  constructor(public changeDetectorRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    
  }


  onFirstDataRendered(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  onSelectionChanged(selected) {
    this.tarea= "";
    this.gruposSelect= [];
    this.idSelect= "";
    this.grupo = [];

    let selectedRows = selected.api.getSelectedRows();

    this.tarea= selectedRows[0].titulo;
    this.gruposSelect= selectedRows[0].grupos;
    this.idSelect= selectedRows[0].id;
    this.grupo = this.gruposSelect;
    this.show = true;

    this.abierto = false;
    this.cerrado = false;
    this.finalizado = false;

    if(selectedRows[0].abierta == "ABIERTA"){
      this.cerrado = true;
      this.finalizado = true;

    }
    else if(selectedRows[0].abierta == "CERRADA"){
      this.abierto = true;
      this.finalizado = true;

    }
    else if(selectedRows[0].abierta == "FINALIZADA"){
      this.abierto = true;
      this.cerrado = true;

    }
    this.changeDetectorRef.detectChanges();

  }
  asignar(){
    if(this.idSelect){
      
      let index = _.findIndex(this.pruebas, {id: this.idSelect});
      let obj = _.find(this.pruebas, {id: this.idSelect});

      obj.grupos = [];
      if(this.grupo){
        for(let item of this.grupo){
          obj.grupos.push(item)
        }
      }
      this.pruebas.splice(index, 1, obj);
      localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
      alert("Tarea Asignada Correctamente");
      this.gridApi.redrawRows();
      this.rowData = this.pruebas;
      this.changeDetectorRef.detectChanges();

    }
    else{
      alert("Selecciona en la lista que tarea quieres asignar")
    }
  }

  salir(){
    this.router.navigate(['/home']);
  }

  ngDoCheck(){
    this.changeDetectorRef.detectChanges();
  }
  
  delete(){
    if(this.idSelect){
      let id = this.idSelect;

      _.remove(this.pruebas, function(e) {
        return e.id == id
      });
      this.changeDetectorRef.detectChanges();
      localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
      alert("Tarea Eliminada Correctamente");
      this.gridApi.redrawRows();
      this.rowData = this.pruebas;

      let alumnos = JSON.parse(localStorage.getItem("alumnos"));
      for(let item of alumnos){
        let pruebaAl = JSON.parse(localStorage.getItem("completadas_"+item));
        if(pruebaAl){
          _.remove(pruebaAl, function(e) {
            return e == id
          });
          localStorage.setItem("completadas_"+item, JSON.stringify(pruebaAl));
        }
      }

      this.changeDetectorRef.detectChanges();

    }
    else{
      alert("Selecciona en la lista que tarea quieres asignar")
    }
  }

  end(){
    if(this.idSelect){
      
      let index = _.findIndex(this.pruebas, {id: this.idSelect});
      let obj = _.find(this.pruebas, {id: this.idSelect});

      obj.abierta = "FINALIZADA";
      this.pruebas.splice(index, 1, obj);
      localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
      alert("Tarea Finalizada Correctamente");
      this.gridApi.redrawRows();
      this.rowData = this.pruebas;

      this.abierto = true;
      this.cerrado = true;
      this.finalizado = false;

      this.changeDetectorRef.detectChanges();

    }
    else{
      alert("Selecciona en la lista que tarea quieres asignar")
    }
  }

  close(){
    if(this.idSelect){
      
      let index = _.findIndex(this.pruebas, {id: this.idSelect});
      let obj = _.find(this.pruebas, {id: this.idSelect});

      obj.abierta = "CERRADA";
      this.pruebas.splice(index, 1, obj);
      localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
      alert("Tarea Cerrada Correctamente");
      this.gridApi.redrawRows();
      this.rowData = this.pruebas;

      this.abierto = true;
      this.cerrado = false;
      this.finalizado = true;
      
      this.changeDetectorRef.detectChanges();

    }
    else{
      alert("Selecciona en la lista que tarea quieres asignar")
    }
  }

  open(){
    if(this.idSelect){
      
      let index = _.findIndex(this.pruebas, {id: this.idSelect});
      let obj = _.find(this.pruebas, {id: this.idSelect});

      obj.abierta = "ABIERTA";
      this.pruebas.splice(index, 1, obj);
      localStorage.setItem("pruebas", JSON.stringify(this.pruebas));
      alert("Tarea Abierta Correctamente");
      this.gridApi.redrawRows();
      this.rowData = this.pruebas;

      this.abierto = false;
      this.cerrado = true;
      this.finalizado = true;

      this.changeDetectorRef.detectChanges();

    }
    else{
      alert("Selecciona en la lista que tarea quieres asignar")
    }
  }

}
