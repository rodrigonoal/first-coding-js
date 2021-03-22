//Este código calcula o valor de um capital aplicado no decorrer de certos meses, segundo os juros compostos.

let capital = 1000, taxa = 0.125, tempo = 5, montante = capital * (Math.pow(++taxa, tempo)); 
console.log(`O montante final é de R$${montante}.`);