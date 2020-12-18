import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
  // How comes I can call ngOnInit in this component without importing it?
  ngOnInit() {
    console.log(products[2]);
    fetch('https://jsonplaceholder.typicode.com/users/2')
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
  ngOnChange() {
    console.log('change')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/