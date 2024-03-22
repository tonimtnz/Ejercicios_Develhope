window.addEventListener("DOMContentLoaded", async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/4");
    const jsonData = await data.json();

    //Creamos una instancia donde establecemos un titulo y un input dependientes de los datos de la url.
    const titleData = document.createElement("h2");
    titleData.textContent = `title: ${jsonData.title}`  //Añadimos el contenido al elemento
    titleData.id = "titleData";
    const checkboxData = document.createElement("input");
    checkboxData.type = "checkbox";
    checkboxData.checked = jsonData.completed;

    //Creamos los hijos del div llamandole por Id y creando una constante
    const container = document.getElementById("container");
    container.appendChild(titleData);
    container.appendChild(checkboxData);

    console.log(container);
    } );