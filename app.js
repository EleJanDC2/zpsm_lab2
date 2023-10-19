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

const subject = _.find(user.allGrades, subject => subject.weight === 1);

console.log(subject);

function getMails(collections) {
  const strings = collections.filter(item => typeof item === "string");

  const emails = strings.filter(
    string => string.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}/)
  );

  emails.sort();

  console.log(emails);
}

const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ["aaa", "bbb", 5],
  "admin@gmail.com",
  undefined,
  "a34@yahoo.com",
  "321@a",
  "321.pl",
];

getMails(collections);

