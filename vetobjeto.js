function funcao(){
    var vet = []
    for(var i=0; i<3; i++){
    var objeto = {}
    // coloca dados no objeto
        objeto.salario = Number(prompt("Informe o salario do habitante: "))
        objeto.idade = Number(prompt("Informe a idade do habitante: "))
        objeto.nfilhos = Number(prompt("Informe o numero de filhos do habitante: "))
        objeto.sexo = (prompt("Informe o sexo do habitante: "))
        //coloca objeto no vetor
        vet.push(objeto)
    }
    //calcula estoque
    var somaSalario = 0
    var somaFilhos = 0
    var maiorSalario = vet[0].salario
    for (var i=0; i<vet.length; i++){
        somaSalario = somaSalario + vet[i].salario;
        somaFilhos = somaFilhos + vet[i].nfilhos
        if (vet[i].salario > marioSalario){
            maiorSalario = vet[i].salario
        }
        if (vet[i].sexo == 'F') && (vet[i].salario > 1000)
            qtde++;
        
    }
       

    alert("A media de salario da população é: " + somaSalario/vet.length)
    alert("A media de numero de filhos é " + somaFilhos/vet.length)
    alert("O maior salario é de: " + maiorSalario)
    alert("Percentual de mulheres com salario maior de R$1000,00" + qtde/3*100);
}