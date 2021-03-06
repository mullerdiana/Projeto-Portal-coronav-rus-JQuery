// porcentagem inicial da progressbar

// ----- FOCUS ----- //
$("input").focus(function () {
  $(this).parents(".form-group").addClass("focused");
});

// ----- BLUR ----- //
$("input").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".form-group").removeClass("focused");
  } else {
    $(this).addClass("filled");
  }
});

// input cpf
$("#cpf").blur(function () {
  if (validarCPF()) {
    $(this).addClass("filled");
    $(this).removeClass("wrong");
    $( "#progressbar" ).progressbar( "option", "value", 27 );
  } else {
    $(this).removeClass("filled");
    $(this).addClass("wrong");
  }
});

$("#nome").blur(function () {
  if (validaNome()) {
    $(this).addClass("filled");
    $(this).removeClass("wrong");
    $( "#progressbar" ).progressbar( "option", "value", 9 );
  }
  else {
    $(this).removeClass("filled");
    $(this).addClass("wrong");
  }
});

$("#idade").blur(function () {
  if (validarIdade()) {
    $(this).addClass("filled");
    $(this).removeClass("wrong");
    $( "#progressbar" ).progressbar( "option", "value", 18 );
  }
  else {
    $(this).removeClass("filled");
    $(this).addClass("wrong");
  }
})

$("#sus").blur(function () {
  if (validarCartaoSUS()) {
    $(this).addClass("filled");
    $(this).removeClass("wrong");
    $( "#progressbar" ).progressbar( "option", "value", 63 );
  }
  else {
    $(this).removeClass("filled");
    $(this).addClass("wrong");
  }
})

$("#altura").blur(function () {
  if (validarAltura()) {
    $(this).addClass("filled");
    $(this).removeClass("wrong");
    $( "#progressbar" ).progressbar( "option", "value", 90 );
  }
  else {
    $(this).removeClass("filled");
    $(this).addClass("wrong");
  }
})

$("#peso").blur(function () {
  if (validarPeso()) {
    $(this).addClass("filled");
    $(this).removeClass("wrong");
    $( "#progressbar" ).progressbar( "option", "value", 100 );
  }
  else {
    $(this).removeClass("filled");
    $(this).addClass("wrong");
  }
})

// autocomplete - jquery ui

$(function () {
  var availableTags = [
    "Aut??nomo",
    "Motorista",
    "M??dico",
    "Professor",
    "Servidor p??blico",
    "Trabalhador rural",
  ];
  $("#profissao").autocomplete({
    source: availableTags,
  });
});

function validarCPF() {
  let cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  let cpfUsuario = document.getElementById("cpf").value;

  if (cpfUsuario.match(cpfValido)) {
    return true;
  } else {
    return false;
  }
}

function validaNome() {
  let letras = /^[a-zA-Z\s]*$/;
  let nome = document.getElementById("nome").value;

  if (nome.match(letras) && nome != "") {
    return true;
  } else {
    return false;
  }
}

function validarIdade() {
  let idadeUsuario = $("#idade").val();

  if (idadeUsuario > 0 && idadeUsuario <= 130 && idadeUsuario != "") {
    return true;
  }
  else {
    return false;
  }
}

function validarAltura() {
  let alturaUsuario = $("#altura").val();

  if (!isNaN(alturaUsuario) && alturaUsuario != "") {
    return true;
  }
  else {
    return false;
  }
}

function validarPeso() {
  let pesoUsuario = $("#peso").val();

  if (!isNaN(pesoUsuario) && pesoUsuario != "") {
    return true;
  }
  else {
    return false;
  }
}

function validarCartaoSUS() {
  let cartaoSus = $("#sus").val();

  if (!isNaN(cartaoSus) && cartaoSus != "") {
    return true;
  }
  else {
    return false;
  }
}

// sexo feminino - gestante
$("#sexo").change(function() {
  var value = $(this).find("option:selected").attr("value");

  if (value == "fem") {
    $("#hidden-gestante").css({"display": "block"});
  }
  else {
    $("#hidden-gestante").css({"display": "none"});
  }
})

// profiss??o - outros
$("#profissao").change(function() {
  var value = $(this).find("option:selected").attr("value");

  if (value == "outros") {
    $("#hidden-outros").css({"display": "block"});
  }
  else {
    $("#hidden-outros").css({"display": "none"});
  }
})

