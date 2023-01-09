import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsServices } from 'src/app/services/products.services';
import { Products } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product!: Products;
  constructor (activatedRoute: ActivatedRoute, productService: ProductsServices,
    private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        productService.getProductById(params.id).subscribe(serverProduct => {
          this.product = serverProduct
        })
      }
    })
  }
  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page')
  }
}
