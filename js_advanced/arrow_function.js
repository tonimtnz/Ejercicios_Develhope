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

const resultado = div(
    subtr(
        multi(
            sum(2, 4),
            sum(5, 2)
        ),
        2
    ),
    5
);

console.log(resultado);