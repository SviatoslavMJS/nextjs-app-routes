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
  description?: string;
};

export type DateFilter = {
  year: number;
  month: number;
};
