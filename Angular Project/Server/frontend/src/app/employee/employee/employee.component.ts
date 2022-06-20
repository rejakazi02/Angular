import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../appService/employee.service';
import { Employee } from './../../appModels/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

employees: Employee[] ;

  constructor( private empService: EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees();

  }


  getEmployees(){
    this.empService.getEmployeeList().subscribe((res:Employee[]) =>{
      console.log(res);
      this.employees = res;
    })
  }
}
