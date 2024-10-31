import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.css'
})
export class ProblemsComponent {
  urlImg:string = "https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFjY291bnR8ZW58MHx8MHx8fDA%3D";

  options1 = ['Opzione 1A', 'Opzione 1B', 'Opzione 1C'];
  options2 = ['Opzione 2A', 'Opzione 2B', 'Opzione 2C'];
  options3 = ['Opzione 3A', 'Opzione 3B', 'Opzione 3C'];

  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedOption3: string = '';

   // Metodo per gestire il caricamento del file
   onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      console.log("File selezionato:", file.name);
      // Aggiungi qui la logica per leggere o elaborare il file
    }
  }

}
