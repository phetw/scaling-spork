import { StoreModule } from '@ngrx/store'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '@env/environment'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CoreModule } from './core/core.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { counterReducer } from './store/count/counter.reducer'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot({ count: counterReducer }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
