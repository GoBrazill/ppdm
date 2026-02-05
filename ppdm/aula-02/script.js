const exemploArrayLiteral = document.getElementsByClassName('exemplo-array-literal')[0]

const frutas =['maçã', 'uva', 'banana']

exemploArrayLiteral.innerHTML = `
<h2>Exemplo de array com literal</h2>
<p>Array: [ ${frutas} ]</p>
`

const exemploArrayAcesso = document.getElementsByClassName('exemplo-array-acesso')[0]

const numeros =[1, 2, 3, 4, 5]

// const primeiroElemento = numeros[0]
// const segundoElemento = numeros[1]
// const terceiroElemento = numeros[2]
// const quartoElemento = numeros[3]
// const quintoElemento = numeros[4]

// exemploArrayAcesso.innerHTML = `
//     <h2>Exemplo de acesso aos elementos do array</h2>
//     <p>Primeiro elemento: ${primeiroElemento}</p>
//     <p>Segundo elemento: ${segundoElemento}</p>
//     <p>Terceiro elemento: ${terceiroElemento}</p>
//     <p>Quarto elemento: ${quartoElemento}</p>
//     <p>Quinto elemento: ${quintoElemento}</p>
// `

// Jeito que eu fiz(tinha errado no innerHTML += tinha colocado só =)
numeros.forEach(numero => {
    exemploArrayAcesso.innerHTML +=`
    <p>${numero}º numero : ${numero}</p>
`
}); 

const exemploArrayModificado = document.getElementsByClassName('exemplo-array-modificado')[0]

const cores = ['azul', 'amarelo', 'verde']

cores[0] = 'rosa'

exemploArrayModificado.innerHTML = `
    <h2>Exemplo de array modificado</h2>
    <p>Array: [ ${cores} ]</p>
`