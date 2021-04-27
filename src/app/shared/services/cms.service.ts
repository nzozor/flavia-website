import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HomePageAssets } from 'src/app/pages/home-page/home-page.component';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';
import { AboutPageAssets } from 'src/app/pages/about/about.component';
import { Article } from '../models/article.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  public cmsUrl = environment.cmsUrl;
  constructor(private api: ApiService) {
   }

  public getHomepageData(): Observable<HomePageAssets>{
    return this.api.get<HomePageAssets>(environment.cmsUrl, 'home-page');
  }

  public getAboutPageData(): Observable<AboutPageAssets>{
    return this.api.get<AboutPageAssets>(environment.cmsUrl, 'about-page');
  }

  public getExhibitions(): Observable<Article[]>{
    return this.api.get<Article[]>(environment.cmsUrl, 'event-articles?event_type.type=Exhibition').pipe(
      map(articles => this.sortByDate(articles))
    );
  }

  public getBooks(): Observable<Article[]>{
    return this.api.get<Article[]>(environment.cmsUrl, 'event-articles?event_type.type=Book').pipe(
      map(articles => this.sortByDate(articles))
    );
  }

  public getEssays(): Observable<Article[]>{
    return this.api.get<Article[]>(environment.cmsUrl, 'event-articles?event_type.type=Essay').pipe(
      map(articles => this.sortByDate(articles))
    );
  }

  public getTeaching(): Observable<Article[]>{
    return this.api.get<Article[]>(environment.cmsUrl, 'event-articles?event_type.type=Teaching').pipe(
      map(articles => this.sortByDate(articles))
    );
  }

  public getTalks(): Observable<Article[]>{
    return this.api.get<Article[]>(environment.cmsUrl, 'event-articles?event_type.type=Talk').pipe(
      map(articles => this.sortByDate(articles))
    );
  }

  public getMainTalkImg(): Observable<string> {
    return this.api.get<any>(environment.cmsUrl, 'talk-page').pipe(
      map(articles => articles.mainImage.url)
    );
  }

  public getDate(date: Date): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const jsDate = new Date(date);
    return `${jsDate.getDay()} ${monthNames[jsDate.getMonth()]} ${jsDate.getFullYear()}`;

  }

  private sortByDate(articles: Article[]): Article[] {
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
