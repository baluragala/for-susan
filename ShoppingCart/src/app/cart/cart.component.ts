import { Component, OnInit } from "@angular/core";
import { Product } from "../product.interface";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  totalPrice:number = 0;

  constructor() {}

  ngOnInit() {}

  addProduct(product: Product) {
    this.cart.push(product)
    this.totalPrice += product.price;
  }
}
