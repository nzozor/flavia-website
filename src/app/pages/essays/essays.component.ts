import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { Page } from 'src/app/shared/models/page.model';
import { CmsService } from 'src/app/shared/services/cms.service';

@Component({
  selector: 'flavia-essays',
  templateUrl: './essays.component.html',
  styleUrls: ['./essays.component.scss']
})
export class EssaysComponent implements OnInit {

  constructor(private cms: CmsService) { }
  public loading = false;
  public essays: Article[];
  public staticContent: Page;
  public ngOnInit(): void {
    this.loadBooks();
  }

  public get cmsUrl(): string {
    return this.cms.cmsUrl;
  }

  public getDate(date: Date): string {
    return this.cms.getDate(date);
  }

  private loadBooks(): void {
    this.loading = true;

    this.cms.getEssays().subscribe(data => {
      this.loading = false;
      this.essays = data.essaysList;
      this.staticContent = data.essayPageStaticContent;
    });
  }
}
