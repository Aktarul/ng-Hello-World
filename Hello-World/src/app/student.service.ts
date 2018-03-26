import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor() { }

  getStudents() {
    return [
      {'id': 101, 'first_name': 'Saykat', 'last_name': 'Khan', 'age': 12},
      {'id': 102, 'first_name': 'Mintu', 'last_name': 'Ahmed', 'age': 14},
      {'id': 103, 'first_name': 'Vantu', 'last_name': 'Ganguly', 'age': 11},
      {'id': 104, 'first_name': 'Sajan', 'last_name': 'Singh', 'age': 17}
    ];

  }

}
