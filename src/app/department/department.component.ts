import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from './departmentDTO';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  DepartmentService: DepartmentService = inject(DepartmentService);
  departmentList: Department[] = [];
  isUpdateBtn: boolean = false;
  ngOnInit(): void {
    this.getDepartment;
  }
  getDepartment() {
    this.departmentList = this.DepartmentService.getDepartment();
  }
  department: Department = {};

  saveDepartment() {
    if (!this.isUpdateBtn) {
      this.DepartmentService.addDepartment(this.department);
    } else {
      this.DepartmentService.updateDepartment(this.department);
      this.department;
    }
    this.getDepartment();
    this.department = {};
    this.isUpdateBtn = false;
  }

  editDepartment(dept: Department) {
    this.isUpdateBtn = true;
    this.department = dept;
  }

  deleteDepartment(id: number | undefined) {
    let resp = confirm('Do you want to delete id ' + id + '?');
    if (resp == true) {
      this.DepartmentService.deleteDepartment(id);
      this.getDepartment();
    }
  }
}
