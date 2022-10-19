//Obtén todos los campos del formulario y el propio formulario.


//Funciones de validación

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isCheckedRadio = radios => {
    let valid=false;
    for (let i=0;i<radios.length;i++) {
        if (radios[i].checked){
            valid = true;  
        }
    }
    return valid;
}

// Función que valida si hay al menos un checkbox validado




// Funciones para validar cada campo





// Funciones para mostrar y borrar errores



