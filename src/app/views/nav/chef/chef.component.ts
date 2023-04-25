import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HttpsService } from 'src/app/services/https.service';

@Component({
    selector: 'app-chef',
    templateUrl: './chef.component.html',
    styleUrls: ['./chef.component.css']
})
export class ChefComponent {

    constructor(
        private router: Router,
        private HttpsService: HttpsService
    ) { }

    ngOnInit() {
        if (!sessionStorage.getItem('userRole')) {
            this.router.navigate(['/login'])
        }
    }
}

