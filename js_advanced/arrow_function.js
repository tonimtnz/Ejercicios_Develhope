const sum = (a, b) =>{
    return a + b;
}
const subtr = (a, b) =>{
    return a - b;
}
const multi = (a, b) =>{
    return a * b;
}
const div = (a, b) =>{
    return a / b;
}

const value = div(
    subtr(
        multi(
            sum(2, 4),
            sum(5, 2)
        ),
        2
    ),
    5
);

/*const log = function (value) {
    console.log(value);
}*/

console.log(resultado);