import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Array<any>;constructor(){
    this.product =[
      {ProductId :'1', ProductName: 'Bajaj', ProductQuantity: '10', ProductPrice:'60000'},
      {ProductId :'2', ProductName: 'Hero', ProductQuantity: '20', ProductPrice:'80000'},
      {ProductId :'3', ProductName: 'Honda', ProductQuantity: '30', ProductPrice:'100000'},
    ];
  
}
  

}
