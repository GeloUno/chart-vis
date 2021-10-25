import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getSystemData, ErrorSystem } from '../controllers/getSystemData';
import { SystemData } from '../models/systemData';
import ChartView from './chartView';
import { nanoid } from 'nanoid';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { getColorType } from '../shared/colors';
import ChartTitle from './chartTitle';
import ChartFooter from './chartFooter';
import ChartBackground from './chartBackground';
import { useWindowWidth } from '@react-hook/window-size';

function SystemDataPage() {
  const width = useWindowWidth();
  const lenghtChart = width > 500 ? 36 : width > 340 ? 18 : 9;

  const {
    data,
    isLoading,
    isError,
  }: {
    data: AxiosResponse<SystemData> | undefined;
    isLoading: boolean;
    isError: boolean;
    error: ErrorSystem | null;
  } = useQuery('systemData', getSystemData, {
    refetchInterval: 20000,
  });

  if (isLoading) {
    return (
      <ChartBackground>
        <div className="flex flex-col items-center justify-center">
          <ScaleLoader
            color={getColorType({ typeData: 'Errors' })}
            margin={5}
          />
          <ScaleLoader
            color={getColorType({ typeData: 'Warnings' })}
            margin={5}
          />
          <ScaleLoader
            color={getColorType({ typeData: 'Operations' })}
            margin={5}
          />
        </div>
      </ChartBackground>
    );
  }
  if (isError || data === undefined) {
    return (
      <ChartBackground>
        <div
          className="flex flex-col items-center justify-center"
          style={{ color: 'red' }}
        >
          {' '}
          error
        </div>
      </ChartBackground>
    );
  }
  console.log(
    '<- LOG -> file: systemData.page.tsx -> line 20 -> SystemDataPage -> data',
    data.data
  );

  const AvgResponseTime: number = data.data.AvgResponseTime;
  const DailyErrorCount: number = data.data.DailyErrorCount;

  const LastErrorStr: Date = new Date(data.data.LastErrorStr);
  const LastSyncStr: Date = new Date(data.data.LastSyncStr);

  return (
    <ChartBackground>
      <>
        <ChartTitle data={data.data} AvgResponseTime={AvgResponseTime} />
        <ChartView
          key={nanoid()}
          data={data.data.Errors.slice(0, lenghtChart)}
          typeData="Errors"
        />
        <ChartView
          key={nanoid()}
          data={data?.data.Warnings.slice(0, lenghtChart)}
          typeData="Warnings"
        />
        <ChartView
          key={nanoid()}
          data={data?.data.Operations.slice(0, lenghtChart)}
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

export default SystemDataPage;
