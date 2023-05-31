import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginUser: FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {
    this.loginUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);

        localStorage.setItem('user', JSON.stringify(userCredential.user));

        // Verificar si el usuario está autenticado antes de redirigir
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['/home']); // Redireccionar solo si está autenticado
          } else {
            console.log('El usuario no está autenticado');
            // Maneja el caso cuando el usuario no está autenticado
          }
        });
      })
      .catch((error) => {
        console.log(error);
        // Maneja el error del inicio de sesión
      });

    console.log(email, password);
  }

  firebaseError(code: string): string {
    switch (code) {
      case 'auth/wrong-password':
        return 'Invalid password';
      case 'auth/user-not-found':
        return 'User not found';
      case 'auth/invalid-email':
        return 'Invalid email';
      default:
        return 'Unknown error';
    }
  }
}
