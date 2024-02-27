function multiplyByTwo(x){
    const number = 2;
    function inner(){
        const resultado = number * x;
        console.log(resultado);
    }
    let innerCall = inner();
    return innerCall;
}

multiplyByTwo(4);
