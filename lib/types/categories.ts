export enum CATEGORIES {
  MISCELLANEOUS = "miscellaneous",
  FOOD = "food",
  TRAVEL = "travel",
  ENTERTAINMENT = "enternainment",
  OFFICE = "office",
  WAGES = "wages",
  REVENUE = "revenue",
}

export interface Category {
  id: string;
  category: CATEGORIES;
}
