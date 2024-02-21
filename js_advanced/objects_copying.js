const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

//En lugar de igualar ambos objetos haré un volcado de datos de person1 a person2
//const person2 = person1;
const person2 = {...person1};
//Al hacer asi la copia podemos modificar los datos de Person2 sin afectar a person1.

//Cambio el nombre de person2 a Simon y los demas datos para comprobar si funciona correctamente el volcado.
person2.firstName = "Simon";
person2.lastName = "Dice";
person2.age = 50;
//Pero al estar igualados Person1 y Person2, pese a haberlo hecho mas tarde en el codigo sigue igualandolo y el nombre cambia tambien en person1.


console.log(person1);
console.log(person2);