let produtos = []

// async sempre acompanha await
// função para buscar os produtos do arquivo JSON
async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json') // busca o arquivo JSON
        produtos = await response.json() // converte o JSON em um array
        exibirProdutos() // exibe os produtos após o carregamento
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        alert('Erro ao carregar os produtos. Consulte o console para mais detalhes.')

    }
}

function adicionarProdutos() {
    const nome = document.getElementById('nome').value
    const preco = parseFloat(document.getElementById('preco').value)
    const disponivel = document.getElementById('disponivel').value === 'true'

    //is NaN - is not a number
    if (nome && !isNaN(preco)) {
        const novoProduto = {
            nome: nome,
            preco: preco,
            disponivel: disponivel
        }

        produtos.push(novoProduto)

        document.getElementById('nome').value = ''
        document.getElementById('preco').value = ''
        document.getElementById('disponivel').value = ''

        exibirProdutos()
    } else {
        alert('Poe favor, preencha o nome e o preço do produto')
    }
}

function exibirProdutos() {

    const listaProdutosDiv = document.getElementById('lista-produtos')

    listaProdutosDiv.innerHTML = ''

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div')

        produtoDiv.classList.add('produto')

        const nomeH3 = document.createElement('h3')
        nomeH3.textContent = produto.nome

        const pPreco = document.createElement('p')
        // essa crase se chama template string
        pPreco.textContent = `R$ ${produto.preco.toFixed(2)}`

        const disponibilidadeP = document.createElement('p')
        disponibilidadeP.textContent = `Disponibilidade: `

        const spanDisponibilidade = document.createElement('span')
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponível' : 'Indisponível'
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel')

        disponibilidadeP.appendChild(spanDisponibilidade)
        
            produtoDiv.appendChild(nomeH3)
            produtoDiv.appendChild(pPreco)
            produtoDiv.appendChild(disponibilidadeP)
            
            listaProdutosDiv.appendChild(produtoDiv)
    })

    
}

carregarProdutos()