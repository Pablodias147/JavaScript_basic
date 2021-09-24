function verificar(){
    var dia = new Date()
    var ano = dia.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var sexo = document.getElementsByName('radsex').value
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`

        res.appendChild(img)
        
    } 
}