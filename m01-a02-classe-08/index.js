//Este código calcula a porcentagem de desconto necessária baseada no preço de um objeto e o dinheiro possuído.

let dinheiro = 50, preco = 69.90, desconto = 100 - (dinheiro * 100 / preco);
console.log(`Se tenho R$${dinheiro}, mas o tênis custa R$${preco}, preciso de ${desconto}% de desconto.`);