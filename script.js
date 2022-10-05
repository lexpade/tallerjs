/*
Primer ejercicio
*/
function mostrarNombre() {
    let nombre = window.prompt("Digite su nombre", "");
    console.log('Mostrado en consola');
    console.log(nombre)
}
/*
Segundo ejercicio
*/
function mostrarMensaje() {
    window.alert("Buen dia, Saludos!");
}

/*
Tercera ejercicio
*/

function mayorCero() {
    let dato
    while (true) {
        dato = window.prompt("Digite un numero", "");
        if (esEntero(dato)) {
            break;
        }
        else {
            window.alert(' Digite un numero valido ');
            continue;
        }
    }
    let numero = parseInt(dato);
    if (noCero(numero)) {
        if (numero > 0)
            console.log(numero + ' Es mayor que cero');
        else
            console.log(numero + ' Es menor que cero');
    }
    else console.log(numero + ' Es Cero');

}
/*
Cuarto ejercicio
*/
function mostrarOperaciones() {
    let num1, num2;

    while (true) {
        num1 = window.prompt("Digite primer numero", "");
        num2 = window.prompt("Digite segundo numero", "");
        if (esEntero(num1) &&
            esEntero(num2)) {
            num1 = parseInt(num1); num2 = parseInt(num2); break;
        }

        else window.alert(" Digite los numeros correctamente");
    }
    console.log('La suma de los numeros es ' + (+num1 + +num2));
    console.log('La resta de los numeros es ' + (num1 - num2));
    console.log('La multiplicacion de los numeros es ' + (num1 * num2));
    if (noCero(num2))
        console.log('La division de los numeros es ' + (num1 / num2));
    else console.log('La division de los numeros es indefinidad por... ' + num2);
}

