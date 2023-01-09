import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsServices } from 'src/app/services/products.services';
import { Products } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Products[] = []

  constructor(private productService: ProductsServices, activatedRoute: ActivatedRoute){
    let productsObservable: Observable<Products[]>
    activatedRoute.params.subscribe((params) => {
      if(params.searchProduct){
        productsObservable = this.productService.getAllProductsBySearch(params.searchProduct)
      }else{
        productsObservable = this.productService.getAll()
      }
      productsObservable.subscribe((serverProducts) => {
        this.products = serverProducts;
      })
    })
  }

  ngOnInit(): void{}
}
