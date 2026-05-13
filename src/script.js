const botoesModos = document.querySelectorAll(".modos button");
const botaoFoto = document.getElementById("btn-foto");
const hero = document.getElementById("hero");
const linksZoom = document.querySelectorAll(".zooms a");
const botaoIa = document.getElementById("btn-ia");
const botaoFlash = document.getElementById("btn-flash");

botaoFlash.addEventListener("click", () => {
  if (botaoFlash.style.color === "var(--cor-amarela)") {
    botaoFlash.style.color = "var(--cor-cinza)";
  } else {
    botaoFlash.style.color = "var(--cor-amarela)";
  }
});

botaoIa.addEventListener("click", () => {
  if (botaoIa.style.color === "var(--cor-amarela)") {
    botaoIa.style.color = "var(--cor-cinza)";
  } else {
    botaoIa.style.color = "var(--cor-amarela)";
  }
});

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
  botao.addEventListener("click", () => selecionarModo(botao));
});

botaoFoto.addEventListener("click", () => {
  alert("Vídeo ou foto salva!");
});

window.addEventListener("load", () => {
  const ultimoId = localStorage.getItem("ultimoModo");

  const botaoParaAtivar =
    document.getElementById(ultimoId) || document.getElementById("btn-foto");

  if (botaoParaAtivar) {
    selecionarModo(botaoParaAtivar, "auto");
  }
});
