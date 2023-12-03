function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
    if(fsex[0].checked){
    genero = 'Homem'
    if(idade >= 0 && idade < 10){
        //menino
        img.setAttribute('src', 'imagens/menino.png')
    }
    else if(idade < 21){
        //jovemh
        img.setAttribute('src', 'imagens/jovemh.png')
    }
    else if(idade < 50){
        //homem
        img.setAttribute('src', 'imagens/homem.png')
    }
    else{
        //velho
        img.setAttribute('src', 'imagens/velho.png')
    }

    }
    else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //menino
            img.setAttribute('src', 'imagens/menina.png')
        }
        else if(idade < 21){
            //jovemm
            img.setAttribute('src', 'imagens/jovemm.png')
        }
        else if(idade < 50){
            //homem
            img.setAttribute('src', 'imagens/mulher.png')
        }
        else{
            //velho
            img.setAttribute('src', 'imagens/velha.png')
        }
    }
    res.innerHTML = 'Detectamos '+ genero+ ' com '+ idade+ ' anos.'
    res.appendChild(img)
}