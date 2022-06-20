import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../appModels/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:3000/employee';
  urll = 'http://localhost:3000/employee/get';

  constructor(private http : HttpClient) { }

  addEmployee(emp:Employee){
    return this.http.post(this.url, emp);
  }

  getEmployeeList(){
    return this.http.get(this.urll);
  }
}
