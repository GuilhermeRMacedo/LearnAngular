import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';

@Component({
  //selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail: ';
  products: IProduct[];

  constructor() { }

  ngOnInit() {
  }

}
