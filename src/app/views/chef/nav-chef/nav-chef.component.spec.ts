import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChefComponent } from './nav-chef.component';

describe('NavChefComponent', () => {
  let component: NavChefComponent;
  let fixture: ComponentFixture<NavChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
