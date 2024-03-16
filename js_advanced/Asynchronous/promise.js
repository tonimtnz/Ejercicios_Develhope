const number = 5;

const promise = new Promise((resolve, reject) => {
    if (number > 10){
        resolve(number)
    } else {
        reject(number)
    };
});

promise
    .then((res) => {
    console.log(res)
    })
    .catch((res) => {
        console.error("La promesa fue rechazada")
    })