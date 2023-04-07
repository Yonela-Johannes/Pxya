import { model, Schema, Types} from 'mongoose'
import { Product, ProductSchema } from './product.model';
import { OrderStatus } from './order.status';

export interface LatLng {
    lat: string;
    lng: string;
}

export const latLngSchema = new Schema<LatLng>(
    {
        lat: {type: String, required: true},
        lng: {type: String, required: true}
    }
)

export interface OrderItem{
    product: Product;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem> (
    {
        product: {type: ProductSchema, reuired: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true}
    }
);


export interface Order {
    id: string;
    items: OrderItem[];
    totalPrice: number;
    name: string;
    address: string;
    addressLatLng: LatLng;
    paymentId: string;
    createdAt: Date,
    updatedAt: Date;
    status: OrderStatus;
  }

  const OrderSchema = new Schema<Order>(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        addressLatLng: {type: latLngSchema, required: true},
        paymentId: {type: String},
        totalPrice: {type: Number, required: true},
        items: {type: [OrderItemSchema], required: true},
        status: {type: String, default: OrderStatus.NEW},
    },{
        timestamps: true,
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
    }
  )

  export const OrderModel = model('order', OrderSchema)
