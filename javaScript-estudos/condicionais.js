console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São paulo`, `Rio de janeiro`);


const idadeComprador = 17;
const estaAcompanhada = false;
const passagemComprada = true;

console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("comprador maior de idade");
//   listaDeDestinos.splice(1, 1); //Removendo item
// } else if (estaAcompanhada) {
//   console.log("comprador esta acompanhado");
//   listaDeDestinos.splice(1, 1); //Removendo item
// } else {
//   console.log("comprador não e maior de idade não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viajem!");
  listaDeDestinos.splice(1, 1); //Removendo item
} else {
  console.log("comprador não e maior de idade não posso vender");
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && passagemComprada){
    console.log('Boa viagem!');
}else {
    console.log('Você não pode embarcar');
}

console.log(listaDeDestinos);
