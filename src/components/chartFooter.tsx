import { useState } from 'react';
import { calculateDifferenceDateParamAndDateNow } from '../controllers/calculateDifferenceDateParamAndDateNow';
import useInterval from 'use-interval';

interface ChartFooterProps {
  lastError: Date;
  sinceLastSynce: Date;
  dailyErrorCount: number;
}

interface TimeDiff {
  minutes: number;
  seconds: number;
}

function timeStringBilder(timeDiff: TimeDiff): string {
  if (timeDiff.minutes && timeDiff.minutes !== 0) {
    return ` ${timeDiff.minutes} min ${timeDiff.seconds} sec`;
  } else {
    return `${timeDiff.seconds} sec`;
  }
}

function ChartFooter({
  lastError,
  sinceLastSynce,
  dailyErrorCount,
}: ChartFooterProps) {
  const [TimerString, setTimerString] = useState('');

  useInterval(() => {
    const diff = calculateDifferenceDateParamAndDateNow(
      sinceLastSynce,
      new Date()
    );
    setTimerString(timeStringBilder(diff));
  }, 1000);

  return (
    <div
      className="flex flex-col sm:flex-row justify-between pt-4 text-xs"
      style={{ color: 'hsl(240,26%,76%)' }}
    >
      <p>
        Last error:{' '}
        {lastError.toLocaleString('en-Ca', {
          year: 'numeric',
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })}
      </p>
      <p>Since last synce: {TimerString}</p>
      <p>Daily error count: {dailyErrorCount}</p>
    </div>
  );
}

export default ChartFooter;
