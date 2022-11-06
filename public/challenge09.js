function escolheTaxi(tf1,vqr1,tf2,vqr2) {
  let distance = parseFloat(7.14);
  let cpPlus;
  let cpLess;
  let tF = false;
  
  tf1 = parseFloat(tf1);  
  tf2 = parseFloat(tf2);
  vqr1 = parseFloat(vqr1);
  vqr2 = parseFloat(vqr2);

  let price1 =  tf1 + ( vqr1 * distance);
  let price2 = tf2 + (vqr2 * distance);
  
  let pPlus1 = tf1 + ( vqr1 * (distance + 1));
  let pPlus2 = tf2 + ( vqr2 * (distance + 1));
  
  let pLess1 = tf1 + ( vqr1 * (distance - 1));
  let pLess2  = tf2 + ( vqr2 * (distance - 1));

  
  tF= (price1 = price2)? `Tanto faz quando a distância = ${distance}` :  false;
  cpLess = (pLess1 < pLess2)? "Empresa 1" :  "Empresa 2";
  cpPlus = (pPlus1 < pPlus2)? "Empresa 1" : "Empresa 2";
  
  return `${cpLess} quando a distância < ${distance}, ${tF}, ${cpPlus} quando a distância > ${distance}`;
 
}
