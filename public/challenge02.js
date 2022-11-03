function retornaMenorEMaiorValorDeVendas(tickets) {
  
    //declara viráveis de venda e resultado
    let sales = [];
    let resultVal = [];
  
   //percorre a matriz
    for(row=0;row<tickets.length;row++){
      for(col=0;col<tickets[row].length;col++){
        
        //verifica se os valores estão entre 20 e 500
        if((tickets[row][col]>=20) && (tickets[row][col]<=500)) {
          //se responde às condições, adiciona a sales
         sales.push(tickets[row][col]);
      }
    }
  } 
    //pega o maior e menor valor para add a array
    let minVal = resultVal.push(Math.min.apply(null, sales));
    let maxVal = resultVal.push(Math.max.apply(null, sales));
  
    return resultVal;
  }
  