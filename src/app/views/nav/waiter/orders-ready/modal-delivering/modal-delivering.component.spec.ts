import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeliveringComponent } from './modal-delivering.component';

describe('ModalDeliveringComponent', () => {
  let component: ModalDeliveringComponent;
  let fixture: ComponentFixture<ModalDeliveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeliveringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeliveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
