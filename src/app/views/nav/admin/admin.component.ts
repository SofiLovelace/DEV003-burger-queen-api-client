import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  @ViewChild('btnUsers') btnUsers!: ElementRef;
  @ViewChild('btnProducts') btnProducts!: ElementRef;

  constructor(private renderer2: Renderer2) {}

  public changeColor(button: string) {
    const btnUsers = this.btnUsers.nativeElement;
    const btnProducts = this.btnProducts.nativeElement;

    if (button === 'users') {
      this.renderer2.setStyle(btnUsers, 'backgroundColor', 'black');
      this.renderer2.setStyle(btnProducts, 'backgroundColor', 'gray');
    } else {
      this.renderer2.setStyle(btnUsers, 'backgroundColor', 'gray');
      this.renderer2.setStyle(btnProducts, 'backgroundColor', 'black');
    }
  }
}
