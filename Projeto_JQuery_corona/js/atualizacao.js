$(document).ready(function () {
    //Botao scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#scroll-top-btn").css({ "display": "block" });
        }
        else {
            $("#scroll-top-btn").css({ "display": "none" });
        }
    })

    $("#scroll-top-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })

});

/* Mostrar Ocupação */

const leitos_uti_adulto = 702;
const leitos_enfermaria = 30;
const leitos_total = (leitos_uti_adulto + leitos_enfermaria);
let enfermaria = 0;
let uti = 0;
    $(document).ready(function(){
    // inserindo cor de background quando focus
    $("#input_uti, #input_enfermagem").focus(function() {
        $(this).css({backgroundColor:"#5BC0BE"});
    });
    // retornando cor de background para inherit quando perde o foco
    $("#input_uti, #input_enfermagem").blur(function(){
        $(this).css({backgroundColor:"inherit"});
    }); 
    $("#input_uti").blur(function(){
        uti = parseInt($("#input_uti").val());
        console.log(uti);
    $("#mostra_ocupacao_uti").text(`A ocupação de leitos UTI adulto é: ${uti}.`);
    }); 
    $("#input_enfermaria").blur(function(){
        enfermaria = parseInt($("#input_enfermaria").val());
        console.log(enfermaria);
        $("#mostra_ocupacao_enfermaria").text(`A ocupação de leitos de enfermaria é: ${enfermaria}.`);
    }); 

    // ao clicar botao enviar destaca a respectiva fase e deixa as demais opacas
    $("#btn_enviar").click(function(){
        const ocupacao_total = uti + enfermaria;
        let taxa_ocupacao_leitos = ocupacao_total/leitos_total;
        console.log(taxa_ocupacao_leitos);
        $("#informa_ocupacao").text("A ocupação do sistema de saúde é de: " + Math.round(taxa_ocupacao_leitos*100) + "%.");
        // fase 1
        if(taxa_ocupacao_leitos > 0.8){
            $(".fase2, .fase3, .fase4, .fase5").fadeTo("slow", 0.33);
            $(".fase1").css({"background-color": "#ff6961", "font-size": "16px", "padding": "5px", "text-align": "center"});
        // fase 2
        } else if (taxa_ocupacao_leitos > 0.7 && taxa_ocupacao_leitos <= 0.8){
            $(".fase1, .fase3, .fase4, .fase5").fadeTo("slow", 0.33);
            $(".fase2").css({"background-color": "rgb(233, 148, 78)", "font-size": "16px", "padding": "5px", "text-align": "center"});
        // fase 3
        } else if (taxa_ocupacao_leitos > 0.6 && taxa_ocupacao_leitos <= 0.7){
            $(".fase1, .fase2, .fase4, .fase5").fadeTo("slow", 0.33);
            $(".fase3").css({"background-color": "rgb(223, 223, 114)", "font-size": "16px", "padding": "5px", "text-align": "center"});
        // fase 4
        } else {
            $(".fase1, .fase2, .fase3, .fase5").fadeTo("slow", 0.33);
            $(".fase4").css({"background-color": "rgb(92, 145, 92)", "font-size": "16px", "padding": "5px", "text-align": "center"});
        }
    }); 
});    

// efeito dark mode
$(function() {
    $("#btn-dark-mode").click(function() {
        $(".ocupacao").toggleClass("dark-mode-darkest");
        $(".inputs input").toggleClass("dark-mode-white-font");
        $(".ocupacao_uti").toggleClass("dark-mode-dark dark-mode-boxshadow");
        $(".casos").toggleClass("dark-mode-dark dark-mode-boxshadow");
        $("tr").children(".tabela-fundo-branco").toggleClass("dark-mode-dark");
        $(".leitoss").toggleClass("dark-mode-dark");
        $(".canto_inferior_esquerdo").toggleClass("dark-mode-dark");
        $(".tabela-dark").toggleClass("dark-mode-dark");
        $(".fases_alerta").toggleClass("dark-mode-green");
        $(".frase_alerta").toggleClass("dark-mode-white-font");
        $(".fase_setores").toggleClass("dark-mode-green");
        $(".section_grafico").toggleClass("dark-mode-dark");
        // $(".main-atualizacao").toggleClass("dark-mode-dark");
    })
})