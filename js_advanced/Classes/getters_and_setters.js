class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age;
    }
    get fullName(){
        return person.firstName + " " + person.lastName + " " + person.age;
        /*if (person.age = undefined){
            return person.firstName + " " + person.lastName;
        } else{
            return person.firstName + " " + person.lastName + " " + person.age;
        }*/
    }
    set fullName(any){
        any = this.fullName;
        return any;
    }
    
  }
  
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName);
  
  person.firstName = 'Maria';
  person.lastName = 'Verdi';
  console.log(person.fullName);