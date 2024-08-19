document.getElementById('button-container').addEventListener('click', function() {
    alert('Hola! Soy el div');
});
document.getElementById('saludarButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Previene que el click del botón se propague al div
    saludar();
});
function saludar() {
    alert('Hola desde el botón!');
}