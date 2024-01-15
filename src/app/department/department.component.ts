import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from './department.service';
import { Department } from './departmentDTO';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  departmentService: DepartmentService = inject(DepartmentService);
  departmentList: Department[] = [];

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.departmentList = this.departmentService.getAllDepartments();
  }

  department: Department = {};

  saveDepartment() {
    if (!this.isUpdatebtn) {
      this.departmentService.addDepartment(this.department);
    } else {
      this.departmentService.updateDepartment(this.department);
    }
    this.getDepartments();
    this.department = {};
    this.isUpdatebtn = false;
  }

  //edit the data
  isUpdatebtn: boolean = false;
  editDepartment(dept: Department) {
    this.isUpdatebtn = true;
    this.department = dept;
  }

  deleteDepartment(id: number | undefined) {
    let response = confirm('Do you want to delete id ' + id + ' ?');
    if (response == true) {
      this.departmentService.deleteDepartment(id);
      this.getDepartments();
    }
  }
}
