import { SalesByGenderData } from '../../types';

export const buildDonutLabels = (data: SalesByGenderData[]) => {
  return data.map(({ gender }) => String([gender]));
};

export const buildDonutSeries = (data: SalesByGenderData[]) => {
  return data.map(({ sum }) => sum);
};
