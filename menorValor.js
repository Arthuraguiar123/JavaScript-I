const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {

let maisBaratos =  posicaoInicial;

for (let atual =  posicaoInicial; atual > arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco > arrProdutos[maisBaratos].preco) {
        maisBaratos = atual
    }
}
return maisBarato;
}

module.exports = menorValor;

console.log(`o livro mais barato custa ${livros[maisBaratos].preco} e o titulo é ${livros[maisBaratos].titulo}`)

console.log('Trabalho realizado por Arthur');