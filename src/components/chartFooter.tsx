interface ChartFooterProps {
  lastError: Date;
  sinceLastSynce: Date;
  dailyErrorCount: number;
}

function ChartFooter({
  lastError,
  sinceLastSynce,
  dailyErrorCount,
}: ChartFooterProps) {
  console.log(
    '<- LOG -> file: chartFooter.tsx -> line 12 -> sinceLastSynce',
    sinceLastSynce
  );

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
      <p>
        Since last synce:{' '}
        {sinceLastSynce.toLocaleString('en-Ca', {
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })}
      </p>
      <p>Daily error count: {dailyErrorCount}</p>
    </div>
  );
}

export default ChartFooter;
