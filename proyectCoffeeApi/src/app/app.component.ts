import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WaifuLar';
  
  isWhiteBackground = true; // Variable para controlar el color de fondo de la barra de navegación

  // Método para cambiar a color blanco
  setWhiteBackground() {
    this.isWhiteBackground = true;
  }

  // Método para cambiar a color gris
  setGrayBackground() {
    this.isWhiteBackground = false;
  }
}
