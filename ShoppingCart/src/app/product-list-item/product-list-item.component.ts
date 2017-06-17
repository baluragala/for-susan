import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../product.interface';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() product:Product;
  @Output() onAddToCart:EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAddToCartClicked(product:Product){
    this.onAddToCart.emit(product);
  }

}
