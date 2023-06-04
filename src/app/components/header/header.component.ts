import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCarrinhoGlobalVisible: boolean = false;

  toggleCarrinhoGlobal() {
    this.isCarrinhoGlobalVisible = !this.isCarrinhoGlobalVisible;
  }
}
