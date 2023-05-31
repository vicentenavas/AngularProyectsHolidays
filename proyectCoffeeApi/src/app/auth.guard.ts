import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          resolve(true); // Usuario autenticado, permite el acceso
        } else {
          this.router.navigate(['/login']); // Usuario no autenticado, redirige al componente de inicio de sesión
          resolve(false);
        }
      });
    });
  }
}
