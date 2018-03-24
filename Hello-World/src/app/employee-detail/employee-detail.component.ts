import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2> Employee Details </h2>
  <ul *ngFor = "let employee of employees">
    <h3>
      <li> {{ employee.id }}. {{ employee.name }} - {{ employee.age }} </li>
    </h3>
  </ul>
  <h2> Employee Details 2</h2>
  <ul *ngFor = "let employee of employees2">
    <h3>
      <li> {{ employee.id }}. {{ employee.name }} - {{ employee.age }} </li>
    </h3>
  </ul>
  <hr><br>
  `,
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public employees2 = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees2()
      .subscribe(data => this.employees2 = data);
  }

}
