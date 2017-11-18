import { Component } from '@angular/core';
import {
  TdRotateAnimation,
  TdBounceAnimation,
  TdCollapseAnimation,
} from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      TdRotateAnimation(),
      TdRotateAnimation({ anchor: 'customRotate', duration: 750, degrees: 45, ease: 'linear' }),
      TdBounceAnimation({ anchor: 'bounce', duration: 750 }),
      TdCollapseAnimation({ anchor: 'collapse' })
  ],
})
export class AppComponent {
  triggerState = false;
  customTriggerState = false;
  bounceState = false;
  collapseState = true;

  resetAllAnimations() {
    this.triggerState = false;
    this.customTriggerState = false;
    this.bounceState = false;
    this.collapseState = true;
  }
}
