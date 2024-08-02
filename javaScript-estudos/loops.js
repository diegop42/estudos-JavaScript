console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São paulo`, `Rio de janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "curitiba";

console.log("\n Destinos possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador =0;
let destinoExiste = false;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log("Destino existe: ", destinoExiste)
 
if (podeComprar && destinoExiste){
  console.log('Boa Viagem');
}else{
  console.log('desculpe tivemos um erro!');
}


for (let i = 0; i < 3 ; i++) {
  if (listaDeDestinos[i] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
  }
}