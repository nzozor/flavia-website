export interface Article {
  title: string;
  titleSecond?: string;
  description: string;
  location: string;
  readMoreLink: string;
  date: Date;
  endDate: Date;
  event_type?: { type: 'Book' | 'Exhibition'};
  image: {
    url: string;
    formats: { small: { url: string }};
  };
}
