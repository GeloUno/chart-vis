import React from 'react';
import { TypeDataSystem } from '../models/TypeDataSystem';

interface ChartNumberProps extends TypeDataSystem {
  color: string;
  avg: number;
}

function ChartNumber({ color, typeData, avg }: ChartNumberProps) {
  return (
    <div
      className={`flex flex-col justify-center w-full pl-12 relative ${
        typeData !== 'Operations' ? `-top-4` : ``
      }`}
      style={{ color }}
    >
      <div className=" text-center w-full" style={{ fontSize: '33px' }}>
        3
      </div>
      {typeData !== 'Operations' && (
        <div
          className=" text-center w-full opacity-70"
          style={{ fontSize: '15px' }}
        >
          {`(${Math.floor(avg)})`}
        </div>
      )}
      {typeData === 'Operations' && <div>{''}</div>}
      <div className=" text-center w-full" style={{ fontSize: '11px' }}>
        {typeData} in last houer
      </div>
    </div>
  );
}

export default ChartNumber;
