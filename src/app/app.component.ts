import { Component } from '@angular/core';
import {
  TdRotateAnimation,
  TdBounceAnimation,
} from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      TdRotateAnimation(),
      TdRotateAnimation({ anchor: 'customRotate', duration: 750, degrees: 45, ease: 'linear' }),
      TdBounceAnimation({ anchor: 'bounce', duration: 750 }),
  ],
})
export class AppComponent {
  triggerState = false;
  customTriggerState = false;
  bounceState = false;

  resetAllAnimations() {
    this.triggerState = false;
    this.customTriggerState = false;
    this.bounceState = false;
  }
}
