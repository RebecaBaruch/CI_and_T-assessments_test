let consumo=8;
let combustivel=2;
let postosDeGasolina = [2,15,22,11];

function ultimaParada(combustivel,consumo,postosDeGasolina) {
    let limite = combustivel * consumo;
  
    let postosProx = [];
  
    for(i=0; i<=postosDeGasolina.length; i++){
      if(postosDeGasolina[i] <  limite){
        postosProx.push(postosDeGasolina[i]);
      }
    }
  
   console.log(limite);
   postosProx.length != 0 ? console.log(Math.max.apply(null, postosProx)) : console.log(-1);
    
}

ultimaParada(combustivel,consumo,postosDeGasolina);