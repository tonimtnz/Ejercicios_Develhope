function isAdult({age}){
    return age >= 18;  
}
  
  const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 19
  };

  let{ id, firstName, lastName, age} = person
  
  console.log(isAdult(person));