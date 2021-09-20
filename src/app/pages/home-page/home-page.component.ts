import { Component, Inject, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { CmsService } from 'src/app/shared/services/cms.service';
import { SwiperOptions } from 'swiper';
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
  
  config: SwiperOptions = {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: { el: '.swiper-pagination', clickable: true, type: 'bullets', },
    autoHeight: true,
    loop: true
  };

  reviews = [
    {
      reviewerName: 'Irina Litvinova, Marketing Consultant',
      quote : 'I’ve been working closely with Elsa for 4 branding projects already and I can highly recommend her as a graphic designer and creative marketing expert. Elsa has an excellent eye for details and great communication skills which makes the work on the project going smooth and efficient. Elsa is great in incorporating current visual trends, brand identity and company’s values so it all strengthens the brand.'
    },
    {
      quote : 'It is an absolute joy to work with Elsa. She has a keen eye for design and is most efficient, even when working under extreme pressure. She is most reliable and promptly addresses any issues that may arise in a creative and constructive manner. I cannot recommend her highly enough!',
      reviewerName: 'Flavia Frigeri, Art Historian and Curator'
    },
    {
      reviewerName: 'Owner of Beauti Skin Clinic',
      quote: 'I can’t be happier with the job Elsa and her team did on my brand and website. She understood immediately my ideas and the needs of my business and created an elegant but user friendly website, which reflects completely the image of my clinic. The result of her work made my business to grow faster both in quantity and quality.'
    },
    {
      quote: 'I worked with Elsa on creating branding visuals such as logos designs and websites UI designs in the past, she listens to my needs, very responsive to feedback, always produced quality works. I would definitely work with her again.',
      reviewerName: 'Pauline Guo, Entrepreneur'
    },
  ];
  
  constructor(@Inject(DOCUMENT) private document: Document, private cms: CmsService) { }

  loadingAssets  = false;
  assets: HomePageAssets;
  exhibition: Article;
  isBookArticle = false;
  ngOnInit(): void {
      this.loadAssets();
      this.loadExhibitions();
  };

  next(): void {
    const el: any = this.document.querySelector('.swiper-container');
    el?.swiper.slideNext();
  }

  prev(): void {
    const el: any = this.document.querySelector('.swiper-container');
    el?.swiper.slidePrev();
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
