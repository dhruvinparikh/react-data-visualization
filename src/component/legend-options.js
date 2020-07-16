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
  const [textAreaValue, setTextAreaValue] = React.useState(
    JSON.stringify(legendOpts)
  );

  const applyLegendSettings = () => {
    try {
      setLegend(JSON.parse(textAreaValue));
    } catch (e) {
      alert(e.message);
      throw Error(e);
    }
  };

  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div>
      <h2>Legend Options Example</h2>
      <textarea
        cols="40"
        rows="15"
        onChange={handleChange}
        defaultValue={JSON.stringify(legend, null, 2)}
      ></textarea>
      <div>
        <button onClick={applyLegendSettings}>Apply legend settings</button>
      </div>
      <Pie data={data} legend={legend} redraw />
    </div>
  );
}

export default LegendOptions;
