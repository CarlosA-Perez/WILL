/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var num1=num.toString();
for(i=0;i<num1.length/2;i++){
  if(num1[i]!==num1[num1.length-1-i]){
    return false;
  }
}
return true;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico