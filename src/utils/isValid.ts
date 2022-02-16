const isValid = (val: any) => {
  if (typeof val === 'undefined') return false;

  if (val == null) return false;

  if (typeof val === 'string' && val.length === 0) return false;

  if (typeof val == 'object') {
    if (Object.keys(val).length === 0) {
      return false;
    }
  }

  return true;
};

const isValidDate = (val: any) => {
  if (typeof val === 'undefined' || val === null) return false;

  if (typeof val === 'string' && val.length === 0) return false;

  if (Object.prototype.toString.call(val) == '[object Date]') {
    if (isNaN(val.getTime())) {
      return false;
    } else {
      return true;
    }
  }

  if (typeof val === 'string') {
    const newDate = new Date(val);

    if (Object.prototype.toString.call(newDate) === '[object Date]') {
      if (isNaN(newDate.getTime())) {
        return false;
      } else {
        return true;
      }
    }
  }

  return false;
};

export { isValid, isValidDate };
