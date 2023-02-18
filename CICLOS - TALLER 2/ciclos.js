//ciclo while
//paso 1
/*var n = 1;
//paso 2
while (n <= 10) {
    document.write(n + "<br>");
    
    //paso 3
    n+=2 //n= 1+1; n+=1;
}

//paso 1
var n = 10;
//paso 2
while (n >= 1) {
    document.write(n + "<br>");
    
    //paso 3
    n-=2 //n= 1+1; n+=1;
}*/

/*document.write("<p> ciclo for</p>")
for(var x = 1; x <= 12; x++) {
    document.write(x + "<br>")
}

for(var x = 12; x >= 1; x--) {
    document.write(x + "<br>")
}
*/

/*var y = 1;
do{
    document.write(y + "<br>");
    y++;
}while(y <= 10)
*/
// Forma ascendente
/*
var n = parseInt(prompt("Digite veces a repetir el ciclo"));
var saltos = parseInt(prompt("Digite saltos del ciclo"));
var x = 1;
while (x <= n) {
    document.write(x + "<br>");
    x+= saltos;
}
// Forma descendente
var n2 = parseInt(prompt("Digite veces a repetir el ciclo"));
var saltos2 = parseInt(prompt("Digite saltos del ciclo"));
var y = n2;
while (y >= 1) {
    document.write(y + "<br>");
    y-= saltos;
}*/
/*
var ciclos = prompt("¿quieres que se repita el ciclo?");
var x = 1;
while (ciclos !== "no") {
    document.write(x + "<br>");
    ciclos = prompt("¿quieres que se repita el ciclo?");
    x++;
}*/

//TALLER 2

/* Punto 1 
var numeros = parseInt(prompt("digite numero"));
var x = 0;
while (x < numeros) {
    document.write("la suma de "+ x +" + "+numeros+" = "+(x+numeros)+"<br>")
    x++
}
*/

/* Punto 2
var Nnota = parseInt(prompt("digite numero de notas"));
var x = 0;
var sumario = 0;
var notas = "";
while (x <= Nnota) {
    var nota = parseFloat(prompt("digite nota " +x));
    sumario = sumario + nota;
    notas = notas + nota+ " - ";
    x++
}
var promedio = sumario/Nnota;
document.write("Las notas de alumno son : "+ notas +"<br>");
if(promedio >= 3){
    document.write("la nota final del alumno es: " + promedio + "<br>");
    document.write("<h1> Aprobo </h1>")
}else{
    document.write("la nota final del alumno es: " + promedio + "<br>");
    document.write("<h1> Reprobo </h1>")
}*/

/*CICLOS ANIDADOS 
var series = parseInt(prompt("digite numero de series"));
var numeros = parseInt(prompt("digite numeros de cada series"));
var x = 1;
while (x <= series) {
    document.write("Serie N "+x+"<br>");
    var y = 1;
    while (y <= numeros) {
        document.write("#" +y+ "<br>" );
    y++
    }
    x++
}*/

/* Punto 3 
var inicio = prompt("¿Desea iniciar el programa?\n - Escriba si para iniciar \n - Escriba fin para ternimar");
var cantidad = 0;
var numero = 0;

while(inicio != "fin"){
    var sumaNumeros = parseInt(prompt("ingrese un numero entero"));
    cantidad++
    numero = numero + sumaNumeros;
    var inicio = prompt("¿Desea continuar con el programa?\n - Escriba si para continuar \n - Escriba fin para ternimar");
}
document.write("<p>La catidad de números ingresados es ---> "+cantidad+"</p>")
document.write("<p>La suma de todos los números es ---> "+numero+"</p>")
*/

/* Punto 4 
var tabla = prompt("Ingrese cualquier numero a multiplicar");
var i = 0;

document.write("<h2>La tabla de multiplicar del "+tabla+" es:"+ "</h2>");

for (i = 1; i <= 30; i++){
    document.write(tabla + " x " + i + " = " + tabla * i  +"<br>");
}*/


/* Punto 5 
var tabla = prompt("Ingrese cualquier numero a multiplicar");
var i = 1;

document.write("<h2>La tabla de multiplicar de forma descendente del "+tabla+" es:"+ "</h2>");

for (i = 30; i >= 1; i--){
    document.write(tabla + " x " + i + " = " + tabla * i  +"<br>");
}*/


/* Punto 6  
var numero = prompt("Ingrese un número");

numero = 0;

while (numero <30){
    numero++;
    document.write("<p>" + numero +"</p>")
}*/

/* Punto 7 
var numero = prompt("Ingrese un número");

numero = 30;

while (numero > 0){
    numero--;
    document.write("<p>" + numero +"</p>")
}*/

