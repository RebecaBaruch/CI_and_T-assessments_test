/*
Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

Exemplo:

String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

Lista de termos: ["a", "em", "i", "el"]

K: 2

Resultado: ["i", "a"]

Explicação:

Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.


*/

function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    let objTerm = [];
    let totalT = []
    let oco = [];
    let resultOco = [];
    
    //enquanto for menor que o número de queries...
    for(i=0;i<queries.length; i++){
      
       let termos = (texto.split(queries[i])).length-1;  //verifica o número de ocorrências de cada query
       //coloca como objeto a query e o número de ocorrências dela
       objTerm.push({query: queries[i],
                               termo: termos});
       totalT.push(termos);
    }
    
    //enquanto j for menor que k -> número solicitado pelo 'usuário'
    for(j=0;j<k; j++){
        let max = Math.max.apply(null, totalT);
        let maxIndex = totalT.indexOf(max);
        
        if(objTerm[maxIndex].termo = max){
            oco.push(objTerm[maxIndex]);
            totalT[maxIndex] = 0;
        }
        console.log(totalT);
    }
    console.log(totalT);
    console.log(oco);
    
    for (n = 0; n< oco.length; n++) {
        resultOco.push(oco[n].query);
    }

    return resultOco;
  }
