const menuToggle = document.getElementById('menuToggle'); // botão hamburguer
const navMenu = document.getElementById('navMenu');       // menu nav

function toggleMenu() {
  const isActive = navMenu.classList.toggle('active'); // alterna menu aberto/fechado

  // Atualiza aria-expanded para acessibilidade
  menuToggle.setAttribute('aria-expanded', isActive);
  menuToggle.classList.toggle('open', isActive); // muda visual do botão (linhas rotacionam)
}

// Abre ou fecha o menu ao clicar no botão hamburguer
menuToggle.addEventListener('click', toggleMenu);

// Ativa menu pelo teclado (Enter ou Espaço) para acessibilidade
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

