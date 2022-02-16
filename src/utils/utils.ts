import { isValid } from '.';

export type Direction = 'left' | 'right';

const pad = (
  input: string,
  desiredLength: number,
  padChar: string,
  direction: Direction = 'left'
) => {
  if (typeof input != 'string') return input;
  if (typeof desiredLength === 'undefined' || desiredLength === null) {
    return input;
  }
  if (typeof desiredLength != 'number') return input;
  if (typeof padChar === 'undefined' || padChar === null) {
    return input;
  }
  if (typeof padChar != 'string') return input;

  if (desiredLength <= input.length) {
    return input;
  }
  const charsToPad = desiredLength - input.length;
  // eslint-disable-next-line
  const padding = [...Array(Number(charsToPad))].map((c, i) => {
    return padChar;
  });

  if (direction.toLowerCase() === 'left') {
    return padding.join('') + input;
  } else {
    return input + padding.join('');
  }
};

const getDayOfWeek = (d: string) => {
  if (!isValid(d)) return '';

  const myDate = new Date(d);
  const dayOfWeek = myDate.getDay();
  if (isNaN(dayOfWeek)) {
    return '';
  }

  switch (dayOfWeek) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '';
  }
};

const addDays = (date: Date, days: number) => {
  if (typeof date === 'undefined' || date === null) return '';
  if (typeof days === 'undefined' || days === null) return '';
  if (isNaN(days)) return '';

  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const isPrime = (num: number) => {
  const sqrtNum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtNum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

//*
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
//
const convertSecondsToStringSentence = (seconds: number) => {
  const masterSeconds = seconds;

  const day = 86400;
  const year = day * 365;
  const hour = 3600;
  const minute = 60;
  let secondsString = '';
  let minutesString = '';
  let hoursString = '';
  let daysString = '';
  let yearsString = '';
  let result = '';
  if (seconds == 0) {
    return 'now';
  }
  const years = Math.floor(masterSeconds / year);
  const days = Math.floor((masterSeconds - years * year) / day);
  const hours = Math.floor((masterSeconds - years * year - days * day) / hour);
  const minutes = Math.floor(
    (masterSeconds - years * year - days * day - hours * hour) / minute
  );
  seconds =
    masterSeconds - years * year - days * day - hours * hour - minutes * minute;

  secondsString = seconds % 60 > 1 ? 'seconds' : 'second';
  minutesString = minutes > 1 ? 'minutes' : 'minute';
  hoursString = hours > 1 ? 'hours' : 'hour';
  daysString = days > 1 ? 'days' : 'day';
  yearsString = years > 1 ? 'years' : 'year';

  if (years > 0) {
    result += `${years} ${yearsString}`;
  }
  if (years > 0 && days > 0) {
    result += ', ';
  }
  if (days > 0) {
    result += `${days} ${daysString}`;
  }
  if (days > 0 && hours > 0) {
    result += ', ';
  }
  if (hours > 0) {
    result += `${hours} ${hoursString}`;
  }
  if (hours > 0 && minutes > 0 && seconds > 0) {
    result += ', ';
  } else if (hours > 0 && minutes > 0 && seconds === 0) {
    result += ' and ';
  }
  if (minutes > 0 && seconds == 0) {
    result += `${minutes} ${minutesString}`;
  } else if (minutes > 0 && seconds > 0 && hours === 0 && days === 0) {
    result += `${minutes} ${minutesString} and ${seconds} ${secondsString}`;
  } else if (minutes > 0 && seconds > 0 && hours === 0) {
    result += `, ${minutes} ${minutesString} and ${seconds} ${secondsString}`;
  } else if (minutes > 0 && seconds > 0) {
    result += `${minutes} ${minutesString} and ${seconds} ${secondsString}`;
  } else if (seconds > 0) {
    if (result.length > 0) {
      result += ` and ${seconds} ${secondsString}`;
    } else {
      result += `${seconds} ${secondsString}`;
    }
  }
  return result;
};

export { pad, getDayOfWeek, addDays, isPrime, convertSecondsToStringSentence };
