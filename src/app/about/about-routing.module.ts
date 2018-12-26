import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutContentComponent } from './about-content/about-content.component'

const routes: Routes = [{ path: '', component: AboutContentComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
