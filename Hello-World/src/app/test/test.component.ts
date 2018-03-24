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
  <button (click)="greeting='Hello World'"> Another Greet </button>
  <hr><br>
  <!-- Template Reference Variables -->
  <h3 class="header"> Template Reference Variables </h3>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)" >log</button><hr><br>

  <!-- Two Way Binding-->
  <h3 class="header"> Two Way Binding </h3>
  <input [(ngModel)]="newName" type="text">
  {{ newName }}
  <hr><br>
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

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome to my first Angular App!';
    this.typeEvent = 'this is a ' + event.type + ' event.';
  }

}
