const imagens = [
  "../assets/imgs/galeria1.jpg",
  "../assets/imgs/galeria2.jpg",
  "../assets/imgs/galeria3.jpg",
];

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let fotoAtual = 0;

function showSlide(index) {
  const slide = document.getElementById("galeria-imagem");
  slide.src = imagens[index];
  fotoAtual = index;
}

function nextSlide() {
  showSlide((fotoAtual + 1) % imagens.length);
}

function prevSlide() {
  showSlide((fotoAtual - 1 + imagens.length) % imagens.length);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(fotoAtual);
});

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);
