 var nome = "Ana";

function mostrarNome() {
    let nome = "Carlos";
    console.log(nome); // Irá exibir o nome Carlos
}

mostrarNome();
console.log(nome); // Irá exibir o nome Carlos, antes da variável global declarada antes. Isso ocorre pois o nome carlos esta dentro da função mostrarNome e o nome Ana esta inserida na variável global