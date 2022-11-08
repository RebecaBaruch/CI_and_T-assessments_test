   /*
   Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a senha que lhes dá acesso a um grande tesouro digital. Por sorte, sua equipe é formada pelas pessoas mais feras em programação e vocês rapidamente descobriram como decifrá-la.

Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas, você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos para não precisarem fazer isso de forma manual.

A senha é representada por um número binário de 10 dígitos formado pelo dígito predominante de cada coluna. Caso a coluna tenha a mesma quantidade de dígitos 0 e 1, deve se considerar o número 1.

Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, sendo assim, o primeiro dígito - dos 10 - da senha é 1.

0110100000
1001011111
1110001010
0111010101
0011100110
1010011001
1101100100
1011010100
1001100111
1000011000

Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) e retorne a representação decimal da senha.


   */

    let bina = [[0,1,1,0,1,0,0,0,0,0], 
                [1,0,0,1,0,1,1,1,1,1],
                [1,1,1,0,0,0,1,0,1,0], 
                [0,1,1,1,0,1,0,1,0,1], 
                [0,0,1,1,1,0,0,1,1,0], 
                [1,0,1,0,0,1,1,0,0,1], 
                [1,1,0,1,1,0,0,1,0,0], 
                [1,0,1,1,0,1,0,1,0,0], 
                [1,0,0,1,1,0,0,1,1,1], 
                [1,0,0,0,0,1,1,0,0,0]];
            
    one = 0;
    zero = 0;
    senhaBi = [];

function calculaNumeroDaSenha(senha) {
  
    //one e zero irão contabilizar o número de 1 e 0 por coluna
    let one = 0;
    let zero = 0;
    let senhaBi = [];//senhaBi irá guardar a nova senha ainda em binário
    let bina = senha;//para guardar a matriz

    //percorre a matriz bina de forma 'invertida'  -> coluna antes de linha
    for(col=0; col<10; col++){
        for(row=0; row<10; row++){
            
             //verifica se o valor da index é igual a 0
            (bina[row][col]==0) ? zero++ : one++; //se for igual a 0, itera zero. senão, itera one
        }
        
        //se one > zero ou onde==zero, senhaBi recebe 1. Senão, recebe 0
        ((one>zero) || (one==zero)) ? senhaBi.push(1) : senhaBi.push(0); 
        
        //seta zero e one para repetir o processo com a próxima coluna
        zero=0;
        one=0;
    }

    //vetDec irá receber os resultados dos cálculos -> 2 ^ 'index de 1'
    let vetDec = [];
    let newBi = senhaBi.reverse(); //inverte o vetor
    
    //percorre newBi
    for(i=0; i<newBi.length; i++){
        //verifica se o valor percorrido é igual a 1
        if(newBi[i]==1){
            //se sim, pega a posição de 1
            let position = i;
            console.log(position);
            //adiciona o resultado da equação 2 ^ 'posição'
            vetDec.push(Math.pow(2,position));
        }
    };
    
    let senhaDec = 0; //receberá a senha final
    //percorre vetDec
    for(let k in vetDec) {
        senhaDec += vetDec[k]; //soma valores de vetDec em senhaDec
    }
  
    return senhaDec;
}
