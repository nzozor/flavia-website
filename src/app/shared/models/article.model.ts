export interface Article {
  title: string;
  titleSecond?: string;
  description: string;
  location: string;
  readMoreLink: string;
  date: Date;
  endDate: Date;
  image: {
    url: string;
    formats: { small: { url: string }};
  };
}
