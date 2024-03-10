let num1 = 10;
let num2 = 20;
console.log('before the swap', num1, num2);

/*let temp = num2;
num2 = num1;
num1 = temp;*/
[num1, num2] = [num2, num1]

console.log('After the swap', num1, num2);