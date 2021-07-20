function insertionSort(array){
    //El primer ciclo funciona para recorrer cada posicion del arreglo y extraer su valor
    for (let i = 0; i < array.length; i++){
        //Variable que va a guardar el indice del elemento del que vamos a partir para empezar a programar
        let position = i;   
        //El segundo ciclo funciona para ir verificando que nuestro elemento sea menor a su elemento de la izquierda
        while(position > 0 && array[position] < array[position - 1]){
            let auxiliar = array[position];
            array[position] = array[position - 1];
            array[position - 1] = array[position];
            //El valor de position debe de ir disminuyendo para ir comparando nuestro elemento con sus elementos de la izquierda
            position--;
        }
    }
}

let array = [2,60,99,1,45,76,-2,52,19];
insertionSort(array);
console.log(array);

//El codigo optimizado:
function insertionSort(array){
    //El primer ciclo funciona para recorrer cada posicion del arreglo y extraer su valor
    for (let i = 1; i < array.length; i++){
        //Variable que va a guardar el indice del elemento del que vamos a partir para empezar a programar
        let position = i;   
        //Variable que guarda el valor del array en la posicion del ciclo de forma auxiliar
        let valor = array[i];
        //El segundo ciclo funciona para ir verificando que nuestro elemento sea menor a su elemento de la izquierda
        while(position > 0 && valor < array[position - 1]){
            //Si el elemento de la izquirda es mayor, se va a mover a la derecha
            array[position] = array[position - 1];
            //El valor de position debe de ir disminuyendo para ir comparando nuestro elemento con sus elementos de la izquierda
            position--;
        }
        //Al final position fue modificado dentro del cliclo
        //En este punto position marca el lugar en donde se deveria de escribir nuestro elemento menor a ordenar
        array[position] = valor;
    }
}