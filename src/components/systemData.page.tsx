import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getSystemData, ErrorSystem } from '../controllers/getSystemData';
import { SystemData } from '../models/systemData';
import ChartView from './chartView';
import { nanoid } from 'nanoid';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { getColorType } from '../shared/colors';
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
  console.log(
    '<- LOG -> file: systemData.page.tsx -> line 25 -> SystemDataPage -> data',
    data
  );

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

  return (
    <div>
      <div className="py-4">
        <div className={' text-3xl uppercase '}>{data.data.Name}</div>
        <p className={' text-sm py-2 opacity-50'}>{data.data.Url}</p>
      </div>
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
