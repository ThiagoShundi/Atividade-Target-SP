const billing = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalBilling = Object.values(billing).reduce((acc, curr) => acc + curr,0)

// console.log(totalBilling)

let percentage = {};

for (let state in billing) {
    percentage[state] = (billing[state] / totalBilling * 100).toFixed(2) + '%';
}

console.log("O percentual que cada estado representação:");
for (let state in percentage) {
    console.log(`${state}: ${percentage[state]}`);
}