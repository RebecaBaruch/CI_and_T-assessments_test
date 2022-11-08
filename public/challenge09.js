/*
Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica. No caso, “abcd” < “adbc” < “bacd”.

Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos mesmos caracteres que A reordenados.

B deve obedecer às seguintes condições:

Ser maior que A
Ser a menor string possível que cumpra as condições acima
Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem reposta”.
Por exemplo:

A = “ab”
Logo, o resultado será “ba”

A = “abcde”
Logo, o resultado será “abced”

A = “ba”
Nesse caso, o resultado será “sem resposta"
*/

//análise combinatória
Array.prototype.permutations = function() {
    if (this.length === 0) {
        return [[]];
    }

    let result = [];

    for (var i = 0; i < this.length; i++) {
        let aux = Object.create(this);
        let first = aux.splice(i, 1);
        let r = aux.permutations();
        for (j = 0; j < r.length; j++) {
            let prox = first.concat(r[j]);
            result.push(prox);
        }
    }

    return result;
};


function menorStringMaior(name) {
  let rand = name.split('')
  let arranjo;
  let amzArrj = []
  let maxRand = [];
  let respA= [];
  let respB = []
  let rtnFinally;
  let cmpTo;
  
  //combinando a análise combinatória em um array
  arranjo = (rand.permutations())
  for(i=0;i<arranjo.length;i++){
      amzArrj.push(arranjo[i].join(''))
  }

  //verificando os valores maiores que o name
  for(j=0;j<amzArrj.length;j++){
      if(amzArrj[j]>name){
       maxRand.push(amzArrj[j])
      } 
  }

  //filtrando o menor valor entre os maiores que name
  for(k=0;k<maxRand.length;k++){
    if(maxRand[k] < maxRand[k+1]){
    respA.push(maxRand[k])
    } else{
      respB.push(maxRand[0])
    }
  }

  //validar se é possível um número ser menor
  if(respB[0] != undefined){
      cmpTo = respB[0]
  } else {
    cmpTo = 'zzzzzzzzzz'
  }
  if(respA[0] != undefined){
      rtnFinally = respA[0]
  } else {
    rtnFinally = 'zzzzzzzzzz'
  }

   //validar se algum valor undefined passou
  if(cmpTo < rtnFinally){
    rtnFinally = cmpTo;
  } else if(cmpTo > rtnFinally){
    rtnFinally = rtnFinally;
  }

  if(rtnFinally === 'zzzzzzzzzz' || rtnFinally === 'zzzzzzzzzz'){
    return 'sem resposta'
  } else {
   return rtnFinally;
  }
}
