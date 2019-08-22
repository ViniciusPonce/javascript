function funcao(){
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
    //calcula estoque
    var estoque = 0
    for (var i=0; i<5; i++){
        estoque = estoque + vet[i].quantidade
    }
       

    alert("O valor total em estoque é" + estoque)
}