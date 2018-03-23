import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{ name }}
  </h2>
  <hr><br>
  <!-- Interpolation -->
  <h3 class="header"> Interpolation </h3>
  <h2> {{ 2 + 2 }}</h2>
  <h2> {{ "Welcome " + name }}</h2>

  <h2> {{ name.length }} </h2>

  <h2> {{ name.toUpperCase() }} </h2>

  <h2> {{ greetUser() }} </h2>

  <h2> {{ siteURL }} </h2><hr>

  <!-- Property Binding -->
  <h3 class="header"> Property Binding </h3>
  <input [id]="myId" type="test" value="Aktarul"><br><br>
  <input id="{{ myId }}" type="test" value="Aktarul"><br><br>
  <input bind-disabled ="isDisabled" [id]="myId" type="test" value="Aktarul"><br><br><hr>

  <!-- Class Binding -->
  <h3 class="header"> Class Binding </h3>
  <h2 class="text-success text-special"> {{ name.toUpperCase() }} </h2>
  <h2 bind-class = "successClass"> {{ name.toUpperCase() }} </h2>
  <h2 bind-class.text-danger = "hasError"> {{ name.toUpperCase() }} </h2>
  <h2 bind-ngClass = "messageClasses"> {{ message }} </h2><hr><br>

  <!-- Style Binding -->
  <h3 class="header"> Style Binding </h3>
  <h2 [style.color]= " hasError ? 'red' : 'orange'"> Style Binding 1 </h2>
  <h2 [style.color]="highlightColor"> Style Binding 2 </h2>
  <h2 [ngStyle]="titleStyles"> Style Binding 3 </h2><br><hr>

  <!-- Event Binding -->
  <h3 class="header"> Event Binding </h3>
  <button (click)="onClick($event)"> Greet </button>
    {{typeEvent}}<br>{{ greeting }}<br>
  <button (click)="greeting='Hello World'"> Another Greet </button><hr><br>

  <!-- Template Reference Variables -->
  <h3 class="header"> Template Reference Variables </h3>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)" >log</button><hr><br>

  <!-- Two Way Binding-->
  <h3 class="header"> Two Way Binding </h3>
  <input [(ngModel)]="newName" type="text">
  {{ newName }}<hr><br>

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
  <h3> {{ showMessage }} </h3>
  `,

  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  .header {
    color: #333300;
    background: #66ff99;
    margin-left: 200px;
    margin-right: 200px;
  }
  `]
})
export class TestComponent implements OnInit {
  public name = 'Aktarul';
  public siteURL = window.location.href;
  public myId = 'testId';
  public isDisabled = true;

  public message = 'Hello World';
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  public highlightColor = 'Blue';
  public titleStyles = {
    color: 'orange',
    fontStyle: 'italic'
  };

  public greeting = '';
  public typeEvent = '';

  public newName = '';

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

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome to my first Angular App!';
    this.typeEvent = 'this is a ' + event.type + ' event.';
  }

  logMessage(value) {
    console.log(value);
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
