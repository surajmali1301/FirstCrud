import { Injectable } from '@angular/core';
import { Department } from './departmentDTO';
import { debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  departmentList: Department[] = [];

  private id: number = 200;

  constructor() {
    this.departmentList.push({ id: 200, name: 'Production' });
  }

  generateDepartmentId(): number {
    this.id++;
    return this.id;
  }

  public getAllDepartments(): Department[] {
    return this.departmentList;
  }

  public addDepartment(department: Department): void {
    department.id = this.generateDepartmentId();
    this.departmentList.push({ id: department.id, name: department.name });
  }

  public updateDepartment(dept: Department): void {
    for (let i = 0; i < this.departmentList.length; i++) {
      if (this.departmentList[i].id === dept.id) {
        // ===to check whether value + data both are same
        this.departmentList[i].name = dept.name;
        break;
      }
    }
  }

  public deleteDepartment(id: number | undefined) {
    let i = 0;
    for (; i < this.departmentList.length; i++) {
      if (this.departmentList[i].id === id) {
        // === to check whether value + data both are same
        break;
      }
    }
    this.departmentList.splice(i, 1);
  }
}
