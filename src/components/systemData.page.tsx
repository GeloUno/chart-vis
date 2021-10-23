import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getSystemData, ErrorSystem } from '../controllers/getSystemData';
import { SystemData } from '../models/systemData';

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

  return <div></div>;
}

export default SystemDataPage;
