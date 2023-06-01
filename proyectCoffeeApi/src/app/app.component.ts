import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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
  dataUser: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.dataUser = user;
      } else {
        this.dataUser = null;
      }
    });
  }
  logOut(): void {
    this.afAuth.signOut()
      .then(() => {
        this.router.navigateByUrl('/home');
      
      })
      .catch(error => {
        console.log(error);

      });
  }





 
}
