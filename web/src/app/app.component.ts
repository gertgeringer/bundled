import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Bundled</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'spa-app';
}
