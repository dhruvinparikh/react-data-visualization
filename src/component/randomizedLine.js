import React from "react";
import { Line } from "react-chartjs-2";

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const initialState = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

function Graph() {
  const [lineData, setLineData] = React.useState(initialState);

  useInterval(() => {
    var oldDataSet = lineData.datasets[0];
    var newData = [];

    for (var x = 0; x < lineData.labels.length; x++) {
      newData.push(Math.floor(Math.random() * 100));
    }

    var newDataSet = {
      ...oldDataSet,
    };

    newDataSet.data = newData;

    var newState = {
      ...initialState,
      datasets: [newDataSet],
    };

    setLineData(newState);
  }, 5000);
  return <Line data={lineData} />;
}

function RandomLine() {
  return (
    <div>
      <h2>Random Animated Line Example</h2>
      <Graph />
    </div>
  );
}

export default RandomLine;
