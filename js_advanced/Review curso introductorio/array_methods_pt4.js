const notes = [
    {
      id: 1,
      description: "Workout program",
      todos: [
        {
          id: 1,
          name: "Push ups - 10 x 3",
          done: false,
        },
        {
          id: 2,
          name: "Abdominals - 20 x 3",
          done: true,
        },
        {
          id: 3,
          name: "Tapis Roulant - 15min",
          done: true,
        },
      ],
    },
    {
      id: 2,
      description: "Front-end Roadmap",
      todos: [
        {
          id: 1,
          name: "Learn HTML",
          done: true,
        },
        {
          id: 2,
          name: "Learn CSS",
          done: true,
        },
        {
          id: 3,
          name: "Learn JavaScript",
          done: true,
        },
        {
          id: 4,
          name: "Learn Angular",
          done: false,
        },
      ],
    },
  ];

//*Probamos un metodo con forEach como pide el ejercicio, haciendo uno dentro de otro para encontrar el array anidado "todos" 
//*en el array principal. También creo un objeto vacío que recibirá la informacion que imprimiremos en consola al final del loop principal
//*y actualizo su contenido con cada vuelta del loop que cumple las condiciones.
function uncompletedNotes (notes) {
  let toDoList = []
  notes.forEach((item)=>{
    item.todos.forEach((subitem)=>{
      if (subitem.done == false){
        let taskToDo = subitem.name + " Está por hacer.";
        toDoList.push(taskToDo);
      }
    })
  })
  return toDoList;
}


  let output = uncompletedNotes (notes)
  console.log(output);

//!Este fue el metodo inicial, sin embargo no hubo forma de hacerlo funcionar supongo por algun fallo de sintaxis en la función

  /*function uncompletedNotes (notes) {
    let notcompleted = []
    for ( i = 0; i < notes.length; i++){
        Object.keys(notes).forEach(notes.todos);
            if (notes[i].todos.done == false){
                let toDoList = notes[i].todos;
                notcompleted.push(toDoList)
            }
        }
        return notcompleted;
    }*/
  
