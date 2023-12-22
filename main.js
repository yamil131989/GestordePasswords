const alfabeto = "abcdefghijklmnopqrstuvwxyz" 


class Usuario{
    constructor(nombre){
        this.nombre = prompt("Ingrese su nombre de usuario")
        this.claves = []        
    }
}

//Comienza el programa
Menu()







///============================================================Encriptacion Algoritmo Cesar
function encriptarCesar(user){
    let frase = prompt("Ingrese la frase ")
    let clave = parseInt(prompt("Ingrese la clave cesar, rotacion de alfabeto"))
    let flag = true
    while(flag){
        if ((clave>26) || (clave<1) || isNaN(clave)) {
            clave = parseInt(prompt("Ingrese la clave cesar, rotacion de alfabeto"))
        } else {                   
            flag = false
        }                
    } 
    
    let letra = ''
    let mensaje = ''
    //temp = frase.split('')
    let cifrado = alfabeto.slice(+clave)
    cifrado +=alfabeto.slice(0,alfabeto.length - clave)
    for (let i = 0;i<frase.length;i++) {
        letra = frase[i].toLowerCase();
        if (letra == ' ') {
            letra = ' '
        } else {
            letra = cifrado[alfabeto.indexOf(letra)]
        }
        mensaje+=letra
    }
    
    console.log(mensaje)
    user.claves.push(mensaje)
    return user
}

///============================================================Decriptacion Algoritmo Cesar

function dencriptarCesar(){
    let letra = ''
    let mensaje = ''
    let frase = prompt("Ingrese la frase.\n Puede copiarla y pegar aqui ")
    let clave = parseInt(prompt("Ingrese la clave cesar, rotacion de alfabeto"))
    //temp = frase.split('')
    let cifrado = alfabeto.slice(-clave)
    cifrado +=alfabeto.slice(0,alfabeto.length - clave)
    for (let i = 0;i<frase.length;i++) {
        letra = frase[i].toLowerCase();
        if (letra == ' ') {
            letra = ' '
        } else {
            letra = cifrado[alfabeto.indexOf(letra)]
        }
        mensaje+=letra
    }
    console.log(mensaje)
    return mensaje
}

///============================================================Encriptacion Inversa
// 

function encriptacionInversa(frase,usuario){
    let temp = frase.split('')
    let resultado = temp.reverse()
    resultado = resultado.join("")

    usuario.claves.push(resultado)
    console.log(resultado)
    return usuario    
}

///============================================================Decriptacion Inversa

function dencriptacionInversa(){
    
    let frase = prompt("Ingrese la frase")
    let temp = frase.split('')
    let resultado = temp.reverse()
    resultado = resultado.join("")

    console.log(resultado)

    return resultado
}

///============================================================Eliminar password
function eliminarPassAlmacenada(user){
    console.table(user.claves)
    
    let indice = Number(prompt("Ingrese el indice de la password a eliminar "))
    
    let flag = true
    while(flag){
        if (indice>user.claves.length || indice < 0 ) {
            indice = parseInt(prompt("Ingrese el indice de la password a eliminar "))
        } else {
            user.claves.splice(indice, 1) // 
            flag = false
        }
        
    }
    console.log("Se ha eliminado la password "+indice + " ...actualizando")
    console.table(user.claves)
    return user
}


///============================================================Menu
function Menu(){
    let user = new Usuario()
    while(true){
        console.log("=============")
        console.log("1 - Cifrado cesar")
        console.log("2 - Desencriptador cesar")
        console.log("3 - Encriptacion Inversa")
        console.log("4 - Desencriptar inverso")
        console.log("5 - Mostrar contraseñas")
        console.log("6 - Eliminar password almacenada")
        console.log("7 - Salir")
        console.log("=============")

        let opcion = Number(prompt("Ingrese una opcion"))
        if (opcion ==1) {            
            
            encriptarCesar(user)                       

        } else if(opcion ==2){
            
             dencriptarCesar()
            
        } else if (opcion ==3) {
            
            let frase = prompt("Ingrese la frase ")
            encriptacionInversa(frase,user)
            //tipo 3 caracteres especiales

        } else if (opcion==4) {            
            dencriptacionInversa()
        }
          else if (opcion==5) {
            console.log("Mostrando contraseñas")
            console.table(user.claves)

        }  else if (opcion==6) {
            //console.log("Eliminar password almacenada ")
            eliminarPassAlmacenada(user)

        } else if (opcion==7) {
            if (confirm("Resetear?")){                                                                                
                Menu()
            } else {
                console.log("Saliendo")
                break
            }
                        
        }else {
            console.log("Ingrese una opcion valida")
        }

    }    
    
    console.log("Mostrando contraseñas almacenadas de "+ user.nombre)
    console.table(user.claves)

    return user
}
