// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

function soma(numero1,numero2){
    return numero1+numero2
}

function subtrua(numero1,numero2){
    return numero1 - numero2
}

function multiplique(numero1,numero2){
    return numero1*numero2
}

function divida(numero1,numero2){
    return numero1/numero2
}

numero1 = Number(prompt("Insira um numero"))
numero2 = Number(prompt("Insira um numero"))

// Criada antes como base.
//soma(numero1,numero2),subtrua(numero1,numero2),multiplique(numero1,numero2),divida(numero1,numero2)

console.log(`A soma deu:${soma(numero1,numero2)}, a subtracao deu:${subtrua(numero1,numero2)}, a multiplicacao deu ${multiplique(numero1,numero2)}, e a divisao deu ${divida(numero1,numero2)}.`)
