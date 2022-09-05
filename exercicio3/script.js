const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

console.log(pokemon1)

//Crie uma cópia do objeto, acima, mantendo a estrutura, 
//mas trocando nome por “Squirtle” e tipo por “Água”
const pokemon2 = {...pokemon1, nome: "Squirtle", tipo: "Água"}
console.log(pokemon2)

//No objeto original, adicione mais uma propriedade, chamada ataques.
//Esta propriedade deve guardar um array de objetos com a estrutura
// abaixo. Inicie a propriedade como um array vazio, e crie o objeto
// abaixo utilizando **push()**

pokemon1.ataques = []
console.log(pokemon1.ataques)

const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push({ataque1})
console.log(pokemon1.ataques)

//Na cópia do objeto original, adicione a propriedade ataques 
//a partir do espalhamento da propriedade criada para o objeto 
//original;

pokemon2.ataques = []
console.log(pokemon2.ataques)

pokemon2.ataques = [...pokemon1.ataques]
console.log(pokemon2.ataques)

//Para o objeto original, adicione o ataque “Folha Navalha”, 
//com 45 de dano, 100 de precisão, e de tipo “Grama”;

const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}

pokemon1.ataques.push({ataque2})
console.log(pokemon1.ataques)

//para a cópia, crie o ataque “Jato de Água”, com 40 de dano, 
//100 de precisão, e do tipo “Água”; Imprima os dois objetos no console.

const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}

pokemon2.ataques.push({ataque3})
console.log(pokemon2.ataques)