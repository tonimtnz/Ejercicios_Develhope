function isAdult(person) {
        if (age < 18){
            return "Es menor."
        } else {
            return firstName + " tiene " + age + " años."
        }
  }
  
  const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };

  let{ id, firstName, lastName, age} = person
  
  console.log(isAdult(person));