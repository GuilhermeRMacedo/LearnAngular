import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from './product.service';
 
@Component({
  //selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail: ';
  product: IProduct;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");   //"id" is passed as one string, + transform this 
                                                            // string into a number
      if(param){
        const id = +param;
        this.getProduct(id);
      }
  }

  getProduct(id: number){
    this.productService.getProductById$(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    )
  }

  onBack(): void {
    this.router.navigate(["/products"]);
  }

}
