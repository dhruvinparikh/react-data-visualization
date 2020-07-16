import React from "react";
import { Pie } from "react-chartjs-2";

function LegendOptions() {
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const legendOpts = {
    display: true,
    position: "top",
    fullWidth: true,
    reverse: false,
    labels: {
      fontColor: "rgb(255, 99, 132)",
    },
  };

  const [legend, setLegend] = React.useState(legendOpts);
  const inputEl = React.useRef(null);

  return (
    <div>
      <h2>Legend Options Example</h2>
      <textarea
        cols="40"
        rows="15"
        ref={inputEl}
        defaultValue={JSON.stringify(legend, null, 2)}
      ></textarea>
      <div>
        <button
          onClick={() => {
            setLegend(JSON.parse(inputEl.current.value));
          }}
        >
          Apply legend settings
        </button>
      </div>
      <Pie data={data} legend={legend} redraw />
    </div>
  );
}

export default LegendOptions;
