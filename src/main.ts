import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
//import { ApolloProvider } from '@apollo/client/angular';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { LoadingComponent } from './app/loading/loading.component';
import { ErrorsComponent } from './app/errors/errors.component';
import { LoginComponent } from './app/login/login.component';
import { RegistrazioneComponent } from './app/registrazione/registrazione.component';
import { ProblemsComponent } from './app/problems/problems.component';
import { ProfileComponent } from './app/profile/profile.component';
import { ResultsComponent } from './app/results/results.component';

// Definizione delle rotte
const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'errors', component: ErrorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'problems', component: ProblemsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'results', component: ResultsComponent },
];

// Configurazione del client Apollo
//const httpClient = new HttpClient();
const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql', // Sostituisci con il tuo endpoint GraphQL
  cache: new InMemoryCache(),
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), // Importa il modulo HttpClient
    { provide: ApolloClient, useValue: client }, // Fornisci il client Apollo
  ],
})
.catch(err => console.error(err));
