function fibonacci(nthNumber) {
    // ❶
    let a = 1, b = 1;
    let nextNum, i;
    for (i = 1; i < nthNumber; i++) {
        console.log(`a${i} = ${a}`)
        // ❷
        nextNum = a + b; // Get the next Fibonacci number.
        a = b;
        b = nextNum;
    }
    console.log(`a${i} = ${a}`)
    return a;
};

console.log(fibonacci(10));