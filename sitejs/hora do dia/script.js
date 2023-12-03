function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var tit = window.document.getElementById('tit')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + " horas"
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#e2cd9f'
        tit.innerHTML = 'Bom Dia!'       
    }
    else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
        tit.innerHTML = 'Boa Tarde!'
    }
    else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
        tit.innerHTML = 'Boa Noite!'
    }

}