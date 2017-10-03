import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <button class="btn btn-primary">Hello</button>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
