// Funcion de contador regresivo	
document.addEventListener('DOMContentLoaded', () => {
    const DATE_TARGET = new Date('12/24/2024 11:59 PM');
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
    function updateCountdown() {
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }
    updateCountdown();
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

});
//Popup registro
const btnRegistro = document.getElementById("boton_registrar");
btnRegistro.addEventListener("click", function () {
    myFunctionRegistro();

});

function myFunctionRegistro() {
    var popup = document.getElementById("Popup_registro");
    var overlay = document.getElementById("modalOverlay_registro");
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
    popup.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup-content_inner")) {
        event.stopPropagation();
    }
});

function closePopup_registro() {
    var popup = document.getElementById("Popup_registro");
    popup.classList.toggle("show");
    var overlay = document.getElementById("modalOverlay_registro");
    popup.classList.remove("show");
    overlay.classList.remove("show");

}


const email = document.getElementById("mail_r");
const nombre = document.getElementById("nombre_r");
const contraseña = document.getElementById("contraseña_r");
const repetirContraseña = document.getElementById("repetir-contraseña_r");
const ciudad = document.getElementById("ciudad_r");
const pais = document.getElementById("pais_r");
const genero = document.getElementById("genero_r");
const hijos = document.getElementById("hijos_r");

// Función para validar los campos
function validarFormulario() {
    let formularioValido = true;

    // Validación del nombre
    const valorNombre = nombre.value.trim();
    if (valorNombre.length < 3) {
        nombre.setCustomValidity("¡El nombre debe tener al menos 3 caracteres!");
        formularioValido = false;
    } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/.test(valorNombre)) {
        nombre.setCustomValidity("¡El nombre solo puede contener letras!");
        formularioValido = false;
    } else {
        nombre.setCustomValidity("");
    }

    // Validación del email
    if (email.validity.typeMismatch) {
        email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
        formularioValido = false;
    } else {
        email.setCustomValidity("");
    }

    // Validación de la contraseña
    const valorContraseña = contraseña.value.trim();
    if (valorContraseña.length < 12) {
        contraseña.setCustomValidity("La contraseña debe tener al menos 12 caracteres");
        formularioValido = false;
    } else if (!/(.*[0-9].*[0-9]).*/.test(valorContraseña)) {
        contraseña.setCustomValidity("La contraseña debe contener al menos 2 números");
        formularioValido = false;
    } else if (!/(.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]).*/.test(valorContraseña)) {
        contraseña.setCustomValidity("La contraseña debe contener al menos 1 carácter especial");
        formularioValido = false;
    } else if (!/(.*[A-Z]).*/.test(valorContraseña)) {
        contraseña.setCustomValidity("La contraseña debe contener al menos 1 letra mayúscula");
        formularioValido = false;
    } else if (!/(.*[a-z]).*/.test(valorContraseña)) {
        contraseña.setCustomValidity("La contraseña debe contener al menos 1 letra minúscula");
        formularioValido = false;
    } else {
        contraseña.setCustomValidity("");
    }

    // Validación de repetir contraseña
    const valorRepetirContraseña = repetirContraseña.value.trim();
    if (valorContraseña !== valorRepetirContraseña) {
        repetirContraseña.setCustomValidity("Las contraseñas no coinciden");
        formularioValido = false;
    } else {
        repetirContraseña.setCustomValidity("");
    }

    // Validación de la ciudad
    const valorCiudad = ciudad.value.trim();
    if (valorCiudad.length < 3) {
        ciudad.setCustomValidity("¡La ciudad debe tener al menos 3 caracteres!");
        formularioValido = false;
    } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/.test(valorCiudad)) {
        ciudad.setCustomValidity("¡La ciudad solo puede contener letras!");
        formularioValido = false;
    } else {
        ciudad.setCustomValidity("");
    }

    // Validación del país
    const valorPais = pais.value.trim();
    if (valorPais.length < 3) {
        pais.setCustomValidity("¡El país debe tener al menos 3 caracteres!");
        formularioValido = false;
    } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/.test(valorPais)) {
        pais.setCustomValidity("¡El país solo puede contener letras!");
        formularioValido = false;
    } else {
        pais.setCustomValidity("");
    }

    // Validación del género
    if (genero.value === "") {
        genero.setCustomValidity("¡El género es obligatorio!");
        formularioValido = false;
    } else {
        genero.setCustomValidity("");
    }

    return formularioValido;
}

