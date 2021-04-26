import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: string = "";
  pass: string = "";

  constructor(private router: Router, public changeDetectorRef: ChangeDetectorRef) { }

  entrar() {
    this.changeDetectorRef.detectChanges();
    if (this.user && this.pass) {
      localStorage.setItem("tipo", "profesor");
      localStorage.setItem("user", this.user);

      this.user = "";
      this.pass = "";
      this.changeDetectorRef.detectChanges();

      this.router.navigate(['/home']);
    }
    else {
      alert("Faltan campos por completar");
    }
  }

}
