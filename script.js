const modoBtn = document.getElementById('modo-btn');
const body = document.body;

modoBtn.addEventListener('click', () => {
  body.classList.toggle('dark-bg-gray');
  if (body.classList.contains('dark-bg-gray')) {
    modoBtn.textContent = 'Modo Claro';
  } else {
    modoBtn.textContent = 'Modo Oscuro';
  }
});
