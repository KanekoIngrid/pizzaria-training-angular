import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Pizza[] = [];
  totalPrice = 0;

  addItem(item: Pizza): void {
    this.items.push(item);
    this.calculateTotalPrice();
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.calculateTotalPrice();
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.items.reduce(
      (total, item) => total + item.price, //funcao de callback aaaaaaaa
      0
    );
  }
}
