import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-v1-demo';

  constructor(private router: Router) {

  }
  
  toggleActive(link: any) {
    this.router.navigateByUrl(link);
  }

}
