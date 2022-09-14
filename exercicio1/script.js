// # Exercício 1

// // a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function olaMundo(){
//     console.log("Ola, Guilherme!")
// }olaMundo()

// console.log("========================================================")

// // b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada(numero){
//     for (i=0; i<=10; i++){
//         console.log(`${numero} x `+i+" = "+(i*numero))
//     }
// }tabuada(6)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const cumprimentar = (nome) => {
    console.log(`Ola, ${nome}`)
} 
cumprimentar(prompt("Digite seu nome."))

const tabuada = (numero) => {
    for (i=0; i<=10; i++){
    console.log(`${numero} x `+i+" = "+(i*numero))}
}
tabuada(Number(prompt("Digite um numero.")))