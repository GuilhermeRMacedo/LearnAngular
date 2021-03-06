import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from './product.service';


@Component({
    // selector: 'pm-products',     //when using routes, we dont need a selector
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    } 
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = []

    constructor(private productService: ProductService) {
        //this.listFilter = 'cart';
    }    

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage
    }

    // (little problem) ngOnInit run after the constructor, so i set filteredProducts here, 
    // not in constructor.  
    ngOnInit(): void {
        console.log("In OnInit");
        this.productService.getProducts$().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }
}