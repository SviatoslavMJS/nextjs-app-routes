export type Comment = {
  id: string;
  name: string;
  text: string;
  email: string;
};

export type Event = {
  id: string;
  date: string;
  title: string;
  image: string;
  location: string;
  imageAlt?: string;
  isFeatured?: boolean;
};

export type DateFiller = {
  year: number;
  month: number;
};
