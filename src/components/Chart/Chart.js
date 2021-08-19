import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArryValaue = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaxValue = Math.max(...valueArryValaue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
