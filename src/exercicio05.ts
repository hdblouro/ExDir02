// Escreva um script que solicite a um candidato a vereador que digite valores para o número total de eleitores de um município,
// o número de votos brancos, nulos e válidos, e quantos votos obteve na última eleição. Se o candidato tiver mais de 10% de votos
// da soma dos votos válidos mais votos brancos, informar no console que ele foi eleito. Informar também, qual o percentual que 
// sua votação atingiu perante a quantidade de eleitores do município.

var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let legendas: string[] = ["eleitores", "votos brancos", "votos nulos", "votos válidos", "votos obtidos"];
let votos: number[] = [];
let i: number = 0;

var percentual = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
});

function perguntar() {
    leitor.question(`Informe o total de ${legendas[i]}: `, function (answer: string) {
        votos[i] = parseInt(answer);
        i++;
        if (i < 5) {
            perguntar(); // Chama a função novamente para 
            // continuar perguntando
        } else {
            console.log("\n>>> Resultado das Eleições <<<");
            console.log(`Quantidade de eleitores.: ${votos[0]}`);
            console.log(`Total de votos em branco: ${votos[1]}`, "-", percentual.format(votos[1] / votos[0]));
            console.log(`Total de votos nulos....: ${votos[2]}`, "-", percentual.format(votos[2] / votos[0]));
            console.log(`Total de votos válidos..: ${votos[3]}`, "-", percentual.format(votos[3] / votos[0]));
            console.log(`Total de votos obtidos..: ${votos[4]}`, "-", percentual.format(votos[4] / (votos[3]+votos[1])));
            console.log("Candidato:",votos[4] / (votos[3]+votos[1])>=0.1?"Eleito!":"Não foi eleito...");
            leitor.close();
        }
    });
}

perguntar(); // Inicia o processo de perguntas

export {};