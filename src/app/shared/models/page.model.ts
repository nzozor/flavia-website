export interface Page {
  title: string;
  intro: string;
  introImage: {
    url: string;
    formats: { small: { url: string }};
  };
}
