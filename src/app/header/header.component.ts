import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, ViewChild,  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CmsService } from '../shared/services/cms.service';

@Component({
  selector: 'flavia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}) 
export class HeaderComponent implements AfterViewInit {

  @Input() underline = false;

  constructor(@Inject(PLATFORM_ID) private platformId: {}, private cmsService: CmsService) {}

  header: any;
  sticky: any;
  tempPageYOffset: any;
  @ViewChild('cmp') cmp: ElementRef;

  get isMobileMenuActive(): boolean {
    return this.cmsService.isMobileMenuActive;
  }
  set isMobileMenuActive(status: boolean) {
    this.cmsService.isMobileMenuActive = status;
  }

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

  public clickMobileMenu(): void {
    this.cmp.nativeElement.click();
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
}
