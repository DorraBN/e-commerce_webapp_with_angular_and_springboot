import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule,FormsModule],
  
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      stock: ['', Validators.required],
      disponible: [true, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  onSubmit() {
    if (this.productForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('nom', this.productForm.get('nom')?.value);
      formData.append('description', this.productForm.get('description')?.value);
      formData.append('categorie', this.productForm.get('categorie')?.value);
      formData.append('prix', this.productForm.get('prix')?.value);
      formData.append('stock', this.productForm.get('stock')?.value);
      formData.append('disponible', this.productForm.get('disponible')?.value);
      formData.append('image', this.selectedFile);  // Add file to FormData
  
      this.productService.addProduct(formData).subscribe(
        response => console.log('Product added successfully'),
        error => console.error('Error adding product', error)
      );
    }
  }
  
}