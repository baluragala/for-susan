import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from '../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[
    {id:1,name:'iphone',price:600},
    {id:2,name:'samsun galaxy s8',price:400},
    {id:3,name:'oppo F3',price:300},
    {id:4,name:'Moto G',price:500},
    {id:5,name:'LG Choclate',price:250}
  ];

  @Output() onProductAddToCart:EventEmitter<Product>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToCartEvent(product:Product){
    this.onProductAddToCart.emit(product);
  }
}
