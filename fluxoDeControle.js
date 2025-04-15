let menu = parseInt(prompt("Qual opção gostaria\n 1-Verificar se número é positivo \n 2-Número par ou ímpar\n 3-Boas-vindas por turno\n 4-Maior de dois números\n 5-Uso do operador ternário\n 6-Menu simples com switch\n 7-Contador de 1 a 5 com while\ 8-Contagem regressiva com do...while\n 9-Imprimir de 1 a 10 com for\n 10-Somar números de 1 a 10\n 11-Imprimir elementos de um array com for"));
switch (menu){
    case 1:
        ex1();
        break;

        case 2:
        ex2();
        break;

        case 3:
        ex3();
        break;

        case 4:
        ex4();
        break;
        
        case 5:
        ex5();
        break;

        case 6:
        ex6();
        break;

        case 7:
        ex7();
        break;

        case 8:
        ex8();
        break;

        case 9:
        ex9();
        break;

        case 10:
        ex10();
        break;

        case 11:
        ex11();
        break;

        default: console.log("O valor não corresponde com o programa");
}

function ex1() {
    
    let numero = 0;
    numero= parseInt(prompt("Digite um número"));

    if (numero > 0){
        alert("O número é positivo");
    }else{
        alert("O número é negativo");
    }
    console.log(numero);

}


function ex2(){
    let a = 0;
    a = parseInt(prompt("Digite um número"));

    if(a%2 == 0){
        alert("O número é par");
 
    }else{
        alert("O número é impar");
    }
}


function ex3(){
    
    let horario = "N";

    if( horario == "M"){
        alert("Bom dia");

    }
        

    else if (horario == "T"){
        alert("Boa tarde"); 
    }else{
        alert("Boa noite");
    }
}


function ex4(){
    let num1 = 0;
    num1= parseInt(prompt("Digite um números"));

    let num2 = 0;
    num2= parseInt(prompt("Digite o segundo números"));

    if(num1 > num2){
        alert("O primeiro número é maior" + num1);
    }
    else if (num2 > num1){
        alert("O segundo número é maior" +num2);
    }else{
        alert("Os números informados são iguais");
    }
}

    
function ex5(){
    let num = 5;

    console.log(num>0 ? "positivo": "negativo" );
}

   

function ex6(){

    let menu = parseInt(prompt("Qual opção gostaria\n 1-inicio \n 2-sobre\n 3-sair"));
    
    switch (menu){
        case 1:
        alert("Essa página irá te indicar dorama");
    
    case 2:
    alert("Não deixe de assistir Irei quando o tempo estiver bom, Desgraça ao seu dispor e Classe dos heróis fracos");

    case 3:
        alert("Obrigado por acessar essa página, saindo...")
}
}


function ex7(){
    let n = 0;
while(n < 5) {
    n++;
    console.log(n);
}
}


function ex8(){
    let n = 5;

    do{
        console.log(n);
        --n;
    }while(n>=1)
}


function ex9(){
   let i = 1;

   for(i = 1; i<=10; i++){
    console.log(i);
   }
    }
    

function ex10(){
    let sum = 0;
    let i = 0;

    for(i = 1; i<=10; i++){
        sum += i;
    }
    console.log(sum);
}

function ex11(){
    let doramas = ["Irei quando o tempo estiver bom", "Classe dos heróis fracos","Flor do mal"];

    for(i = 0; i <doramas;length,i++){
        console.log(i);
    }
    console.log(doramas);
}