import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getSystemData, ErrorSystem } from '../controllers/getSystemData';
import { SystemData } from '../models/systemData';
import ChartView from './chartView';
import { nanoid } from 'nanoid';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { getColorType } from '../shared/colors';
import { colorDark } from './../shared/colors';
import ChartTitle from './chartTitle';
import ChartFooter from './chartFooter';
//

function SystemDataPage() {
  const {
    data,
    isLoading,
    isError,
  }: // error,
  {
    data: AxiosResponse<SystemData> | undefined;
    isLoading: boolean;
    isError: boolean;
    error: ErrorSystem | null;
  } = useQuery('systemData', getSystemData, {
    // refetchInterval: 20000,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <ScaleLoader color={getColorType({ typeData: 'Errors' })} margin={5} />
        <ScaleLoader
          color={getColorType({ typeData: 'Warnings' })}
          margin={5}
        />
        <ScaleLoader
          color={getColorType({ typeData: 'Operations' })}
          margin={5}
        />
      </div>
    );
  }
  if (isError || data === undefined) {
    return <div>error</div>;
  }

  const AvgResponseTime: number = data.data.AvgResponseTime;
  const AvgResponseTimeAlertLimit: number = data.data.AvgResponseTimeAlertLimit;
  const AvgResponseTimeWarningLimit: number =
    data.data.AvgResponseTimeWarningLimit;
  const DailyErrorCount: number = data.data.DailyErrorCount;

  const LastErrorStr: Date = new Date(data.data.LastErrorStr);
  const LastSyncStr: Date = new Date(data.data.LastSyncStr);

  return (
    <div
      className="p-5"
      style={{
        background:
          'linear-gradient(0deg,hsla(0,0%,0%,24%),hsla(201,76%,23%,32%)) no-repeat',
      }}
    >
      <ChartTitle data={data.data} AvgResponseTime={AvgResponseTime} />
      <ChartView
        key={nanoid()}
        data={data.data.Errors.slice(0, 38)}
        typeData="Errors"
      />
      <ChartView
        key={nanoid()}
        data={data?.data.Warnings.slice(0, 38)}
        typeData="Warnings"
      />
      <ChartView
        key={nanoid()}
        data={data?.data.Operations.slice(0, 38)}
        typeData="Operations"
      />
      <ChartFooter
        lastError={LastErrorStr}
        sinceLastSynce={LastSyncStr}
        dailyErrorCount={DailyErrorCount}
      />
    </div>
  );
}

export default SystemDataPage;
