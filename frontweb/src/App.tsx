import './App.css';
import Header from './components/header';
import FilterCard from './components/filter-card';
import SalesCard from './components/sales-card';
import { useEffect, useMemo, useState } from 'react';
import { FilterData, SalesByGenderData, SalesSummaryData } from './types';
import { buildFilterParams, requestBackend } from './utils/requests';
import { buildDonutLabels, buildDonutSeries } from './components/sales-card/helpers';

function App() {
  const [filterData, setFilterData] = useState<FilterData>({
    store: {
      id: 0,
      name: ''
    }
  });

  const [labels, setLabels] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);
  const [summary, setSummary] = useState<SalesSummaryData>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  useEffect(() => {
    requestBackend
      .get<SalesByGenderData[]>('/sales/by-gender', { params })
      .then((response) => {
        setLabels(buildDonutLabels(response.data));
        setSeries(buildDonutSeries(response.data));
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  useEffect(() => {
    requestBackend
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterCard onFilterChange={onFilterChange} />
        {summary && <SalesCard labels={labels} series={series} summary={summary?.sum} />}
      </div>
    </div>
  );
}

export default App;
