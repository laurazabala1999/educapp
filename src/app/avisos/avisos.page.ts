import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
})
export class AvisosPage implements OnInit {

  user = localStorage.getItem("user");
  pruebaStorageMsg = JSON.parse(localStorage.getItem("Msg_"+ this.user)) || [];
  lista = true;
  detalle = false;
  modalData: any = {};
  constructor(public changeDetectorRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
  }

  
  salir() {
    this.router.navigate(['/home']);
  }

  abrir(msg) {
    this.modalData = msg;
    this.lista = false;
    this.detalle = true;

    let index = _.findIndex(this.pruebaStorageMsg, {id: msg.id});
    let obj = _.find(this.pruebaStorageMsg, {id: msg.id});

    obj.leido = true;
    this.pruebaStorageMsg.splice(index, 1, obj);
    localStorage.setItem("Msg_" + this.user, JSON.stringify(this.pruebaStorageMsg));

    this.changeDetectorRef.detectChanges();
  }
  cerrar(){
    this.lista = true;
    this.detalle = false;
    this.changeDetectorRef.detectChanges();
  }

  eliminar(msg) {

    _.remove(this.pruebaStorageMsg, function(e) {
      return e.id == msg.id
    });
    this.changeDetectorRef.detectChanges();
    localStorage.setItem("Msg_" + this.user, JSON.stringify(this.pruebaStorageMsg));
    this.changeDetectorRef.detectChanges();

  }

}
