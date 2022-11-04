let assinante = [true, false];
let minutosAssistidos =  [60, 120];

function calculaPorcentagemSorteio(assinante,minutosAssistidos) {
  let minFilter = [];
  let totalMin = 0;
  let per = [];
  
  for(i=0; i<assinante.length; i++){
    if(assinante[i]==true){
      minFilter.push(minutosAssistidos[i]*2);
    }else{
      minFilter.push(minutosAssistidos[i]);
      }
  }
  
  for(j=0; j<minFilter.length;j++){
    totalMin += minFilter[j];
  }
  
  for(k=0;k<minFilter.length;k++){
    let num = totalMin/minFilter[k];
    let numPer = Math.round(100/num);

    per.push(numPer);
  }
  
  return per;
}
