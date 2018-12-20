import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Stores the value of the chained subscribe method.
  // The Product interface is used here to define the data that products can store.
  products: Product[];

  // Good practice to inject an instance of a service (i.e ProductService) into the constructor of a class.
  constructor(private _productService: ProductService) { }

  // Call the product service's getProducts() method.
  // Then chain the subscribe method to get the response (in JSON) which is stored inside the products class variable.
  ngOnInit() {
    this._productService.getProducts().subscribe(response => this.products = response);
  }
}
