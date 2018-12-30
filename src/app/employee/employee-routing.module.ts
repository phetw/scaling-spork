import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EmployeeFormComponent } from './employee-form/employee-form.component'
import { EmployeeListComponent } from './employee-list/employee-list.component'

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
  {
    path: 'form',
    component: EmployeeFormComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
