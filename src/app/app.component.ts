import { Component } from '@angular/core';
import { routerAnimation } from './animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerAnimation]
})
export class AppComponent {
  title = 'ang1';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    // console.log(outlet)
  }

}
