document.addEventListener('DOMContentLoaded', () => {

    const produtoFormElement = document.getElementById('produtoForm')
    const produtoTableElement = document.getElementById('produtoTable')
    
    document.getElementsByTagName('tbody')[0]
    
    const produtoIdElement = document.getElementById('produtoId')
    const cancelarBtnElement = document.getElementById('cancelar')

    // variável para rastrear se estamos editando um produto
    let editing = false

    // função para obter os produtos da LocalStorage
    function getProdutos() {
        const produtos = localStorage.getItem('produtos')
        return produtos ? JSON.parse(produtos) : []
    }

    // função para salvaar um novo produto
    function salvarProduto(produtos) {
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }

    // função para excluir um item
    function exibirProduto() {
        // Limpa a table antes de exibir os produtos
        produtoTableElement.innerHTML= ''

        const produtos = getProdutos()

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i]

            // Cria uma nova linha na tabela
            const row = produtoTableElement.insertRow()

            const nomeCell = row.insertCell()
            nomeCell.textContent = produto.nome

            const precoCell = row.insertCell()
            precoCell.textContent = 'R$ ' + produto.preco.toFixed(2)
            
            const disponibilidadeCell = row.insertCell()
            disponibilidadeCell.textContent = produto.disponibilidade
            disponibilidadeCell.classList.add(produto.disponibilidade === 'Disponivel' ? 'disponivel' : 'indisponivel')

            const actionCell = row.insertCell()

            const editarBtn = document.createElement('button')
            editarBtn.textContent = 'Editar'
            editarBtn.onclick = () => editarProduto(i)
            actionCell.appendChild(editarBtn)

            const excluirBtn = document.createElement('button')
            excluirBtn.textContent = 'Excluir'
            excluirBtn.onclick = () => excluirProduto(i)
            actionCell.appendChild(excluirBtn)
        }
    }

    // função para adicionar ou atualizar um produto
    produtoFormElement.addEventListener('submit', () => {
        event.preventDefault()

        const nome = document.getElementById('nome').value
        const preco = parseFloat(document.getElementById('preco').value)
        const disponibilidade = document.getElementById('disponibilidade').value
        const produtoId = produtoIdElement.value

        if(nome && !isNaN(preco)) {
            const produtos = getProdutos()

            if(editing) {
                produtos[produtoId].nome = nome
                produtos[produtoId].preco = preco
                produtos[produtoId].disponibilidade = disponibilidade
                editing = false
            } else {
                produtos.push( {nome: nome, preco: preco, disponibilidade: disponibilidade} )
            }
            salvarProduto(produtos)
            exibirProduto()
            produtoFormElement.reset()
            produtoIdElement.value = ''
        }
        else {
            alert('Por favor, preencha o nome e o preco corretamente')
        }

    })

    function editarProduto(index) {
        editing = true
        const produtos = getProdutos()
        const produto = produtos[index]

        document.getElementById('nome').value = produto.nome
        document.getElementById('preco').value = produto.preco
        document.getElementById('disponibilidade').value = produto.disponibilidade
        produtoIdElement.value = index
        
        // vamos mostrar o botão cancelar
        cancelarBtnElement.style.display = 'inline-block'
    }

    function excluirProduto(index) {
        if(confirm('Tem certeza que deseja exluir o produto?')) {
            const produtos = getProdutos()
            produtos.splice(index, 1)
            salvarProduto(produtos)
            exibirProduto()
        }
    }

    cancelarBtnElement.addEventListener('click', () => {
        editing = false
        produtoFormElement.reset()
        produtoIdElement.value = ''
        cancelarBtnElement.style.display = 'none'
    })


})