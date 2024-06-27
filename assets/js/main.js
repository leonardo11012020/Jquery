
$(document).ready(function () {
    // Asignación de eventos y funciones
    var texto = document.getElementById('cambiar');
    texto.addEventListener('click', cambiar);

    var texto2 = document.getElementById('comprar');
    texto2.addEventListener('click', comprar);

    var texto3 = document.getElementById('cambiar2');
    texto3.addEventListener('click', cambiar2);

    var texto4 = document.getElementById("comprar2");
    texto4.addEventListener("click", comprar2);
    function cambiar() {
        $("#guitar1").attr('src', './assets/img/guitarra-clasica.jpg');
    }
    function comprar() {
        $('#guitar1').replaceWith("<h1>COMPRADO</h1>");
    }
    function cambiar2() {
        $("#guitar2").attr('src', './assets/img/GUITARRA-ELECTRICA 2.jpg');
    }

    function comprar2() {
        $('#guitar2').replaceWith("<h1>COMPRADO</h1>");
    }
});
