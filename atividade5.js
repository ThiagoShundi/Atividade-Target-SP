function invertString(str) {
    let invert = '';

    for(let i = str.length - 1; i >= 0; i -= 1) {
        invert += str[i];
    }

    return invert;
}

console.log(invertString('papagaio'));