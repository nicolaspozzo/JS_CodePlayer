

// resaltar los botones la clase esta en el CSS
$(".boton").hover(function () {
    $(this).addClass("botonMarcado")

}, function () {
    $(this).removeClass("botonMarcado")
})

$(".boton").click(function () {
    $(this).toggleClass("activo")
    $(this).removeClass("botonMarcado")

    var panelId = $(this).attr("id") + "Panel"
    $("#" + panelId).toggleClass("oculto")
    var nroDePanlesActivos = 4 - $(".oculto").length
    $(".panel").widht(($(window).widht() / nroDePanlesActivos) - 10)
})


// $(".panel").height( $(window).height() - $("#barra").height() )

//  $(".panel").width($(window).width()/2-10)

function actualizarSalida() {

    $("iframe").contents().find("html").html("<html><head></head><style type='text/css'>" +
        $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val()) +
        "</body></html>"
        document.getElementById("outputPanel").
        contentWindow.eval($("#javascriptPanel").val())

}

actualizarSalida()

$("textarea").on('change keyup paste!', function () {
    actualizarSalida()

})







