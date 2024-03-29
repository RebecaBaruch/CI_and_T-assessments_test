/*
Você está trabalhando para uma empresa que fornece materiais escolares e precisa da sua ajuda para entrar no mundo digital. Como primeira atividade, você identificou que não existe uma funcionalidade que é muito importante para a empresa ter mais controle sobre os valores dos produtos vendidos. Esta funcionalidade consiste em descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores. Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.

A sua função/método deverá receber uma lista vendas agrupadas por vendedores, (e.g. [[200, 100], [300]]) e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor (e.g. [100, 300]).

Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.


*/

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
