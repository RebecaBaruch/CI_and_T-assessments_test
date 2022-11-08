/*
Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível. E caso não exista posto de gasolina, retornar -1

A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

Exemplo:
Combustivel (em litros): 2
Consumo médio (km/l): 8
Postos de Gasolina (km): [2, 15, 22, 10.2]


*/

function ultimaParada(combustivel,consumo,postosDeGasolina) {
  //calcula o limite de km 
    let limite = combustivel * consumo;
  
  //declara array auxiliar, guarda os km menores que o limite
    let postosProx = [];
  
  //verifica os valores da array postosDeGasolina menores que limite
    for(i=0; i<=postosDeGasolina.length; i++){
      if(postosDeGasolina[i] <  limite){
         //guarda os valores  menores que limite em postosProx
        postosProx.push(postosDeGasolina[i]);
      }
    }
  
  //guarda o maior valor de pstosProx
   let maxPosto = Math.max.apply(null, postosProx);
  
   return postosProx.length != 0 ?  maxPosto :  -1;
    
}
