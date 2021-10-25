interface ChartBackgroundProps {
  children: React.ReactNode;
}

function ChartBackground({ children }: ChartBackgroundProps) {
  return (
    <div
      className="p-5 w-full sm:w-auto"
      style={{
        background:
          'linear-gradient(0deg,hsla(0,0%,0%,24%),hsla(201,76%,23%,32%)) no-repeat',
      }}
    >
      {children}
    </div>
  );
}

export default ChartBackground;
