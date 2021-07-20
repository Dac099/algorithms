function sym(set1, set2){
    let set3 = [];

    for(let i = 0; i < set1.length; i++){
        let flag = true;
        for(let j = 0; j < set2.length; j++){
            if(set1[i] === set2[j]){
                flag = false;
                break;
            }
        }
        if(flag === true){
            set3.push(set1[i]);
        }
    }

    for(let i = 0; i < set2.length; i++){
        let flag = true;
        for(let j = 0; j < set1.length; j++){
            if(set2[i] === set1[j]){
                flag = false;
                break;
            }
        }
        if(flag === true){
            set3.push(set2[i]);
        }
    }
    
    return set3;
}

let symSet = sym([1,2,3],[2,3,4]);
console.log(symSet);

let symSet2 = sym([1,2,3],[5,2,1,4]);
console.log(symSet2);    //3,4,5

let symSet3 = sym([1,2,3,3],[5,2,1,4]);
console.log(symSet3);    //3,4,5



//[1,2,3]   //[2,3,4]
//Recorrer el primer arreglo
