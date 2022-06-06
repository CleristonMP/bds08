import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { SalesSummaryData } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { requestBackend } from '../../utils/requests';
import { donutChartConfig } from './chart-options';
import './styles.css';

type Props = {
  labels: string[];
  series: number[];
  storeId?: number;
};

function SalesCard({ labels, series, storeId = 0 }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>();

  useEffect(() => {
    requestBackend
      .get<SalesSummaryData>('/sales/summary', { params: { storeId } })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [storeId]);

  return (
    <div className="sales-card-component base-card">
      <div className="sales-summary">
        <h2>{summary ? formatPrice(summary?.sum) : formatPrice(0)}</h2>
        <span>Total de vendas</span>
      </div>
      <div className="sales-by-gender">
        <ReactApexChart
          options={donutChartConfig(labels)}
          type="donut"
          width="100%"
          height={335}
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesCard;
