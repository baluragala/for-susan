import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import {Product} from '../product.interface';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements DoCheck {

  @Input() product:Product;
  @Output() onAddToCart:EventEmitter<Product> = new EventEmitter();
  currentStyle:any;
  currentClass:any;

  addToCart = {
    'border':'1px solid green',
    'margin': '5px',
    'padding': '10px'
  }

  removeFromCart = {
    'border':'2px solid red',
    'margin': '5px',
    'padding': '10px'
  }
  constructor() { }

  ngDoCheck() {
    console.log(this.product);
     //this.currentStyle = this.product.isAddedToCart == true ? this.removeFromCart : this.addToCart;
     this.currentClass = this.product.isAddedToCart == true ? 'remove' : 'add'
     console.log(this.currentStyle)
  }

  onAddToCartClicked(product:Product){
    this.onAddToCart.emit(product);
   
  }

}
