import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { NavbarComponent } from './navbar/navbar.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'

import { EmployeeService } from './service/employee.service'

@NgModule({
  declarations: [NavbarComponent, ProgressBarComponent],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
  ],
  exports: [RouterModule, HttpClientModule, NavbarComponent, ProgressBarComponent],
  providers: [EmployeeService],
})
export class CoreModule {}
