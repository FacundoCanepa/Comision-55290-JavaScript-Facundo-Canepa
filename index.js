// informacion de usuario (nombre y apellido , mail y telefono)
let nombre
let apellido
function Usuario (){

    let nombreUsuario = prompt("Ingrese su primer nombre") //pido su nombre 
    
    if (isNaN(nombreUsuario)){
        console.log
        nombre = nombreUsuario
    }
    else if (nombreUsuario == ""){
        console.warn ("error")
    }
    else {
        console.warn ("error")
    }
    let apellidoUsuario = prompt("Ingrese su apellido") //pido apellido 
    if (isNaN(apellidoUsuario)){ //si apellidoUsuario no es un numero se ejecuta este codigo 
        console.log ("bienvenido a Tio Pelotte " + nombreUsuario + " " + apellidoUsuario)
        apellido = apellidoUsuario
    }
    else if (apellidoUsuario == ""){
        console.warn ("error")
    }
    else {
        console.warn ("error")
    }
    let gmailUsuario = prompt ("ingrese su mail")
    if (gmailUsuario.includes("@" || ".com")){
        console.log 
    }
    else {
        console.warn ("error")
    }
    let numeroUsuario = prompt ("ingrese su numero sin el +54 y con su codigo de area")
    if (isNaN(numeroUsuario)){
        console.warn("no ingresaste ningun numero")
    }
    //toda la informacion del usuario
    else {
        console.log ( "nombre: " + nombreUsuario + "\napellido: " + apellidoUsuario + "\ngmail: " + gmailUsuario + "\ntelefono: " + numeroUsuario  )
    }
} 
Usuario()
// si el usuario se confundio poniendo la info , se repite el usuario()
let check = prompt ("su informacion es correcta ?")

if ( check == "no"){
    Usuario()
}
else if (check == "si"){
    console.log("su informacion fue enviada")
}
else{
    console.warn ("error")
}
let total = 0;  
let cantidad = 0;

function pastasUsuario(){
//pedi la pasta que el cliente este buscando 
let pasta = prompt("Selecciona una opción:\n1. Ravioles \n2. Fideos \n3. Sorrentinos \n4.Ñoquis");
    //convierte el numero en entero
    pasta = parseInt(pasta);
    //en caso selecionar el numero pone su respectiva pasta , si no es asi este te da console.warn 
    switch (pasta){
        //en cada case saco el precio de los productos y la cantidad . 
        case 1 :
            console.log("usted seleciono Ravioles")
            let planchas= prompt ("ingrese la cantidad de planchas")
            cantidad = planchas
            let precioRavioles = 620 ;
            total = precioRavioles
            break;
        case 2:
            console.log("usted seleciono Fideos");
            let kilosFideos= prompt ("ingrese la cantidad de kilos")
            cantidad = kilosFideos
            let precioFideos = 1200;
            total = precioFideos
            break;
        case 3:
            console.log("usted seleciono Sorrentinos");
            let kilosSorrentinos= prompt ("ingrese la cantidad de kilos")
            cantidad = kilosSorrentinos
            let precioSorrentinos = 2900;
            total = precioSorrentinos
            break;
        case 4 : 
        console.log ("usted seleciono Ñoquis")
        let kilosNoquis= prompt ("ingrese la cantidad de kilos")
        cantidad = kilosNoquis
        let precionNoquis = 1400;
        total = precionNoquis
        default:
            console.warn("Opción inválida");
            break;
    } 
}
pastasUsuario()

if(isNaN(cantidad)){
    console.warn ("introduce un numero")
    pastasUsuario()
}
else if (cantidad <= 0){
    console.warn ("introduce un numero valido")
    pastasUsuario()
}
else{
    console.log(cantidad)
}
//calculo el precio final con la informacion del total x la cantidad 
let precio = total * cantidad;
let metodoDePago = 0 ;
let agregados = 0 ;

function impuestos () {
    let metodoDePago= prompt("Selecciona una opción:\n1. Efectivo \n2. Mercado pago \n3. Cuenta DNI");
    metodoDePago = parseInt(metodoDePago);
    switch (metodoDePago) {
        case 1:
            console.log("usted seleciono Efectivo");
        break ;
        case 2 :
            console.log("usted seleciono Mercado pago");
            let total = precio
            let mercadoPago = 15
            let porcentaje = (precio * mercadoPago) /100 ;
            agregados = porcentaje
        break ;
        case 3:
            console.log("usted seleciono Cuenta DNI");
            let cuenta = precio
            let cuentaDNI = 10
            let porciento = (precio * cuentaDNI) /100 ;
            agregados = porciento 
            break ;
        default:
            console.warn("Opción inválida");
            break;
        }

} 

impuestos()

let preciototal = (precio + agregados)

console.log (agregados)
console.log (preciototal)

console.log ("Su pedido fue realizado " + nombre + " " + apellido +"\nEl subtotal de su pedido es :" + precio + "\nImpuestos :" + agregados + "\nPrecio final :" +preciototal)
