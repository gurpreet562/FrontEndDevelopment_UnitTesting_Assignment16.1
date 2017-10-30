import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
@Component({
  selector: 'example-app',
  styles: [`
    .toggle-container {
      background-color:white;
      border:10px solid black;
      width:200px;
      text-align:center;
      line-height:100px;
      font-size:50px;
      box-sizing:border-box;
      overflow:hidden;
    }
  `],
  animations: [trigger(
      'openClose',
      [
        state('collapsed, void', style({height: '0px', color: 'maroon', borderColor: 'maroon'})),
        state('expanded', style({height: '*', borderColor: 'green', color: 'green'})),
        transition(
            'collapsed <=> expanded', [animate(500, style({height: '250px'})), animate(500)])
      ])],
  transition('* => unloaded', [
    animate(1000, keyframes([
        style({
            opacity: 1,
            transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
           'animation-timing-function': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            offset: 0.4
        }),
        style({
            opacity: 0,
            transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)',
            'transform-origin': 'center bottom',
            'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
            offset: 1
        })
    ]))
])
  template: `
    <button (click)="expand()">Open</button>
    <button (click)="collapse()">Closed</button>
    <hr />
    <div class="toggle-container" [@openClose]="stateExpression">
      Look at this box
    </div>
  `
})
export class MyExpandoCmp {
  stateExpression: string;
  constructor() { this.collapse(); }
  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }
}
 
@NgModule(
    {imports: [BrowserAnimationsModule], declarations: [MyExpandoCmp], bootstrap: [MyExpandoCmp]})
export class AppModule {
}
