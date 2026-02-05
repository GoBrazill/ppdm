let nota = prompt('Qual a sua nota?');

if(nota >= 11 || nota <= -1) {
    console.log('Nota inválida')
} else if (nota >= 7) {
    console.log('Aprovado')
} else if (nota <= 5) {
    console.log('Reprovado')
} else {
    console.log('Recuperação')
}