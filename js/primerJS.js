// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Hola mundo desde JavaScript");
//alert nos sirve para mostrarle un alert al usuario
alert("Hola Mundo. Esto es una Alerta");

function cambiarCarita(){
    document.getElementById("carita").src="imagenes/triste.png";
    document.getElementById("logoSenati").src="imagenes/logo.png"
    alert("Por que tas triste");
}
function feliz(){
    document.getElementById("carita").src="imagenes/feliz.png";
    document.getElementById("TituloJS").textContent="Ejemplo de Caritas";
}
function nombresNav(){
    document.getElementById("m1").textContent="Index";
    document.getElementById("m2").textContent="Segunda Página";
    document.getElementById("m3").textContent="Tercera Página";
    document.getElementById("m4").textContent="Cuarta Página";
    document.getElementById("m5").textContent="Quinta Página";
    document.getElementById("m6").textContent="Sexta Página";
    document.getElementById("m7").textContent="Septima Pagina";
    document.getElementById("m8").textContent="Octava Pagina";
}
function nombresNav2(){
    document.getElementById("m1").textContent="Inicio";
    document.getElementById("m2").textContent="Listas";
    document.getElementById("m3").textContent="Tablas";
    document.getElementById("m4").textContent="Ejemplos de JS";
    document.getElementById("m5").textContent="Tareas de JS";
    document.getElementById("m6").textContent="Formularios";
    document.getElementById("m7").textContent="Personal";
    document.getElementById("m8").textContent="Entregable";
}
