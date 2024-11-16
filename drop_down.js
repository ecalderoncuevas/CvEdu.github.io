// Obtener todos los encabezados de los acordeones
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Agregar un evento de clic a cada encabezado
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Obtener el contenedor del acordeón actual
        const currentItem = header.closest('.accordion-item');

        // Alternar la clase 'open' para abrir o cerrar este acordeón
        currentItem.classList.toggle('open');
    });
});
