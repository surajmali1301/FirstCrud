import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Employee } from './employeeDTO';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  EmployeeService: EmployeeService = inject(EmployeeService);
  employeeList: Employee[] = [];
  isUpdateBtn: boolean = false;
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeList = this.EmployeeService.getEmployees();
  }
  employee: Employee = {};

  saveEmployee() {
    if (!this.isUpdateBtn) {
      this.EmployeeService.addEmployees(this.employee);
    } else {
      this.EmployeeService.updateEmployee(this.employee);
    }
    this.getEmployees();
    this.employee = {};
    this.isUpdateBtn = false;
  }

  //edit the data
  editEmployee(emp: Employee) {
    this.isUpdateBtn = true;
    this.employee = emp;
  }

  deleteEmployee(id: number | undefined) {
    let response = confirm('Do you want to delete id ' + id + ' ?');
    if (response == true) {
      this.EmployeeService.deleteEmployee(id);
      this.getEmployees();
    }
  }
}
