import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPizzaAddComponent } from './build-pizza-add.component';

describe('BuildPizzaAddComponent', () => {
  let component: BuildPizzaAddComponent;
  let fixture: ComponentFixture<BuildPizzaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPizzaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildPizzaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