// Función para crear campos adicionales para los hijos
hijos.addEventListener("input", function (event) {
    const valor = this.value.trim();
    if (valor > 0) {
        crearCamposHijos(valor);
    } else {
        const hijosContainer = document.getElementById("hijos-container");
        hijosContainer.innerHTML = "";
    }
});

// Función para crear campos adicionales para los hijos
function crearCamposHijos(numHijos) {
    const hijosContainer = document.getElementById("hijos-container");
    hijosContainer.innerHTML = "";
    for (let i = 0; i < numHijos; i++) {
        const hijoContainer = document.createElement("div");
        hijoContainer.innerHTML = `
      <div class="celda_popup">
        <label for="hijo${i + 1}">Nombre</label>
        <input type="text" id="hijo${i + 1}" name="hijo${i + 1}">
      </div>
      <div class="celda_popup">
        <label for="hijo${i + 1}-edad">Edad</label>
        <input type="number" id="hijo${i + 1}-edad" name="hijo${i + 1}-edad">
      </div>
      <div class="celda_popup">
        <label for="hijo${i + 1}-juguete">Juguete favorito</label>
        <input type="text" id="hijo${i + 1}-juguete" name="hijo${i + 1}-juguete">
      </div>
    `;
        hijosContainer.appendChild(hijoContainer);
    }
}

//Funcion para validar los campos y enviarlos
document.getElementById("btnAceptar_registro").addEventListener("click", function () {
    if (validarFormulario()) {
        guardarDatos();
        closePopup_registro();
    } else {
        alert("Por favor, corrija los errores antes de continuar.");
    }
});

//Funcion que cierra el popup
document.getElementById("btnCancelar_registro").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas cancelar?")) {
        closePopup_registro();
    }
});

//Funcion que limpia todos los campo
document.getElementById("btnLimpiar_registro").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas limpiar todos los campos?")) {
        document.getElementById("nombre_r").value = "";
        document.getElementById("contraseña_r").value = "";
        document.getElementById("repetir-contraseña_r").value = "";
        document.getElementById("mail_r").value = "";
        document.getElementById("ciudad_r").value = "";
        document.getElementById("pais_r").value = "";
        document.getElementById("genero_r").value = "";
        document.getElementById("hijos_r").value = "";
        document.getElementById("hijos-container").innerHTML = "";
    }
});

// Función para guardar los datos en localStorage
function guardarDatos() {
    const userData = {
        nombre: nombre.value,
        email: email.value,
        contraseña: contraseña.value,
        ciudad: ciudad.value,
        pais: pais.value,
        genero: genero.value,
        hijos: hijos.value,
        listaHijos: []
    };

    // Verificar si el nombre de usuario o el correo ya están en uso
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const nombreEnUso = usuarios.some(usuario => usuario.nombre === userData.nombre);
    const emailEnUso = usuarios.some(usuario => usuario.email === userData.email);

    if (nombreEnUso) {
        alert("El nombre de usuario ya está en uso. Por favor, elige otro.");
        return;
    }

    if (emailEnUso) {
        alert("El correo electrónico ya está en uso. Por favor, utiliza otro.");
        return;
    }

    const numHijos = parseInt(hijos.value, 10);
    if (numHijos > 0) {
        for (let i = 0; i < numHijos; i++) {
            const nombreHijo = document.getElementById(`hijo${i + 1}`).value;
            const edadHijo = document.getElementById(`hijo${i + 1}-edad`).value;
            const jugueteHijo = document.getElementById(`hijo${i + 1}-juguete`).value;

            userData.listaHijos.push({
                nombre: nombreHijo,
                edad: edadHijo,
                jugueteFavorito: jugueteHijo
            });
        }
    }

    usuarios.push(userData);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert("¡Registro completado exitosamente!");
    closePopup_registro();
}

