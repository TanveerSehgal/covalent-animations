import { Component } from '@angular/core';
import {
    TdRotateAnimation,
    TdBounceAnimation,
    TdCollapseAnimation,
    TdFlashAnimation,
    TdHeadshakeAnimation,
    TdJelloAnimation,
    TdPulseAnimation,
} from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      TdRotateAnimation(),
      TdRotateAnimation({ anchor: 'customRotate', duration: 750, degrees: 45, ease: 'linear' }),
      TdBounceAnimation({ anchor: 'bounce', duration: 750 }),
      TdCollapseAnimation({ anchor: 'collapse' }),
      TdFlashAnimation({ anchor: 'flash' }),
      TdHeadshakeAnimation({ anchor: 'shake' }),
      TdJelloAnimation({ anchor: 'jello' }),
      TdPulseAnimation({ anchor: 'pulse' }),
  ],
})
export class AppComponent {
    triggerState = false;
    customTriggerState = false;
    bounceState = false;
    collapseState = true;
    flashState = false;
    headshakeState = false;
    jelloState = false;
    pulseState = false;

    resetAllAnimations() {
        this.triggerState = false;
        this.customTriggerState = false;
        this.bounceState = false;
        this.collapseState = true;
        this.flashState = false;
        this.headshakeState = false;
        this.jelloState = false;
        this.pulseState = false;
    }
}
