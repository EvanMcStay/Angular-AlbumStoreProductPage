import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductService {

  // Class variable used to define the path to the album JSON file.
  private _albumUrl = '../assets/album.json';

  // Class variable used to define the path to the products JSON file.
  private _productsUrl = '../assets/products.json';

  // Good practice to inject an instance of a service (i.e Http) into the constructor of a class.
  constructor(private _http: Http) { }

  // Return the result of a HTTP GET request mapped as JSON of type Album.
  getAlbum(id: number): Observable<Album> {
    // Issues an HTTP call which is then chained and mapped as JSON which is casted as type Album.
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  // Return the result of a HTTP GET request mapped as JSON of type Product.
  getProducts(): Observable<Product[]> {
    // Issues an HTTP call which is then chained and mapped as JSON which is casted as type Product.
    return this._http.get(this._productsUrl).map((response) => <Product[]>response.json());
  }
}
