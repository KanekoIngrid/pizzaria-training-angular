import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoGlobalComponent } from './carrinho-global.component';

describe('CarrinhoGlobalComponent', () => {
  let component: CarrinhoGlobalComponent;
  let fixture: ComponentFixture<CarrinhoGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
