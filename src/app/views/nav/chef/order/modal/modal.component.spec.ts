import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponentChef } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponentChef;
  let fixture: ComponentFixture<ModalComponentChef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponentChef],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponentChef);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
