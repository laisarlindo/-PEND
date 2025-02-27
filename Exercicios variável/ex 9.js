function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // Vai exibir o a ser for verdadeiro
        console.log(b); // Vai exibir o b se for verdadeiro
    }
    console.log(a); // Vai exibir o a por estar na variável global(Var)
    console.log(b); // Não vai exibir o b por estar dentro da condição if
}
testeEscopo();