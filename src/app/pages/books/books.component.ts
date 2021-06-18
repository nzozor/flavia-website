import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { CmsService } from 'src/app/shared/services/cms.service';

@Component({
  selector: 'flavia-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private cms: CmsService) { }
  public loading  = false;
  public books: Article[];
  public ngOnInit(): void {
      this.loadBooks();
  }

  public get cmsUrl(): string {
    return this.cms.cmsUrl;
  }
  private loadBooks(): void {
    this.loading  = true;

    this.cms.getBooks().subscribe(data => {
      this.loading  = false;
      this.books = data;
    });
  }
}
