function calcularPromedio(numeros){
    let suma=0;
    for(let i=0; i<numeros.length; i++){
        suma+=numeros[i]
    }
    const promedio=suma/numeros.length;
    return promedio;
}

const arreglo = [4,8,15,16,23,42];
const promedio=calcularPromedio(arreglo);
console.log(promedio);
