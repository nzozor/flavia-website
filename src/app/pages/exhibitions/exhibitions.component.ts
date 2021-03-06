import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { Page } from 'src/app/shared/models/page.model';
import { CmsService } from 'src/app/shared/services/cms.service';

@Component({
  selector: 'flavia-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {

  constructor(private cms: CmsService) { }
  public loading  = false;
  public exhibitions: Article[];
  public staticContent: Page;
  public lastExhibition: Article;
  public ngOnInit(): void {
      this.loadExhibitions();
  }

  public get cmsUrl(): string {
    return this.cms.cmsUrl;
  }
  private loadExhibitions(): void {
    this.loading  = true;

    this.cms.getExhibitions().subscribe(data => {
      this.loading  = false;
      this.exhibitions = data.exhibitionsList;
      this.staticContent = data.exhibitionStaticContent;
    });
  }

  public getDate(date: Date): string {
    return this.cms.getDate(date);
  }
}
