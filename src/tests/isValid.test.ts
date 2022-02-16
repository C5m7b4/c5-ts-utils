import { isValid, isValidDate } from '../utils';

describe('isValid', () => {
  it('should return false when an empty string is passed in', () => {
    expect(isValid('')).toBe(false);
  });
  it('should return false when a null value is passed in', () => {
    expect(isValid(null)).toBe(false);
  });
  it('should return false when an undefined value is passed in', () => {
    expect(isValid(undefined)).toBe(false);
  });
  it('should return false when an object with no keys is passed in', () => {
    const myObj = {};
    expect(isValid(myObj)).toBe(false);
  });
  it('should return true when a valid string is passed in', () => {
    expect(isValid('hello')).toBe(true);
  });
  it('should return true when a valid object is passed in', () => {
    const myObj = {
      name: 'mike',
      age: 48,
    };
    expect(isValid(myObj)).toBe(true);
  });
});

describe('isValidDate', () => {
  it('should return false when an empty string is passed in', () => {
    expect(isValidDate('')).toBe(false);
  });
  it('should return false when null value is present', () => {
    expect(isValidDate(null)).toBe(false);
  });
  it('should return false when an undefined value is passed in', () => {
    expect(isValidDate(undefined)).toBe(false);
  });
  it('should return false when an invalid date object is passed in', () => {
    const stringDate = '1/35/2021';
    const newDate = new Date(stringDate);
    expect(isValidDate(newDate)).toBe(false);
  });
  it('should return false when an object that is not date is passed in', () => {
    const myObj = { name: 'mike', age: 47 };
    expect(isValidDate(myObj)).toBe(false);
  });
  it('should return true when a new Date() object is passed in', () => {
    expect(isValidDate(new Date())).toBe(true);
  });
  it('should return false when a string is passed in that is not a valid date', () => {
    expect(isValidDate('1/35/2021')).toBe(false);
  });
  it('should return true when a string representation of a date is passed in', () => {
    expect(isValidDate('1/1/2021')).toBe(true);
  });
});
