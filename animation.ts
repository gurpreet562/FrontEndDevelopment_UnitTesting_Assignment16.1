import { Component, OnChanges, Input } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/platform-browser/animations';

@Component({
  selector : 'my-fader',
  animations: [
  trigger('visibilityChanged', [
    state('shown' , style({ opacity: 1 })),
    state('hidden', style({ opacity: 0 })),
    transition('* => *', animate('.5s'))
  ])
  ],
  template: `
  <div [@visibilityChanged]="visibility" >
    <ng-content></ng-content>  
    <p>Can you see me? I should fade in or out...</p>
  </div>
  `
})
export class FaderComponent implements OnChanges {
  @Input() isVisible : boolean = true;
  visibility = 'shown';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
