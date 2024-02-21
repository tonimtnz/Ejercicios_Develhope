let suma = 0;

function sumUntil (maxValue){
    for (i = 0; i <= maxValue; i++){
        suma += i;
    }
    return suma;
}

console.log(sumUntil(5));