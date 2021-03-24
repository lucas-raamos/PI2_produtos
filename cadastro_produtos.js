module.exports = class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }
    
    listar() {
        return this.produtos;
    }    
}