/* Punto 8 
var n = prompt("Ingrese un valor para la cantidad de escalones de la escalera");
var i, j;

for (i = 1; i <= n; i++){
    var escalera = "";
    for (j = 1; j <= i; j++){
         escalera += "* ";
    }
    document.writeln("<p>" + escalera + "</p>");
}*/

/* Punto 9 
var n2 = prompt("Ingrese un valor para la cantidad de escalones de la escalera invertida");
var x, y;

for (x = n2; x >= 1; x--){
    var escalera = "";
    for (y = x; y >= 1; y--){
         escalera += "* ";
    }
    document.writeln("<p>" + escalera + "</p>");
}*/


/* Punto 10
var clientes = prompt("¿es cliente?")
var productosxcliente = parseInt(prompt("digite cantidad productos"))
var x = 0;
var comprasDia = 0;
var compraCliente = 0;
while(clientes !== "no"){
    document.write("<p>cliente #"+x+"</p>");
    document.write("<p># de productos "+productosxcliente+"</p>");
    var y = 0;
    var totalcompra = 0;
    while(y < productosxcliente) {
        var valorproducto = parseInt(prompt("Valor del producto "+y));
        document.write("<p> valor del producto"+y+" : "+valorproducto+"</p>");
        totalcompra = totalcompra + valorproducto;
        y++
    }
    document.write("<p> total compra del cliente"+x+" : "+totalcompra+"</p>");
    compraCliente = compraCliente + totalcompra;
    var clientes = prompt("¿es cliente?")
    productosxcliente = parseInt(prompt("digite cantidad productos"))
    comprasDia = comprasDia + compraCliente;
    x++;
} 
document.write("<p> total compra del dia fueron"+x+" : "+comprasDia+"</p>");
*/

/* Punto 11
var n = prompt("ingrese la cantidad de alumnos a evaluar:")
for (var x = 1; x <= n; x++){
        var nombre = prompt("ingrese nombre del alumno:");
        var materia = prompt("ingrese materia:");
        var nota1 = parseFloat(prompt("ingrese nota 1"));
        var nota2 = parseFloat(prompt("ingrese nota 2"));
        var nota3 = parseFloat(prompt("ingrese nota 3"));

        document.writeln("<p>Nombre Alumno: "+nombre+"</p>");
        document.writeln("<p>Materia: "+materia+"</p>");
        document.writeln("<p>Nota 1 -->  "+nota1+"</p>");
        document.writeln("<p>Nota 2 -->  "+nota2+"</p>");
        document.writeln("<p>Nota 3 -->  "+nota3+"</p>");
        document.writeln("<p>Promedio de notas: "+((nota1+nota2+nota3)/3)+"</p>");
}*/


/* Punto 12
var filas = parseInt(prompt("digite numero de filas"));
var columnas = parseInt(prompt("digite numeros de columnas"));
document.write("<table border= '1'>");
var x = 0;
var numero = 1;
while (x < filas) {
    document.write("<tr>");
    var y = 0;
    while (y < columnas) {
        document.write("<td>");
        document.write( numero ++ );
        document-write("</td>");
        y++
    }
    document.write("</tr>")
    x++
}
document.write("</table>");
*/


/* Punto 13

var nEstudiantes = parseInt(prompt("ingrese cantidad de estudiantes:"));
var estudiantesMayores = 0, estudiantesMenores = 0;

for (var i = 1; i <= nEstudiantes; i++){
    var edades = parseInt(prompt("ingrese la edad del estudiante:"));
    if(edades < 18){
        estudiantesMenores++
    }else{
        estudiantesMayores++
    }
}
document.write("<p>Cantidad de estudiantes menores es: "+estudiantesMenores+"</p>")
document.write("<p>Cantidad de estudiantes mayores es: "+estudiantesMayores+"</p>")
*/

/* Punto 14
alert("¿QUIERES JUGAR A ADIVINAR UN NUMERO ENTRE EL 1 Y EL 10? \N SOLO TIENES 3 INTENTOS");
var intentos = 0;
var numeroAleatorio = Math.floor(Math.random()*10)+1;

while(intentos < 3){
    var numeroAdivinar = parseInt(prompt("ingresa un número: "));
    if(numeroAdivinar < numeroAleatorio){
        alert("El número es mayor, intenta de nuevo");
    }else if(numeroAdivinar > numeroAleatorio){
        alert("El número es menor, intenta de nuevo");
    }else if(numeroAdivinar == numeroAleatorio){
        alert("Has adivinado el numero, ¡GANASTE!");
        break;
    }
    intentos++ 
}
if (intentos == 3) {
    alert("No has adivinado el numero, ¡PERDISTE!");
}
*/