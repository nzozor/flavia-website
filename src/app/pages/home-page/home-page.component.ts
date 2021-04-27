import { Component, OnInit } from '@angular/core';
import { CmsService } from 'src/app/shared/services/cms.service';

export interface HomePageAssets {
  introQuote: string;
  mainImageLarge: { url: string };
  mainImageMobile: { url: string };
}

@Component({
  selector: 'flavia-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private cms: CmsService) { }
  loadingAssets  = false;
  assets: HomePageAssets;
  ngOnInit(): void {
      this.loadAssets();
  }

  public get cmsUrl(): string {
    return this.cms.cmsUrl;
  }

  private loadAssets(): void {
    this.loadingAssets  = true;
    
    this.cms.getHomepageData().subscribe(data => {
      this.loadingAssets  = false;
      this.assets = data;
    });
  }
}
