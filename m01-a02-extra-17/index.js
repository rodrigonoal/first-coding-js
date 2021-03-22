//Este algoritmo calcula sua taxa de juros 

let montante = 90_000, capital = 60_000, meses = 24, txjuros = ((montante / capital) ** (1 / meses) - 1) * 100;
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${txjuros}%, pois após ${meses} meses você teve que pagar ${montante} reais.`)