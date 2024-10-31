import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorsComponent } from './errors/errors.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from "./registrazione/registrazione.component";
import { ResultsComponent } from "./results/results.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProblemsComponent } from "./problems/problems.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    ErrorsComponent,
    LoadingComponent,
    LoginComponent,
    RegistrazioneComponent,
    ResultsComponent,
    ProfileComponent,
    ProblemsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'game_of_ai';
}
