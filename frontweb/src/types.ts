export type Store = {
  id: number;
  name: string;
};

export type SalesSummaryData = {
  sum: number;
};

export type Gender = 'FEMALE' | 'MALE' | 'OTHER';

export type SalesByGenderData = {
  gender: Gender;
  sum: number;
};

export type FilterData = {
  store: Store;
};
