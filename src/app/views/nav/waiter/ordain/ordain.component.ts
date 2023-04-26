import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpsService } from 'src/app/services/https.service';

@Component({
  selector: 'app-ordain',
  templateUrl: './ordain.component.html',
  styleUrls: ['./ordain.component.css'],
})
export class OrdainComponent {
  public view: 'ordersReady' | 'main' = 'main';

  constructor(private router: Router, private HttpsService: HttpsService) {}

  ngOnInit() {
    if (!sessionStorage.getItem('userRole')) {
      this.router.navigate(['/login']);
    }
  }
}
