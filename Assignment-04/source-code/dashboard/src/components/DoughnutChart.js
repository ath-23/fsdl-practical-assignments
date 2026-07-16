import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the elements required for a Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ percent, label, color = '#3b82f6' }) => {
  const data = {
    labels: [label, 'Remaining'],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: [color, '#f1f5f9'], // Main color and a light grey background
        borderWidth: 0,
        circumference: 180, // Makes it a semi-circle (gauge style)
        rotation: 270,      // Tilts it to sit at the top
        cutout: '80%',      // Adjusts the thickness of the ring
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide legend for a cleaner look
      tooltip: { enabled: true },
    },
  };

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <Doughnut data={data} options={options} />
      {/* Centered text overlay */}
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{percent}%</span>
      </div>
    </div>
  );
};