import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductsComponent } from './gestion-products.component';

describe('GestionProductsComponent', () => {
  let component: GestionProductsComponent;
  let fixture: ComponentFixture<GestionProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
