import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { loginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('test of loginComponent', () => {
  let component: loginComponent;
  let fixture: ComponentFixture<loginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [loginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to be invalid', () => {
    const email = component.credential.controls['email'];
    email.setValue;
    ('sofi@gmail.com');
    expect(component.credential.invalid).toBeTrue();
  });

  it('should to be invalid', () => {
    const email = component.credential.controls['email'];
    const password = component.credential.controls['password'];
    email.setValue('sofi@gmail.com');
    password.setValue('123456');
    expect(component.credential.invalid).toBeFalse();
  });
});
