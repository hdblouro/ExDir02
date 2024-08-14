// A média de um aluno em uma escola é calculada por três notas de provas que valem cada uma de 0 a 10, 
// podendo conter valores decimais. Faça um script que receba os três valores constantes das notas de um aluno, 
// calcule sua média simples e mostre no console além da média final, a informação que estará aprovado se 
// sua média for superior ou igual a 6 e reprovado caso a média seja inferior a 6.

var nota1: number = 7.5;
var nota2: number = 8;
var nota3: number = 9;
var media: number = (nota1+nota2+nota3)/3;

console.log("A Média do aluno é:", media.toFixed(2));

if(media<6){
    console.log("Aluno reprovado...");
} else {
    console.log("Aluno aprovado!");
}
