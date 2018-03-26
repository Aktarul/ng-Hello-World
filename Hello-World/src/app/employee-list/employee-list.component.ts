import { Component, OnInit } from '@angular/core';
import { EmployeeDetailComponent } from './../employee-detail/employee-detail.component';
import { EmployeeService } from './../employee.service';
import { StudentService } from '../student.service';

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

  <h2> Student List </h2>
  <ul *ngFor = "let student of students">
  <h3>
    <li> {{ student.first_name }} {{ student.last_name }} </li>
  </h3>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  public employees = [];
  public employees2 = [];
  public students = [];

  constructor(private _employeeService: EmployeeService, private _studentService: StudentService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();    // without http get()

    this._employeeService.getEmployees2()      // with http get() using employee service
      .subscribe(data => this.employees2 = data);

    this.students = this._studentService.getStudents();          // with only student service
  }
}
