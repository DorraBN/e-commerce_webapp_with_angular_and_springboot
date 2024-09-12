import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importez CommonModule ici
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-dash-prod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-prod.component.html',
  styleUrls: ['./dash-prod.component.css']
})
export class DashProdComponent implements OnInit {
  products: Product[] = [];  // Déclarez la variable products

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, (error: any) => {
      console.error('Error fetching products:', error);
    });
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        // Rafraîchir la liste après suppression
        this.fetchProducts();
      }, (error: any) => {
        console.error('Error deleting product:', error);
      });
    }
  }

  viewProduct(product: Product): void {
    // Logique pour afficher les détails du produit
    alert(`Product: ${product.nom}, Description: ${product.description}`);
  }
}
