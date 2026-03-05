const fatoGatoElement = document.getElementById('fatogato')
const buscarFatoElement = document.getElementById('buscarfato')

async function buscarGato() {
    try {
        const res = await fetch('https://catfact.ninja/fact')
        const dados = await res.json()

        fatoGatoElement.textContent = dados.fact
    }  catch(error) {
        fatoGatoElement.textContent = 'Erro ao buscar um fato'
    } 
}

buscarFatoElement.addEventListener('click', buscarGato())
buscarGato()