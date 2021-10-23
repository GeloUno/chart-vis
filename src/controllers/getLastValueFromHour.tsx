import { DataViewChart } from '../models/systemData';

export function getLastValueFromHour(data: DataViewChart[]) {
  return data[0].Value;
}
