
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


  

  const saldos = document.querySelector(".saldo");

  function loguear() {

    const inpUsuario = document.getElementById("usuario_log").value;
    const inpContrasena = document.getElementById("contrasena_usuario").value;

    let usuarioLogueado = false;
    let loggedUser = null;
    

    if (inpUsuario == "" && inpContrasena == "") {
      window.alert("NO HAZ INGRESADO NINGUN VALOR");
      return;
    }
   
    for (let posicion = 0; posicion < usuarios.length; posicion++) {
      
      if (inpUsuario === usuarios[posicion].usuario &&
          Number(inpContrasena) === usuarios[posicion].constrasena) {

          //USUARIO SE LOGUEO CORRECTAMENTE
          usuarioLogueado = true;
          loggedUser = usuarios[posicion];
           
          
          break;
          
        
      }
      
    }

    //YA SABEMOS SI SE LOGUEO O NO EL USUARIO

    if (usuarioLogueado) {

      card1.classList.add("hide");
      card2.classList.remove("hide")
      h1_card2.textContent = `BIENVENIDO(a) ${loggedUser.usuario}`;
      saldos.textContent =`TU SALDO ES: $${loggedUser.saldo}`;

      
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------

      const btn_aceptar_ingresar_dinero_ = document.getElementById("btn_aceptar_ingresar_dinero");

function ingresar_saldo(){

  let inpIngresarCantidad = parseInt(document.getElementById("ingresar_dinero").value);
  /* let indiceUsuarioSeleccionado = 0; */
  let suma = inpIngresarCantidad + loggedUser.saldo;
  if (suma > 990) {

    window.alert('OPERACIÓN INVALIDA!!!. \n\n' + 'NO PUEDES INGRESAR:  $' + inpIngresarCantidad + '\n\nYA QUE EXCEDE EL LIMITE DE $990 QUE ES LO MÁXIMO PUEDE TENER UNA CUENTA.')
    ingresar_dinero.value = "";
  

 
}else{
  window.alert('OPERACIÓN EXITOSA!!!. \n\n' + 'HAZ INGRESADO:  $' + inpIngresarCantidad + '\n\nEN BREVE SE ACTUALIZARA TU SALDO.')
  loggedUser.saldo = suma;
  console.log(usuarios);
  saldos.textContent =`TU SALDO ES: $${loggedUser.saldo}`;
  ingresar_dinero.value = "";
}

}

btn_aceptar_ingresar_dinero.addEventListener("click", ingresar_saldo)

//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
const btn_aceptar_retirar_dinero = document.getElementById("btn_aceptar_retirar_dinero");

function retirar_saldo(){

  let inpRetirarCantidad = parseInt(document.getElementById("retirar_dinero").value);
  /* let indiceUsuarioSeleccionado = 0; */
  let restar = loggedUser.saldo - inpRetirarCantidad;
 
  if (restar < 10) {

    window.alert('OPERACIÓN INVALIDA!!!. \n\n' + 'NO PUEDES RETIRAR:  $' + inpRetirarCantidad + '\n\nYA QUE EXCEDE EL LIMITE DE $10, QUE ES LO MINIMO QUE PUEDE TENER UNA CUENTA.')
    
    retirar_dinero.value = "";

 
}else{
  window.alert('OPERACIÓN EXITOSA!!!. \n\n' + 'HAZ RETIRADO:  $' + inpRetirarCantidad + '\n\n¡¡¡¡TOMA TÚ DINERO!!!!.' + '\n\nEN BREVE SE ACTUALIZARÁ TU SALDO.')
  loggedUser.saldo = restar;
  console.log(usuarios);
  saldos.textContent =`TU SALDO ES: $${loggedUser.saldo}`;
  retirar_dinero.value = "";
}

  
}

btn_aceptar_retirar_dinero.addEventListener("click", retirar_saldo)

//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
      
    } else{
      window.alert("USUARIO/CONTRASEÑA INCORRECTA");
    }

  }

    btnLogin.addEventListener("click", loguear)
    
   


/* HACE LA FUNCIÓN DE ACTUALIZAR LA PÁGINA Y REGRESAR LOS VALORES INICIALES */

let refresh = document.getElementById("btn_cancelar_operacion");
refresh.addEventListener('click', _ => {
  window.alert('GRACIAS POR USAR EL CAJERO!!!. \n\n' + 'Da CLICK en ACEPTAR Y en breve podrás tomar tu tarjeta:')
            location.reload();
})