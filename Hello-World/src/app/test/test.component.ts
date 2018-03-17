import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{ name }}
  </h2>

  <!-- Interpolation -->
  <h2> {{ 2 + 2 }}</h2>
  <h2> {{ "Welcome " + name }}</h2>

  <h2> {{ name.length }} </h2>

  <h2> {{ name.toUpperCase() }} </h2>

  <h2> {{ greetUser() }} </h2>

  <h2> {{ siteURL }} </h2><hr>

  <!-- Property Binding -->
  <input [id]="myId" type="test" value="Aktarul"><br><br>
  <input id="{{ myId }}" type="test" value="Aktarul"><br><br>
  <input bind-disabled ="isDisabled" [id]="myId" type="test" value="Aktarul"><br><br><hr>

  <!-- Class Binding -->
  <h2 class="text-success text-special"> {{ name.toUpperCase() }} </h2>
  <h2 bind-class = "successClass"> {{ name.toUpperCase() }} </h2>
  <h2 bind-class.text-danger = "hasError"> {{ name.toUpperCase() }} </h2>
  <h2 bind-ngClass = "messageClasses"> {{ message }} </h2><hr><br>

  <!-- Style Binding -->
  <h2 [style.color]= " hasError ? 'red' : 'orange'"> Style Binding 1 </h2>
  <h2 [style.color]="highlightColor"> Style Binding 2 </h2>
  <h2 [ngStyle]="titleStyles"> Style Binding 3 </h2><br><hr>

  <!-- Event Binding -->
  <button (click)="onClick($event)"> Greet </button>
    {{typeEvent}}<br>{{ greeting }}<br>
  <button (click)="greeting='Hello World'"> Another Greet </button><hr><br>
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

}
