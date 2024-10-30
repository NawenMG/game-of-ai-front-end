import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  urlImg: string = "https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFjY291bnR8ZW58MHx8MHx8fDA%3D";

  // Dati per gli accordion
  accordions = [
    { title: 'Accordion 1', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 2', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 3', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 4', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 5', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 6', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 7', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 8', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false },
    { title: 'Accordion 9', details: ['Campo 1: Dettaglio 1', 'Campo 2: Dettaglio 2', 'Campo 3: Dettaglio 3'], active: false }
  ];

  toggleAccordion(index: number) {
    // Chiudi tutti gli accordion e apri solo quello selezionato
    this.accordions.forEach((accordion, i) => {
      accordion.active = (i === index) ? !accordion.active : false;
    });
  }
}
