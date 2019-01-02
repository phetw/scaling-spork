import { Component } from '@angular/core'
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router'

@Component({
  selector: 'app-progress',
  template: '<mat-progress-bar *ngIf="loading" mode="indeterminate" color="accent"></mat-progress-bar>',
})
export class ProgressBarComponent {
  loading: Boolean = false

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = true
          break
        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
          this.loading = false
          break
        default:
          break
      }
    })
  }
}
