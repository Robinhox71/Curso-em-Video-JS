function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por Favor Digite um número!')
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            let d = n*c
            item.text = n +' x '+ c +' = ' +d
            tab.appendChild(item)
            c++
        }
    }
}