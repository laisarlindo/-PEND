// ex1:

let x = "10";
console.log(x + "exercico 1"); // saida: 10

// ex2:

let a = 20;
let b = 5;

console.log(a+b + "exercicio 2 soma"); // saida: 25
console.log(a-b + "exercicio 2 subtração"); // saida: 15
console.log(a*b + "exercico 2 multiplicação"); //saida: 100
console.log(a/b + "exercico 2 divisão"); //saida: 4
console.log(a%b + "exercicio 2 resto da divisão"); //saida: 0

//ex3:

let num = -15;

console.log(-num + " exercicio 3") //saida: 3

//ex4:

let count = 5;

console.log ( ++count  + " exericio 4 incremento"); //saida: 6
console.log(--count + " exercicio 4 decremento"); //saida: 5

//ex5:

{
    let x = 10;
    x += 5 
    console.log(x + " exercio5");
    x -= 3
    console.log(x + " exercicio5");
    x *= 2 
    console.log(x  + " exercico5");
    x /= 4 
    console.log(x  + " exercico5");
    x %= 3
   console.log (x  + " exercico5");

}

// ex6
let p = true;
let q = false;
console.log("Exercico 6");
console.log(p && q);  // saida: false
console.log(p || q); //saida: true
console.log(!p); //saida: false
console.log(!q); //saida: true

// ex7 
console.log("Exercicio 7");
console.log(0 || "Hello");
console.log("" && "World");
console.log(null ?? "Default Value"); // saida: Default Value
console.log(undefined ?? 42); // saida: 42

//ex8

console.log("Exercicio 8");

let resultado = 10 + 5 * 2 > 20 && !false;

console.log(resultado); // saida: false (é falso porque o && confere se um dos dois é false, como um já está declarado como falso a variável intira se torna falsa)

//ex9

console.log("Exercicio 9");

console.log("5" - 2); // saida: 3 (Deu três pois o sinal de menos subtrai)
console.log("5" + 2); // saida: 52 (Deu 52 pois o sinal de + concatena as informaçãoes apresentadas, pois o 5 é uma string e o 2 também se tornou uma string)
console.log(true + 1); // saida: ( Deu 2 pois true vale um e 1+1 é 2)
console.log(false + 10); //saida: (Deu 10 pois false vale 0 e 0+10 é 10)

//ex10

console.log("Exercicio 10");
{
    let x = 5;
    let y = 10;
    let z = (x++ * --y) / 2 + (y % 3);  //saida: 22,5(Deu esse resultado, pois na primeira expressão fica 5X9 = 45, depois divide por 2, pois o restante do divisão vai ser 0 (9:3 = 3 então restante é 0)) 
    console.log(z);
}
