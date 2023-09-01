
const btnLogin = document.getElementById("btn_login");
const btn_consultar_saldo = document.getElementById("btn_consultar_saldo");
const btn_ingresar_dinero = document.getElementById("btn_ingresar_dinero");
const btn_retirar_dinero = document.getElementById("btn_retirar_dinero");

const card1 = document.querySelector(".card-item1");
const card2 = document.querySelector(".card-item2");
const h1 = document.querySelector(".h1_card2");




let usuarios = [
  {
      usuario: "Mali",
      constrasena: 1234,
      saldo: 200,
  
   },
   {
      usuario: "Gera",
      constrasena: 12345,
      saldo: 290,
  
  },
  {
      usuario: "Maui",
      constrasena:123456,
      saldo: 67,
  
  }
    
  ];


  /* HACE LA FUNCIÓN DE LOGUEAR Y MUESTRA EL NOMBRE DEL USUARIO Y  LA CANTIDAD DE SALDO ACTUAL */

const saldos = document.querySelector(".saldo");

function loguear(){
    
const inpUsuario = document.getElementById("usuario_log").value;
const inpContrasena = document.getElementById("contrasena_usuario").value;

if(
  inpUsuario == usuarios[0].usuario && 
  inpContrasena == usuarios[0].constrasena){


card1.classList.add("hide");
card2.classList.remove("hide")
h1_card2.textContent = `BIENVENIDO(a) ${inpUsuario}`;
saldos.textContent =`TU SALDO ES: $${usuarios[0].saldo}`;




} else if(
  inpUsuario == usuarios[1].usuario && 
  inpContrasena == usuarios[1].constrasena){
    
    card1.classList.add("hide");
    card2.classList.remove("hide")
    h1_card2.textContent = `BIENVENIDO(a) ${inpUsuario}`;
    saldos.textContent =`TU SALDO ES: $${usuarios[1].saldo}`;
    
  
  
} else if (
  inpUsuario == usuarios[2].usuario && 
  inpContrasena == usuarios[2].constrasena){

    card1.classList.add("hide");
    card2.classList.remove("hide")
    h1_card2.textContent = `BIENVENIDO(a) ${inpUsuario}`;
    saldos.textContent =`TU SALDO ES: $${usuarios[2].saldo}`;
  }else if (
    inpUsuario == "" && 
    inpContrasena == ""){
  
      window.alert("NO HAZ INGRESADO NINGUN UN VALOR")
    }else{
  window.alert("USUARIO/CONTRASEÑA INCORRECTA")
}
}

btnLogin.addEventListener("click", loguear)


/* HACE LA FUNCIÓN DE SUMAR LA CANTIDAD AL SALDO ACTUAL */

const btn_aceptar_ingresar_dinero_ = document.getElementById("btn_aceptar_ingresar_dinero");

function ingresar_saldo(){

  let inpIngresarCantidad = parseInt(document.getElementById("ingresar_dinero").value);
  /* let indiceUsuarioSeleccionado = 0; */
  let suma = inpIngresarCantidad + usuarios[0].saldo;
 

  usuarios[0].saldo = suma;
  console.log(usuarios);
  saldos.textContent =`TU SALDO ES: $${usuarios[0].saldo}`;
}

   

btn_aceptar_ingresar_dinero.addEventListener("click", ingresar_saldo)


/* HACE LA FUNCIÓN DE RESTAR LA CANTIDAD AL SALDO ACTUAL */

const btn_aceptar_retirar_dinero = document.getElementById("btn_aceptar_retirar_dinero");

function retirar_saldo(){

  let inpRetirarCantidad = parseInt(document.getElementById("retirar_dinero").value);
  /* let indiceUsuarioSeleccionado = 0; */
  let restar = usuarios[0].saldo - inpRetirarCantidad;
 

  usuarios[0].saldo = restar;
  console.log(usuarios);
  saldos.textContent =`TU SALDO ES: $${usuarios[0].saldo}`;
}

btn_aceptar_retirar_dinero.addEventListener("click", retirar_saldo)



/* HACE LA FUNCIÓN DE ACTUALIZAR LA PÁGINA Y REGRESAR LOS VALORES INICIALES */

let refresh = document.getElementById("btn_cancelar_operacion");
refresh.addEventListener('click', _ => {
            location.reload();
})




 /*
btnLogin.addEventListener('click', e => {
        card1.classList.add("hide");
        card2.classList.remove("hide")
        
        
      })  

      btnCancelar.addEventListener('click', e => {
        card2.classList.add("hide");
        card1.classList.remove("hide")
        
      })    */