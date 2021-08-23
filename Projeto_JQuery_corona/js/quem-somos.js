// botão scroll

$(function(){
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
})

// dark mode

$(function() {
    $("#btn-dark-mode").click(function() {
        $(".boxqs").toggleClass("dark-mode-dark");
        $(".desenvolvimento").toggleClass("dark-mode-darkest");
        $(".card-dev, .dev, .dev a").toggleClass("dark-mode-dark");
    })
})

// quem somos - Utilizamos hide, show, mouseover, mouseout

$(document).ready(function () {
    $("span").hide();

    $("#alessandra").mouseover(function () {
      $("#dev1").show();
    });
    $("#alessandra").mouseout(function () {
      $("#dev1").hide();
    });

    $("#amanda").mouseover(function () {
      $("#dev2").show();
    });
    $("#amanda").mouseout(function () {
      $("#dev2").hide();
    });

    $("#diana").mouseover(function () {
      $("#dev3").show();
    });
    $("#diana").mouseout(function () {
      $("#dev3").hide();
    });

    $("#joao").mouseover(function () {
      $("#dev4").show();
    });
    $("#joao").mouseout(function () {
      $("#dev4").hide();
    });

    $("#marcia").mouseover(function () {
      $("#dev5").show();
    });
    $("#marcia").mouseout(function () {
      $("#dev5").hide();
    });

    $("#rafael").mouseover(function () {
      $("#dev6").show();
    });
    $("#rafael").mouseout(function () {
      $("#dev6").hide();
    });

  });