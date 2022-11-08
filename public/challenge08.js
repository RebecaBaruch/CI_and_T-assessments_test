/*
Um grande amigo seu mora numa cidade pequena, onde existem apenas duas empresas de táxi - a Empresa 1 e a Empresa 2. Ambas mudam suas taxas a cada dia e calculam o valor de suas corridas da seguinte forma: uma taxa fixa mais um valor por quilômetro rodado.
Seu amigo é fisioterapeuta e pega táxis diariamente para visitar seus clientes ao redor da cidade. Você decidiu escrever um código para ajudá-lo a decidir qual empresa escolher para cada uma das corridas, baseado no preço.

Sua função receberá 4 valores: TF1 (a taxa fixa da empresa 1), VQR1 (o valor por quilômetro rodado da empresa 1), TF2 (a taxa fixa da empresa 2), VQR2 (o valor por quilômetro rodado da empresa 2), todos em formato string. Seu retorno deve ser uma string em uma das seguintes formas:

“Tanto faz” - para o caso de o valor das duas empresas para qualquer corrida ser igual
“Empresa 1” - se o valor da Empresa 1 for sempre menor que o da Empresa 2
“Empresa 2” - para o caso contrário do citado acima
“Empresa Xpto quando a distância < N, Tanto faz quando a distância = N, Empresa Ypto quando a distância > N” para o caso de a escolha depender da distância a ser percorrida (onde Xpto e Ypto representa 1 ou 2 e N representa a distância).
Exemplo:
TF1 = 2,50
VQR1 = 1,00
TF2 = 5,00
VQR2 = 0,75
Output:
“Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0”


*/

function escolheTaxi(tf1,vqr1,tf2,vqr2) {
  let distance = parseFloat(10).toFixed(1);//valor da distância com uma casa decimal
  let cpPlus; //armazena a empresa com menor valor para distância > 10
  let cpLess;//armazena a empresa com menor valor para distância < 10
  let tF = "";//armazena o texto 'tanto faz' para distância = 10
  
  //transforma os parâmetros em racional
  tf1 = parseFloat(tf1);  
  tf2 = parseFloat(tf2);
  vqr1 = parseFloat(vqr1);
  vqr2 = parseFloat(vqr2);

  //calcula e armazena o valor da corrida das empresa caso a distância = 10
  let price1 =  tf1 + ( vqr1 * distance);
  let price2 = tf2 + (vqr2 * distance);
  
  //calcula e armazena o valor da corrida das empresa caso a distância  > 10
  let pPlus1 = tf1 + ( vqr1 * (distance + 1));
  let pPlus2 = tf2 + ( vqr2 * (distance + 1));
  
  //calcula e armazena o valor da corrida das empresa caso a distância < 10
  let pLess1 = tf1 + ( vqr1 * (distance - 1));
  let pLess2  = tf2 + ( vqr2 * (distance - 1));

  //verifica qual empresa é mais vantajosa nos três cenários
  tF= (price1 = price2)? `Tanto faz quando a distância = ${distance}` :  "";
  cpLess = (pLess1 < pLess2)? "Empresa 1" :  "Empresa 2";
  cpPlus = (pPlus1 < pPlus2)? "Empresa 1" : "Empresa 2";
  
  //exibe o que se pede
  return `${cpLess} quando a distância < ${distance}, ${tF}, ${cpPlus} quando a distância > ${distance}`;
 
}
