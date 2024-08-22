// Código para mostrar/ocultar información adicional
document.querySelectorAll('.ver-mas').forEach(function(button) {
    button.addEventListener('click', function() {
        const info = this.nextElementSibling;
        info.style.display = (info.style.display === 'none' || info.style.display === '') ? 'block' : 'none';
    });
});

// Código para cambiar el color de fondo al hacer clic en el botón
document.getElementById('cambiar-color').addEventListener('click', function() {
    const colores = ['#f4f4f4', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0'];
    const colorActual = document.body.style.backgroundColor;
    const nuevoColor = colores[(colores.indexOf(colorActual) + 1) % colores.length];
    document.body.style.backgroundColor = nuevoColor;
});
