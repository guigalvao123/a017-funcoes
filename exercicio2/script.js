// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma(num1,num2){
    let soma = num1+num2
    console.log(soma)
}soma(2,2)
console.log(soma(4,2))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function verificarBooleano(num1,num2){
    if(num1 >= num2){
        console.log(true)
    }else{
        console.log(false)
    }
}
verificarBooleano(prompt("Numero 1"),prompt("Numero 2"))

// c) Uma função que receba um número e imprima se ele é par ou não

function par(numero){
if(numero%2 === 0){
    console.log("Este numero e par")
}else{
    console.log("Este numero nao e par")
}
}
par(Number(prompt("Digite um numero")))

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensure(frase){
    console.log(frase.length, frase.toUpperCase())
}
mensure("Qual o tamanho dessa frase?")