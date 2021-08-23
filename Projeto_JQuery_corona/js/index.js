

// ----- CLICK ----- //
$(function() {
    $("#btn-dark-mode").click(function() {
        $(".conteudo_vacinas").toggleClass("dark-mode-green");
        $(".protocolos, .medicamentos, .section-links").toggleClass("dark-mode-darkest");
        $(".sectionProtocolos, .sectionProtocolos p, .sectionProtocolos").toggleClass("dark-mode-darkest");
        $(".sectionMedicamentos").toggleClass("dark-mode-dark");
        $(".containerSlide").toggleClass("dark-mode-darkest");
        $(".paginaPrincipal").toggleClass("dark-mode-darkest");
    })
})