//Este algoritmo mede a soma dos ângulos internos de um polígono equilátero e o valor de cada ângulo.

let nlados = 6, sangulosinternos = (nlados - 2) * 180, vangulos = sangulosinternos / nlados;
console.log(`A soma dos ângulos internos de um polígono equilátero de ${nlados} lados é ${sangulosinternos}º, sendo que cada ângulo mede ${vangulos}º.`);
