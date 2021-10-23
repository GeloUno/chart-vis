import ReactTooltip from 'react-tooltip';
import { nanoid } from 'nanoid';

interface ChartGraphProps {
  heightPercentage: number;
  value: number;
  color: string;
}

function ChartGraph({ heightPercentage, value, color }: ChartGraphProps) {
  const widthChart = 4;
  const percentagesHeightGraph = 0.5;
  const id = nanoid();

  return (
    <div
      className="flex h-full "
      style={{
        width: `${widthChart}px`,
        height: `${percentagesHeightGraph * 100}px`,
        margin: `0 ${widthChart / 1.6}px`,
      }}
    >
      <div
        data-tip
        data-for={`sysDataToolTip${id}`}
        className={`flex self-end`}
        style={{
          width: `${widthChart}px`,
          height: `${percentagesHeightGraph * heightPercentage}px`,
          backgroundColor: `${color}`,
        }}
      >
        {''}
      </div>
      <ReactTooltip id={`sysDataToolTip${id}`}>
        <p>{value}</p>
      </ReactTooltip>
    </div>
  );
}

export default ChartGraph;
