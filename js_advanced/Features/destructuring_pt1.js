//let num1 = 10;
//let num2 = 20;
let num = [10, 20];
console.log('before the swap', num[0], num[1]);

/*let temp = num2;
num2 = num1;
num1 = temp;*/
let [num2, num1] = num; 

console.log('After the swap', num1, num2);