let numero = 12345;
let numeroOculto = 235;

function checaNumeroEscondido(numero,numeroOculto) {
  
  let numeroArr = [];
  let numOculArr = [];
  
  let nTrans = String(numero).split("").map((numero)=>{
    numeroArr.push(Number(numero))
  })
  let noTrans = String(numeroOculto).split("").map((numeroOculto)=>{
    numOculArr.push(Number(numeroOculto))
  })
  
  let numVer = numeroArr;
  let newVer = [];
  
  console.log(numVer);
  
  for(i=0;i<numOculArr.length;i++){
      
    for(j=0;j<numVer.length;j++){
      if(numeroArr[0]!=numVer[i]){
        console.log("NUMERO:" + numeroArr[j]);
        console.log("OCULTO:" + numOculArr[0]);
        console.log("numVer: " + numVer + "\n");
        numVer.splice(0, 1);
      }else{
         newVer.push(numVer[0]);
         numVer.splice(0,1);
      }
    }
  }
  
  console.log("\n" + newVer);
}

checaNumeroEscondido(numero,numeroOculto);
