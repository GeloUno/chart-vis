interface ChartBackgroundProps {
  children: React.ReactNode;
}

function ChartBackground({ children }: ChartBackgroundProps) {
  return (
    <div
      className="p-5"
      style={{
        background:
          'linear-gradient(0deg,hsla(0,0%,0%,24%),hsla(201,76%,23%,32%)) no-repeat',
        minWidth: '350px',
      }}
    >
      {children}
    </div>
  );
}

export default ChartBackground;
