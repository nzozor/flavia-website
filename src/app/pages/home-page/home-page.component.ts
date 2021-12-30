import { Component, Inject, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { CmsService } from 'src/app/shared/services/cms.service';
import { DOCUMENT } from '@angular/common';

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
  constructor(@Inject(DOCUMENT) private document: Document, private cms: CmsService) { }

  loadingAssets  = false;
  assets: HomePageAssets;
  exhibition: Article;
  isBookArticle = false;
  ngOnInit(): void {
      this.loadAssets();
      this.loadExhibitions();
  }

  get cmsUrl(): string {
    return this.cms.cmsUrl;
  }

  private loadAssets(): void {
    this.loadingAssets  = true;
    this.cms.getHomepageData().subscribe(data => {
      this.loadingAssets  = false;
      this.assets = data;
    });
  }

  private loadExhibitions(): void {
    this.loadingAssets  = true;

    this.cms.getLastExhibition().subscribe(data => {
      this.loadingAssets  = false;
      this.exhibition = data;
      this.isBookArticle = data.event_type?.type  === 'Book' ? true : false;
    });
  }
}
