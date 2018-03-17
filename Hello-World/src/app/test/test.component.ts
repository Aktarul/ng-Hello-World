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

  <h2> {{ siteURL }} </h2>

  <!-- Property Binding -->
  <input [id]="myId" type="test" value="Aktarul"><br><br>
  <input id="{{ myId }}" type="test" value="Aktarul"><br><br>
  <input bind-disabled ="isDisabled" [id]="myId" type="test" value="Aktarul">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Aktarul';
  public siteURL = window.location.href;
  public myId = 'testId';
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

}
