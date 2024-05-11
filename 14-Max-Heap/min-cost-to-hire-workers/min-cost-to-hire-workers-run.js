const mincostToHireWorkers = require('./min-cost-to-hire-workers');

const quality = [10, 20, 5];
const k = 2;
const wage = [70, 50, 30];

const result = mincostToHireWorkers(quality, wage, k);

console.log(result);
