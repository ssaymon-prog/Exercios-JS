let amigo = {
  nome: "Jose",
  sexo: "M",
  peso: 84.4,
  engordar(p) {
    console.log("Engordou");
    peso += p;
  },
};
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`);
