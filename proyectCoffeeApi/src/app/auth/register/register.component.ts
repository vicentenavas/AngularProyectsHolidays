import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {
    this.registerUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  ngOnInit(): void {

  }

  register() {
    const name = this.registerUser.value.name;
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;

    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.router.navigate(['/Login']);
     

    }).catch((error) => {
      console.log(error)
    
    })
  }

  firebaseError(code: String) {

    switch (code) {
      case 'auth/email-already-in-use':
        return 'usuario ya existente, porfavor ingrese o use otro correo';
      case 'auth/weak-password':
        return 'Weak password, use 8 characters or more :)';
      case 'auth/invalid-email':
        return 'invalid email';
      default:
        return 'Unknown error'

    }

  }

}