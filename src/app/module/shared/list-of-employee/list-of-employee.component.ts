import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-list-of-employee',
  templateUrl: './list-of-employee.component.html',
  styleUrls: ['./list-of-employee.component.css']
})

export class ListOfEmployeeComponent implements OnInit {

  employees: Employee[] = [];

  @ViewChild('employeeFormComponent')
  employeeFormComponent!: EmployeeFormComponent;


  constructor() {
    this.employees.push({
      _id: "rfafdsf",
      name: "rfafdsf",
      designation: "rfafdsf",
      vertical: "rfafdsf",
      salary: 1200
    });
    this.employees.push({
      _id: "rfafdsf",
      name: "rfafdsf",
      designation: "rfafdsf",
      vertical: "rfafdsf",
      salary: 1200
    });
    this.employees.push({
      _id: "rfafdsf",
      name: "rfafdsf",
      designation: "rfafdsf",
      vertical: "rfafdsf",
      salary: 1200
    });
    this.employees.push({
      _id: "rfafdsf",
      name: "rfafdsf",
      designation: "rfafdsf",
      vertical: "rfafdsf",
      salary: 1200
    });
  }

  ngOnInit(): void {
  }


  editEmployee(employee: Employee) {
    console.log(employee);
    this.employeeFormComponent.editEmployee(employee);
  }

}
