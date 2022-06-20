import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../appService/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor( private empService: EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees();

  }


  getEmployees(){
    this.empService.getEmployeeList().subscribe(res =>{
      console.log(res);
    })
  }
}
