document.addEventListener('DOMContentLoaded', () => {
    console.log("Web cargada correctamente");

    // 1. Resaltar el enlace activo en la navegación
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === "" && link.getAttribute('href') === "index.html")) {
            link.style.borderBottom = "2px solid #ffffff";
            link.style.color = "#ff9a9e";
        }
    });

    // 2. Efecto de aparición suave para el contenido
    const contentBox = document.querySelector('.content-box');
    if (contentBox) {
        contentBox.style.opacity = "0";
        contentBox.style.transition = "opacity 1.5s ease-in-out";
        setTimeout(() => {
            contentBox.style.opacity = "1";
        }, 100);
    }

});
