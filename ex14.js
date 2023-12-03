let num = [5, 8, 2, 9, 3]
//num.push(1)  //Adiciona ao final do vetor
//num.sort()  //Coloca em ordem crescente
console.log('O vetor tem '+ num.length+ ' posições')
console.log('O primeiro valor do vetor é: '+num[0])
console.log(num) //O vetor depois das alterações
for(let i = 0; i < num.length; i++){
console.log('A posição '+ i+ ' tem o valor '+num[i])
}
let pos = num.indexOf(3) //procura em qual posição tem esse numero
//se não tiver volta '-1'
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log('O valor está na posição '+pos)
}



