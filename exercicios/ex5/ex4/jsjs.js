let num = document.getElementById('numero')
let lista = document.getElementById('lista')
let res = document.getElementById('final')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adcionar(){
    if(isNumero(num.value) &&  !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var op = document.createElement('option')
        op.text = `O numero ${Number(num.value)} foi adcionado a lista`
        lista.appendChild(op)
    }else{
        window.alert('[ERRO] O número digitado já esta na lista ou não esta entre 1 a 100')
    }
}

function finalizar(){
    var soma_valores = 0
    for(i in valores){
        soma_valores += valores[i]
    }
    var media_valores = soma_valores / valores.length
    res.innerHTML = `No Total, Temos ${valores.length} adcionados <br>O maior valor informado foi ${Math.max.apply(Math, valores)}<br>O menor valor informado foi ${Math.min.apply(Math, valores)}<br> A soma dos valores foi ${soma_valores}<br>A media dos valores foi ${media_valores.toFixed(2)}`
}