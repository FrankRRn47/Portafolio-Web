// ROTADOR AUTOMÁTICO DE REFLEXIONES
let currentIndex = 0;
const items = document.querySelectorAll('.reflexion-item');

function rotateReflexion() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add('active');
}

setInterval(rotateReflexion, 5000);
