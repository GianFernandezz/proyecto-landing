
// document.getElementById('formulario').addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Variables
//     nombre = document.getElementById('nombre').value;
//     email = document.getElementById('email').value;
//     phone = document.getElementById('phone').value;

//     // Expresion regular
//     ExpRegularText = /^\s+$/;
//     ExpRegularEmail = !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email));
//     ExpregTel = !(/^\d{3}\d{3}\d{3}$/.test(phone));
//     // Validación

//     if(nombre == null || nombre.length == 0 || ExpRegularText.test(nombre)){
//         alertify.error("El campo nombre es invalido");
//         nombre = document.getElementById('nombre').style.boxShadow = "0 0 5px red";
//         // nombre.style.boxShadow = "0 0 5px red";

        
//     }
//     else if(email == null || ExpRegularEmail){
//         alertify.error("El campo email es invalido");
//         email = document.getElementById('email').style.boxShadow = "0 0 5px red";
       
//     }
//     else if(phone == null || ExpregTel){
//         alertify.error("El campo phone es invalido");
//         phone = document.getElementById('phone').style.boxShadow = "0 0 5px red";
       
//     }

//     else{
//         alertify.success("Registro de datos fue exitoso")
//         document.getElementById('nombre').value  = '';
//         document.getElementById('email').value  = '';
//         document.getElementById('phone').value  = '';

//         // window.location.href = "../presentacion.html";
        
//     }
// });




