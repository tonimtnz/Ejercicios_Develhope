let medAge = 0;

function calculateAverageAge(persons) {
    let calculo = 0;
    for (i=0; i < persons.length; i++){
        let laEdad = persons[i].age;
        calculo += laEdad;
    }
    let medAge = calculo / persons.length;
    return medAge;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);