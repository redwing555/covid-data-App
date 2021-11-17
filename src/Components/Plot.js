import React from 'react';
import { Line } from 'react-chartjs-2';
import Proptypes from 'prop-types';

const Plot = ({ plotData, title }) => {
  const config = {
    plugins: {
      legends: {
        labels: {
          color: '#fff',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
  };

  const data = {
    labels: ['10', '20', '30', '40', '50', '60', '70'],
    datasets: [
      {
        label: ` number of ${title}`,
        data: plotData,
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#e9bf27',
        borderWidth: '1',
        pointRadius: '3',
      },
    ],
  };

  return (
    <>
      <div>
        <span> Last weeks data</span>
      </div>
      <Line data={data} options={config} />
    </>
  );
};

Plot.propTypes = {
  plotData: Proptypes.arrayOf(Proptypes.number).isRequired,
  title: Proptypes.string.isRequired,
};

export default Plot;
