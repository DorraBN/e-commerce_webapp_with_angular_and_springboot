import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map operator
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8082/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(products => this.addImageUrl(products))
    );
  }

  private addImageUrl(products: Product[]): Product[] {
    return products.map(product => ({
        ...product,
        url_image: `http://localhost:8082${product.image}` // Correctly set url_image using product.image
    }));
}


  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  addProduct(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData);  // No need for content-type 'application/json' when sending FormData
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product, { headers });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
