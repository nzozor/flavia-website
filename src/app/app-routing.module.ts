import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { EssaysComponent } from './pages/essays/essays.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsComponent } from './pages/news/news.component';
import { TalksComponent } from './pages/talks/talks.component';
import { TeachingComponent } from './pages/teaching/teaching.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'essays', component: EssaysComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'contact', component: NewsComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
