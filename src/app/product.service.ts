import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  // Good practice to inject an instance of a service (i.e Http and Response) into the constructor of a class.
  constructor(private _http: Http) { }

  // Return the result of a HTTP GET request mapped as JSON.
  getAlbum(id: number) {
    // Issues an HTTP call which is then chained and mapped as JSON.
    return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
