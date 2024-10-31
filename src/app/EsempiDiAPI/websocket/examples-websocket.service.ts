import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    // Inizializza la connessione WebSocket
    this.socket$ = new WebSocketSubject('wss://example.com/websocket'); // Cambia l'URL con il tuo server WebSocket
  }

  // Metodo per inviare messaggi
  sendMessage(message: any): void {
    this.socket$.next(message);
  }

  // Metodo per ottenere messaggi dal server
  getMessages(): Observable<any> {
    return this.socket$.asObservable();
  }

  // Metodo per chiudere la connessione
  closeConnection(): void {
    this.socket$.complete();
  }
}
