import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CmsService } from 'src/app/shared/services/cms.service';

export interface AboutPageAssets {
  title: string;
  intro: string;
  imageLargeScreen: { url: string};
  imageSmallScreen: { url: string };
}

@Component({
  selector: 'flavia-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  constructor(private cms: CmsService) { }
  public loadingAssets  = false;
  public assets: AboutPageAssets;
  public ngOnInit(): void {
      this.loadAssets();
  }

  public get cmsUrl(): string {
    return this.cms.cmsUrl;
  }
  private loadAssets(): void {
    this.loadingAssets  = true;
    
    this.cms.getAboutPageData().subscribe(data => {
      this.loadingAssets  = false;
      this.assets = data;
    });
  }
}
