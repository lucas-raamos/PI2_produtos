const Produto = require("./produto");
const CadastroProdutos = require("./cadastro_produtos");

let cadastroProdutos = new CadastroProdutos();

const produto = new Produto(1,"arroz",6.3);

cadastroProdutos.inserir(produto);
cadastroProdutos.inserir(new Produto(2,"feijao",8.9));

for(let prod of cadastroProdutos.listar()){
    console.log (`Produto ${prod.codigo}: ${prod.nome}, ${prod.preco}`);
}
