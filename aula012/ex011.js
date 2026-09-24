//menor de 16 não vota, maior de 18 obrigatorio, 16,17 e acima de 65 opcional

var idade = 50 
console.log(`Você tem ${idade} anos de idade.`)

if (idade < 16){
  console.log("Não Pode Votar !")
} 
else if (idade <18 || idade > 65){
  console.log("Voto Opcional !")
} 
else{
  console.log("Voto Obrigatório !")
} 
