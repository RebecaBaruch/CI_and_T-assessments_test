function calculaTotalLeds(altura,largura) {
  //inicializa a matriz para guardar os pontos de LED
     let matriz = []

      for(l=0;l<largura+1;l++){
        for(a=0;a<altura+1;a++){
          if(largura <= 0){  //se a largura estiver vazia, ele vai armazenar só altura
            matriz.push[a]
          } else if(altura <= 0){ //se a altura estiver vazia, ele armazena só a largura
            matriz.push[l]
          } else{ //caso contrário, ele vai armazenar os 2 normalmente
            matriz.push([l][a])
          }
        }
      }
return matriz.length
}
