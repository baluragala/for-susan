import { Component, OnInit } from "@angular/core";
import { Product } from "../product.interface";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  constructor() {}

  ngOnInit() {}

  addProduct(product: Product) {
    this.cart.push(product)
  }
}
