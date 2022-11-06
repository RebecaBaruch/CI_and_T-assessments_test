function checaNumeroEscondido(numero,numeroOculto) {
  //base
  let numeroNormal = []
  let numeroOcultado = []

  //validação
  let testeF = []

  //base
  String(numero).split("").map((numero)=>{
    numeroNormal.push(Number(numero))
  })
  String(numeroOculto).split("").map((numeroOculto)=>{
    numeroOcultado.push(Number(numeroOculto))
  })
  //validação
   String(numero).split("").map((numero)=>{
    testeF.push(Number(numero))
  })

  //retirar os numeros para aparecer o oculto
  for(o=0;o<numeroOcultado.length;o++){
      for(n=0;n<numeroNormal.length;n++){
        if(numeroOcultado[o] == numeroNormal[n]){
          var x = testeF.indexOf(numeroNormal[n])
           testeF.splice(x, 1) //vai armazenar [1,4] no teste F
        } 
      }
   }

  for(i=0;i<numeroOcultado.length;i++){
     var validacao = numeroOcultado.includes(numeroNormal[i])
  }
  for(j=0;j<testeF.length;j++){
    var validacaoOct = numeroNormal.includes(testeF[j])
  }

   if(validacao == true){
      return true
  } else if(validacao == false || validacaoOct == false) {
    return false
  } else{
    return undefined
  }
  
}
