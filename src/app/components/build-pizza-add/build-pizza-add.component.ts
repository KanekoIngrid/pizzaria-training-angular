import { Component, Input } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-build-pizza-add',
  templateUrl: './build-pizza-add.component.html',
  styleUrls: ['./build-pizza-add.component.scss']
})
export class BuildPizzaAddComponent {
  @Input() selectedSlices!: number;
  @Input() selectedFlavour1!: string;
  @Input() selectedFlavour2!: string;
  @Input() selectedBorda!: string;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    const item = {
      name: 'Custom Pizza',
      price: this.calculatePrice(),
      slices: this.selectedSlices,
      flavour1: this.selectedFlavour1,
      flavour2: this.selectedFlavour2,
      borda: this.selectedBorda
    };

    this.cartService.addItem(item);
  }

  private calculatePrice(): number {
    let basePrice: number;

    if (this.selectedSlices === 6) {
      basePrice = 35;
    } else if (this.selectedSlices === 8) {
      basePrice = 45;
    } else {
      basePrice = 0;
    }

    let price = basePrice;

    if (this.selectedBorda) {
      price += 5;
    }

    return price;
  }
}
