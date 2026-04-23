// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Entrando a las Tareas de JS");
//alert nos sirve para mostrarle un alert al usuario
alert("Estas entrando a las tareas de JS");

function eje9(){
    let distancia = 2;
    let adicional = 3
    let tarifa = 10;
    let total = (distancia*adicional)+tarifa;
    alert("Recorriste "+distancia+" Km su total a pagar es: S/."+total);
}

function notoqs(){
    alert("Te dije que no toques.");
}

function  murky(){
    document.getElementById("hots").src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzl3a3k4NTFiYzI5Y2E3NGxoaXNhdndmanJhc2s1M3k2aW43d3c2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g04CfRZogHyxJEPmtO/giphy.gif";
    alert("Mira salio murky");
}

function evol(){
    document.getElementById("char1").src="imagenes/charmeleon.png";
    document.getElementById("char1").style.width="600px";
    document.getElementById("pkmn").style.background= "#995233";
    alert("Tu charmander a evolucionado a charmeleon");
}

function evol2(){
    document.getElementById("char1").src="imagenes/charizard.png";
    document.getElementById("char1").style.width="900px";
    document.getElementById("pkmn").style.background= "#C05020";
    alert("Tu charmeleon a evolucionado a un charizard");
}

function subrayar(){
    document.getElementById("titulo5").style.textDecoration="underline";
    document.getElementById("titulo5").style.fontStyle="italic";
    document.getElementById("m1").style.textDecoration="underline";
    document.getElementById("m1").style.fontStyle="italic";
    document.getElementById("m2").style.textDecoration="underline";
    document.getElementById("m2").style.fontStyle="italic";
    document.getElementById("m3").style.textDecoration="underline";
    document.getElementById("m3").style.fontStyle="italic";
    document.getElementById("m4").style.textDecoration="underline";
    document.getElementById("m4").style .fontStyle="italic";
    document.getElementById("m5").style.textDecoration="underline";
    document.getElementById("m5").style.fontStyle="italic";
    document.getElementById("m6").style.textDecoration="underline";
    document.getElementById("m6").style.fontStyle="italic";
    document.getElementById("m7").style.textDecoration="underline";
    document.getElementById("m7").style.fontStyle="italic";
    document.getElementById("m8").style.textDecoration="underline";
    document.getElementById("m8").style.fontStyle="italic";
    alert("El titulo y menu se han subrayado y puesto en cursiva");
}

function reset(){
    location.reload();
    alert("La pagina se ha reiniciado");
}

let nivel = 1;

function evolucion(){
    if (nivel == 3){
        alert("Tu charmander esta evolucionando a charmeleon");
        document.getElementById("char1").src="imagenes/charmeleon.png";
        document.getElementById("char1").style.width="600px";
        document.getElementById("pkmn").style.background= "#995233";
    }
    if (nivel == 6){
        alert("Tu charmeleon esta evolucionando a charizard");
        document.getElementById("char1").src="imagenes/charizard.png";
        document.getElementById("char1").style.width="900px";
        document.getElementById("pkmn").style.background= "#C05020";
    }
}

function pregunta(){
    if (nivel == 1){
        let p1= prompt("Cual es el tipo de charmander?");
        if (p1.toLowerCase() == "fuego"||p1.toLowerCase() == "Fuego"){
            alert("Correcto Has subido de nivel");
            nivel++;
            document.getElementById("nivel").innerText = "Nivel: " + nivel;
            evolucion();
            return;
        } else {
            alert("Respuesta incorrecta, intenta de nuevo");
        }
    }
    if (nivel == 2){
        let p2= prompt("Cuanto es 5 x 4?");
        if (p2 == 20){
            alert("Correcto Has subido de nivel");
            nivel++;
            document.getElementById("nivel").innerText = "Nivel: " + nivel;
            evolucion();
            return;
        } else {
            alert("Respuesta incorrecta, intenta de nuevo");
        }
    }
    if (nivel == 3){
        let p3= prompt("Cual es la capital de Peru?");
        if (p3.toLowerCase() == "lima" || p3.toLowerCase() == "Lima"){
            alert("Correcto Has subido de nivel");
            nivel++;
            document.getElementById("nivel").innerText = "Nivel: " + nivel;
            evolucion();
            return;
        } else {
            alert("Respuesta incorrecta, intenta de nuevo");
        }
    }
    if (nivel == 4){
        let p4= prompt("En que continente se encuentra Peru?");
        if (p4.toLowerCase() == "america" || p4.toLowerCase() == "América"){
            alert("Correcto Has subido de nivel");
            nivel++;
            document.getElementById("nivel").innerText = "Nivel: " + nivel;
            evolucion();
            return;
        } else {
            alert("Respuesta incorrecta, intenta de nuevo");
        }
    }
    if (nivel == 5){
        let p5= prompt("Complete la frase: Camaron que se duerme se lo lleva la ____");
        if (p5.toLowerCase() == "corriente" || p5.toLowerCase() == "Corriente"){
            alert("Correcto Has subido de nivel");
            nivel++;
            document.getElementById("nivel").innerText = "Nivel: " + nivel;
            evolucion();
            return;
        } else {
            alert("Respuesta incorrecta, intenta de nuevo");
        }
    }
    if (nivel == 6){
        alert("Felicidades has respondido todas las preguntas y tu charmander a evolucionado a charizard");
    }
    }