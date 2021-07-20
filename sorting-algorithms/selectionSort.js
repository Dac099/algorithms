/**
 * Es un algoritmo parecido al insertion sort, pero la diferencia entre estos algoritmos es:
 * En los dos algoritmos dividimos de forma conceptual el array en dos: en la izquierda esta el array ordenado
 * y en la derecha esta el array desordenado.
 * 
 *  -En selection sort buscamos el elemento menor en el array desordenado y lo amacenamos en nuestro array ordenado
 *  -El insertion sort se da por hecho que el elemento de la izquierda ya esta ordenado y nos vamos moviendo
 *   por el array comparando elementos.
 * 
 * En este algoritmo vamos ir recorriendo el arreglo en busca del elemento mas peque, conforma lo vayamos encontrando 
 * lo vamos ir anclando al inicio del arreglo, frente a los elementos que fuimos agregando previamente.
 */


//Buscar el menor elemento del array
//Crear dos subarrays para llevar el control del algortimo

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        //Encontrar el valor minimo restante dentro de nuestro array desordenado
        let indexDesorder = i;  //Variable que nos indica el indice del array
        for(let j = i + 1; j < array.length; j++){
            if(array[indexDesorder] > array[j]){
                indexDesorder = j;
            }
        }
        let aux = array[i];
        array[i] = array[indexDesorder];
        array[indexDesorder] = aux;
    }
}

let array = [22,345,0,26,87,99,23,59];

selectionSort(array);
console.log(array);