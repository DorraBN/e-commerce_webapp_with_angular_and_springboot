import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut pour afficher le HomeComponent
  // Ajoutez d'autres routes ici si nécessaire
];