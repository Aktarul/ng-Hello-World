import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
  <!-- Structural Directives -->
  <h3 class="header"> Structural Directives </h3>
    <!-- ngIf -->
  <h2 *ngIf="displayValue">
    Hello World
  </h2>
  <button (click)="clickShow()" *ngIf="showShowButton">Show</button>
  <button (click)="clickHide()" *ngIf="showHideButton">Hide</button>
  <h2 *ngIf="showText">
    Now Showing the text
  </h2>
  <h2 *ngIf="displayValue2; else elseBlock">
    Hello World
  </h2>
  <ng-template #elseBlock>
    <h2>
      the hidden text
    </h2>
  </ng-template>

  <div *ngIf="displayValue3; then thenPart; else elsePart"></div>
  <ng-template #thenPart>
    <h2>
      Then Part
    </h2>
  </ng-template>

  <ng-template #elsePart>
    <h2>
      Else Part
    </h2>
  </ng-template>
      <!-- ngSwitch -->
    <div [ngSwitch]='color'>
      <div *ngSwitchCase="'red'">You picked Red color</div>
      <div *ngSwitchCase="'blue'">You picked Blue color</div>
      <div *ngSwitchCase="'green'">You picked Green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
      <!-- ngFor -->
    <div *ngFor = "let Color of colors; index as i; first as f; last as l; odd as o">
      <h2>{{ i }} {{ Color }} First: {{ f }} Last: {{ l }} Odd: {{ o }} </h2>
    </div><hr><br>

  <!-- Component Interaction -->
  <h3 class="header"> Component Interaction </h3>
  <h2> {{"Hello " + parentData }} </h2>
  <button (click)="fireEvent()">Send Event</button>
  <h3> {{ showMessage }} </h3><hr><br>

  <!-- Pipes -->
  <h3 class="header"> Pipes </h3>
  <h2> {{ pipe_title }} </h2>
  <h2> {{ pipe_title | uppercase }} </h2>
  <h2> {{ pipe_title | lowercase }} </h2>
  <h2> {{ pipe_title | slice:2 }} </h2>
  <h2> {{ pipe_title | slice:8:10 }} </h2>
  <h2> {{ person | json }} </h2>

  <h2> {{ 5.678 | number:'1.2-3' }} </h2>
  <h2> {{ 5.678 | number:'3.4-5' }} </h2>
  <h2> {{ 5.678 | number:'3.1-2' }} </h2>
  <h2> {{ 0.25 | percent }} </h2>
  <h2> {{ 5.658 | currency }} </h2>
  <h2> {{ 5.658 | currency: 'GBP' }} </h2>

  <h2> {{ date }} </h2>
  <h2> {{ date | date:'short' }} </h2>
  <h2> {{ date | date:'shortDate' }} </h2>
  <h2> {{ date | date:'shortTime' }} </h2>
  <hr><br>
  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  displayValue = true;
  showText = true;
  showHideButton = true;
  showShowButton = false;
  displayValue2 = false;
  displayValue3 = true;
  color = 'orange';
  public colors = ['red', 'blue', 'green', 'yellow'];

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public showMessage = '';

  public pipe_title = 'Pipe is ongoing.';
  public person = {
    'firstName' : 'John',
    'lastName' : 'Cena'
  };
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  clickShow() {
    this.showText = true;
    this.showHideButton = true;
    this.showShowButton = false;
  }
  clickHide() {
    this.showText = false;
    this.showHideButton = false;
    this.showShowButton = true;
  }

  fireEvent() {
    this.childEvent.emit(' Hey Everyone!');
    this.showMessage = 'Watch change at the top.';
  }

}
