import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../product.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{ 
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage: string;

    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.applyFilter(this._listFilter) : this.products;
    }

    constructor(private productService: ProductService){
    }

    onRatingClicked(message: string){
        this.pageTitle += ': ' + message
    }

    applyFilter(filterBy : string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(product => product.productName.toLocaleLowerCase().indexOf(filterBy)!=-1);
    }


    toggleShowImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }
}