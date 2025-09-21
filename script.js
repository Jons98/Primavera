/* onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 500);
}; */
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.min.js";
document.body.appendChild(sweetAlertScript);

sweetAlertScript.onload = () => {
    // Función para mostrar los mensajes de amor secuencialmente
    function showLoveMessages() {
        Swal.fire({
            title: '❤️',
            text: 'Ro, no ovides que sos una persona especial.',
            icon: 'flowers.png',
            showConfirmButton: true,
            confirmButtonText: 'Siguiente'
        }).then(() => {
            Swal.fire({
                title: '❤️',
                text: 'Gracias por cada momento divertido.',
                icon: 'flowers.png',
                showConfirmButton: true,
                confirmButtonText: 'Siguiente'
            }).then(() => {
                Swal.fire({
                    title: '❤️',
                    text: 'Te queremos con todo nuestro corazón ❤️ No dejes que nadie te apague tu sonrisa.',
                    icon: 'flowers.png',
                    showConfirmButton: true,
                    confirmButtonText: 'Empezar'
                }).then(() => {
                    // Después de mostrar los mensajes, iniciamos la animación de las flores
                    startAnimation();
                });
            });
        });
    }

    // Función para iniciar la animación de las flores
    function startAnimation() {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 500);
    }

    // Mostrar los mensajes de amor antes de iniciar la animación
    showLoveMessages();
};
