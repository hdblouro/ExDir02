// Escreva um script que solicite a um funcionário o valor do seu salário mensal atual. 
// Calcule o salário atualizado desse funcionário, depois do reajuste, seguindo a regra: 
// Se o salário for inferior ou igual a R$ 650,00, o reajuste será de 10%. 
// Caso o salário seja maior que R$ 650,00, o reajuste será de apenas 5%. 
// Mostre no console o salário original, o percentual de reajuste e o valor final do salário reajustado.

var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var percentual = new Intl.NumberFormat("pt-br", {
    style: "percent",
    minimumFractionDigits: 2,
});

var formatar = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: 'BRL',
    minimumFractionDigits: 2,
});

var salario: number = 0;

leitor.question("Informe seu salário R$:\n", function (answer: string) {
    var salario = parseFloat(answer);
    var perc: number = 0;

    if (salario <= 650) {
        perc = 0.1;
    } else {
        perc = 0.05
    }

    var reajuste: number = salario * perc;
    var novosalario: number = salario + reajuste;
    
    console.log("Percentual de Reajuste....:", percentual.format(perc));
    console.log("(+) Salário Atual.........:", formatar.format(salario));
    console.log("(+) Reajuste..............:", formatar.format(reajuste));
    console.log("(=) Salário Novo..........:", formatar.format(novosalario));
    leitor.close();
});

