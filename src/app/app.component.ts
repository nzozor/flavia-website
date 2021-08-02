import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CmsService } from './shared/services/cms.service';

@Component({
  selector: 'flavia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public title = 'flavia-website';
  public routerSub: Subscription;
  public isUnderline = true;
  constructor(private router: Router, private cmsService: CmsService) {
    this.routerSub = this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          if(event.url === '/') {
            this.isUnderline = false;
          } else {
            this.isUnderline = true;
          }
          this.cmsService.isMobileMenuActive = false;
        }
      });
  }
  public ngOnDestroy(): void {
    if(this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
