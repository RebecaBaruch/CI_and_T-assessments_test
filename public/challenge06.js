/*
Dizemos que um número natural X esconde o Y quando, ao apagar alguns algarismos de X, o número Y aparece. Por exemplo, o número 12345 esconde o número 235, uma vez que pode ser obtido ao apagar os números 1 e 4. Por outro lado, ele não esconde o número 154.

A imagem demonstra números: 1,2,3,4,5 todos estão em azul, mas o número 1 e 4 estão com um risco vermelho.

Escreva um código que recebe dois números e que retorna um booleano dizendo se o primeiro esconde o segundo.


*/

function checaNumeroEscondido(numero,numeroOculto) {
  let num = [];//armazena os alagarismos do numero
  let numOcult = [];//armazena os alagarismos do numero oculto

  let nTest = [];

  //transforma os numeros em elementos separados de uma array
  String(numero).split("").map((numero)=>{
    num.push(Number(numero))
  });
  String(numeroOculto).split("").map((numeroOculto)=>{
    numOcult.push(Number(numeroOculto))
  });
  
  //armazena para validar
   String(numero).split("").map((numero)=>{
    nTest.push(Number(numero))
  });

  //remove de nTest os numeros equivalentes
  for(i=0;i<numOcult.length;i++){
      for(j=0;j<num.length;j++){
        if(numOcult[i] == num[j]){
          var x = nTest.indexOf(num[j])
           nTest.splice(x, 1) ;
        } 
      }
   }
  
  //verifica se um obtém o outro
  for(k=0;k<numOcult.length;k++){
     var test = numOcult.includes(num[k]);
  }
  for(n=0;n<nTest.length;n++){
    var testOcult = num.includes(nTest[n]);
  }

   if(test == true){
      return true
  } else if(test == false || testOcult == false) {
    return false
  } else{
    return undefined
  }
  
}
