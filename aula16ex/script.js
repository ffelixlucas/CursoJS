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
              num.value = ''
              
}else{
    window.alert('Valor invalido ou ja encontrado na lista!')
    }
}
function maiorValor{
    let max = valores[0]
    for (let c = 1; c < valores.length; c++)
    if (valores[c] > max) {
        max = valores[c]
    }
}
function finalizar(){
    res.innerHTML = `Ao todo, temos ${valores.length} numeros cadastrados`
    res.innerHTML = `Maior valor informado foi o ${max}`
}
