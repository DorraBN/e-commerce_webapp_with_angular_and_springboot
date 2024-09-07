import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'dash', component: DashboardComponent },
  { path: 'add', component: AddComponent },
  { path: 'reg', component: RegisterComponent },
 // Route par défaut pour afficher le HomeComponent
  // Ajoutez d'autres routes ici si nécessaire
];