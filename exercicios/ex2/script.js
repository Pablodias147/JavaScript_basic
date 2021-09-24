function verificar(){
    var dia = new Date()
    var ano = dia.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO Verifique os dados e tente novamente')
    } else{
        window.alert('Tudo certo')
    }
}