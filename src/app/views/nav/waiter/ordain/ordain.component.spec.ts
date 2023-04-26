import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdainComponent } from './ordain.component';

describe('OrdainComponent', () => {
  let component: OrdainComponent;
  let fixture: ComponentFixture<OrdainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
