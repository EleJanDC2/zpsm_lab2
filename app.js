import _ from "lodash";

let array1 = [1,3,5,7,9];

const mean = _.mean(array1);

console.log("Mean : " + mean);

const max = Math.max(...array1);
const min = Math.min(...array1);

console.log("Max: " + max);
console.log("Min: " + min);

function getWeightedAverage(user) {

  let totalWeight = 0;
  for (const subject of user.allGrades) {
    totalWeight += subject.weight;
  }


  let totalGrades = 0;
  for (const subject of user.allGrades) {
    for (const grade of subject.grades) {
      totalGrades += grade * subject.weight;
    }
  }

  let weightedAverage = totalGrades / totalWeight;

  console.log(`${user.name} ${user.surname}: ${weightedAverage}`);
}

const user = {
  name: "Imie",
  surname: "Nazwisko",
  allGrades: [
    {
      subjectName: "Name1",
      grades: [5, 4, 3, 5, 2],
      weight: 3,
    },
    {
      subjectName: "Name2",
      grades: [3, 3.5, 2],
      weight: 1,
    },
    {
      subjectName: "Name1",
      grades: [4, 3, 3.5],
      weight: 5,
    },
  ],
};

getWeightedAverage(user);

