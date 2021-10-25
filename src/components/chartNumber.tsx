import React from 'react';
import { TypeDataSystem } from '../models/TypeDataSystem';

interface ChartNumberProps extends TypeDataSystem {
  color: string;
  avg: number;
  lastHour: number;
}

function ChartNumber({ color, typeData, avg, lastHour }: ChartNumberProps) {
  return (
    <div
      className={`flex flex-col justify-center w-full pl-12 relative ${
        typeData !== 'Operations' ? `-top-4` : ``
      }`}
      style={{ color }}
    >
      <div className=" text-center w-full text-4xl">{`${lastHour}`}</div>
      {typeData !== 'Operations' && (
        <div className=" text-center w-full opacity-70 text-sm">
          {`(${Math.floor(avg)})`}
        </div>
      )}
      {typeData === 'Operations' && <div>{''}</div>}
      <div className=" text-center w-full text-sm">{typeData} in last hour</div>
    </div>
  );
}

export default ChartNumber;
