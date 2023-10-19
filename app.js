// Pusty plik

import _ from "lodash";

let array1 = [1,3,5,7,9];

const mean = _.mean(array1);

console.log("Mean : " + mean);

const max = Math.max(...array1);
const min = Math.min(...array1);

console.log("Max: " + max);
console.log("Min: " + min);

function getWeightedAverage(user) {
  // Zsumuj wagi wszystkich przedmiotów
  let totalWeight = 0;
  for (const subject of user.allGrades) {
    totalWeight += subject.weight;
  }

  // Zsumuj wagi wszystkich ocen dla każdego przedmiotu
  let totalGrades = 0;
  for (const subject of user.allGrades) {
    for (const grade of subject.grades) {
      totalGrades += grade * subject.weight;
    }
  }

  // Oblicz średnią ważoną
  let weightedAverage = totalGrades / totalWeight;

  // Wypisz imię i nazwisko wraz ze średnią ważoną
  console.log(`${user.name} ${user.surname}: ${weightedAverage}`);
}

// Przykład użycia
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

