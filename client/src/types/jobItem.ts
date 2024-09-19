export interface Item {
  _id: string;
  company: string;
  contract: string;
  isRecentlyCreated: boolean;
  featured: boolean;
  languages: string[];
  level: string;
  location: string;
  logo: string;
  position: string;
  postedAt: string;
  role: string;
  tools: string[];
}

export interface JobItemTypes {
  item: Item;
}
