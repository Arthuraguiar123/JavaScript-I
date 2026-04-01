const livros = require('./listaLivros');

let maisBaratos = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBaratos].preco) {
        maisBaratos = atual
    }
}

console.log(`o livro mais barato custa ${livros[maisBaratos].preco} e o titulo é ${livros[maisBaratos].titulo}`)

console.log('Trabalho realizado por Arthur');