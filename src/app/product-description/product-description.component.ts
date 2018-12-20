import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  // Stores the value of the chained subscribe method
  albumInfo;

  // Good practice to inject an instance of a service (i.e ProductService) into the constructor of a class.
  constructor(private _productService: ProductService) { }

  // Call the product service's getAlbum() method and pass in 1.
  // Then chain the subscribe method to get the response (in JSON) which is stored inside the albumInfo class variable.
  // ngOnInit() {
  //   this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  // }

    ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }
}