// se usu??rio tiver acima de 75 anos OU for da ??rea de sa??de: fase1
// se usu??rio tiver acima de 60 anos: fase2
// se usu??rio possuir alguma comorbidade: fase3
// se usu??rio for professor ou profissional das for??as de seguran??a ou for servidor p??blico: fase4
// demais usu??rios: fase5

let idadeUsuario;

function salvaIdade() {
  idadeUsuario = document.getElementById("idade").value;
}

let profissaoUsuario;
let comorbidadeUsuario;

$("#profissao").focusout(function() {
  profissaoUsuario = $(this).find("option:selected").attr("value");
  $( "#progressbar" ).progressbar( "option", "value", 36 );
})

$("#etnia").focusout(function() {
  $( "#progressbar" ).progressbar( "option", "value", 45 );
})

$("#sexo").focusout(function() {
  $( "#progressbar" ).progressbar( "option", "value", 54 );
})

$(".checkboxes-group").focusout(function() {
  $( "#progressbar" ).progressbar( "option", "value", 72 );
})

$("#comorbidade").focusout(function() {
  comorbidadeUsuario = $(this).find("option:selected").attr("value");
  $( "#progressbar" ).progressbar( "option", "value", 81 );
})

function displayInfoFaseVacinacao() {
  if (idadeUsuario >= 75 || profissaoUsuario == "saude") {
    $("#fase-vac").text(`Voc?? est?? na Fase 1 de Vacina????o`);
  }
  else if (idadeUsuario > 60) {
    $("#fase-vac").text(`Voc?? est?? na Fase 2 de Vacina????o`);
  }
  else if (comorbidadeUsuario != "ni") {
    $("#fase-vac").text(`Voc?? est?? na Fase 3 de Vacina????o`);
  }
  else if (profissaoUsuario == "professor" || profissaoUsuario == "seguranca" || profissaoUsuario == "serv-pub") {
    $("#fase-vac").text(`Voc?? est?? na Fase 4 de Vacina????o`);
  }
  else {
    $("#fase-vac").text(`Voc?? est?? na Fase 5 de Vacina????o`);
  }
}

// calcular imc
// ----- CLICK ----- //
$("#calc-imc-btn").click(function() {
  let alturaUsuario = $("#altura").val();
  let pesoUsuario = $("#peso").val();
  let imc = pesoUsuario / (alturaUsuario * alturaUsuario);
  imc = imc.toFixed(2); // s?? mostra 2 casas decimais, ex: 27.10
  let pronto;

  if (imc < 18.5) {
    $("#result-imc").text(`Seu IMC ?? de ${imc} e voc?? est?? abaixo do peso.`);
    pronto = true;
  }
  else if (imc <= 25) {
    $("#result-imc").text(`Seu IMC ?? de ${imc} e voc?? est?? no peso ideal.`);
    pronto = true;
  }
  else if (imc <= 30) {
    $("#result-imc").text(`Seu IMC ?? de ${imc} e voc?? est?? acima do peso.`);
    pronto = true;
  }
  else if (imc <= 35) {
    $("#result-imc").text(`Seu IMC ?? de ${imc} e voc?? est?? com obesidade grau I.`);
    pronto = true;
  }
  else if (imc <= 40) {
    $("#result-imc").text(`Seu IMC ?? de ${imc} e voc?? est?? com obesidade grau II.`);
    pronto = true;
  }
  else if (imc > 40) {
    $("#result-imc").text(`Seu IMC ?? de ${imc} e voc?? est?? com obesidade m??rbida.`);
    pronto = true;
  }

  if (pronto == true) {
    $( "#progressbar" ).progressbar( "option", "value", 100 );
    displayInfoFaseVacinacao();
    // SLIDEDOWN//
    $("#hidden-submit-div").slideDown(1000);
  }
})

// progressbar

$( function() {
  $( "#progressbar" ).progressbar({
    value: 0,
    min: 0,
    max: 100
  });
} );

// bot??o scroll-top


// ----- SCROLL ----- //
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $("#scroll-top-btn").css({"display": "block"});
  }
  else {
    $("#scroll-top-btn").css({"display": "none"});
  }
})

$("#scroll-top-btn").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
})

// modo noturno

$(function() {
  $("#btn-dark-mode").click(function() {
    $(".main-formulario").toggleClass("dark-mode-dark");
    $(".form-wrapper, .form-group, .form-input, .form-label, .checkbox-title, #texto-progress-div p, #hidden-submit-div p").toggleClass("dark-mode-darkest");
    $(".form-wrapper").toggleClass("dark-mode-boxshadow");
  })
})