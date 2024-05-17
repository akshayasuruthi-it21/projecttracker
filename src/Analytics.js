import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Analytics = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const Chart = () => {
      setChartData({
        labels: ["22/03", "23/03", "24/03", "25/03", "26/03", "27/03"],
        datasets: [
          {
            label: "# of Votes",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    };
    Chart();
  }, []);

  return (
    <div className="App">
      <h1>Bar Chart</h1>
      <div>
        {chartData.labels ? (
          <Bar
            data={chartData}
            options={{
              responsive: true,
              title: { text: "THICCNESS SCALE", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default Analytics;
