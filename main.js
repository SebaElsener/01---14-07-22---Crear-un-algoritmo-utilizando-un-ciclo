
let nombreApellido=""
let edad=0
let ingresoDatos=""

ingresoDatos=prompt("¿Ingresar datos (si/no)?")

while (ingresoDatos == "si") {
    for (let i = 0; i <= 9; i++){
        nombreApellido=prompt("Nombre y apellido: ")
        edad=prompt("Edad: ")
        if (edad<=12) {
            alert(nombreApellido+", tomá el colectivo a Mundo Marino")
        } else {
            alert(nombreApellido+", tomá el colectivo a La Plata")
        }
        if(i==9){
            alert("Cupo completo")
            ingresoDatos=""
        } else {
            alert("Quedan "+(9-i)+" cupos")
        }
    }
    ingresoDatos=prompt("¿Reingresar datos (si/no)?")
}