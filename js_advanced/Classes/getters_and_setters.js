class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }

    get _age(){
        return this.age;
    }

    set fullName(any){
        any = this.fullName;
        return any;
    }
    
  }
  
  //const person = new Person('Mario', 'Rossi', 25);
  const x = new Person ('Toni', 'Martinez', 25)
  console.log(x.fullName);
  
  x.firstName = 'Maria';
  x.lastName = 'Verdi';
  console.log(x.fullName);