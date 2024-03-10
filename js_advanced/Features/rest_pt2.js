function sum(...number) {
    const initialValue = 0;
    return number.reduce(
        (acc, cur) => acc + cur, initialValue,
    );
}



console.log(sum(1, 2, 3, 4, 5));