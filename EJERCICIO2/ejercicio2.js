/*EJERCICIO 2*/
document.write("suma de 10 numeros");
var suma=0;
var i=0;
do{
i++
numero = Number(prompt('ingresa numero'+i));
suma=suma+numero;
}while(i<10);
document.write("la suma es:" + suma);
