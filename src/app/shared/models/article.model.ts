export interface Article {
  title: string;
  description: string;
  location: string;
  readMoreLink: string;
  date: Date;
  image: {
    url: string;
    formats: { small: { url: string }};
  };
}
