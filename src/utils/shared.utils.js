/**
 * 
 * @param {object} obj 
 * @param {boolean} isDesc 
 * @returns {object}
 */
const sortObj = (obj, isDesc = false) => {
  const keys = Object.keys(obj);
  const newObj = {};

  if (isDesc) {
    keys.sort((item1, item2) => item1 > item2 ? -1 : 1);
  } else {
    keys.sort();
  }

  keys.forEach(key => {
    newObj[key] = obj[key];
  });

  return newObj;
};

module.exports = {
  sortObj,
};