import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { Page } from 'src/app/shared/models/page.model';
import { CmsService } from 'src/app/shared/services/cms.service';

@Component({
  selector: 'flavia-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.scss']
})
export class TeachingComponent implements OnInit {

  constructor(private cms: CmsService) { }
  public loading = false;
  public teachings: Article[];
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

    this.cms.getTeaching().subscribe(data => {
      this.loading = false;
      this.teachings = data.teachingList;
      this.staticContent = data.teachingPageStaticContent;
    });
  }
}
