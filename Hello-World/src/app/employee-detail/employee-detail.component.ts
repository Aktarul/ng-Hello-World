import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { StudentService } from '../student.service';

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
  <h3> {{ errorMsg }}</h3>
  <ul *ngFor = "let employee of employees2">
    <h3>
      <li> {{ employee.id }}. {{ employee.name }} - {{ employee.age }} </li>
    </h3>
  </ul>

  <h2> Student Details </h2>
  <ul *ngFor = "let student of students">
  <h3>
    <li>{{ student.id }}. {{ student.first_name }} {{ student.last_name }} - {{ student.age }} </li>
  </h3>
  </ul>
  <hr><br>
  `,
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public employees2 = [];
  public students = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService, private _studentService: StudentService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();      // without http get()

    this._employeeService.getEmployees2()      // with http get() using employee service
      .subscribe(data => this.employees2 = data,
                error => this.errorMsg = error);

    this.students = this._studentService.getStudents();          // with only student service
  }
}
