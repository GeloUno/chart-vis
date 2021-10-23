import { DataViewChart } from '../models/systemData';

export function getMax(data: DataViewChart[]) {
  return Math.max(...data.map((d) => d.Value));
}
