import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export const AQIChart = ({ dataValues }) => {
  const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'AQI Index',
      data: dataValues,
      borderColor: '#10b981', 
      borderWidth: 2,
      pointBackgroundColor: '#10b981',
      pointRadius: 4,      
      pointHoverRadius: 6,
      tension: 0,          
      fill: false          
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false } 
      },
      x: { grid: { display: false } }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return <Line data={data} options={options} />;
};