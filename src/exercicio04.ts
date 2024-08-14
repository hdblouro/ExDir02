// Faça um script que receba um valor digitado pelo usuário informando sua idade em anos. 
// Depois, baseado na tabela a seguir informe no console em que categoria etária ele se encontra:
// Idade (anos)	Categoria
//  <= 10	    Criança
//  11 <= 13	Pré-Adolescente
//  14 <= 17	Adolescente
//  18 <= 59	Adulto
//  >= 60	    Idoso

var readline = require('readline');
var idade:number = 0;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe sua idade:\n", function (answer: number) {
    var idade = answer;
    var cat = "";
    if(idade <=10){
        cat = "Criança";
    } else if(idade<=13) {
        cat = "Pré-Adolescente";
    } else if(idade<=17) {
        cat = "Adolescente";
    } else if(idade<=59) {
        cat = "Adulto";
    } else {
        cat = "Idoso";
    } 
    console.log("Para a idade de %d anos, a pessoa é considerada: %s", idade, cat);
    leitor.close();
});
