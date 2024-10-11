import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  product!: Product;
  id!: number;
  constructor(private route:Router,private productService:ProductService , private router:ActivatedRoute){}
  ngOnInit(): void {
    this.product=new Product(); 
    this.id=this.router.snapshot.params['id'];
    this.productService.getProductById(this.id)
    .subscribe(data=>{
      console.log(data)
      this.product=data;
    },error=>console.log(error));}
  updatdproduct(){
    this.productService.updateProduct(this.id,this.product).subscribe(data=>{
      console.log(data);
      this.product=new Product();
      this.goToList();

    },
  error=>console.log(error));
  }

  goToList(){
    this.route.navigate(['/']);
  }
  onSubmit(){
console.log(this.product);
this.updatdproduct();
  }

}