//Popup iniciar sesion
const btnIniciarSesion = document.getElementById("boton_iniciar_sesion");
btnIniciarSesion.addEventListener("click", function () {
    myFunctionInicio();
});

function myFunctionInicio() {
    var popup = document.getElementById("Popup_iniciar_sesion");
    var overlay = document.getElementById("modalOverlay_inicio");
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
    popup.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup-content_inner")) {
        event.stopPropagation();
    }
});

function closePopup_iniciar_sesion() {
    var popup = document.getElementById("Popup_iniciar_sesion");
    popup.classList.toggle("show");
    var overlay = document.getElementById("modalOverlay_inicio");
    popup.classList.remove("show");
    overlay.classList.remove("show");
}

//Funcion que cierra el popup
document.getElementById("btnCancelar_inicio").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas cancelar?")) {
        closePopup_iniciar_sesion();
    }
});

//Funcion para cambiar el header
function mostrarPerfil() {
    document.getElementById("boton_iniciar_sesion").style.display = "none";
    document.getElementById("boton_registrar").style.display = "none";
    const perfilUsuario = document.getElementById("perfil_usuario");
    perfilUsuario.style.display = "block";

    if (window.innerWidth <= 600) {
        document.getElementById("titulo_header").style.width = "40%";
    }
    else if (window.innerWidth > 600 && window.innerWidth <= 768) {
        document.getElementById("titulo_header").style.width = "40%";
    }
    else {
        document.getElementById("titulo_header").style.width = "20%";
    }

}

document.getElementById("perfil_usuario").addEventListener("click", function () {
    const menuPerfil = document.getElementById("menu_perfil");
    menuPerfil.style.display = "block";
});

document.addEventListener("click", function (event) {
    const menuPerfil = document.getElementById("menu_perfil");
    const botonPerfil = document.getElementById("perfil_usuario");
    if (menuPerfil.style.display === "block" && !menuPerfil.contains(event.target) && event.target !== botonPerfil) {
        menuPerfil.style.display = "none";
    }
});

//Funcion para comprobar si el usuario esta registrado
function comprobarUsuario() {
    const nombreIngresado = document.getElementById("nombre_sesion").value.trim();
    const contraseñaIngresada = document.getElementById("contraseña_sesion").value.trim();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(usuario => usuario.nombre === nombreIngresado && usuario.contraseña === contraseñaIngresada);

    if (usuarioEncontrado) {
        alert("¡Bienvenido de nuevo!");
        closePopup_iniciar_sesion();
        mostrarPerfil();
        localStorage.setItem("sesionIniciada", true);
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));

    } else {
        alert("Usuario no encontrado. Por favor, verifique sus credenciales.");
    }
}

// Comprobar el estado de la sesión al cargar la página
window.onload = function () {
    const sesionIniciada = localStorage.getItem('sesionIniciada');
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

    if (sesionIniciada === 'true' && usuarioActivo) {
        mostrarPerfilUsuario(usuarioActivo.nombre);
    }
};

//Funcion para iniciar sesion
document.getElementById("btnAceptar_inicio").addEventListener("click", function () {
    comprobarUsuario();
});

//Popup mi perfil
const btnMiPerfil = document.getElementById("mi_perfil");
btnMiPerfil.addEventListener("click", function () {
    myFunctionMiPerfil();
    mostrarPerfilUsuario();
});

function myFunctionMiPerfil() {
    var popup = document.getElementById("popup_mi_perfil");
    var overlay = document.getElementById("modalOverlay_mi_perfil");
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
    popup.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}


