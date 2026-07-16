import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement } from 'chart.js';

ChartJS.register(BarElement);

export const BarChart = ({ dataValues }) => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Rainfall (mm)',
      data: dataValues,
      backgroundColor: '#60a5fa',
      borderRadius: 10, // Rounded bars for modern look
    }]
  };

  return <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
};