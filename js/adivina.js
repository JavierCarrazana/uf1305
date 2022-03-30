// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function adivina() {
    var pregunta = "¿Es tu número >= que 5?";
    var respuesta = confirm(pregunta);
    var solucion;
    if (respuesta) {
        pregunta = "¿Es tu número > que 5?";
        respuesta = confirm(pregunta);
        if (respuesta) {
            pregunta = "¿Es tu número > que 6?";
            respuesta = confirm(pregunta);
            if (respuesta) {
                pregunta = "¿Es tu número > que 7?";
                respuesta = confirm(pregunta);
                if (respuesta) {
                    pregunta = "¿Es tu número > que 8?";
                    respuesta = confirm(pregunta);
                    if (respuesta) {
                        pregunta = "¿Es tu número > que 9?";
                        respuesta = confirm(pregunta);
                        if (respuesta) {
                            pregunta = "¿Es tu número > que 10?";
                            respuesta = confirm(pregunta);
                            if (respuesta) {
                                solucion = "Se pide un num. entre 0 y 10";
                                document.getElementById('respuesta').innerHTML = solucion;
                            } else {
                                solucion = "El num. que has pensado es el 10";
                                document.getElementById('respuesta').innerHTML = solucion;
                            }
                        } else {
                            solucion = "El num. que has pensado es el 9";
                            document.getElementById('respuesta').innerHTML = solucion;
                        }
                    } else {
                        solucion = "El num. que has pensado es el 8";
                        document.getElementById('respuesta').innerHTML = solucion;
                    }
                } else {
                    solucion = "El num. que has pensado es el 7";
                    document.getElementById('respuesta').innerHTML = solucion;
                }
            } else {
                solucion = "El num. que has pensado es el 6";
                document.getElementById('respuesta').innerHTML = solucion;
            }
        } else {
            solucion = "El num. que has pensado es el 5";
            document.getElementById('respuesta').innerHTML = solucion;
        }
    } else {
        pregunta = "¿Es tu número < que 4?";
        respuesta = confirm(pregunta);
        if (respuesta) {
            pregunta = "¿Es tu número < que 3?";
            respuesta = confirm(pregunta);
            if (respuesta) {
                pregunta = "¿Es tu número < que 2?";
                respuesta = confirm(pregunta);
                if (respuesta) {
                    pregunta = "¿Es tu número < que 1?";
                    respuesta = confirm(pregunta);
                    if (respuesta) {
                        pregunta = "¿Es tu número < que 0?";
                        respuesta = confirm(pregunta);
                        if (respuesta) {
                            solucion = "Se pide un número entre 0 y 10";
                            document.getElementById('respuesta').innerHTML = solucion;
                        } else {
                            solucion = "El num. que has pensado es el 0";
                            document.getElementById('respuesta').innerHTML = solucion;
                        }
                    } else {
                        solucion = "El num. que has pensado es el 1";
                        document.getElementById('respuesta').innerHTML = solucion;
                    }
                } else {
                    solucion = "El num. que has pensado es el 2";
                    document.getElementById('respuesta').innerHTML = solucion;
                }
            } else {
                solucion = "El num. que has pensado es el 3";
                document.getElementById('respuesta').innerHTML = solucion;
            }
        } else {
            solucion = "El num. que has pensado es el 4";
            document.getElementById("respuesta").innerHTML = solucion;
        }
    }
}
