import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importez CommonModule ici
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule]  // Ajoutez CommonModule ici
})
export class DashboardComponent implements OnInit {
  users: User[] = [];  // Déclarez la variable users

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Appel du service pour récupérer les utilisateurs
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    }, (error: any) => {
      console.error('Error fetching users:', error);
    });
  }

  viewUser(user: any) {
    // Implémentez la logique pour afficher les détails de l'utilisateur
    console.log('View user:', user);
  }

  deleteUser(userId: number) {
    // Implémentez la logique pour supprimer l'utilisateur
    console.log('Delete user with ID:', userId);
  }
}
