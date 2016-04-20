
/*EJERCICIO 1*/
/*var suma=0;
var i=0;
while(i<10){
    i++;
    numero = Number(prompt('ingresa numero'+i));
    suma=suma+numero;
}

document.write("la suma es:" + suma);
/*EJERCICIO 2*/
/*var suma=0;
var i=0;
do{
i++
numero = Number(prompt('ingresa numero'+i));
suma=suma+numero;
}while(i<10);
document.write("la suma es:" + suma);
/*EJERCICIO 3*/
/*var suma=0;
for (var i = 1; i <= 10; i++) {
    numero = Number(prompt('ingresa numero'+i));
    suma=suma+numero;
}
document.write("la suma es:" + suma);
/*EJERCICIO 4 (for)*/
/*var suma=0;
n =Number(prompt('ingrese el numero de alumnos'));
for(var i=1 ;i<=n ; i++){
    edad=Number(prompt('ingrese su edad de alumno'+i));
    suma=suma+edad;
}
promedio=suma/n;
document.write("promedio de edades:"+promedio);*/
/*while*/
/*n =Number(prompt('ingrese el numero de alumnos'));
var suma=0;
var i=0;
while(i<n){
    i++;
    edad=Number(prompt('ingrese su edad de alumno'+i));
    suma=suma+edad;
}
promedio=suma/n;
document.write("promedio de edades:"+promedio);*/
/*do while*/
/*n =Number(prompt('ingrese el numero de alumnos'));
var suma=0;
var i=0;
do{
    i++;
    edad=Number(prompt('ingrese su edad de alumno'+i));
    suma=suma+edad;
}while(i<n);
promedio=suma/n;
document.write("promedio de edades:"+promedio);
*/
/*EJERCICIO 5*/
/*document.write('NÚMEROS PARES');
for(i=2 ; i<=100 ; i++){
if(i%2==0){
document.write('<br>'+i);
}
}*/
/*EJERCICIO 6*/
/*for(co=1 ; co<=500 ; co++){
    for (ca =1 ; ca <=500; ca++) {
        for (h =1 ; h <=500; h++) {
    if(h*h===co*co+ca*ca){
        document.write("terna pitagorica:"+'<br>'+co+'<br>'+ca+'<br>'+h+'<br>');
    }
}
}
}*/
/*EJERCICIO 7*/
/*document.write("TABLAS DE MULTIPLICAR"+ '<br>');
n=Number(prompt('Ingrese el número que desee para obtener su tabla de multiplicar '));
for(i=0; i<=9 ; i++){
    producto=n*i;
    document.write(n + "x"+ i +"="+ producto +'<br>');

}*/
/*EJERCICIO 8*/
/*document.write("ELEVAR UN NUMERO ENTERO A LA N POTENCIA"+ '<br>');
b=Number(prompt('Ingrese el número base:'));
e=Number(prompt('Ingrese el exponente'));
potencia=Math.pow(b,e);
document.write(b+" elevado a la "+e+" = "+potencia);*/
/*EJERCICIO 9*/
/*document.write("CALIFICACIONES ALUMNOS"+ '<br>');
var n=4;
var menor=1000;
var suma=0;
for(i=1;i<=4;i++){
    nota=Number(prompt('Ingrese nota'+i));
    if(nota<menor){
        menor=nota;
        }
else{
    menor=menor;
}
suma=suma+nota;}
promedio=suma/n;
document.write("promedio notas:"+promedio+'<br>'+"la más baja calificacion es:"+ menor);*/
/*EJERCICIO 10*/
document.write("CUBO Y CUARTA DE UN NÚMERO");
for (i =1; i <=10; i++) {
    n=Number(prompt('Ingresar número'+i));
    cubo=Math.pow(n,3);
    document.write('<br>'+"el cubo del numero "+n+" es:"+cubo);
    cuarta=Math.pow(n,4);
    document.write('<br>'+"la cuarta del numero "+n+" es:"+cuarta);
}
