//Este algoritmo calcula quantas pessoas serão infectadas segundo as variáveis apresentadas

let infectadosinicial = 1000, potencialcontagio = 4, tempo = 100, infectadosfinal = infectadosinicial * Math.pow(potencialcontagio, tempo / 7);
console.log(`Partindo de ${infectadosinicial} pessoas infectadas, ao fim de ${tempo} dias, teremos ${infectadosfinal} pessoas contaminadas.`);