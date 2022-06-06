import ReactApexChart from 'react-apexcharts';
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
          options={{
            labels,
            colors: ['#FF7A00', '#7234F5', '#FF0000'],
            legend: {
              position: 'bottom',
              fontFamily: 'Ubuntu, sans-serif',
              itemMargin: {
                vertical: 7
              }
            },
            chart: {
              type: 'donut'
            }
          }}
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
