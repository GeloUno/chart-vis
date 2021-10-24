import { calculateDifferenceDateParamAndDateNow } from './calculateDifferenceDateParamAndDateNow';
describe('calculate Difference Date Param And Date Now', () => {
    it('should return hours:0 minutes:0 seconds:0', () => {
        const datePram = new Date(2021, 9, 24, 14, 11, 23);
        const dateNow = new Date(2021, 9, 24, 14, 11, 23);

        const calcDate = calculateDifferenceDateParamAndDateNow(datePram, dateNow)

        expect(calcDate).toEqual({ hours: 0, minutes: 0, seconds: 0 })

    });
    it('should return hours:0 minutes:0 seconds:0', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 48);

        const calcDate = calculateDifferenceDateParamAndDateNow(datePram, dateNow)

        expect(calcDate).toEqual({ hours: 0, minutes: 0, seconds: 0 })

    });
    it('should return hours:0 minutes:0 seconds:30', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 48, 30);

        const calcDate = calculateDifferenceDateParamAndDateNow(datePram, dateNow)

        expect(calcDate).toEqual({ hours: 0, minutes: 0, seconds: 30 })

    });
    it('should return hours:0 minutes:12 seconds:15', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 35, 45);

        const calcDate = calculateDifferenceDateParamAndDateNow(datePram, dateNow)

        expect(calcDate).toEqual({ hours: 0, minutes: 12, seconds: 15 })

    });
    it('should return hours:0 minutes:0 seconds:45', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 48, 45);

        const calcDate = calculateDifferenceDateParamAndDateNow(datePram, dateNow)

        expect(calcDate).toEqual({ hours: 0, minutes: 0, seconds: 45 })

    });
    it('should return hours:0 minutes:0 seconds:15', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 48, 15);

        const calcDate = calculateDifferenceDateParamAndDateNow(datePram, dateNow)

        expect(calcDate).toEqual({ hours: 0, minutes: 0, seconds: 15 })

    });
    it('toggle params should return hours:0 minutes:0 seconds:15', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 48, 15);

        const calcDate = calculateDifferenceDateParamAndDateNow(dateNow, datePram)

        expect(calcDate).toEqual({ hours: 0, minutes: 0, seconds: 15 })

    });
    it('toggle params should return hours:0 minutes:0 seconds:45', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 48, 45);

        const calcDate = calculateDifferenceDateParamAndDateNow(dateNow, datePram)

        expect(calcDate).toEqual({ hours: 0, minutes: 0, seconds: 45 })

    });
    it('toggle params should return hours:0 minutes:2 seconds:45', () => {
        const datePram = new Date('2021-10-24 18:48');
        const dateNow = new Date(2021, 9, 24, 18, 50, 45);

        const calcDate = calculateDifferenceDateParamAndDateNow(dateNow, datePram)

        expect(calcDate).toEqual({ hours: 0, minutes: 2, seconds: 45 })

    });
});