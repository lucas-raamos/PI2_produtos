module.exports = class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }
    deletar(indice){
        this.produtos.splice(indice, 1)
    }
    
    listar() {
        return this.produtos;
    }    
}
