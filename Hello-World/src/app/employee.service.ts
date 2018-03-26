import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {

  private _url = '../assets/data/employees.json';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return [
      {'id': 1, 'name': 'Shohel', 'age': 26},
      {'id': 2, 'name': 'Asim', 'age': 23},
      {'id': 3, 'name': 'Nuruzzaman', 'age': 22},
      {'id': 4, 'name': 'Saddam', 'age': 29}
    ];
  }

  getEmployees2(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

}
