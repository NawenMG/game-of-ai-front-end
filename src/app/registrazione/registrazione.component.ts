import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profileImage: [null]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      // Logica per l'invio del modulo
    } else {
      console.log('Form non valido');
    }
  }
}
