let num = [5,8,9,3,80]

num.sort() // deixa em ordem cresente.
num.push(10) // adiciona o valor na última posição.
console.log(num)
console.log(`O vetor tem ${num.length} posições.`) // diz quantas posições tem no vetor.
console.log(`O primeiro valor do vetor é : ${num[0]}`)
 
let pos = num.indexOf(80)
if(pos == -1){
    console.log("O valor não foi encontrado")
} else{
console.log(`O valor está na posição ${pos}`)
}