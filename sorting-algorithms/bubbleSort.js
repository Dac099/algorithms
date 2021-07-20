//Comenzar a hacer comparaciones de elementos adyacentes
//Repetir hasta tener una pasada completa sin ningun swap

function bubbleSort(arr){
    console.log("Ordenando arreglo... ");
    n = arr.length;
    let flag = false;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
                console.table(arr);
                flag = true;
            }
        }
        if(flag===false){
            console.log("Ya esta ordenado");
            break;
        }
        console.log(`Ciclo terminado. i = ${i}`);
    }
}

let arr = [111,2,555,4,10000,0,1,-2];

console.log("Arreglo desordenado...");
console.table(arr);

bubbleSort(arr);


//Ejemplificacion de todo lo que hace en el ciclo secundario cuando i=0

//[0,  1,  2,3,    4,5,6, 7]
//[111,2,555,4,10000,0,1,-2]    //i     //j     7
//[2,111,555,4,10000,0,1,-2]    //0     //0     
                                        //1
//[2,111,4,555,10000,0,1,-2]            //2
                                        //3
//[2,111,4,555,0,10000,1,-2]            //4                                       
//[2,111,4,555,0,1,10000,-2]            //5
//[2,111,4,555,0,1,-2,10000]            //6


