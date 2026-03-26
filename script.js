document.addEventListener("DOMContentLoaded", function() {
    
    //buscamos solo las imágenes que tienen la clase "foto-indice"
    const fotosIndice = document.querySelectorAll(".foto-indice");

    fotosIndice.forEach(function(img) {
        img.addEventListener("click", function() {
           
           const respuesta = confirm("Esta receta tiene buena pinta, ¿te animas a cocinarla?");

           if (respuesta === true) {
                // Si pulsa "Aceptar" (Sí), buscamos el enlace que hay justo debajo de la foto
                const enlace = img.parentElement.querySelector("a").href;
                window.location.href = enlace; // Nos lleva a la receta
            } else {
                // Si pulsa "Cancelar" (No), no hace nada
                console.log("El usuario ha decidido quedarse en el índice.");
            }
        });
    });
});