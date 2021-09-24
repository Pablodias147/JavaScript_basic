function tabuada(){
    let numero = document.querySelector('input#numero').value
    let res = document.getElementById('res')
    let n = Number(numero)
    
    var multiplicacao=0
    if(numero == 0){
        window.alert('[ERRO!] Digite um número valido!')
    } else{
        for(var c=1; c<=10; c++){
            let op = document.createElement('option')
            multiplicacao = numero * c
            op.text = `${c} X ${numero} = ${multiplicacao}`
            res.appendChild(op)
        }
    }
    
}
