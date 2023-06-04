import { Component } from '@angular/core';


@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.scss']
})

export class BuildPizzaComponent {
  selectedSlices!: number;
  selectedFlavour1!: string;
  selectedFlavour2!: string;
  selectedBorda!: string;
}
