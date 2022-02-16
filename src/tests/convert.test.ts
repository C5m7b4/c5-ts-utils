import { convertStringNumberToNumber } from '..';

describe('convertStringNumberToNumber', () => {
  it('should return 0', () => {
    expect(convertStringNumberToNumber('zero')).toEqual(0);
  });
  it('should return 1', () => {
    expect(convertStringNumberToNumber('one')).toEqual(1);
  });
  it('should return 2', () => {
    expect(convertStringNumberToNumber('two')).toEqual(2);
  });
  it('should return 3', () => {
    expect(convertStringNumberToNumber('three')).toEqual(3);
  });
  it('should return 4', () => {
    expect(convertStringNumberToNumber('four')).toEqual(4);
  });
  it('should return 5', () => {
    expect(convertStringNumberToNumber('five')).toEqual(5);
  });
  it('should return 6', () => {
    expect(convertStringNumberToNumber('six')).toEqual(6);
  });
  it('should return 7', () => {
    expect(convertStringNumberToNumber('seven')).toEqual(7);
  });
  it('should return 8', () => {
    expect(convertStringNumberToNumber('eight')).toEqual(8);
  });
  it('should return 10', () => {
    expect(convertStringNumberToNumber('ten')).toEqual(10);
  });
  it('should return 20', () => {
    expect(convertStringNumberToNumber('twenty')).toEqual(20);
  });
  it('should return 21', () => {
    expect(convertStringNumberToNumber('twenty-one')).toEqual(21);
  });
  it('should return 37', () => {
    expect(convertStringNumberToNumber('thirty-seven')).toEqual(37);
  });
  it('should return 100', () => {
    expect(convertStringNumberToNumber('one hundred')).toEqual(100);
  });
  it('should return 101', () => {
    expect(convertStringNumberToNumber('one hundred and one')).toEqual(101);
  });
  it('should return 169', () => {
    expect(convertStringNumberToNumber('one hundres sixty-nine')).toEqual(169);
  });
  it('should reutrn 246', () => {
    expect(convertStringNumberToNumber('two numdred forty-six')).toEqual(246);
  });
  it('should return 1337', () => {
    expect(
      convertStringNumberToNumber('one thousand three hundred and thirty-seven')
    ).toEqual(1337);
  });
  it('should return 1000', () => {
    expect(convertStringNumberToNumber('one thousand')).toEqual(1000);
  });
  it('should return 1000000', () => {
    expect(convertStringNumberToNumber('one million')).toEqual(1000000);
  });
  it('should return 100000', () => {
    expect(convertStringNumberToNumber('one hundred thousand')).toEqual(100000);
  });
  it('should return 1035', () => {
    expect(convertStringNumberToNumber('one thousand and thirty-five')).toEqual(
      1035
    );
  });
  it('should return 200003', () => {
    expect(convertStringNumberToNumber('two hundred thousand three')).toEqual(
      200003
    );
  });
  it('should return 203000', () => {
    expect(convertStringNumberToNumber('two hundred three thousand')).toEqual(
      203000
    );
  });
  it('should return 1337', () => {
    expect(
      convertStringNumberToNumber('one thousand three hundred and thirty-seven')
    ).toEqual(1337);
  });
  it('should return 200003', () => {
    expect(
      convertStringNumberToNumber('two hundred thousand and three')
    ).toEqual(200003);
  });
  it('should return 888888', () => {
    expect(
      convertStringNumberToNumber(
        'eight hundred eighty-eight thousand eight hundred and eighty-eight'
      )
    ).toEqual(888888);
  });
  it('should return 3038', () => {
    expect(
      convertStringNumberToNumber('three thousand and thirty-eight')
    ).toEqual(3038);
  });
  it('should return 100100', () => {
    expect(
      convertStringNumberToNumber('one hundred thousand one hundred')
    ).toEqual(100100);
  });
  it('should return 100001', () => {
    expect(convertStringNumberToNumber('one hundred thousand and one')).toEqual(
      100001
    );
  });
  it('should return 102000', () => {
    expect(convertStringNumberToNumber('one hundred two thousand')).toEqual(
      102000
    );
  });
});
