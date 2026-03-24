document.addEventListener("DOMContentLoaded", function() {
    
    // Ahora buscamos solo las imágenes que tienen la clase "foto-indice"
    const fotosIndice = document.querySelectorAll(".foto-indice");

    fotosIndice.forEach(function(img) {
        img.addEventListener("click", function() {
            alert("¡Esta receta tiene tiene muy buena pinta! ¿Te animas a cocinarla?");
        });
    });
});