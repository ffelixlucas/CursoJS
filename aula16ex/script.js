let num = document.querySelector('input#fnum') 
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }


}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
              valores.push(Number(num.value))
              let item = document.createElement('option')
              item.text = `Valor ${num.value} adicionado.`
              lista.appendChild(item)
              res.innerHTML = ''
              
}else{
    window.alert('Valor invalido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}
/*function maiorValor() {
    let max = valores[0]
    for (let c = 1; c < valores.length; c++) {
        if (valores[c] > max) {
            max = valores[c]
        }
    }
    return max
}
function menorValor(){
    let min = valores[0]
    for (let c = 1; c < valores.length; c++){
        if (valores[c]< min){
            min = valores[c]
        }
    }
    return min
}
function soma(){
    let total = 0 
    for (let c = 0; c < valores.length; c++){
        total +=valores[c]
    }
    return total
}
  
function finalizar(){
    if (valores.length == 0){
        window.alert('adicione um valor anstes de finalizar!')
    }else{
    res.innerHTML = `Ao todo, temos ${valores.length} numeros cadastrados`
    let max = maiorValor()
    let min = menorValor()
    let total = soma()
    res.innerHTML += `<br>Maior valor informado foi o ${max}`
    res.innerHTML += `<br>Menor valor informado foi o ${min}`
    res.innerHTML += `<br> A soma dos Valores Informado é ${total}`
    media = total / valores.length
    res. innerHTML += `<br>A Media dos valores Adicionados é ${media}`
}
}
ESTA FOI A FORMA QUE EU RESOLVI O PROBLEMA SEM A AJUDA DO PROFESSOR*/

function finalizar(){ //ESSA É A RESOLUÇÃO DO PROFESSOR
    if (valores.length == 0){
        window.alert('adicione um valor anstes de finalizar!')
    }else{
   let tot = valores.length
   let maior = valores[0]
   let menor = valores[0]
   let soma = 0
   let media = 0
   for(let pos in valores){
    soma += valores[pos]
    if (valores[pos] > maior)
        maior = valores[pos]
    if (valores[pos] < menor)
        menor = valores[pos]
   }
   media = soma / tot
    res.innerHTML = `Ao todo, temos ${tot} numeros cadastrados`
    res.innerHTML += `<br>Maior valor informado foi o ${maior}`
    res.innerHTML += `<br>Menor valor informado foi o ${menor}`
    res.innerHTML += `<br> A soma dos Valores Informado é ${soma}`
    res. innerHTML += `<br>A Media dos valores Adicionados é ${media}`
}
}


    function limpar() {
    valores = []; // Limpa o array de valores
    lista.innerHTML = ''; // Limpa a lista
    res.innerHTML = ''; // Limpa a div de resultados
  }

  