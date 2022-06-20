import { Injectable } from '@angular/core';
import { Employee } from '../appModels/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:3000/employee';
  constructor(private http : HttpClient) { }

  addEmployee(emp : Employee){
    return this.http.post(this.url, emp);
  }

  getEmployeeList(){
    return this.http.get(this.url);
  }
}
