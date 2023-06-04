import { Component } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-carrinho-global',
  templateUrl: './carrinho-global.component.html',
  styleUrls: ['./carrinho-global.component.scss']
})
export class CarrinhoGlobalComponent {
  constructor(public cartService: CartService) {}

  removeItem(index: number): void {
    this.cartService.removeItem(index);
  }
}
