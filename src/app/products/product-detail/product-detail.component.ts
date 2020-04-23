import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    let id= +this.route.snapshot.paramMap.get('id');// + is used to typecast to number from string
    this.pageTitle+= ` : ${id}`
    this.product = {
        "productId": id, 
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
