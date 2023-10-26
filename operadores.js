//OPERADORES LOGICOS y COMPARACION DE DATOS

//Los opereadores nos permiten realizar operaciones en JS.

//operador de asignacion (=)

let numero1 = 7
let numero2 = 3

//incrementos:++ y decrementos:-- (son validos para tipos de datos numericos (variables numericas)). Estaremos incrementando y decrementando el valor valor de la variable

//prefijado

let numero3 = 10
++numero3
console.log(numero3);//11

let numero4 = 9
--numero4
console.log(numero4);//8

//subfijado
let num1 = 5
let num2 = 2
let num3 = num1++ + num2
console.log(num3); //7
console.log(num1); //6

//ejemplo de prefijado

let num4 = 3
let num5 = 2
let num6 = ++num4 + num5 // 6
console.log(num6); //6

//conclusion
/**
 * pre -> estoy alterando el valor de la variable que sera considerada para realizar la operacion aritmetica
 * sub -> tendra como primera consideración realizar la operacion matematica y luego hacer la reasignacion de la variable( incremento o decremento)
 */


//OPERADORES


let pruebaDeNegacion = 10 < 7 //false
console.log(pruebaDeNegacion); //false
console.log(!pruebaDeNegacion); //true
console.log(true); //true
console.log(!true); //false

//(and(y) &&  or(o)||)

let valor1 = false
let valor2 = true

//&&
console.log(valor1 && valor2); //false
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

//||
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

//operadores matematicos
let num7 = 10
let num8 = 5
let resultado = null

resultado = num7 / num8 //2
resultado = num7 * num8 //50
resultado = num7 - num8 //5
resultado = num7 + num8 //15
resultado = num7 % num8 //0

console.log(resultado);

//operadores abreviados
// num7 = num7 + 4
num7 += 4 //incremento
console.log(num7);

num8 -= 2
console.log(num8);//3

num8 *= 2 //3*2 = 6
console.log(num8);

//Operaciones relacionales
/**
 * >
 * <
 * <=
 * >=
 * === (estricatamente: al tipo de dato y el valor)
 * == (valor)
 * !==(estricatamente)
 * != (valor)
 */

let num9 = 10
let num10 = 5
let num11 = 5
let numString = '5'

console.log(num9 > num10);//true
console.log(num9 < num10);//false
console.log(num10 === num11);//true
console.log(num10 === numString);//false
console.log(num10 == numString);//true

console.log(num10 !== numString);//true
console.log(num10 != numString);//false


console.log('Operaciones relacionales');
console.log(1 && 8); //true:8
console.log(7 && 0); //false:0
console.log(' ' && ''); //false:''
console.log('' || 1); //true:1
console.log('' && ' '); //false:''

//operador de fusion de nulos (null o undefined)
console.log('operador de fusion de nulos (null o undefined)');
console.log(null ?? 0); //0
console.log(undefined ?? 0); //0
console.log(null ?? undefined ?? 35);//35
console.log(35 ?? null ?? undefined); //35
