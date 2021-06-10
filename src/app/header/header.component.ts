import { AfterViewInit, Component, HostListener, Inject, Input, PLATFORM_ID,  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'flavia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}) 
export class HeaderComponent implements AfterViewInit {

  @Input() underline = false;

  constructor(@Inject(PLATFORM_ID) private platformId: {}) {}

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
