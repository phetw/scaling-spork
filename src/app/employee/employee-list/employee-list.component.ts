import { Component, OnInit, OnDestroy } from '@angular/core'
import { EmployeeService } from '@app/core/service/employee.service'
import { Employee } from '@app/store/employee/employee.model'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees$: Array<Employee>

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeeData()
  }

  getEmployeeData() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employees$ = result
    })
  }

  ngOnDestroy() {}
}
