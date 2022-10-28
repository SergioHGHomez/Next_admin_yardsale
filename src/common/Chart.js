import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ charData }) => {
  return (
    <>
      <Bar
        data={charData}
        options={{
          title: {
            display: true,
            text: 'Categary',
            fontSize: 20,
          },
          Legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </>
  );
};
