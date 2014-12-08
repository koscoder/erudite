var random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var statuses = ['new', 'passed', 'failed'];

module.exports = {
  "1": {
    id: 1,
    questions: [
      {
        id: Math.floor(Math.random() * 10000),
        points: random(1, 9) * 100,
        status: statuses[random(0, 2)],
        by: null
      },
      {
        id: Math.floor(Math.random() * 10000),
        points: random(1, 9) * 100,
        status: statuses[random(0, 2)],
        by: null
      },
      {
        id: Math.floor(Math.random() * 10000),
        points: random(1, 9) * 100,
        status: statuses[random(0, 2)],
        by: null
      },
      {
        id: Math.floor(Math.random() * 10000),
        points: random(1, 9) * 100,
        status: statuses[random(0, 2)],
        by: null
      },
      {
        id: Math.floor(Math.random() * 10000),
        points: random(1, 9) * 100,
        status: statuses[random(0, 2)],
        by: null
      }
    ]
  }
};
