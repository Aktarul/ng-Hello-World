import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
  <!-- Dependency Injection -->
  <h3 class="header"> Dependency Injection </h3>
  <hr><br>
  `,
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
