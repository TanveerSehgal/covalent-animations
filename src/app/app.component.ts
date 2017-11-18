import { Component } from '@angular/core';
import { TdRotateAnimation } from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      TdRotateAnimation(),
  ],
})
export class AppComponent {
  triggerState = false;
}
