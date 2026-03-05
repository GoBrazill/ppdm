const loadingElement = document.getElementById('loading')
const produtoElement = document.getElementById('produto')
const errorElement = document.getElementById('error')

fetch('https://fakestoreapi.com/products/1')
.then(res => {
    if(!res.ok) {
        throw new Error(`Deu erro paizão ${res.status}`)
    }
    return res.json()
})
.then(data => {
    loadingElement.style.display = 'none'
    produtoElement.innerHTML = `
        <img src='${data.image}' alt='${data.title}'>
        <h2>${data.title}</h2>
        <p>${data.description}</p>
    `
})
.catch(err => {
    loadingElement.style.display = 'none'
    loadingElement.textContent = err.message
})