import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numero1 = 0;
  numero2 = 0;
  operacion = "";
  resultado = 0;
  dameResultado() {
    if (this.operacion == "+") {
      this.resultado =  Number(this.numero1) + Number(this.numero2);
    } else {
      this.resultado = this.numero1 - this.numero2;
    }
    return this.resultado.toString();

  }
}
