import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Product } from '../modals/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() productOutput = new EventEmitter<Product>();

productOutputEvent(product: Product) {
  console.log('Clicked' + this.product.productName);
}

}
