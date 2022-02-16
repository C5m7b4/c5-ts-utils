import { formatDate, formatMoney, formatTimeString } from '../utils';

describe('formatDate', () => {
  it('should return an empty string when undefined is passed in', () => {
    expect(formatDate(undefined)).toBe('');
  });
  it('should return an empty string when a null value is passed in', () => {
    expect(formatDate(null)).toBe('');
  });
  it('should return an empty string if an empty string is passed in', () => {
    expect(formatDate('')).toBe('');
  });
  it('should return a formatted date if a string date is passed in', () => {
    expect(formatDate('1/1/2021')).toBe('1/1/2021');
  });
  it('should return a formatted date if a date object is passed in with the time', () => {
    const stringDate = '11/12/2021 5:00 pm';
    const newDate = new Date(stringDate);
    expect(formatDate(newDate)).toBe('11/12/2021');
  });
  it('should return an empty string if an object is passed in', () => {
    const myObj = {
      name: 'mike',
    };
    expect(formatDate(myObj)).toBe('');
  });
});

describe('formatTimeString', () => {
  it('should return an empty string when input is undefined', () => {
    // @ts-ignore
    expect(formatTimeString(undefined)).toEqual('');
  });
  it('should return an empty string when input is null', () => {
    // @ts-ignore
    expect(formatTimeString(null)).toEqual('');
  });
  it('should return an empty string if an empty string is passed in', () => {
    // @ts-ignore
    expect(formatTimeString('')).toEqual('');
  });
  it('should return 8:00 pm when input contains 8pm', () => {
    // @ts-ignore
    expect(formatTimeString(new Date('1/1/2021 8:00 pm'))).toEqual('8:00 pm');
  });
  it('should return 8:00 am when input contains 8pm', () => {
    // @ts-ignore
    expect(formatTimeString(new Date('1/1/2021 8:00 am'))).toEqual('8:00 am');
  });
  it('should return 0:00 when just a date string is passed in', () => {
    // @ts-ignore
    expect(formatTimeString('1/1/2021')).toEqual('12:00 am');
  });
  it("should return '7:15 am", () => {
    // @ts-ignore
    expect(formatTimeString('1/1/2021 7:15 am')).toEqual('7:15 am');
  });
});

describe('formatMoney', () => {
  it('should return 1 when no decimals are present', () => {
    expect(formatMoney('1', 0)).toEqual('1');
  });
  it("should return 1.0 when passed formatMoney('1', 1)", () => {
    expect(formatMoney('1', 1)).toEqual('1.0');
  });
  it("should return 100.00 when passed formatMoney('100', 2)", () => {
    expect(formatMoney('100', 2)).toEqual('100.00');
  });
  it("should return 1,000.00 when passed formatMoney('1000', 2)", () => {
    expect(formatMoney('1000', 2)).toEqual('1,000.00');
  });
  it('should return -1 when no decimals are present', () => {
    expect(formatMoney('-1', 0)).toEqual('-1');
  });
  it("should return -1.0 when passed formatMoney('-1', 1)", () => {
    expect(formatMoney('-1', 1)).toEqual('-1.0');
  });
  it("should return -100.00 when passed formatMoney('-100', 2)", () => {
    expect(formatMoney('-100', 2)).toEqual('-100.00');
  });
  it("should return -1,000.00 when passed formatMoney('-1000', 2)", () => {
    expect(formatMoney('-1000', 2)).toEqual('-1,000.00');
  });
  it('should return something when decimalCount is not a number', () => {
    // @ts-ignore
    expect(formatMoney('1000', 'n')).toEqual('1,000.00');
  });
});
