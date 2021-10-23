import { DataViewChart } from '../models/systemData';

export function getAvg(data: DataViewChart[]) {
  const arrayHelper = [...data.map((a) => +a.Value)];

  const sum = arrayHelper.reduce((a, b) => a + b, 0);
  if (arrayHelper.length === 0) {
    return 0;
  }

  return sum / arrayHelper.length;
}
