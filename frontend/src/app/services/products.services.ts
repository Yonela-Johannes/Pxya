import { Injectable } from '@angular/core';
import { Products } from '../shared/models/Products';
import { products } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Products[]>{
    return this.http.get<Products[]>(PRODUCTS_URL);
  }

  getAllProductsBySearch(search:string){
    return this.http.get<Products[]>(PRODUCTS_BY_SEARCH_URL + search)
  }

  getProductById(productId:string): Observable<Products>{
    return this.http.get<Products>(PRODUCTS_BY_ID_URL + productId)
  }
}
