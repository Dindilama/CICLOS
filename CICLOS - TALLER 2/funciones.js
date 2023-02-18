//TALLER 3

/*Punto 1 
var ancho = prompt("Digite el ancho");
var alto = prompt("Digite el alto");

function calcular(n1,n2){
return n1 * n2;
}

var superficie = calcular (alto, ancho);
document.write ("<p> la superficie del cuadrado es:  "+superficie +" <p>")
*/

/*Punto 2 
var km = prompt("Digite el alto");
var metros = 1000
var segundos = 3600
var milla = parseFloat(5.280);
var pie = parseFloat(0.3048);

function kms(km) {
    return km ;
}

function metro(km, metros = 1000, segundos = 3600) {
    return (km * metros)/segundos  ;
}

function millas(velEnmts, pie= 0.3048,  milla = 5.280, segundos = 3600) {
    return (velEnmts / pie) / milla * segundos;
}   

var velEnKm = kms(km);
document.write("<p> Velocidad Kms/hora " + velEnKm + " <p>")

var velEnmts = metro(km, metros, segundos  );
document.write("<p> Velocidad mts/hora  " + velEnmts+ " <p>")

var velEnmillas = millas(velEnmts,  pie, milla, segundos  );
document.write("<p> Velocidad mts/hora  " + velEnmillas + " <p>")*/


/* Punto 3 
var pi = Math.PI;
var diametro = parseFloat(prompt("Ingresa el radio"));

function calcular(n1, n2) {
    return n1 * n2;
}

var perimetro = calcular(pi, diametro);
document.write("<p> El perímetro de la circunferencia:  " + perimetro + " <p>")
*/

/*Punto 4 
	let base = parseInt(prompt("Digite el numero para calcular su cubo"));
	let exponente = 3
	function potencia(num1, num2) {
	    let resultado = 1;
	
	    for (let i = 0; i < exponente; i++){
         resultado *= base;
	    }
	    return resultado;
	}
	
	var cubo = potencia(base,exponente);
	document.write("<p> su cubo es:  " + cubo + " <p>")
*/

/*Punto 18 
	var nombre = prompt("Escriba su nombre ");
    function diganombre(dato)
    {
    if (isNaN(dato))
   {
       document.write("mi nombre es: " + dato + "<br>");
   }
    else
    {
        document.write("El nombre no es valido" + "<br>");
    }
	} 
*/

/*Punto 31
var num1 = parseInt(prompt("Digite numero 1 "))
var num2 = parseInt(prompt("Digite numero 2 "))
var signo =prompt("Digite el signo de la operacion ")

function operacion(dato1=0, dato2=0, dato3="+")
{
    if (dato3 == "-")
    {
        return dato1 - dato2
    }
    else if (dato3 == "*")
    {
    return dato1 * dato2
    }   
    else if (dato3 == "/")
    {
    return dato1 / dato2
    }   
    else if (dato3 == "+")
    {
    return dato1 + dato2
    }   
}
var resultado1 = operacion(num1,num2)
var resultado2 = operacion(num1,num2,signo)

document.write( "La  suma "  +num1+ " y " +num2+ " es " + resultado1 + "<br>");
document.write( "La  " +signo+ " de " +num1+ " y " +num2+ " es " + resultado2 + "<br>");
*/

/*Punto 32 
let temperatura = parseFloat(prompt("Digite la temperatura"));
let valor1 = parseFloat(1.8);
let valor2 = parseFloat(32);
let formula = (temperatura * valor1) + valor2;

function calcularImc(num1, num2, num3) {
    if (formula < 0 || temperatura < 32) {
        return "Nos congelamos"
    } else if (formula >= 5 && formula <= 15 || temperatura >= 37 && temperatura <= 50) {
        return "Está haciendo frio"
    } else if (formula >= 16 && formula <= 25 || temperatura >= 51 && temperatura <= 77) {
        return "Está templado el dia"
    } else if (formula >= 38 || temperatura > 100) {
        return "Tiene fiebre o es el apocalipsis"
    }

}

let resultado = calcularImc();
document.write("<p> de acuerdo al anlaisis obtuvimos la siguiente información:  " + resultado + " <p>")
*/

/*Punto 33 
let altura = parseFloat(prompt("Digite su altura en metros"));
let peso = parseFloat(prompt("Digite su peso"));
let Imc = peso / (altura * altura)

function calcularImc(imc) {
    if (imc < 18.5) {
        return "Bajo peso debe ir al nutricionista"
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal"
    } else if (imc >= 24.91 && imc <= 29.9) {
        return "Sobrepeso"
    } else if (imc > 29.91) {
        return "Obeso debe ir al nutricionista"
    }
}

var resultado = calcularImc(Imc);
document.write("<p>" + "IMC: " + Imc + "de acuerdo al anlaisis obtuvimos la siguiente información:  " + resultado + " <p>")

*/

/*Punto 7
var escala = prompt("Digite c para Celsius o f para Farenheit");
var temperatura = parseInt(prompt("digite temperatura"));

function Farenheit(cel) {
    var fare = (cel *9/5) + 32;
    return fare;
}
function celsius(faren) {
    var celsi = (faren - 32) * 5/9;
    return celsi
}
function calcularTemperatura(f,c) {
    if ( c < 0 || f < 32) {
        return document.write("temperatura en f "+f+" y c "+c+"  Nos congelmos <br>");
    }else if( (c > 5 && c < 15) || (f > 37 && f < 50)) {
        return document.write("temperatura en f "+f+" y c "+c+"  Esta haciendo frio <br>");
    }else if( (c > 5 && c < 15) || (f > 51 && f < 77)) {
        return document.write("temperatura en f "+f+" y c "+c+"  Esta templado el dia <br>");
    }else{
        return document.write("temperatura en f "+f+" y c "+c+"  Tiene fiebre o es el apocalipsis <br>");
    }
}

var Farenheitt = Farenheit(temperatura);
var celcius = celsius(temperatura);
calcularTemperatura(Farenheitt, celcius);
*/

/*Punto 9 
function pedirNombre() {
    var nom = prompt("Digite nombre");
    return nom;
}
function saludo (n) { 
    document.write("Bienvenido :"+n)
}
var nombre = pedirNombre();
saludo(nombre);
*/