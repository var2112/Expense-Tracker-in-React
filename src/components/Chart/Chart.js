import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const maxDataPoint = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log(maxDataPoint);
  const totalMaximum = Math.max(...maxDataPoint);
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={totalMaximum}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
