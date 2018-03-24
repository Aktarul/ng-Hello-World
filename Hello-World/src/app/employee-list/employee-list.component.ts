import { Component, OnInit } from '@angular/core';
import { EmployeeDetailComponent } from './../employee-detail/employee-detail.component';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <!-- Services -->
  <h3 class="header"> Services </h3>
  <h2> Employee List </h2>
  <ul *ngFor = "let employee of employees">
    <h3>
      <li> {{ employee.name }} </li>
    </h3>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService ) {

  }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