/*
Quinto ejercicio
*/
function opAritmetica() {
    let num1_letra, num2_letra, num1, num2, tipoOperador;
    while (true) {
        num1_letra = window.prompt("Digite primer numero", "");
        num2_letra = window.prompt("Digite segundo numero", "");
        if (esEntero(num1_letra) &&
            esEntero(num2_letra)) {
            num1 = parseInt(num1_letra); num2 = parseInt(num2_letra); break;
        }

        else window.alert(" Digite los numeros correctamente");
    }

    while (true) {
        tipoOperador = parseInt(window.prompt("Eliga el tipo de operación \n '1' para sumar  \n '2' para restar \n '3' para multiplicar \n '4' para dividr \n '5' para potencia \n'6' radicacion ", ""));
        switch (tipoOperador) {
            case 1:
                window.alert("La suma es " + +num1 + +num2);
                break;
            case 2:
                window.alert("La resta es " + num1 - num2);
                break;
            case 3:
                window.alert("La multiplicacion es" + num1 * num2);
                break;
            case 4:

                if (noCero(num2))
                    window.alert("La division es " + num1 / num2);
                else window.alert('La division de los numeros es indefinidad porque el divisor es... ' + num2);
                break;
            case 5:
                window.alert(num1 + " a la potencia de " + num2 + " es " + num1 ** num2);
                break;
            case 6:
                window.alert("La raiz " + num2 + " de " + num1 + " es " + num1 ** (1 / num2));
                break;
            default:
                alert('Escriba por favor un numero para cada opción')
                continue
        }
        break;
    }
}
/*
Sexto ejercicio
*/
function calcularEdad() {
    let fecha, dia_s, mes_s, ano_s;
    let dia, mes, ano;
    let fechaActual, h, m, t, y, edad;
    while (true) {
        fecha = window.prompt("Digite la fecha en que nació. 'DD-MM-AAAA'", "");
        if (fecha.length == 10) {
            dia_s = fecha.substring(0, 2);
            mes_s = fecha.substring(3, 5);
            ano_s = fecha.substring(6, 10);
        }
        else {
            window.alert('Digite la fecha en el formato DD-MM-AAAA');
            continue;
        }
        if (esEntero(dia_s) && esEntero(mes_s) && esEntero(ano_s)) {
            dia = parseInt(dia_s);
            mes = parseInt(mes_s);
            ano = parseInt(ano_s);
        }
        else {
            window.alert('Ponga bien la fecha, con numeros');
            continue;
        }

        /* Condicional que comprueba que una fecha ingresada sea una fecha valida, sin contar años biciestos.*/
        if ((((mes < 8) && (((mes % 2 !== 0) && (dia > 0 && dia <= 31)) || ((mes % 2 === 0) && ((mes != 2 && dia > 0 && dia <= 30) || (mes == 2 && dia > 0 && dia <= 28))))) ||
            ((mes >= 8) && (((mes % 2 !== 0) && (dia > 0 && dia <= 30)) || ((mes % 2 === 0) && (mes != 2 && dia > 0 && dia <= 31))))) &&
            (mes > 0 && mes <= 12 && ano <= 2002))
            break;
        else window.alert('Escriba bien la fecha: los dias hasta 31 o 30 según Mes,  el mes hasta 12, y el año debe ser menor o igual que 2002');
    }

    hoy = new Date();
    fechaActual = hoy.getDate();//* conteo de los dias 
    h = hoy.getHours();//*Horas del día
    m = hoy.getMinutes();//*Minutos 
    t = hoy.getMonth();//*conteo de los meses
    y = hoy.getFullYear();//*conteo del año
    t++;
    edad = y - ano;

    if (mes > t)
        edad--;
    if (mes == t && dia >= fechaActual) {
        edad--;
    }

    console.log('Usted Tiene: ' + +edad + ' años');
    window.alert("Usted Tiene: " + +edad + " años");
    console.log('Usted Nacio el ' + dia + ' de ' + mes + ' de ' + ano);
    console.log('Es la: ' + h + ':' + m);
    console.log(' Hoy es ' + fechaActual + ' ' + 'de' + ' ' + t + ' ' + 'de' + ' ' + y);

}
/*
Septimo ejercicio
*/
function menorMayorEdad() {
    let mensaje = "", edadPersona;

    while (true) {
        edadPersona = window.prompt(" Digite su edad actual...");
        if (esEntero(edadPersona) && (edadPersona > 0 && edadPersona < 100)) {
            edadPersona = parseInt(edadPersona);
            break;
        }
        else
            alert("No es una edad validad "); continue;
    }
    if (edadPersona < 18)
        mensaje = "Usted es menor de edad...";
    else {
        mensaje = "Usted es mayor de edad...";
        if (edadPersona >= 80) mensaje = mensaje + " y es un adulto mayor.";
    }
    window.alert(mensaje);
}
/*
Octavo ejercicio
*/
function cantidadLetras() {
    const nombreCompleto = window.prompt(" Digite su nombre completo", 'Pepito Perez');
    const sinEspacios = nombreCompleto.split(" ");
    const nombreJunto = sinEspacios.join('');
    console.log(nombreJunto);
    console.log("La cantidad de letras es:" + nombreJunto.length);
}

/*
Noveno ejercicio
*/
function error_letDeclarada() {

    ciudad = window.prompt(" Digite la ciudad de residencia");
    let ciudad;
    console.log(ciudad);
}
/*
Decimo ejercicio
*/

function errorVar_NoDefinida() {
    var contratos;
    console.log(contratos);
}
/*
Undecimo ejercicio
*/
function contar_PosNeg() {
    let entero = 1, valor;
    let positivoCuenta = 0, negativoCuenta = 0;

    while (true) {
        valor = window.prompt(" digite numero");
        if (esEntero(valor))
            entero = parseInt(valor);
        else {
            window.alert("Ingrese un numero entero");
            continue;
        }
        if (noCero(entero)) {
            if (entero > 0)
                positivoCuenta++;
            else
                negativoCuenta++;
        }
        else break;
    }
    console.log("Cantidad de numeros positivos: " + positivoCuenta);
    console.log("Cantidad de numeros negativos: " + negativoCuenta);
}

/*
Duodecimo ejercicio
*/
function nombreCaracteres() {

    const listaNombres = window.prompt("Ingrese nombres separados por espacio: ");
    const nombresArreglo = listaNombres.split(" ");
    let nombre;

    for (let i = 0; i < nombresArreglo.length; i++) {
        nombre = nombresArreglo[i];
        if (nombre.length > 6)
            console.log(nombre);
    }
    window.alert(nombresArreglo);
}
/*
Funcion para validar si un valor string es un numero entero, devuelve true si es un valor de un numero entero.
*/
function esEntero(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str)) && (str % 1 === 0)
}
/*
Funcion para determinar si un numero es diferente a cero, devuelve true si es diferente
*/
function noCero(num) {
    return (num != 0);
}