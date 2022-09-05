// Crie um array vazio chamado sacolao, e siga os passos abaixo:
let sacolao = []
console.log(sacolao)

// Crie três objetos que vão representar frutas do sacolão. 
// Os objetos devem ter as seguintes propriedades: nome, preço, diponibilidade
const fruta1 = {
    nome: "melancia",
    preco: 14.50,
    disponibilidade: true
}

const fruta2 = {
    nome:"banana",
    preco: 4.30,
    disponibilidade: false
}

const fruta3 = {
    nome: "jabuticaba",
    preco: 21.60,
    disponibilidade: true
}

//Adicione os objetos ao array sacolao utilizando o método push()
//Imprima a o array sacolao, e certifique-se de que agora ela seja 
//um array com três objetos.

sacolao.push({fruta1})
console.log(sacolao)

sacolao.push({fruta2})
console.log(sacolao)

sacolao.push({fruta3})
console.log(sacolao)