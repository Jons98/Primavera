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
            text: 'Para las primeras flores de mi jardin.',
            
            showConfirmButton: true,
            confirmButtonText: 'Siguiente'
        }).then(() => {
            Swal.fire({
                title: '❤️',
                text: 'Feliz Primavera.',
    
                showConfirmButton: true,
                confirmButtonText: 'Siguiente'
            }).then(() => {
                Swal.fire({
                    title: '❤️',
                    text: 'Las amo con todo mi ❤️ Ambar, Sofia y Catalina.',
                    
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
