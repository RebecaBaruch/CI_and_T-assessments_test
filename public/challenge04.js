function calculaTopOcorrenciasDeQueries(texto,queries,k) {
  let objTerm = [];
  let totalT = []
  let oco = [];
  let resultOco = [];
  
  //enquanto for menor que o número de queries...
  for(i=0;i<queries.length; i++){
     //verifica o número de ocorrências de cada querie
     let termos = (texto.split(queries[i])).length-1;

    //coloca como objeto a querie e o número de ocorrências dela
     objTerm.push({query: queries[i] ,
                  termo: termos});
     totalT.push(termos);
  }
  
  //enquanto j for menor que k -> número solicitado pelo 'usuário'   
  for(j=0;j<k; j++){
      let max = Math.max.apply(null, totalT);
      let maxIndex = totalT.indexOf(max);
    
      if(objTerm[maxIndex].termo = max){
          oco.push(objTerm[maxIndex]);
      }
      
      totalT.splice(maxIndex, 1);

  }

  for (var n = 0; n< oco.length; n++) {
      resultOco.push(oco[n].query);
  }
  
  console.log(resultOco);
  return resultOco;
}