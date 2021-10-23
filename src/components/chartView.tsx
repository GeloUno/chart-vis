import { nanoid } from 'nanoid';
import { DataViewChart } from '../models/systemData';
import ChartGraph from './chartGraph';

import { getColorType } from '../shared/colors';
import { TypeDataSystem } from '../models/TypeDataSystem';
import ChartNumber from './chartNumber';
import { getAvg } from '../controllers/getAvg';
import { getMax } from '../controllers/getMax';
import { getLastValueFromHour } from '../controllers/getLastValueFromHour';

interface CharViewProps extends TypeDataSystem {
  data?: DataViewChart[];
}

function ChartView({ data, typeData }: CharViewProps) {
  if (!data) {
    return <div>No data</div>;
  }

  const color = getColorType({ typeData });

  const max = getMax(data);

  const avg = getAvg(data);

  const lastHourData = getLastValueFromHour(data);

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
      <ChartNumber
        key={nanoid()}
        color={color}
        typeData={typeData}
        avg={avg}
        lastHour={lastHourData}
      />
    </div>
  );
}

export default ChartView;
