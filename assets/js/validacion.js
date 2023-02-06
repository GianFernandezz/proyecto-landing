


document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();


    // Variables
    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;

    // Expresion regular
    ExpRegularText = /^\s+$/;
    ExpRegularEmail = !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email));
    ExpregTel = !(/^\d{3}\d{3}\d{3}$/.test(phone));
    ExpregNum = /^([0-9])*$/;
    // Validación

    if(nombre == null || nombre.length <2 || ExpRegularText.test(nombre)){
        alertify.error('El campo nombre es invalido');
        nombre = document.getElementById('nombre').style.boxShadow = "0 0 5px red";   
    }
    else if(nombre == null || nombre.length >=35 || ExpRegularText.test(nombre)){
        alertify.error("El nombre no debe sobrepasar los 35 caracteres");
    }
    else if(ExpregNum.test(nombre)){
        alertify.error("El valor no es una letra");
    }
    else if(email == null || ExpRegularEmail){
        alertify.error("El campo email es invalido");
        email = document.getElementById('email').style.boxShadow = "0 0 5px red";
       
    }
    else if(phone == null || ExpregTel){
        alertify.error("El campo phone es invalido");
        phone = document.getElementById('phone').style.boxShadow = "0 0 5px red";
       
    }

    else{
        alertify.success("Registro de datos fue exitoso")
        document.getElementById('nombre').value  = '';
        document.getElementById('email').value  = '';
        document.getElementById('phone').value  = '';



        var formData = new FormData();
    

        formData.append('nombre', nombre);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('send', '');


        fetch('./enviar.php', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => window.location.href = "./presentacion.php");

        
    }
    
});




