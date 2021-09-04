import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeServicesService } from 'src/app/services/employee-services/employee-services.service';
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

  constructor(private employeeServices: EmployeeServicesService) {
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  editEmployee(employee: Employee) {
    console.log(employee);
    this.employeeServices.editDialogEmit.emit(employee);
  }

  deleteEmployee(employee: Employee) {
    this.employeeServices.deleteEmployeeById(employee._id).subscribe(data => {
      console.log(data);
      this.getAllEmployees();
    });
  }

  getAllEmployees() {
    this.employeeServices.getAllEmployees().subscribe(
      (employeeList) => {
        this.employees = employeeList;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  displayCounter(emitedValue: string) {
    console.log(emitedValue);
    if (!emitedValue) {
      this.getAllEmployees();
    }
  }

}
