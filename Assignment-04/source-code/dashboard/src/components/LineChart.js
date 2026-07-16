import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const LineChart = ({ dataValues }) => {
  const data = {
    labels: ['6am', '9am', '12pm', '3pm', '6pm', '9pm', '12am'],
    datasets: [{
      fill: true,
      label: 'Temperature (°C)',
      data: dataValues,
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4, 
    }]
  };

  return <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
};