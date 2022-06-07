import axios from 'axios';
import { FilterData } from '../types';

const baseURL = 'http://localhost:8080';

export const requestBackend = axios.create({
  baseURL
});

export const buildFilterParams = (filterData: FilterData) => {
  if (filterData.store.id === null) {
    return { storeId: 0 };
  }

  return {
    storeId: filterData.store.id
  };
};
