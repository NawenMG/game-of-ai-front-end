import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamplesGraphqlService {
  constructor(private apollo: Apollo) {}

  // Metodo per ottenere gli elementi
  getItems(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetItems {
          items {
            id
            name
            description
          }
        }
      `
    }).pipe(map(result => result.data));
  }
}
