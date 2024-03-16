/*function printAsyncName(callback, name) {
    setTimeout(callback, 1000);
    setTimeout(() => console.log(name), 2000);
}*/


/*function printAsyncName(callback, name){
    setTimeout(() => {
        callback();
        setTimeout (() => console.log(name), 1000);
    }, 1000);
}*/


function printAsyncName(callback, name){
    const int1 = setInterval(() => {
        callback();
       const int2 = setInterval(() => {
            console.log(name)
            setTimeout ( () => clearInterval(int2), 3100);
        }, 1000)
        clearInterval(int1); 
    }, 1000)
}

function print(){
    console.log("Hello")
}

printAsyncName(print, "el Nanoo");