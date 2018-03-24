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
  <hr><br>
  `,
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
