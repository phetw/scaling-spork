import { Component, OnInit } from '@angular/core'
import { EmployeeService } from '@app/core/service/employee.service'
import { Observable } from 'rxjs'
import { Employee } from '@app/store/employee/employee.model'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeeData()
  }

  getEmployeeData() {
    this.employees$ = this.employeeService.getEmployees()
  }

  trackByFunc = (index, item) => item.id
}
