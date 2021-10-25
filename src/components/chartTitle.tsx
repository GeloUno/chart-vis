import React from 'react';
import { colorDark } from '../shared/colors';

import { SystemData } from '../models/systemData';

interface ChartTitleProps {
  data: SystemData;
  AvgResponseTime: number;
}

function ChartTitle({ data, AvgResponseTime }: ChartTitleProps) {
  return (
    <div className="flex flex-wrap justify-between p-2">
      <div className=" ">
        <div className={' text-xl uppercase sm:text-3xl'}>{data.Name}</div>
        <p className={'text-xs sm:text-sm py-2'} style={{ color: colorDark }}>
          {data.Url}{' '}
        </p>
      </div>
      <div className=" flex flex-col justify-center text-center text-sm sm:text-2xl ">
        <h4 className="text-2xl" style={{ color: colorDark }}>
          {AvgResponseTime.toLocaleString('fr-FR')}ms
        </h4>
        <p className="text-xs" style={{ color: colorDark }}>
          Average response time
        </p>
      </div>
    </div>
  );
}

export default ChartTitle;
