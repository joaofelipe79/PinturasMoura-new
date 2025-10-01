<!-- Coloque este código antes do fechamento do </body> -->
<script>
// ====== Carrossel automático ======
let index = 0;
function showSlides() {
  let slides = document.querySelectorAll(".catalogo img");
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
  index = (index + 1) % slides.length;
}
setInterval(showSlides, 4000); // Troca a cada 4s
showSlides();

// ====== Anúncio pop-up ======
window.onload = function () {
  setTimeout(() => {
    let anuncio = document.createElement("div");
    anuncio.innerHTML = `
      <div style="
        position: fixed; 
        top: 50%; left: 50%; 
        transform: translate(-50%, -50%); 
        background: #0d0d0d; 
        color: gold; 
        padding: 20px; 
        border: 2px solid gold; 
        border-radius: 15px; 
        z-index: 9999;
        text-align: center;">
        <h2>Promoção Especial!</h2>
        <p>Peça já seu orçamento exclusivo.</p>
        <button style="background: gold; color: black; padding: 10px; border: none; border-radius: 10px; cursor: pointer;">
          Fechar
        </button>
      </div>
    `;
    document.body.appendChild(anuncio);
    anuncio.querySelector("button").onclick = () => anuncio.remove();
  }, 3000); // Aparece 3s após abrir o site
};
</script>