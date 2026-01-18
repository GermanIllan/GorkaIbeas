document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos el contenedor de nosotros
    const seccionNosotros = document.querySelector('.content-nosotros');

    // Si el elemento existe en la página, activamos la animación
    if (seccionNosotros) {
        setTimeout(() => {
            seccionNosotros.classList.add('aparecer');
        }, 500); // Pequeño retraso de 300ms para que se aprecie mejor al entrar
    }
});