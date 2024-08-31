function isFibonacci (num) {

    if (num < 0 ) return false;

    let a = 0;
    let b = 1;

    if (num === a || num === b) return true;

    let c = a + b;

    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

function fibonacci(num) {
    if (isFibonacci(num)) {
        console.log(`${num} pertence a sequência de Fibonacci.`)
    } else {
        console.log(`${num} não pertence a sequência de Fibonacci.`)
    }
}

fibonacci(13);
fibonacci(24);