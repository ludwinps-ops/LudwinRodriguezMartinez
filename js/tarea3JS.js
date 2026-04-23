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
    alert("Tu charmander a evolucionado a charmeleon");
}

function evol2(){
    document.getElementById("char1").src="imagenes/charizard.png";
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

