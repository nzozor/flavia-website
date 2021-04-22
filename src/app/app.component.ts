import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'flavia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: {}) {}

  title = 'flavia-website';
  header: any;
  sticky: any;
  tempPageYOffset: any;
  isMobileMenuActive = false;
  @HostListener('window:scroll', ['$event'])

  private onWindowScroll(event: any): void {
      console.log(window.pageYOffset);
      if (this.isMobileMenuActive) {
        return;
      }
      const direction = window.pageYOffset > this.tempPageYOffset ? 'down' : 'up';
      this.tempPageYOffset = window.pageYOffset;
      if (!this.header) { return; }
      if (window.pageYOffset > this.sticky) {
        this.header.classList.add('shrink');
      } else {
        this.header.classList.remove('shrink');
      }
      if (direction === 'down' && window.pageYOffset > 130) {
        this.header.classList.add('hide');
      } else {
        this.header.classList.remove('hide');
      }
  }

  public ngAfterViewInit(): void {
    // Get the header
    if (isPlatformBrowser(this.platformId)) {
      this.header = document.getElementById('header');
      // Get the offset position of the navbar
      this.sticky = this.header.offsetTop;
    }
  }

  public toggleMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
}