//Buscar datos en localStorage
function mostrarPerfilUsuario() {
    const usuarioActivo = localStorage.getItem("usuarioActivo");
    const usuario = JSON.parse(usuarioActivo);
    document.getElementById('nombre_perfil').value = usuario.nombre || '';
    document.getElementById('contraseña_perfil').value = usuario.contraseña || '';
    document.getElementById('mail_perfil').value = usuario.email || '';
    document.getElementById('genero_perfil').value = usuario.genero || '';
    document.getElementById('ciudad_perfil').value = usuario.ciudad || '';
    document.getElementById('pais_perfil').value = usuario.pais || '';
    document.getElementById('hijos_perfil').value = usuario.hijos || 0;
    crearCamposHijos_perfil(usuario.hijos || 0);
    for (let i = 0; i < usuario.hijos || 0; i++) {
        const hijo = usuario.listaHijos[i];
        document.getElementById(`hijo${i + 1}-nombre`).value = hijo.nombre || '';
        document.getElementById(`hijo${i + 1}-edad`).value = hijo.edad || '';
        document.getElementById(`hijo${i + 1}-juguete`).value = hijo.jugueteFavorito || '';
    }
}

// Función para crear campos adicionales para los hijos
hijos_perfil.addEventListener("input", function (event) {
    const valor = this.value.trim();
    if (valor > 0) {
        crearCamposHijos_perfil(valor);
    } else {
        const hijosContainer = document.getElementById("hijos-container_perfil");
        hijosContainer.innerHTML = "";
    }
});

function crearCamposHijos_perfil(numHijos) {
    const hijosContainer = document.getElementById("hijos-container_perfil");
    hijosContainer.innerHTML = "";
    for (let i = 0; i < numHijos; i++) {
        const hijoContainer = document.createElement("div");
        hijoContainer.innerHTML = `
      <div class="celda_popup">
        <label for="hijo${i + 1}">Nombre</label>
        <input type="text" id="hijo${i + 1}-nombre" name="hijo${i + 1}">
      </div>
      <div class="celda_popup">
        <label for="hijo${i + 1}-edad">Edad</label>
        <input type="number" id="hijo${i + 1}-edad" name="hijo${i + 1}-edad">
      </div>
      <div class="celda_popup">
        <label for="hijo${i + 1}-juguete">Juguete favorito</label>
        <input type="text" id="hijo${i + 1}-juguete" name="hijo${i + 1}-juguete">
      </div>
    `;
        hijosContainer.appendChild(hijoContainer);
    }
}

const emailPerfil = document.getElementById("mail_perfil");
const nombrePerfil = document.getElementById("nombre_perfil");
const contraseñaPerfil = document.getElementById("contraseña_perfil");
const ciudadPerfil = document.getElementById("ciudad_perfil");
const paisPerfil = document.getElementById("pais_perfil");
const generoPerfil = document.getElementById("genero_perfil");

