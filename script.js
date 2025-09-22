"use strict"

function showTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Oculta todos los elementos con la clase "tab-content"
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remueve la clase "active" de todos los botones "tablinks"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Muestra el contenido de la pestaña actual
    document.getElementById(tabName).style.display = "block";

    // Añade la clase "active" al botón que fue clicado
    evt.currentTarget.className += " active";
}

// Opcional: Para mostrar la primera pestaña al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.tablinks.active').click();
});