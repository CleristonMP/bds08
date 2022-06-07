import { ApexOptions } from 'apexcharts';

export const donutChartConfig = (labels: string[] = []) => {
  return {
    labels,
    dataLabels: {
      style: {
        fontSize: '12px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors: ['#FF7A00', '#7234F5', '#FF0000'],
    legend: {
      position: 'bottom',
      fontSize: '16px',
      labels: {
        colors: ['#8D8D8D']
      },
      fontFamily: 'Ubuntu, sans-serif',
      itemMargin: {
        vertical: 7
      }
    },
    chart: {
      type: 'donut'
    },
    noData: {
      text: 'Sem resultados',
      style: {
        color: '#FFF',
        fontSize: '16px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    plotOptions: {
      pie: {
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10
        },
        donut: {
          size: '60%',
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: 'small',
              fontFamily: 'Ubuntu, sans-serif',
              fontWeight: 700,
              color: '#334ac3',
              formatter: function (val) {
                const newVal = parseFloat(val);
                return new Intl.NumberFormat('pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL'
                }).format(newVal);
              }
            }
          }
        }
      }
    }
  } as ApexOptions;
};
