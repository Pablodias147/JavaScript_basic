
function contar(){
    let inicio = document.querySelector('input#inicio').value;
    let fim = document.querySelector('input#fim').value;
    let passo = document.querySelector('input#passo').value;
    let res = document.getElementById('res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert('ERRO Faltam dados')
    }
    else if(passo == 0){
        window.alert('ERRO Faltam dados')
    }
    else{
    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(passo)

    res.innerHTML = 'Contando...'
    for(let c = i; c <= f; c += p){

        res.innerHTML += `\u{1F449}${c}`
    }res.innerHTML += '\u{1F3C1}'}
    
    
   
}


