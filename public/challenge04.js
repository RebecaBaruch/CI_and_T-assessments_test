let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
let queries = ["a","em","i","el"];
let k = 2;

function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    let objTerm = [];
    let totalT = []
    let oco = [];
  
    
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
        //percorre o atributo 'termo' de cada objeto na arraym e guarda em 'terT'
        let terT = objTerm.map(object => {
          return object.termo;
        });
      
        //verifica e armazena em 'max' o maior termo em objTerm, que agora está armazenado em terT
        let max = Math.max(...terT);
        let maxIndex = objTerm.map(object => object.terT).indexOf(max); //pega a index do maior valor
      
        console.log(maxIndex);
  
    }
   
    for(n=0; n<objTerm.length;n++){
      console.log(objTerm[n].query, objTerm[n].termo);
    }
  
    console.log(oco);
  }

  calculaTopOcorrenciasDeQueries(texto,queries,k);