import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule], // Ensure ReactiveFormsModule is imported here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      this.userService.createUser(user).subscribe({
        next: (data) => {
          console.log('User created successfully', data);
          this.registerForm.reset();
        },
        error: (error) => {
          console.error('Error creating user', error);
        }
      });
    }
  }
}
