import { Products } from "./Products"

export class CartItem{
  constructor(public product: Products){ }
  quantity: number = 1;
  price: number  = this.product.price
}
