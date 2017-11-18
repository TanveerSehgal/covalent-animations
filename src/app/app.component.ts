import { Component } from '@angular/core';
import { TdRotateAnimation } from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      TdRotateAnimation(),
      TdRotateAnimation({ anchor: 'customRotate', duration: 750, degrees: 45, ease: 'linear' }),
  ],
})
export class AppComponent {
  triggerState = false;
  customTriggerState = false;

  resetAllAnimations() {
    this.triggerState = false;
    this.customTriggerState = false;
  }
}
