function carregar() {
    var txt = window.document.getElementById('txt')
    var photo  = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    txt.innerHTML = `Agora são ${hora} Horas`
    if(hora >= 0 && hora <= 12) {
        //bomdia
        photo.src = "foto-manha.png"
        document.body.style.background = '#c0cad0'
    } else if(hora >= 12 && hora <= 18){
        // boa tarde
        photo.src = "foto-tarde.png"
        document.body.style.background = '#efb665'
        
    } else{
        //boa noite
        photo.src = "foto-noite.png"
        document.body.style.background = '#18384e'
    }
}