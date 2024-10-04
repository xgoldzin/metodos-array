let produtos = [];
let ultimoId = 0;

// Função para adicionar um novo produto
function createProduto() {
    ultimoId += 1;
    let id = ultimoId;
    let nome = document.getElementById("nomeP").value;
    let preco = Number(document.getElementById("preco").value);
    let qtde = Number(document.getElementById("qtde").value);
    
    let pdt = { id: id, nome: nome, preco: preco, quantidade: qtde };
    produtos.push(pdt);
    document.getElementById("msg").innerHTML = "Produto cadastrado com sucesso!";
    console.log(produtos);
}

// Função para remover o último produto
function removeUltimoProduto() {
    const removed = produtos.pop();
    document.getElementById("msg").innerHTML = removed ? `Produto ${removed.nome} removido com sucesso!` : "Nenhum produto para remover.";
}

// Função para remover o primeiro produto
function removePrimeiroProduto() {
    const removed = produtos.shift();
    document.getElementById("msg").innerHTML = removed ? `Produto ${removed.nome} removido com sucesso!` : "Nenhum produto para remover.";
}

// Função para adicionar um produto no início
function addProdutoNoInicio(nome, preco, qtde) {
    ultimoId += 1;
    let pdt = { id: ultimoId, nome: nome, preco: preco, quantidade: qtde };
    produtos.unshift(pdt);
    document.getElementById("msg").innerHTML = `Produto ${nome} adicionado no início!`;
}

// Função para remover um produto em um índice específico
function removeProdutoPorIndice(index) {
    if (index >= 0 && index < produtos.length) {
        const removed = produtos.splice(index, 1);
        document.getElementById("msg").innerHTML = `Produto ${removed[0].nome} removido com sucesso!`;
    } else {
        document.getElementById("msg").innerHTML = "Índice inválido.";
    }
}

// Função para obter uma parte dos produtos
function getProdutosSlice(inicio, fim) {
    const slicedProdutos = produtos.slice(inicio, fim);
    const produtosCadastradosDiv = document.getElementById("produtosCadastrados");
    produtosCadastradosDiv.innerHTML = ""; // Limpa a área antes de exibir

    if (slicedProdutos.length === 0) {
        produtosCadastradosDiv.innerHTML = "<p>Nenhum produto encontrado nesse intervalo.</p>";
        return;
    }

    slicedProdutos.forEach(produto => {
        produtosCadastradosDiv.innerHTML += 
            `<p>${produto.id} - ${produto.nome} - R$ ${produto.preco.toFixed(2)} - ${produto.quantidade}</p>`;
    });
}


// Função para concatenar dois arrays de produtos
function concatenaProdutos(outrosProdutos) {
    const produtosConcatenados = produtos.concat(outrosProdutos);
    console.log(produtosConcatenados);
}

// Função para encontrar o índice de um produto pelo nome
function findProdutoPorNome(nome) {
    const index = produtos.findIndex(produto => produto.nome === nome);
    return index >= 0 ? index : "Produto não encontrado.";
}

// Função para verificar se um produto existe
function verificaProduto(nome) {
    const existe = produtos.some(produto => produto.nome === nome);
    return existe ? "Produto encontrado." : "Produto não encontrado.";
}

// Função para ordenar os produtos por preço
function ordenarProdutosPorPreco() {
    produtos.sort((a, b) => a.preco - b.preco);
    document.getElementById("msg").innerHTML = "Produtos ordenados por preço!";
}

// Função para inverter a ordem dos produtos
function inverterProdutos() {
    produtos.reverse();
    document.getElementById("msg").innerHTML = "Ordem dos produtos invertida!";
}

// Função para converter um array de produtos em uma string
function produtosParaString() {
    const produtosString = produtos.map(produto => `${produto.id} - ${produto.nome} - R$ ${produto.preco.toFixed(2)} - ${produto.quantidade}`).join(", ");
    console.log(produtosString);
}

// Função para dividir uma string de produtos
function dividirStringEmProdutos(produtosString) {
    const partes = produtosString.split(", ");
    partes.forEach(p => {
        let [id, nome, preco, qtde] = p.split(" - ");
        produtos.push({ id: Number(id), nome: nome, preco: Number(preco.replace("R$ ", "")), quantidade: Number(qtde) });
    });
    document.getElementById("msg").innerHTML = "Produtos adicionados a partir da string!";
}

// Funções de visualização e interação com produtos
function readProdutos() {
    const produtosCadastradosDiv = document.getElementById("produtosCadastrados");
    produtosCadastradosDiv.innerHTML = ""; // Limpa a área de produtos cadastrados

    if (produtos.length === 0) {
        produtosCadastradosDiv.innerHTML = "<p>Nenhum produto cadastrado.</p>";
        return;
    }

    produtos.forEach(produto => {
        produtosCadastradosDiv.innerHTML += 
            `<p>${produto.id} - ${produto.nome} - R$ ${produto.preco.toFixed(2)} - ${produto.quantidade}</p>`;
    });
}
