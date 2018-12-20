import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  // Stores the value of the chained subscribe method.
  // The Album interface is used here to define the data that albumInfo can store.
  albumInfo: Album;

  // Good practice to inject an instance of a service (i.e ProductService) into the constructor of a class.
  constructor(private _productService: ProductService) { }

  // Call the product service's getAlbum() method and pass in 1.
  // Then chain the subscribe method to get the response (in JSON) which is stored inside the albumInfo class variable.
  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }
}
