import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HelpContentComponent } from './help-content/help-content.component'

const routes: Routes = [
  {
    path: '',
    component: HelpContentComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRoutingModule {}
