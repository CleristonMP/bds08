import './App.css';
import Header from './components/header';
import FilterCard from './components/filter-card';
import SalesCard from './components/sales-card';
import { useEffect, useState } from 'react';
import { SalesByGenderData } from './types';
import { requestBackend } from './utils/requests';
import { buildDonutLabels, buildDonutSeries } from './components/sales-card/helpers';

function App() {
  const [labels, setLabels] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);

  useEffect(() => {
    requestBackend
      .get<SalesByGenderData[]>('/sales/by-gender')
      .then((response) => {
        setLabels(buildDonutLabels(response.data));
        setSeries(buildDonutSeries(response.data));
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterCard onFilterChange={() => undefined} />
        <SalesCard labels={labels} series={series} storeId={0} />
      </div>
    </div>
  );
}

export default App;