function validarFormularioPerfil() {
    let formularioValido = true;

    // Validación del nombre
    const valorNombre = nombrePerfil.value.trim();
    if (valorNombre.length < 3) {
        nombrePerfil.setCustomValidity("¡El nombre debe tener al menos 3 caracteres!");
        formularioValido = false;
    } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/.test(valorNombre)) {
        nombrePerfil.setCustomValidity("¡El nombre solo puede contener letras!");
        formularioValido = false;
    } else {
        nombrePerfil.setCustomValidity("");
    }

    // Validación del email
    if (emailPerfil.validity.typeMismatch) {
        emailPerfil.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
        formularioValido = false;
    } else {
        emailPerfil.setCustomValidity("");
    }

    // Validación de la contraseña
    const valorContraseña = contraseñaPerfil.value.trim();
    if (valorContraseña.length < 12) {
        contraseñaPerfil.setCustomValidity("La contraseña debe tener al menos 12 caracteres");
        formularioValido = false;
    } else if (!/(.*[0-9].*[0-9]).*/.test(valorContraseña)) {
        contraseñaPerfil.setCustomValidity("La contraseña debe contener al menos 2 números");
        formularioValido = false;
    } else if (!/(.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]).*/.test(valorContraseña)) {
        contraseñaPerfil.setCustomValidity("La contraseña debe contener al menos 1 carácter especial");
        formularioValido = false;
    } else if (!/(.*[A-Z]).*/.test(valorContraseña)) {
        contraseñaPerfil.setCustomValidity("La contraseña debe contener al menos 1 letra mayúscula");
        formularioValido = false;
    } else if (!/(.*[a-z]).*/.test(valorContraseña)) {
        contraseñaPerfil.setCustomValidity("La contraseña debe contener al menos 1 letra minúscula");
        formularioValido = false;
    } else {
        contraseñaPerfil.setCustomValidity("");
    }

    // Validación de la ciudad
    const valorCiudad = ciudadPerfil.value.trim();
    if (valorCiudad.length < 3) {
        ciudadPerfil.setCustomValidity("¡La ciudad debe tener al menos 3 caracteres!");
        formularioValido = false;
    } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/.test(valorCiudad)) {
        ciudadPerfil.setCustomValidity("¡La ciudad solo puede contener letras!");
        formularioValido = false;
    } else {
        ciudadPerfil.setCustomValidity("");
    }

    // Validación del país
    const valorPais = paisPerfil.value.trim();
    if (valorPais.length < 3) {
        paisPerfil.setCustomValidity("¡El país debe tener al menos 3 caracteres!");
        formularioValido = false;
    } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/.test(valorPais)) {
        paisPerfil.setCustomValidity("¡El país solo puede contener letras!");
        formularioValido = false;
    } else {
        paisPerfil.setCustomValidity("");
    }

    // Validación del género
    if (generoPerfil.value === "") {
        generoPerfil.setCustomValidity("¡El género es obligatorio!");
        formularioValido = false;
    } else {
        generoPerfil.setCustomValidity("");
    }

    return formularioValido;
}

function actualizarPerfil() {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    let usuarioProvisional = JSON.parse(JSON.stringify(usuarioActivo));
    if (!usuarioActivo) return;

    // Actualiza los datos desde el formulario
    usuarioActivo.nombre = document.getElementById('nombre_perfil').value;
    usuarioActivo.contraseña = document.getElementById('contraseña_perfil').value;
    usuarioActivo.email = document.getElementById('mail_perfil').value;
    usuarioActivo.genero = document.getElementById('genero_perfil').value;
    usuarioActivo.ciudad = document.getElementById('ciudad_perfil').value;
    usuarioActivo.pais = document.getElementById('pais_perfil').value;
    usuarioActivo.hijos = parseInt(document.getElementById('hijos_perfil').value, 10) || 0;

    // Actualiza los hijos
    usuarioActivo.listaHijos = [];
    for (let i = 0; i < usuarioActivo.hijos; i++) {
        const nombreHijo = document.getElementById(`hijo${i + 1}-nombre`).value;
        const edadHijo = document.getElementById(`hijo${i + 1}-edad`).value;
        const jugueteHijo = document.getElementById(`hijo${i + 1}-juguete`).value;

        usuarioActivo.listaHijos.push({
            nombre: nombreHijo,
            edad: edadHijo,
            jugueteFavorito: jugueteHijo
        });
    }

    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const index = usuarios.findIndex(usuario => usuario.nombre === usuarioProvisional.nombre);
    if (index > -1) {
        usuarios[index] = usuarioActivo;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

document.getElementById("btnAceptar_perfil").addEventListener("click", function () {
    if (validarFormularioPerfil()) {
        closePopup_perfil();
        actualizarPerfil();
        alert("Datos guardadas correctamente");
    } else {
        alert("Por favor, corrija los errores antes de continuar.");
    }
});

document.getElementById("btnCancelar_perfil").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas cancelar?")) {
        closePopup_perfil();
    }
});
document.getElementById("btnLimpiar_perfil").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas limpiar todos los campos?")) {
        document.getElementById("nombre_perfil").value = "";
        document.getElementById("contraseña_perfil").value = "";
        document.getElementById("mail_perfil").value = "";
        document.getElementById("ciudad_perfil").value = "";
        document.getElementById("pais_perfil").value = "";
        document.getElementById("genero_perfil").value = "";
        document.getElementById("hijos_perfil").value = "";
        document.getElementById("hijos-container").innerHTML = "";
    }
});

