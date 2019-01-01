import { Component } from '@angular/core'
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router'

@Component({
  selector: 'app-progress',
  templateUrl: './progress-bar.component.html',
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
