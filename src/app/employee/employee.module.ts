import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EmployeeRoutingModule } from './employee-routing.module'
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeFormComponent } from './employee-form/employee-form.component'

import { MatCardModule } from '@angular/material/card'
@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent],
  imports: [CommonModule, EmployeeRoutingModule, MatCardModule],
})
export class EmployeeModule {}
