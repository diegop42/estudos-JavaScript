const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de janeiro`, 
);
listaDeDestinos.push(`Curitiba`) //empurra ou adiciona um item ao fim da lista
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1)
console.log(listaDeDestinos)
console.log(listaDeDestinos[1], listaDeDestinos[0]  )