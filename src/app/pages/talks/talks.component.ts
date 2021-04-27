import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { CmsService } from 'src/app/shared/services/cms.service';

@Component({
  selector: 'flavia-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {

  constructor(private cms: CmsService) { }
  public loading = false;
  public talks: Article[];
  public lastTalk: Article;
  public mainTalkImg: string;

  public ngOnInit(): void {
    this.loadTalks();
  }

  public get cmsUrl(): string {
    return this.cms.cmsUrl;
  }

  public getDate(date: Date): string {
    return this.cms.getDate(date);
  }

  private loadTalks(): void {
    this.loading = true;

    this.cms.getTalks().subscribe(data => {
      this.loading = false;
      this.lastTalk = data.shift() as Article;
      this.talks = [...data, ...data, ...data];
    });

    this.cms.getMainTalkImg().subscribe(data => {
      this.mainTalkImg = data;
    });
  }
}
