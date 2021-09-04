import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { APIConstants } from 'src/app/shared/APIConstants';
import { CustomHttpService } from '../custom-http-service/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {
  employeeList: Employee[] = [];


  editDialogEmit = new EventEmitter();


  constructor(
    private customHttp: CustomHttpService,
    private http: HttpClient
  ) { }

  getAllEmployees(): Observable<any> {
    const url = APIConstants.GET_ALL_EMPLOYEES
    return this.customHttp.getNodeJsWithoutAuth(url);
  }

  addEmployees(employee: Employee): Observable<any> {
    const url = APIConstants.ADD_EMPLOYEES;
    return this.customHttp.postNodeJssWithoutAuth(url, employee);
  }

  editEmployees(employee: Employee): Observable<any> {
    const url = APIConstants.EDIT_EMPLOYEES + employee
    return this.customHttp.putNodeJssWithoutAuth(url, employee);
  }

  deleteEmployeeById(id: string): Observable<any> {
    const url = APIConstants.DELETE_EMPLOYEES + id;
    return this.customHttp.deleteNodeJssWithoutAuth(url);
  }

}
