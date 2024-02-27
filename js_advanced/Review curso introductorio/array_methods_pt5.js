const people = [
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

let theOrder = people;

function sortPeopleByAge(arr){
  theOrder.sort( (a, b) => {
    if( a.age < b.age){
      return -1;
    }
    if (a.age > b.age){
      return 1;
    }
    return 0;
  })
  return theOrder;
}
  
  
  const sortingByAge = sortPeopleByAge(theOrder);
  console.log(sortingByAge);


  /*    let laEdad = people[0];
      let userAge = [];
      for ( i = 0; i < arr.length; i++){
          userAge.push(arr[i]);
          if (userAge.age < laEdad.age){
            laEdad.splice(0, 0, userAge);
          }else{
            laEdad.push(userAge);
          }
      }
      return laEdad;
  }*/