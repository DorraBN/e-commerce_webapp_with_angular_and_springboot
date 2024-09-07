import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'dash', component: DashboardComponent },
 // Route par défaut pour afficher le HomeComponent
  // Ajoutez d'autres routes ici si nécessaire
];