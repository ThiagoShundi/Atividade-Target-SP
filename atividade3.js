const monthlBilling = [
    { "dia": 1, "valor": 2000.0 },
    { "dia": 2, "valor": 1500.0 },
    { "dia": 3, "valor": 1000.0 },
    { "dia": 4, "valor": 2500.0 },
    { "dia": 5, "valor": 3000.0 },
    { "dia": 6, "valor": 0.0 },
    { "dia": 7, "valor": 0.0 },
];

function calculateBilling(monthlBilling) {
    let lowestValue = monthlBilling.find(days => days.valor > 0).valor;
    let highestValue = 0;
    let totalBilling = 0;
    let daysWithBillings = 0;

    monthlBilling.forEach(days => {
        if (days.valor > 0) {
            if (days.valor < lowestValue) {
                lowestValue = days.valor;
            }
            if (days.valor > highestValue) {
                highestValue = days.valor;
            }
            totalBilling += days.valor;
            daysWithBillings += 1;
        }

    });

    let monthlyAverage = totalBilling / daysWithBillings;
    let daysAboveAverage = 0;

    monthlBilling.forEach(days =>{
        if(days.valor > monthlyAverage) {
            daysAboveAverage += 1;
        }
    })
    return {
        lowestValue,
        highestValue,
        daysAboveAverage
    };
}

let result = calculateBilling(monthlBilling);
console.log(`Menor valor de faturamento: ${result.lowestValue}`);
console.log(`Maior valor de faturamento: ${result.highestValue}`);
console.log(`Dias com faturamento acima da média: ${result.daysAboveAverage}`);