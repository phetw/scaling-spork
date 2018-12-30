import { StoreModule } from '@ngrx/store'

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { counterReducer } from './store/counter.reducer'

import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

const MATERIAL_MODULES = [MatProgressBarModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatListModule]
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ...MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
