// Definir variables
//var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarFactorial(nf) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial(nf);
}

function factorial(nf) {
    var factorial = 1;
    for (i = 1; i <= nf; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

function multiplosdehasta(n, m) {
    mensaje = "Los múltiplos de " + n + " hasta " + m + " son: "
    multiplo = 0;

    i = 1
    while (multiplo < m) {
        multiplo = n * i;
        mensaje = mensaje + multiplo + " ";
        i++;
    }

    return mensaje
}

// no estamos usando esta función
// no hace falta que la comentemos, si no se usa no se ejecuta
function mostrarMultiplo(n, m) {
    document.getElementById("td11").innerHTML = n;
    document.getElementById("td12").innerHTML = m;
    document.getElementById("td13").innerHTML = multiplosdehasta(n, m);
}


function mostrarResultados(op, n1, n2 = 0) {

    switch (op) {
        case "multiplo":
            document.getElementById("td11").innerHTML = n1;
            document.getElementById("td12").innerHTML = n2;
            document.getElementById("td13").innerHTML = multiplosdehasta(n1, n2);
            break;
        case "factorial":
            document.getElementById('td21').innerHTML = n1;
            document.getElementById('td22').innerHTML = factorial(n1);
            break;
        default:
    }
}
// 654.729.075
function productoImpar() {

    num = parseInt(
        prompt("Teclee un número entero"));

    resultado = 1;
    for (i = 1; i <= (num * 2) - 1; i = i + 2) {
        resultado = resultado * i;
    }
    alert("El resultado es " + resultado)

}

function sumar(s1, s2) {
    suma = s1 + s2;
    return suma;
}

function leerTexto() {
    escrito = prompt("Escribe el nombre");
    return escrito;
}


function escribirTexto(id, texto) {
    document.getElementById(id).innerHTML = texto;
}

/* function mostrarInfo(id, tag, info, texto) {
    document.getElementById(id).innerHTML = "<" + tag + ">" + info + "</" + tag + ">" + ": " + texto;
} */

function mostrarInfo(id, tag, info, texto) {


    var etiqueta = "<" + tag + ">";
    etiqueta += info;
    etiqueta += "</" + tag + ">";
    etiqueta += ": " + texto;

    escribirTexto(id, etiqueta);
}

/* function mostrarTodo(id1, id2, id3, texto1, texto2, texto3) {
    document.getElementById(id1).innerHTML = texto1;
    document.getElementById(id2).innerHTML = texto2;
    document.getElementById(id3).innerHTML = texto3;

} */

function dameInfo(tag, info, texto) {

    var etiqueta = "<" + tag + ">";
    etiqueta += info;
    etiqueta += "</" + tag + ">";
    etiqueta += ": " + texto;

    return contenido;
}

function mostrarTodo(id, personaje, aldea, clan, poder, vidas) {
    //contenido = dameinfo('strong','Personaje',personaje);
    //li += contenido;
    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    var lis = "<li>" + personaje + "</li>";
    lis += "<li>" + aldea + "</li>";
    lis += "<li>" + clan + "</li>";
    lis += "<li>" + poder + "</li>";
    lis += "<li>" + vidas + "</li>";

    document.getElementById(id).innerHTML = lis;
}