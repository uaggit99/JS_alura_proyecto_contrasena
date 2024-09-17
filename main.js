let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena= document.getElementById('contrasena');
let str='';


const cadenaCaracter= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ!@#$%^&*()_+\-=abcdefghijklmnñopqrstuvwxyz0123456789"

function generar(){
    let numeroDigito = parseInt(cantidad.value);
        //console.log(numeroDigito);
    if(numeroDigito < 8){        
        alert("la cantidad debe ser mayor o igual a 8 caracteres");
    
    }
    let password='';
    
    for(let i=0; i< numeroDigito;i++){
        let aleatorio=cadenaCaracter[ Math.floor(Math.random()*cadenaCaracter.length)];
        console.log(cadenaCaracter.length)
        console.log(aleatorio)
        password+=aleatorio;

    }
    //console.log(password)
    contrasena.value=password;
    str=password;
    valorarContrasena(str);

}

function limpiar(){
    contrasena.value='';
    str='';

}
function valorarContrasena(str){
    let hasUpperCase = /[A-Z]/.test(str);
    let hasLowerCase = /[a-z]/.test(str);
    let hasNumbers = /[0-9]/.test(str);
    let specialChars = /[!@#$%^&*()_+\-=]+/.test(str);
    console.log(hasLowerCase)
    if(hasUpperCase && hasLowerCase && hasNumbers && specialChars){
        alert("Contraseña seguridad Fuerte");
    }else if(hasLowerCase && hasUpperCase && (hasNumbers || specialChars)){
        alert("Contraseña seguridad Mediana");
    }else if(hasUpperCase && hasLowerCase){
        alert("Contraseña seguridad Debil");
    }

    
    }


/*let texto = "cadena de texto";
console.log(typeof texto);
console.log(typeof cantidad);*/














