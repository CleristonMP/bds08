import axios from 'axios';
import { FilterData } from '../components/filter-card';

const baseURL = 'http://localhost:8080';

export const requestBackend = axios.create({
  baseURL
});
