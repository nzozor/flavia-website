import { AfterContentInit, Directive, ElementRef, EventEmitter,
  HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
@Directive({
  selector: '[flaviaEnterViewport]'
})
export class EnterViewportDirective  implements OnDestroy, OnInit, AfterContentInit {
  @Input() threshold = 0.5;

  @Output() visible = new EventEmitter<HTMLElement>();
  @HostBinding('class') elementVisibilityClass: string;
  private observer: IntersectionObserver | undefined;


  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.createObserver();
  }

  ngAfterContentInit(): void {
    this.startObservingElements();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  private createObserver(): void {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          console.log(entry);
          this.elementVisibilityClass = 'enter-view-port visible';
        } else {
          this.elementVisibilityClass = 'enter-view-port';
        }
      });
    }, options);
  }

  private startObservingElements(): void {
    if (!this.observer) {
      return;
    }

    this.elementVisibilityClass = 'enter-view-port hide-item';
    this.observer.observe(this.element.nativeElement);
  }
}
