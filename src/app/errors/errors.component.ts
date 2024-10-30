import { Component } from '@angular/core';

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [],
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
  errorTitle: string = 'Titolo dell\'errore';
  errorContent: string = 'Contenuto dell\'errore';

  constructor() {
  }
}
