import { nanoid } from 'nanoid';
import { DataViewChart } from '../models/systemData';
import ChartGraph from './chartGraph';

import { getColorType } from '../shared/colors';
import { TypeDataSystem } from '../models/TypeDataSystem';
import ChartNumber from './chartNumber';

interface CharViewProps extends TypeDataSystem {
  data?: DataViewChart[];
}

function getMax(data: DataViewChart[]) {
  return Math.max(...data.map((d) => d.Value));
}
function getAvg(data: DataViewChart[]) {
  const numberHelper = 0;

  const arrayHelper = [...data.map((a) => +a.Value)];

  const sum = arrayHelper.reduce((a, b) => a + b, 0);
  if (arrayHelper.length === 0) {
    return 0;
  }

  return sum / arrayHelper.length;
}

function ChartView({ data, typeData }: CharViewProps) {
  if (!data) {
    return <div>No data</div>;
  }

  const color = getColorType({ typeData });

  const max = getMax(data);

  const avg = getAvg(data);

  return (
    <div className="flex flex-row">
      {data.map((data, index) => {
        const hours = new Date(data.Date).getHours();
        const houerToShow = index % 4 === 0 ? `${hours}` : ``;

        // const houerToShow = hours % 4 === 0 ? `${hours}` : ``;

        const valuePercentage = Math.floor((data.Value / max) * 100);

        return (
          <div key={nanoid()}>
            <ChartGraph
              heightPercentage={valuePercentage}
              value={data.Value}
              color={color}
            />
            <p
              className="flex"
              style={{ fontSize: '0.5rem', color: `${color}` }}
            >
              {houerToShow}
            </p>
          </div>
        );
      })}
      <ChartNumber key={nanoid()} color={color} typeData={typeData} avg={avg} />
    </div>
  );
}

export default ChartView;
