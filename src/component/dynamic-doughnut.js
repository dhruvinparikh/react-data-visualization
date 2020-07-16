import React from "react";
import { Doughnut } from "react-chartjs-2";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function DynamicDoughnut() {
  const initialState = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [
          getRandomInt(50, 200),
          getRandomInt(100, 150),
          getRandomInt(150, 250),
        ],
        backgroundColor: ["#CCC", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const [dnData, setDnData] = React.useState(initialState);

  useInterval(() => {
    setDnData(dnData);
  }, 10000);

  return (
    <div>
      <h2>Dynamicly refreshed Doughnut Example</h2>
      <Doughnut data={dnData} />
    </div>
  );
}

export default DynamicDoughnut;
