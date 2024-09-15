// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Ajouter FormsModule ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {} // Injecter Router

  onSubmit(): void {
    if (this.email === 'admin@gmail.com') {
      this.router.navigate(['/dash']); // Redirection vers le tableau de bord
    } else {
      // Logique pour gérer les autres utilisateurs
      console.log('Invalid email');
    }
  }
}
