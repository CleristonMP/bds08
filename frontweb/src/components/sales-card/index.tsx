import ReactApexChart from 'react-apexcharts';
import { donutChartConfig } from './chart-options';
import './styles.css';

type Props = {
  labels: string[];
  series: number[];
};

function SalesCard({ labels, series }: Props) {
  return (
    <div className="sales-card-component base-card">
      <div className="sales-summary">
        <h2>R$ 746.484,00</h2>
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
