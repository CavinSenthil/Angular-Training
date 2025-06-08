import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {

  products: Product[] = [

  {
    productName: 'Tres Leches',
    price: 800,
    stockCount: 2,
    imgUrl: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-09-tres-leches-cake%2Ftres-leches-cake-3246-horizontal_74ed2a-crop',
    description: 'Yummy yummy'
  },

{
    productName: 'Blueberry Cheesecake',
    price: 600,
    stockCount: 5,
    imgUrl: 'https://www.mybakingaddiction.com/wp-content/uploads/2022/08/plated-blueberry-cheesecake-hero.jpg',
    description: 'Yummy yummy'
  },

{
    productName: 'Chocolate Cake',
    price: 450,
    stockCount: 20,
    imgUrl: 'https://www.allrecipes.com/thmb/zb8muWE6CQ5XjclY_LQ2i-QwxN0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17981-one-bowl-chocolate-cake-iii-DDMFS-beauty-4x3-d2e182087e4b42a3a281a0a355ea60d1.jpg',
    description: 'Yummy yummy'
  },

{
    productName: 'Strawberry Cheesecake',
    price: 650,
    stockCount: 15,
    imgUrl: 'https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11.jpg',
    description: 'Yummy yummy'
  }
];



}
