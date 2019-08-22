function funcao(){
    var vet = []
    for(var i=0; i<5; i++){
    var objeto = {}
    // coloca dados no objeto
    objeto.codigo = Number(prompt("Informe o codigo: "))
    objeto.nome = prompt("Informe o Nome: ")
    objeto.quantidade = Number(prompt("Informe a quantidade: "))
    objeto.preco = Number(prompt("Informe o preço: "))
    //coloca objeto no vetor
    vet.push(objeto)
    }
}