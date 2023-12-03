var agora = new Date()
var diaSem = agora.getDay()
/* 
0 - Domingo
1 - Seg
2 - Ter
3 - Qua
4 - Qui
5-  Sex
6 - Sab
*/

switch (diaSem) {
    case 0:
        diaSem = "Domingo"
        break
    case 1:
        diaSem = "Seg"
        break
    case 2:
        diaSem = "Ter"
        break
    case 3:
        diaSem = "Qua"
        break
    case 4:
        diaSem = "Qui"
        break
    case 5:
        diaSem = "Sex"
        break
    case 6:
        diaSem = "Sab"
        break
}

console.log('Hoje é ' + diaSem)