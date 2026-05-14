const botoesModos = document.querySelectorAll(".modos button");
const botaoFoto = document.getElementById("btn-foto");
const imgBg = document.getElementById("img-bg");
const linksZoom = document.querySelectorAll(".zooms a");
const botaoIa = document.getElementById("btn-ia");
const botaoFlash = document.getElementById("btn-flash");

function selecionarModo(botao, animacao = "smooth") {
    botoesModos.forEach((e) => {
        e.classList.remove("ativo");
        e.style.color = "white";
        e.style.transform = "scale(1)";
    });

    botao.classList.add("ativo");
    botao.style.color = "var(--cor-amarela)";
    botao.style.transform = "scale(1.2)";

    botao.scrollIntoView({
        behavior: animacao,
        inline: "center",
        block: "nearest",
    });

    localStorage.setItem("ultimoModo", botao.id);

    if (botao.id === "video-btn") {
        botaoFoto.style.outline = "2px solid red";
        botaoFoto.style.outlineOffset = "0.2rem";
    } else {
        botaoFoto.style.outline = "none";
    }
}

botoesModos.forEach((botao) => {
    botao.addEventListener("click", () => {
        selecionarModo(botao);
        if (botao.id === "mais-btn") {
            localStorage.setItem("ultimoModo", "foto-btn");
            window.location.href = "index2.html";
        }
    });
});

botaoFlash.addEventListener("click", () => {
    if (botaoFlash.style.color === "var(--cor-amarela)") {
        botaoFlash.style.color = "var(--cor-cinza)";
    } else {
        botaoFlash.style.color = "var(--cor-amarela)";
    }
});

botaoIa.addEventListener("click", () => {
    const iaPrompt = prompt("Digite um prompt para a IA MindCore gerar na sua foto:");
    if (iaPrompt) {
        alert("Comando recebido! Agora você pode tirar sua foto");
    }
});

botaoFoto.addEventListener("click", () => {
    alert("Vídeo ou foto salva!");
});

function aplicarZoom(textoZoom, animacao = true) {
    let escala;

    if (textoZoom === "0.6") {
        escala = "1";
    } else if (textoZoom === "1x") {
        escala = "1.4";
    } else if (textoZoom === "2") {
        escala = "2.0";
    }

    if (imgBg && escala) {
        imgBg.style.transition = animacao ? "transform 0.4s ease-in-out" : "none";
        imgBg.style.transform = `scale(${escala})`;
        localStorage.setItem("ultimoZoom", textoZoom);
    }

    linksZoom.forEach((l) => {
        l.classList.remove("zoom-ativo");
        l.style.color = "white";
        if (l.innerText.trim() === textoZoom.trim()) {
            l.classList.add("zoom-ativo");
            l.style.color = "var(--cor-amarela)";
        }
    });
}

linksZoom.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        aplicarZoom(link.innerText.trim(), true);
    });
});

window.addEventListener("load", () => {
    const ultimoId = localStorage.getItem("ultimoModo");
    const botaoParaAtivar = document.getElementById(ultimoId) || document.getElementById("foto-btn");
    if (botaoParaAtivar) {
        selecionarModo(botaoParaAtivar, "auto");
    }

    const zoomSalvo = localStorage.getItem("ultimoZoom") || "1x";
    aplicarZoom(zoomSalvo, false); 
});

