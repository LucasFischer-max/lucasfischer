var aberto;
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

if(isIOS) {
    window.alert("Você tem 2 segundos para sair do site")
    window.alert("Vírus instalando...")
    window.alert("if (mac) { destruir(); }")
    document.body.style.display = "none"
}

function openNav() {
    if (!aberto) {
        document.getElementById("menu").style.top = "-70px"
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("conteudo").style.marginLeft = "250px";
        document.getElementById("conteudo").style.opacity = "0.5";
        setTimeout(function () {
            document.getElementById("itens").style.opacity = "1"
            document.getElementById("itens").style.marginLeft = "0"
        }, 250)
        aberto = true;
    }
}

function closeNav() {
    if (aberto) {
        document.getElementById("menu").style.top = "0px"
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("conteudo").style.marginLeft = "0";
        document.getElementById("conteudo").style.opacity = "1";
        document.getElementById("itens").style.opacity = "0"
        document.getElementById("itens").style.marginLeft = "-100px"
        aberto = false;
    }
}