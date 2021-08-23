function updateClock () {
    var agora = new Date();
    var dname = agora.getDay(),
        mo = agora.getMonth(),
        dnum = agora.getDate(),
        year = agora.getFullYear(),
        hour = agora.getHours(),
        min = agora.getMinutes(),
        sec = agora.getSeconds(),
        pe = "AM";

        Number.prototype.pad = function(digits) {
            for (var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        if (hour == 0) {
            hour = 12;
        }

        if (hour > 12) {
            hour = hour - 12;
            pe = "PM"
        }



        var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        var semana = ["Domingo", "Segunda", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]
        var ids = ["dayname","month","daynum", "year", "hour", "minutes", "seconds", "period"]
        var valor = [semana[dname], months[mo], dnum.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), pe];
        for (i = 0; i < ids.length; i++) 
            document.getElementById(ids[i]).firstChild.nodeValue =valor[i];
    
}

function initClock () {
    updateClock ()
    window.setInterval("updateClock()", 1)
}