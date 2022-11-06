function shuffleMusicas(musicasTocadas) {
  let ordSongs = [];
  let maxSongs = [];
  let minSongs = [];
  let rdmSongs = [];
  let j = 0, k = 0;

  
  musicasTocadas.sort((a, b) => {
    return a - b;
  });
  
  for (i=0; i<musicasTocadas.length; i++) {
    ordSongs.push(musicasTocadas[i]);
  }
 
  while(ordSongs.length != 0){
    maxSongs.push(ordSongs[ordSongs.length - 1]);
    minSongs.push(ordSongs[0]);

    ordSongs.pop();
    ordSongs.shift();  
    
    j++;
  }
  
  while((k<maxSongs.length)&&(k < minSongs.length )){
    rdmSongs.push(maxSongs[k]);
    rdmSongs.push(minSongs[k]);
    
    if(minSongs[k] == maxSongs[k]){
      rdmSongs.pop()
    }
    
    k++;
  }
  
  return rdmSongs;
 
}
