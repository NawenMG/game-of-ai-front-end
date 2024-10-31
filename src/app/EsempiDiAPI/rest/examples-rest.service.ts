import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ExamplesRestService {
  private apiUrl = 'https://api.example.com/items'; // URL dell'API

  constructor() {}

  // Metodo GET: Ottenere una lista di elementi
  async getItems(): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Errore nel recupero degli elementi:', error);
      throw error;
    }
  }

  // Metodo POST: Creare un nuovo elemento
  async addItem(item: any): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, item, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('Errore nell\'aggiunta dell\'elemento:', error);
      throw error;
    }
  }

  // Metodo PUT: Aggiornare un elemento esistente
  async updateItem(id: number, item: any): Promise<any> {
    try {
      const response = await axios.put(`${this.apiUrl}/${id}`, item, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('Errore nell\'aggiornamento dell\'elemento:', error);
      throw error;
    }
  }

  // Metodo DELETE: Eliminare un elemento
  async deleteItem(id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Errore nella cancellazione dell\'elemento:', error);
      throw error;
    }
  }
}
