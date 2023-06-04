import { Component, Input } from '@angular/core';
import { CartService } from '../../core/cart.service';
import { Pizza } from 'src/app/core/models/pizza.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  @Input() item!: Pizza;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addItem(this.item);
  }
}
