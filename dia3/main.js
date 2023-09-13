// let typed = new Typed('.auto-input', {
//     strings: ['Front-end Developer!', 'Freelancer!', 'UI Designer!'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 2000,
//     loop: true,
// })

// let mobileMenu = document.querySelector('.mobile-menu');

// burguerMenu.addEventlistener('click', toggleMobileMenu);

// function toggleMobileMenu() {
//     if (!isMobileMenuClosed) {
//         mobileMenu.classList.add('inactive')
//     }
// }


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";


    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener mas de 4 caracteres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validarFormulario()) {
        form.submit();
    } else {
        e.preventDefault();
    }
});


