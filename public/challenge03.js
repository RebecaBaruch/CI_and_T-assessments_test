    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler

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


    for(col=0; col<10; col++){
        for(row=0; row<10; row++){
            
            if(bina[row][col]==0){
                zero++;
            }else{
                one++;
            }
        }
        
        ((one>zero) || (one==zero)) ? senhaBi.push(1) : senhaBi.push(0);
        
        zero=0;
        one=0;
    }

    let vetDec = [];
    let newBi = senhaBi.reverse();

    for(i=0; i<newBi.length; i++){
        if(newBi[i]==1){
            let position = i;
            console.log(position);
            vetDec.push(Math.pow(2,position));
        }
    };

    let numDec = 0;
    for(let k in vetDec) {
        numDec += vetDec[k];
    }
    console.log(numDec);