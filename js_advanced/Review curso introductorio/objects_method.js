const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
}

//console.log(Object.keys(person))
Object.keys(person).forEach(function(key){
    console.log(key + " : " + person[key])
})
