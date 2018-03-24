import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {'id': 1, 'name': 'Shohel', 'age': 26},
      {'id': 2, 'name': 'Asim', 'age': 23},
      {'id': 3, 'name': 'Nuruzzaman', 'age': 22},
      {'id': 4, 'name': 'Saddam', 'age': 29}
    ];
  }

}
