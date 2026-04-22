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
function cambiarTitulo(){
    document.getElementById("titulo").textContent="Practicando JS";
    document.getElementById("titulo").style.color="#290c60" 
    document.getElementById("logoSenati").src="images/logo.png";
    document.getElementById("encabezado").style.background="#89cce2"
}

function suma(){
    let num1 = 3;
    let num2 = 5;
    let suma = num1+num2;
    alert("la suma es de" +suma);
}
function eje01(){
    let p1 = 10;
    let p2 = 5;
    let p3 = 15;
    let c1 = 3;
    let c2 = 18;
    let c3 = 6;
    let Stotal, total;
    Stotal = (p1*c1)+(p2*c2)+(p3*c3);
    if(Stotal>100){
        total = Stotal*0.95;
        alert("Su compra lleva descuento");
    }else{
        total = Stotal;
    }
    alert("El total a Pagar es de: S/."+total);

}
function eje02(){
    let amigos = 10;
    let total = 100;
    let cuota = total/amigos;
    alert("Son "+amigos+" amigos"+ " y la cuota del total S/."+total+" es de : S/."+cuota);
}

