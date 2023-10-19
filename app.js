// Pusty plik

import _ from "lodash";

let array1 = [1,3,5,7,9];

const mean = _.mean(array1);

console.log("Mean : " + mean);

const max = Math.max(...array1);
const min = Math.min(...array1);

console.log("Max: " + max);
console.log("Min: " + min);
