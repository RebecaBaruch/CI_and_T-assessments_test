/*Sua equipe está trabalhando em um app de streaming de músicas e uma das funcionalidades é criar um embaralhador de músicas. Uma pesquisa feita pela equipe de UX (experiência do usuário) mostrou que essa é uma das funcionalidades mais importantes para os usuários e por isso foi priorizada a criação de um experimento para testar a melhor solução.

A ideia é criar vários embaralhadores diferentes e realizar um teste com partes dos usuários (chamado de teste A/B), onde cada grupo de usuários selecionado recebe uma versão e através de pesquisas e métricas de utilização saberemos qual terá a maior aceitação.

Sua tarefa será desenvolver um desses embaralhadores. Você deve criar uma função que receberá uma lista de pesos que representa as músicas mais ouvidas pelo usuário. Sua função deve retornar uma lista organizada intercalando as músicas mais ouvidas com as músicas menos ouvidas. Por exemplo:

Na situação onde a lista de pesos é: [2, 10, 5, 3] sua função deverá retornar [10, 2, 5, 3]*/

function shuffleMusicas(musicasTocadas) {
  let ordSongs = [];
  let maxSongs = [];
  let minSongs = [];
  let rdmSongs = [];
  let j = 0, k = 0;

  //ordena os valores em 'musicasTocadas'...
  musicasTocadas.sort((a, b) => {
    return a - b;
  });
  
  for (i=0; i<musicasTocadas.length; i++) {
    ordSongs.push(musicasTocadas[i]);
  }//...armazena de forma ordenada os valores em 'ordSongs'
 
  //enquanto houver elementos em ordSongs
  while(ordSongs.length != 0){
    maxSongs.push(ordSongs[ordSongs.length - 1]);//armazena o maior valor (último)
    minSongs.push(ordSongs[0]);//armazena o menor valor (primeiro)

    ordSongs.pop();//remove o maior valor (último)
    ordSongs.shift();//remove o menor valor (primeiro)
    
    j++;//repete até ordSongs estiver vazia
  }
  
  //percorre maxSongs e minsSongs
  while((k<maxSongs.length)&&(k < minSongs.length )){
    //armazena de forma alternada os valores em rdmSongs
    rdmSongs.push(maxSongs[k]);
    rdmSongs.push(minSongs[k]);
    
    if(minSongs[k] == maxSongs[k]){
      rdmSongs.pop()
    }
    
    k++;
  }
  
  return rdmSongs;
 
}
