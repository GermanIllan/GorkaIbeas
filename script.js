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

    // 3. Función para cambiar el degradado dinámicamente
    // Agregaremos un botón pequeño en el footer para demostrarlo
    const footer = document.querySelector('footer');
    const changeBgBtn = document.createElement('button');
    changeBgBtn.innerText = "Cambiar Color de Fondo";
    changeBgBtn.style.marginTop = "10px";
    changeBgBtn.style.padding = "5px 10px";
    changeBgBtn.style.cursor = "pointer";
    changeBgBtn.style.fontFamily = "inherit";

    footer.appendChild(document.createElement('br'));
    footer.appendChild(changeBgBtn);

    changeBgBtn.addEventListener('click', () => {
        const colors = [
            'linear-gradient(135deg, #000000, #d32f2f)', // Negro a Rojo
            'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)', // Azul a Amarillo
            'linear-gradient(135deg, #1d1d1d, #434343)', // Gris oscuro
            'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)'  // Instagram style
        ];
        
        const randomGradient = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomGradient;
        document.body.style.backgroundAttachment = "fixed";
    });
});
