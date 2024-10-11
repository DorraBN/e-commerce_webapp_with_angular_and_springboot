import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importez CommonModule ici
import { ProductService } from '../services/product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-prod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-prod.component.html',
  styleUrls: ['./dash-prod.component.css']
})
export class DashProdComponent implements OnInit {
  products: Product[] = [];  // Déclarez la variable products

  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products); // Vérifiez les données des produits ici
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

  updateProduct(id: number) {
    this.router.navigate(['contact',id]); 
    console.log('update');
  }


  viewProduct(id: number,product:Product): void {
    // Logique pour afficher les détails du produit
    this.productService.getProductById(id);
    alert(`Product: ${product.nom}, Description: ${product.description},Categorie: ${product.categorie}`);
  }
}
