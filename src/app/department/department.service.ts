import { Injectable } from '@angular/core';
import { Department } from './departmentDTO';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  departmentList: Department[] = [];
  constructor() {
    this.departmentList.push({
      id: 101,
      name: 'HR',
    });
  }
  public getDepartments() {
    // Replace this with your actual department list retrieval logic
    return ['HR', 'IT', 'Finance', 'Marketing'];
  }
  public addDepartment(dept: Department): void {
    this.departmentList.push({
      id: dept.id,
      name: dept.name,
    });
  }
  public getDepartment(): Department[] {
    return this.departmentList;
  }
  public updateDepartment(dept: Department): void {
    for (let i = 0; i < this.departmentList.length; i++) {
      if (this.departmentList[i] === dept.id) {
        this.departmentList[i].name = dept.name;
      }
    }
  }
  public deleteDepartment(id: number | undefined) {
    let i = 0;
    for (; i < this.departmentList.length; i++) {
      if (this.departmentList[i].id === id) {
        break;
      }
    }
    this.departmentList.splice(i, 1);
  }
}
