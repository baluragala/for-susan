import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
import { Product } from "../product.interface";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: "iphone", price: 60000.1294, isAddedToCart: false },
    { id: 2, name: "samsung galaxy s8", price: 400, isAddedToCart: false },
    { id: 3, name: "oppo F3", price: 300, isAddedToCart: false }
  ];

  @Output() onProductAddToCart: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onAddToCartEvent(product: Product) {
    this.onProductAddToCart.emit(product);
    const index = this.products.findIndex(p => p.id == product.id);
    // this.products = [
    //   { id: 1, name: "iphone", price: 600, isAddedToCart: false },
    //   { id: 2, name: "samsung galaxy s8", price: 400, isAddedToCart: false },
    //   { id: 3, name: "oppo F3", price: 300, isAddedToCart: false }
    // ];
    this.products[index].isAddedToCart = true;
    //this.changeDetectorRef.markForCheck();
  }
}
