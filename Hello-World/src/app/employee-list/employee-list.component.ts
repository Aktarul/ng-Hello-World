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

  <h2> Employee List 2</h2>
  <ul *ngFor = "let employee of employees2">
  <h3>
    <li> {{ employee.name }} </li>
  </h3>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  public employees = [];
  public employees2 = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees2()
      .subscribe(data => this.employees2 = data);
  }
}
