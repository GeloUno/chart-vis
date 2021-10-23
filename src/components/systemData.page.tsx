import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getSystemData, ErrorSystem } from '../controllers/getSystemData';
import { SystemData } from '../models/systemData';
import ChartView from './chartView';
import { nanoid } from 'nanoid';

//

function SystemDataPage() {
  const {
    data,
    isLoading,
    isError,
    error,
  }: {
    data: AxiosResponse<SystemData> | undefined;
    isLoading: boolean;
    isError: boolean;
    error: ErrorSystem | null;
  } = useQuery('systemData', getSystemData, {
    refetchInterval: 10000,
  });

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError || data === undefined) {
    return <div>error</div>;
  }

  return (
    <div>
      <ChartView key={nanoid()} data={data.data.Errors} typeData="Errors" />
      <ChartView
        key={nanoid()}
        data={data?.data.Warnings}
        typeData="Warnings"
      />
      <ChartView
        key={nanoid()}
        data={data?.data.Operations}
        typeData="Operations"
      />
    </div>
  );
}

export default SystemDataPage;
