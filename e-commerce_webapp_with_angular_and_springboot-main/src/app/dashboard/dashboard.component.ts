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



  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        // Filtrer la liste des utilisateurs pour exclure l'utilisateur supprimé
        this.users = this.users.filter(user => user.id !== userId);
        console.log('User deleted:', userId);
      }, (error: any) => {
        console.error('Error deleting user:', error);
      });
    }}
    viewUser(userId: number) {
    
      this.userService.getUserById(userId).subscribe(user => {
        console.log('View user:', user);
      }, (error: any) => {
        console.error('Error fetching user details:', error);
      });
    }
}
