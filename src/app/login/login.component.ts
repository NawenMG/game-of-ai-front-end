import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormBuilder e Validators

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Aggiungi CommonModule e ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Definisci il FormGroup e altre proprietà/metodi qui
  loginForm: FormGroup; // Definisci la variabile loginForm

  constructor(private fb: FormBuilder) {
    // Inizializza il FormGroup
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo email
      password: ['', [Validators.required, Validators.minLength(6)]] // Campo password
    });
  }

  onSubmit() {
    // Gestisci la logica di invio del modulo qui
    if (this.loginForm.valid) {
      console.log('Modulo inviato:', this.loginForm.value);
    }
  }
}
