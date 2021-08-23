// function aumenta_fonte() {
//     var elemento = document.getElementById("body");
//     var tamanho_fonte = getComputedStyle(elemento).fontSize;
//     tamanho_atual = parseFloat(tamanho_fonte);
//     elemento.style.fontSize = (tamanho_atual + 1) + 'px';
//     $("input").css({"line-heigth": "1.5rem"})
//   }
  
//   function diminui_fonte() {
//     var elemento = document.getElementById("body");
//     var tamanho_fonte = getComputedStyle(elemento).fontSize;
//     tamanho_atual = parseFloat(tamanho_fonte);
//     elemento.style.fontSize = (tamanho_atual - 1) + 'px';
//   }

function acessibilidadeAumenta() {
  var elemento = document.querySelector(':root')
  num = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
  num = parseInt(num);
  num++;
  if (num <=20) {
      elemento.style.fontSize = num+'px';
  }
}

function acessibilidadeDiminui() {
  var elemento = document.querySelector(':root')
  num = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
  num = parseInt(num);
  num--;
  if (num >= 16) {
      elemento.style.fontSize = num+'px';
  }
}

/// Oberservar eventos para acessibilidade
var btnAcessibilidadeAumenta = document.getElementById('btn-acessibilidade-aumenta');
btnAcessibilidadeAumenta.addEventListener('click', acessibilidadeAumenta);
var btnAcessibilidadeDiminui = document.getElementById('btn-acessibilidade-diminui');
btnAcessibilidadeDiminui.addEventListener('click', acessibilidadeDiminui);