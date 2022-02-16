import {
  pad,
  addDays,
  getDayOfWeek,
  isPrime,
  convertSecondsToStringSentence,
} from '..';

describe('pad', () => {
  it('should return the object passed in when passing in an object. Only works on strings', () => {
    const myObj = { name: 'mike', age: 48 };
    // @ts-ignore
    expect(pad(myObj, 4, '0', 'left')).toMatchObject(myObj);
  });
  it('should return entire string when desiredLength is undefined', () => {
    // @ts-ignore
    expect(pad('123')).toEqual('123');
    // @ts-ignore
    expect(pad('123', undefined)).toEqual('123');
  });
  it('should return the entire string when desiredLength is null', () => {
    // @ts-ignore
    expect(pad('123', null)).toEqual('123');
  });
  it('should return the entire string when the desiredLength is not a number', () => {
    // @ts-ignore
    expect(pad('123', '5')).toEqual('123');
  });
  it('should return the entire string when padChar is undefined', () => {
    // @ts-ignore
    expect(pad('123', 5)).toEqual('123');
    // @ts-ignore
    expect(pad('123', 5, undefined)).toEqual('123');
  });
  it('should return the entire string when padChar is null', () => {
    // @ts-ignore
    expect(pad('123', 5, null)).toEqual('123');
  });
  it('should return the entire string when padChar is not a string', () => {
    // @ts-ignore
    expect(pad('123', 5, 5)).toEqual('123');
  });
  it('should return the entire string when desiredLength is <= length of the input string', () => {
    // @ts-ignore
    expect(pad('123', 3, '0')).toEqual('123');
  });
  it('should return 00123 when input is 123 and desiredLength = 5 and padChar is 0', () => {
    expect(pad('123', 5, '0', 'left')).toEqual('00123');
  });
  it("should return 12300 when desiredLength = 5 and padChar = '0' and direction='right", () => {
    expect(pad('123', 5, '0', 'right')).toEqual('12300');
  });
});

describe('getDayOfWeek', () => {
  it('should return and empty string when no value is passed to it', () => {
    // @ts-ignore
    expect(getDayOfWeek()).toEqual('');
  });
  it('should return an empty string when a non valid date strinng is passed', () => {
    // @ts-ignore
    expect(getDayOfWeek('')).toEqual('');
    // @ts-ignore
    expect(getDayOfWeek('1/40/2021')).toEqual('');
  });
  it('should return Sunday when the date passed in is 11/21/2021', () => {
    expect(getDayOfWeek('11/21/2021')).toEqual('Sunday');
  });
  it("should return Monday when the date passed in is '11/22/2021'", () => {
    expect(getDayOfWeek('11/22/2021')).toEqual('Monday');
  });
  it("should return Tuesday when the date passed in is '11/23/2021'", () => {
    expect(getDayOfWeek('11/23/2021')).toEqual('Tuesday');
  });
  it("should return Wednesday when the date passed in is '11/24/2021'", () => {
    expect(getDayOfWeek('11/24/2021')).toEqual('Wednesday');
  });
  it("should return Thursday when the date passed in is '11/25/2021'", () => {
    expect(getDayOfWeek('11/25/2021')).toEqual('Thursday');
  });
  it("should return Friday when the date passed in is '11/26/2021'", () => {
    expect(getDayOfWeek('11/26/2021')).toEqual('Friday');
  });
  it("should return Saturday when the date passed in is '11/27/2021'", () => {
    expect(getDayOfWeek('11/27/2021')).toEqual('Saturday');
  });
});

describe('addDays', () => {
  it('should return an empty string when no Date is passed', () => {
    // @ts-ignore
    expect(addDays()).toEqual('');
  });
  it('should return an empty string when the date passed in is undefined', () => {
    // @ts-ignore
    expect(addDays(undefined)).toEqual('');
  });
  it('should return an empty string when the date passed in is null', () => {
    // @ts-ignore
    expect(addDays(null)).toEqual('');
  });
  it('should return an empty string when the number of days is undefined', () => {
    // @ts-ignore
    expect(addDays('1/1/2021', undefined)).toEqual('');
  });
  it('should return an empty string when the number of days is null', () => {
    // @ts-ignore
    expect(addDays('1/1/2021', null)).toEqual('');
  });
  it('should return an empty string when the number of day is not a number', () => {
    // @ts-ignore
    expect(addDays('1/1/2021', 'some string')).toEqual('');
  });
  it("should return '1/20/2021' when passed a '1/15/2021' with a value of 5 for days", () => {
    // @ts-ignore
    expect(addDays('1/15/2021', 5)).toEqual(new Date('1/20/2021'));
  });
});

