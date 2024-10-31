import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  private soapUrl = 'https://example.com/soap-endpoint'; // URL del servizio SOAP

  constructor(private http: HttpClient) {}

  // Metodo SOAP GET (simulato) - esempio per ottenere dati
  getItems(): Observable<any> {
    const soapBody = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:example">
        <soapenv:Header/>
        <soapenv:Body>
          <urn:GetItems/>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml',
      'SOAPAction': 'urn:GetItems'
    });

    return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
  }

  // Metodo SOAP POST - per aggiungere dati
  addItem(item: any): Observable<any> {
    const soapBody = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:example">
        <soapenv:Header/>
        <soapenv:Body>
          <urn:AddItem>
            <urn:name>${item.name}</urn:name>
            <urn:description>${item.description}</urn:description>
          </urn:AddItem>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml',
      'SOAPAction': 'urn:AddItem'
    });

    return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
  }

  // Metodo SOAP PUT - per aggiornare un elemento esistente
  updateItem(id: number, item: any): Observable<any> {
    const soapBody = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:example">
        <soapenv:Header/>
        <soapenv:Body>
          <urn:UpdateItem>
            <urn:id>${id}</urn:id>
            <urn:name>${item.name}</urn:name>
            <urn:description>${item.description}</urn:description>
          </urn:UpdateItem>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml',
      'SOAPAction': 'urn:UpdateItem'
    });

    return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
  }

  // Metodo SOAP DELETE - per eliminare un elemento
  deleteItem(id: number): Observable<any> {
    const soapBody = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:example">
        <soapenv:Header/>
        <soapenv:Body>
          <urn:DeleteItem>
            <urn:id>${id}</urn:id>
          </urn:DeleteItem>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml',
      'SOAPAction': 'urn:DeleteItem'
    });

    return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
  }
}
