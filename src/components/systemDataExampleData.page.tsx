import { SystemData } from '../models/systemData';
import ChartView from './chartView';
import { nanoid } from 'nanoid';

import ChartTitle from './chartTitle';
import ChartFooter from './chartFooter';
import ChartBackground from './chartBackground';
import { useWindowWidth } from '@react-hook/window-size';

interface SystemDataPageExampleDateProps {
  data: SystemData;
}

function SystemDataPageExampleDate({ data }: SystemDataPageExampleDateProps) {
  const width = useWindowWidth();
  const lenghtChart = width > 500 ? 36 : width > 340 ? 18 : 9;

  const AvgResponseTime: number = data.AvgResponseTime;
  const DailyErrorCount: number = data.DailyErrorCount;

  const LastErrorStr: Date = new Date(data.LastErrorStr);
  const LastSyncStr: Date = new Date(data.LastSyncStr);

  return (
    <ChartBackground>
      <>
        <ChartTitle data={data} AvgResponseTime={AvgResponseTime} />
        <ChartView
          key={nanoid()}
          data={data.Errors.slice(0, lenghtChart)}
          typeData="Errors"
        />
        <ChartView
          key={nanoid()}
          data={data.Warnings.slice(0, lenghtChart)}
          typeData="Warnings"
        />
        <ChartView
          key={nanoid()}
          data={data.Operations.slice(0, lenghtChart)}
          typeData="Operations"
        />
        <ChartFooter
          lastError={LastErrorStr}
          sinceLastSynce={LastSyncStr}
          dailyErrorCount={DailyErrorCount}
        />
      </>
    </ChartBackground>
  );
}

export default SystemDataPageExampleDate;
