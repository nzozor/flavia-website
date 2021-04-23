import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterViewportDirective } from './shared/directives/enter-viewport.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { QuoteComponent } from './quote/quote.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { BooksComponent } from './pages/books/books.component';
import { EssaysComponent } from './pages/essays/essays.component';
import { TeachingComponent } from './pages/teaching/teaching.component';
import { TalksComponent } from './pages/talks/talks.component';
import { NewsComponent } from './pages/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterViewportDirective,
    FooterComponent,
    UpcomingComponent,
    QuoteComponent,
    HeaderComponent,
    HomePageComponent,
    AboutComponent,
    ExhibitionsComponent,
    BooksComponent,
    EssaysComponent,
    TeachingComponent,
    TalksComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