describe('isPrime', () => {
  it('should return false when 1 is passed in', () => {
    expect(isPrime(1)).toBe(false);
  });
  it('should return true when 2 is passed in', () => {
    expect(isPrime(2)).toBe(true);
  });
  it('shouldreturn true when 3 is passed in', () => {
    expect(isPrime(3)).toBe(true);
  });
  it('should return false when 4 is passed in', () => {
    expect(isPrime(4)).toBe(false);
  });
  it('should return true when 5 is passed in', () => {
    expect(isPrime(5)).toBe(true);
  });
  it('should return false when 6 is passed in', () => {
    expect(isPrime(6)).toBe(false);
  });
  it('should return true when 7 is passed in', () => {
    expect(isPrime(7)).toBe(true);
  });
  it('should return false when 10 is passed in', () => {
    expect(isPrime(10)).toBe(false);
  });
  it('should return true when 11 is passed in', () => {
    expect(isPrime(11)).toBe(true);
  });
  it('should return false when 12 is passed in', () => {
    expect(isPrime(12)).toBe(false);
  });
  it('should return true when 13 is passed in', () => {
    expect(isPrime(13)).toBe(true);
  });
  it('should return false when 14 is passed in', () => {
    expect(isPrime(14)).toBe(false);
  });
  it('should return false when 15 is passed in', () => {
    expect(isPrime(15)).toBe(false);
  });
  it('should return false when 16 is passed in', () => {
    expect(isPrime(16)).toBe(false);
  });
});

const day = 86400;
const year = day * 365;
const hour = 3600;
const minute = 60;
describe('convertSecondsToStringSentence', () => {
  it('should return now when zero seconds is the input', () => {
    expect(convertSecondsToStringSentence(0)).toEqual('now');
  });
  it('should return 1 second when 1 is the input', () => {
    expect(convertSecondsToStringSentence(1)).toEqual('1 second');
  });
  it('should return 1 minute when 60 is the input', () => {
    expect(convertSecondsToStringSentence(60)).toEqual('1 minute');
  });
  it('should return 1 hour when 3600 is the input', () => {
    expect(convertSecondsToStringSentence(3600)).toEqual('1 hour');
  });
  it('should return 1 day when 86400 is the input', () => {
    expect(convertSecondsToStringSentence(86400)).toEqual('1 day');
  });
  it('should return 1 year when 365*day is the input', () => {
    expect(convertSecondsToStringSentence(year)).toEqual('1 year');
  });
  it('should return 1 year, 2 days', () => {
    const num = year + 2 * day;
    expect(convertSecondsToStringSentence(num)).toEqual('1 year, 2 days');
  });
  it('should return 1 day 12 hours', () => {
    const num = day + 12 * hour;
    expect(convertSecondsToStringSentence(num)).toEqual('1 day, 12 hours');
  });
  it('should return 40 seconds', () => {
    expect(convertSecondsToStringSentence(40)).toEqual('40 seconds');
  });
  it('should return 10 minutes', () => {
    const num = minute * 10;
    expect(convertSecondsToStringSentence(num)).toEqual('10 minutes');
  });
  it('should return 2 years', () => {
    const num = year * 2;
    expect(convertSecondsToStringSentence(num)).toEqual('2 years');
  });
  it('should return 1 hour, 2 minutes and 3 seconds', () => {
    const num = hour + minute * 2 + 3;
    expect(convertSecondsToStringSentence(num)).toEqual(
      '1 hour, 2 minutes and 3 seconds'
    );
  });
  it('should return 3 hours and 7 minutes', () => {
    const num = hour * 3 + minute * 7;
    expect(convertSecondsToStringSentence(num)).toEqual(
      '3 hours and 7 minutes'
    );
  });
  it('should return 7 minutes and 4 seconds', () => {
    const num = minute * 7 + 4;
    expect(convertSecondsToStringSentence(num)).toEqual(
      '7 minutes and 4 seconds'
    );
  });
  it('should return 1 minute and 46 seconds', () => {
    expect(convertSecondsToStringSentence(106)).toEqual(
      '1 minute and 46 seconds'
    );
  });
});
