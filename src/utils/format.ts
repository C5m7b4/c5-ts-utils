const formatDate = (date: any) => {
  if (typeof date === 'undefined' || date === null) return '';
  if (typeof date === 'string') {
    if (date.length === 0) return '';
  }

  if (typeof date === 'string') {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1,
      day = newDate.getDate(),
      year = newDate.getFullYear();

    return month + '/' + day + '/' + year;
  }

  if (Object.prototype.toString.call(date) === '[object Date]') {
    const month = date.getMonth() + 1,
      day = date.getDate(),
      year = date.getFullYear();

    return month + '/' + day + '/' + year;
  }

  return '';
};

const formatTimeString = (date: string | Date) => {
  if (typeof date === 'undefined' || date === null) return '';

  if (typeof date === 'string') {
    if (date.length === 0) return '';
    date = new Date(date);
  }

  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

const formatMoney = (
  amount: any,
  decimalCount = 2,
  decimal = '.',
  thousands = ','
) => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

  const negativeSign = amount < 0 ? '-' : '';

  let i: any = parseInt(
    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
  ).toString();
  let j = i.length > 3 ? i.length % 3 : 0;

  return (
    negativeSign +
    (j ? i.substr(0, j) + thousands : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
      : '')
  );
};

export { formatDate, formatTimeString, formatMoney };
