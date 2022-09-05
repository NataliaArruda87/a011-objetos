const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// Qual o código para imprimir o nome do primeiro ator/atriz?
console.log("Nome do primeiro ator/atriz:", filme.elenco[0])

//Qual o código para imprimir o nome do último ator/atriz?
console.log("Nome do ultimo ator/atriz:", filme.elenco[3])

//Qual o código para exibir o array com todas as transmissões 
//de hoje?
console.log("Transmissões de hoje:", filme.transmissoesHoje)

//Qual o código para exibir o horário de transmissão do filme 
//no Canal Brasil?
console.log("Transmissões de hoje:", filme.transmissoesHoje[1, 1])
