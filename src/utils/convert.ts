const ones = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  '': '',
};

const single = (s: string) => ones[s];

const processSingle = (s: string) => {
  let result = '';
  if (s.indexOf('-') > 0) {
    s.split('-').forEach((i, idx) => {
      if (idx === 0) {
        const cr = single(i);
        result += cr.toString().substring(0, cr.toString().length - 1);
      } else {
        result += single(i);
      }
    });
  } else {
    result += single(s);
  }
  return result;
};

function convertStringNumberToNumber(string: string) {
  const arr = string.split(' ').filter((w) => w !== 'and');
  let result = '0';

  arr
    .map((s) => {
      if (arr.length === 1) {
        result = processSingle(s);
      }
      if (arr.length == 2) {
        if (arr[1] == 'thousand') {
          result = processSingle(arr[0]) + '000';
        } else if (arr[1] == 'million') {
          result = processSingle(arr[0]) + '000000';
        } else {
          result = single(arr[0]) + '00';
        }
      }
      if (arr.length == 3) {
        if (arr[1] == 'hundred' && arr[2] == 'thousand') {
          result = processSingle(arr[0]) + '00000';
        } else if (arr[1] == 'thousand') {
          result = single(arr[0]) + '0' + processSingle(arr[2]);
        } else {
          const arg1 = single(arr[0]);
          const arg2 = processSingle(arr[2]);
          if (arg2.toString().length == 1) {
            result = arg1 + '0' + arg2;
          } else {
            result = arg1 + arg2;
          }
        }
      }
      if (arr.length == 4) {
        if (arr[1] == 'hundred' && arr[2] == 'thousand') {
          const end = processSingle(arr[3]);
          if (end.toString().length == 1) {
            result = processSingle(arr[0]) + '0000' + end;
          }
        } else if (arr[1] == 'hundred' && arr[3] == 'thousand') {
          result = processSingle(arr[0]) + '0' + processSingle(arr[2]) + '000';
        }
      }
      if (arr.length == 5) {
        if (arr[1] == 'thousand') {
          result =
            processSingle(arr[0]).toString() +
            single(arr[2]).toString() +
            processSingle(arr[4]);
        } else if (
          arr[1] == 'hundred' &&
          arr[2] == 'thousand' &&
          arr[4] == 'hundred'
        ) {
          result = processSingle(arr[0]) + '00' + processSingle(arr[3]) + '00';
        }
      }
      if (arr.length == 7) {
        result =
          processSingle(arr[0]) +
          processSingle(arr[2]) +
          processSingle(arr[4]) +
          processSingle(arr[6]);
      }
    })
    .join(' ');
  return Number(result);
}

export { convertStringNumberToNumber };
