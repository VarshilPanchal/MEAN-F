import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeServicesService } from 'src/app/services/employee-services/employee-services.service';
import { CustomValidator } from '../CustomValidator';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css']
})
export class EditEmployeeFormComponent implements OnInit {

  myForm!: FormGroup;
  isSubmitted = false;
  employeeDialog = false;
  popupHeader = "Add Employee";
  employeeDto!: Employee;

  @Output() dialogEmit = new EventEmitter();
  // @Output() editDialogEmit = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
    private employeeServices: EmployeeServicesService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.employeeServices.editDialogEmit.subscribe(
      (emitedValue) => {
        console.log(emitedValue);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  public initializeForm() {
    this.myForm = this._formBuilder.group({
      _id: [],
      name: ['', [CustomValidator.required]],
      designation: ['', [CustomValidator.required]],
      vertical: ['', [CustomValidator.required]],
      salary: ['', [CustomValidator.required]],
    });
  }

  public addEmployee(): any {
    this.employeeDialog = true;
    this.isSubmitted = false;
    this.initializeForm();
  }

  public onSubmit(): any {
    this.isSubmitted = true;

    if (this.myForm.invalid) {
      CustomValidator.markFormGroupTouched(this.myForm);
      this.isSubmitted = false;
      throw new Error('Form is invalid');
    } else {
      console.log("Form is", this.myForm.valid)
      console.log("Form values:", this.myForm.value)
    }

  }

  hideDialog(): any {
    this.employeeDialog = false;
    this.isSubmitted = false;
    this.initializeForm();
  }

  editEmployee(entity?: any): void {
    if (entity) {
      entity = { ...entity };
      this.employeeDto = entity;
      this.popupHeader = 'Edit Employee';
      // this.myForm.controls.id.patchValue(this.employeeDto._id);
      this.myForm.controls.name.patchValue(this.employeeDto.name);
      this.employeeDialog = true;
    } else {
      console.log('Data not editable')
    }
  }

}
