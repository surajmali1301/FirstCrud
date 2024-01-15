import { Injectable } from '@angular/core';
import { Employee } from './employeeDTO';

@Injectable({
  providedIn: 'root', //root,any
})
export class EmployeeService {
  employeeList: Employee[] = [];
  constructor() {
    this.employeeList.push({
      id: 101,
      name: 'Suraj',
      salary: 30000,
      city: 'Mumbai',
    });
  }

  public getEmployees(): Employee[] {
    return this.employeeList;
  }
  public getEmployeesById(id: number) {}
  public addEmployees(emp: Employee): void {
    this.employeeList.push({
      id: emp.id,
      name: emp.name,
      salary: emp.salary,
      city: emp.city,
    });
  }
  public updateEmployee(emp: Employee): void {
    for (let i = 0; i < this.employeeList.length; i++) {
      if (this.employeeList[i].id === emp.id) {
        // === to check whether value + data both are same
        this.employeeList[i].name = emp.name;
        this.employeeList[i].salary = emp.salary;
        this.employeeList[i].city = emp.city;
        break;
      }
    }
  }
  public deleteEmployee(id: number | undefined) {
    let i = 0;
    for (; i < this.employeeList.length; i++) {
      if (this.employeeList[i].id === id) {
        // === to check whether value + data both are same
        break;
      }
    }
    this.employeeList.splice(i, 1);
  }
}
