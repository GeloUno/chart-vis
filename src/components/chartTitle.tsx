import React from 'react';
import { colorDark } from '../shared/colors';

import { SystemData } from '../models/systemData';

interface ChartTitleProps {
  data: SystemData;
  AvgResponseTime: number;
}

function ChartTitle({ data, AvgResponseTime }: ChartTitleProps) {
  return (
    <div className="flex flex-row justify-between p-2">
      <div className=" ">
        <div className={' text-xl uppercase sm:text-3xl'}>{data.Name}</div>
        <p className={'text-xs sm:text-sm py-2'} style={{ color: colorDark }}>
          {data.Url}{' '}
        </p>
      </div>
      <div className=" flex flex-col justify-center text-center text-base sm:text-2xl ">
        <h4 style={{ color: colorDark }}>{AvgResponseTime}ms</h4>
        <p style={{ fontSize: '11px', color: colorDark }}>
          Average response time
        </p>
      </div>
    </div>
  );
}

export default ChartTitle;
