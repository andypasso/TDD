const analysis = {
  average: (array) => array.reduce((sum, next) => sum + next, 0) / Math.round(array.length),
  min: (array) => array.reduce((a, b) => {
    if (a < b) { return a; }
    return b;
  }, 9999),
  max: (array) => array.reduce((a, b) => {
    if (a < b) { return b; }
    return a;
  }, 0),
  length: (array) => array.length,
};

module.exports = analysis;