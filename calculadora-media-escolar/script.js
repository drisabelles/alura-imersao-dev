var nome = 'Isabelle'

var nota1Bimestre = 9
var nota2Bimestre = 7
var nota3Bimestre = 4
var nota4Bimestre = 2
var notaFinal =
  (nota1Bimestre + nota2Bimestre + nota3Bimestre + nota4Bimestre) / 4

var notaFinalFixada = notaFinal.toFixed(1)

console.log('Bem vinde ' + nome)

console.log('Nota do 1º Bimestre: ' + nota1Bimestre)
console.log('Nota do 2º Bimestre: ' + nota2Bimestre)
console.log('Nota do 3º Bimestre: ' + nota3Bimestre)
console.log('Nota do 4º Bimestre: ' + nota4Bimestre)

console.log('Nota final: ' + notaFinalFixada)
