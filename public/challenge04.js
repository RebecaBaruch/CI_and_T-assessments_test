function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    let totalT = [];
    let oco = [];
    let ocQueries = [];
    
    //enquanto for menor que o número de queries...
    for(i=0;i<queries.length; i++){
       //verifica o número de ocorrências de cada querie
       let termos = (texto.split(queries[i])).length-1;
  
      //coloca como objeto a querie e o número de ocorrências dela
       totalT.push({query: queries[i] ,
                           termo: termos});
    }
    
    //enquanto j for menor que k -> número solicitado pelo 'usuário'
    for(j=0;j<k; j++){
        //percorre o atributo 'termo' de cada objeto na arraym e guarda em 'terT'
        let terT = totalT.map(object => {
          return object.termo;
        });
      
        //verifica e armazena em 'max' o maior termo em totalT, que agora está armazenado em terT
        let max = Math.max(...terT);
        let maxIndex = totalT.map(object => object.terT).indexOf(max); //pega a index do maior valor
      
        console.log(maxIndex);
  
    }
   
    for(n=0; n<totalT.length;n++){
      console.log(totalT[n].query, totalT[n].termo);
    }
  
    console.log(oco);
  }