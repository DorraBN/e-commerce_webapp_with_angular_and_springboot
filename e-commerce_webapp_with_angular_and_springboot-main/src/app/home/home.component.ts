import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';  // Importez CommonModule ici
import { ProductService } from '../services/product.service';
import { Product } from '../product';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
  

  likeProduct(product: Product): void {
    console.log('Liked product:', product);
    // Ajoutez votre logique de like ici (par exemple, envoyer une requête au serveur)
  }
  
  addToCart(product: Product): void {
    console.log('Added to cart:', product);
    // Ajoutez votre logique d'ajout au panier ici (par exemple
  }  


  imagePath1: string = "../../assets/a4.webp";
  imagePath2: string = 'assets/a2.jpeg';}

