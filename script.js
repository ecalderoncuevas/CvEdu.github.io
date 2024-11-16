// Código para el botón "Haz clic aquí"
document.getElementById('miBoton').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    
    // Alterna la visibilidad del mensaje
    if (mensaje.style.display === 'none' || mensaje.style.display === '') {
        mensaje.style.display = 'flex'; // Muestra el mensaje
    } else {
        mensaje.style.display = 'none'; // Oculta el mensaje
    }
});
