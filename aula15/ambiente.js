let num = [5, 8, 2, 9, 3]
num.push(1)//Adiciona o numero que está no parenteses
num.sort()//Ordena os numeros em ordem crescente
console.log(num)//mostra na tela o vetor
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //Procura um valor e coloca sua posição dentro da variavel!


if (pos == -1){
    console.log(`o valor nao existe` )
}else{
console.log(`o valor 8 esta na posição ${pos}` )}