function closePopup_perfil() {
    var popup = document.getElementById("popup_mi_perfil");
    popup.classList.toggle("show");
    var overlay = document.getElementById("modalOverlay_mi_perfil");
    popup.classList.remove("show");
    overlay.classList.remove("show");

}

const btnMisCartas = document.getElementById("mis_cartas");
btnMisCartas.addEventListener("click", function () {
    myFunctionCartas();
    mostrarCartas();
});

function myFunctionCartas() {
    var popup = document.getElementById("popup_mis_cartas");
    var overlay = document.getElementById("modalOverlay_mis_cartas");
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
    popup.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

function mostrarCartas() {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (!usuarioActivo) {
        alert("Inicia sesión para ver tus cartas.");
        return;
    }

    const cartas = JSON.parse(localStorage.getItem('cartas')) || [];
    const cartasUsuario = cartas.filter(carta => carta.email === usuarioActivo.email);

    let cartasHtml = '<h2>Mis cartas</h2><div id="cartasContainer" class="flex-container-carta">';
    if (cartasUsuario.length === 0) {
        cartasHtml = "<p>No tienes cartas enviadas.</p>";
    } else {
        cartasUsuario.forEach((carta, index) => {
            cartasHtml += `
                <div class="caja-carta" draggable="true" data-index="${index}">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h3>${carta.nombre}</h3>
                            <p>${carta.ciudad}</p>
                            <p>${carta.pais}</p>
                        </div>
                        <div class="flip-card-back">
                            <p>${carta.carta}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    cartasHtml += '</div>';

    const cartasContainer = document.getElementById("popup_mis_cartas");
    cartasContainer.innerHTML = cartasHtml;
    agregarDragAndDrop();
}

function agregarDragAndDrop() {
    const cartasContainer = document.getElementById("cartasContainer");
    let draggedElement = null;

    cartasContainer.addEventListener("dragstart", function(event) {
        draggedElement = event.target;
        event.target.classList.add("dragging");
    });

    cartasContainer.addEventListener("dragend", function(event) {
        event.target.classList.remove("dragging");
        draggedElement = null;
    });

    cartasContainer.addEventListener("dragover", function(event) {
        event.preventDefault();
        const afterElement = getDragAfterElement(cartasContainer, event.clientY);
        if (afterElement == null) {
            cartasContainer.appendChild(draggedElement);
        } else {
            cartasContainer.insertBefore(draggedElement, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.caja-carta:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}

function eliminarCarta(index) {
    if (confirm("¿Estás seguro de que deseas eliminar esta carta?")) {
        const cartas = JSON.parse(localStorage.getItem('cartas')) || [];
        cartas.splice(index, 1);
        localStorage.setItem('cartas', JSON.stringify(cartas));
        mostrarCartas();
        alert("Carta eliminada correctamente.");
    }
}



document.getElementById("cerrar_sesion").addEventListener("click", cerrarSesion);
function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    localStorage.removeItem("sesionIniciada");
    document.getElementById("boton_iniciar_sesion").style.display = "block";
    document.getElementById("boton_registrar").style.display = "block";
    document.getElementById("perfil_usuario").style.display = "none";

    alert("Has cerrado sesión correctamente.");
}

//Funcion para enviar cartas
document.getElementById("boton_carta").addEventListener("click", enviarCarta);
function enviarCarta() {
    const nombre = document.getElementById('nombre_carta').value;
    const email = document.getElementById('email_carta').value;
    const ciudad = document.getElementById('ciudad_carta').value;
    const pais = document.getElementById('pais_carta').value;
    const carta = document.getElementById("carta").value.trim();
    const sesionIniciada = localStorage.getItem('sesionIniciada');
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

    if (sesionIniciada != 'true' || !usuarioActivo) {
        alert("Por favor, inicia sesión antes de enviar una carta.");
        return;
    }

    if (email !== usuarioActivo.email) {
        alert("El correo electrónico no coincide con el registrado. Por favor, use el correo con el que inició sesión.");
        return;
    }

    const CartaData = {
        nombre: nombre,
        email: email,
        ciudad: ciudad,
        pais: pais,
        carta: carta
    };

    const cartas = JSON.parse(localStorage.getItem('cartas')) || [];
    cartas.push(CartaData);
    localStorage.setItem('cartas', JSON.stringify(cartas));
    alert("Carta enviada correctamente.");
}

//Juego_1
let score = 0;
let timeLeft = 90;
let gameInterval;
let timeInterval;

const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

function startGame() {
    moveCircle();
    gameInterval = setInterval(moveCircle, 1000);
    timeInterval = setInterval(updateTimer, 1000);
}

function moveCircle() {
    const gameArea = document.getElementById('gameArea');
    const maxWidth = gameArea.clientWidth - circle.clientWidth;
    const maxHeight = gameArea.clientHeight - circle.clientHeight;
    const boton_juego_1 = document.getElementById('boton_juego_1');

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    circle.style.left = randomX + 'px';
    circle.style.top = randomY + 'px';
}

function updateTimer() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        alert(`Juego terminado! Tu puntuación final es: ${score}`);
        resetGame();
    }
}

circle.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

function resetGame() {
    clearInterval(gameInterval);
    clearInterval(timeInterval);
    score = 0;
    timeLeft = 90;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    circle.style.left = '0px';
    circle.style.top = '0px';
}

boton_juego_1.addEventListener('click', function () {
    resetGame();
    startGame();
});


//Juego_2
const cardsArray = ["./images/memory_1.jpeg", "./images/memory_1.jpeg",
    "./images/memory_2.jpeg", "./images/memory_2.jpeg",
    "./images/memory_3.jpeg", "./images/memory_3.jpeg",
    "./images/memory_4.jpeg", "./images/memory_4.jpeg",
    "./images/memory_5.jpeg", "./images/memory_5.jpeg",
    "./images/memory_6.jpeg", "./images/memory_6.jpeg",
    "./images/memory_7.jpeg", "./images/memory_7.jpeg",
    "./images/memory_8.jpeg", "./images/memory_8.jpeg"
];

let flippedCards = [];
let moves = 0;

const board = document.getElementById("game-board");
const movesDisplay = document.getElementById("moves");

function startGame_2() {
    const shuffledCards = shuffle(cardsArray);
    shuffledCards.forEach(imagePath => createCard(imagePath));
}

function createCard(imagePath) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = imagePath;

    const img = document.createElement("img");
    img.src = imagePath;
    card.appendChild(img);

    card.addEventListener("click", flipCard);
    board.appendChild(card);
}

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flip")) {
        this.classList.add("flip");
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.innerText = moves;
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.image === card2.dataset.image) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.classList.remove("flip");
            card2.classList.remove("flip");
            flippedCards = [];
        }, 1000);
    }
}

function resetGame_2() {
    resetGame();
    board.innerHTML = "";
    flippedCards = [];
    moves = 0;
    movesDisplay.innerText = moves;
    startGame_2();
}

document.getElementById("boton_juego_2").addEventListener("click", resetGame_2);
startGame_2();

/* Videollamada */
document.addEventListener("DOMContentLoaded", () => {
    const iniciarBtn = document.getElementById("iniciarBtn");
    const popupVideollamada = document.getElementById("popupVideollamada");
    const videoLocal = document.getElementById("videoLocal");
    const colgarBtn = document.getElementById("colgarBtn");
    iniciarBtn.addEventListener("click", () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => {
                popupVideollamada.style.display = "flex";
                videoLocal.srcObject = stream;
            })
            .catch(error => {
                console.error("Error al acceder a la cámara: ", error);
                alert("No se pudo acceder a la cámara. Verifica los permisos.");
            });
    });
    colgarBtn.addEventListener("click", () => {
        const tracks = videoLocal.srcObject?.getTracks();
        if (tracks) {
            tracks.forEach(track => track.stop());
        }
        popupVideollamada.style.display = "none";
        alert("Llamada finalizada.");
    });
});