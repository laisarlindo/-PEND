 let idade = 25;

if (true) {
    var idade = 30;
    console.log("Dentro do bloco:", idade); 
}

console.log("Fora do bloco:", idade); // Irá exibir "Fora do bloco 25", pois o 30 vale para a função

// Ao alterar let = 30 para var = 30 exibiu um erro, pois a variável já foi declarada e variável não
// se declara duas vezes