import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      stockQuantity: [0, Validators.required],
      description: [''],
      price: [0, Validators.required],
      color: ['#000000'],
      category: ['Tshirt'],
      available: [false],
      notAvailable: [false],
    });
  }

  onSubmit() {
    this.productService.addProduct(this.productForm.value).subscribe(
      response => {
        console.log('Produit ajouté avec succès', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout du produit', error);
        alert('Une erreur est survenue lors de l\'ajout du produit.');
      }
    );
  }
  
}