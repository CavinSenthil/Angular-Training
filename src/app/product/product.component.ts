import { Component } from '@angular/core';
import { Product } from '../modals/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


  productName:string = "Cake";
  productPrice:number = 100;

  inputValue = "Testst"
  
  product:Product = {productName: 'Cake', price: 100 , stockCount: 1, discount : 10, imgUrl:'test' }




  onNameChange( event: any) {
    console.log(event)
    this.inputValue = "Assigning from method"
    }
}
