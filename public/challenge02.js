function retornaMenorEMaiorValorDeVendas(tickets) {

    let vendas = []
    let resultado = []
   
    //for alinhado para percorrer a matriz
     for(l=0;l<tickets.length;l++){
       for(c=0;c<tickets[l].length;c++){
         //vai verificar se os valores estão entre 20 e 500 para adicionar
         if(tickets[l][c] > 20 &&  tickets[l][c] < 500) {
         vendas.push(tickets[l][c])
       }
     }
   } 
     //pegando o menor e o maior valor e adicionando no array
     let min = resultado.push(Math.min.apply(null, vendas))
     let max = resultado.push(Math.max.apply(null, vendas))
   
     console.log(resultado)
   }