// Inicialização do AOS (animações)
AOS.init({
    duration: 800,
    once: true, // Anima apenas uma vez
    // easing: 'ease-in-out', // Opcional: define a suavização da animação
});

// Manipulação da Navbar com scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});



// Botão "Voltar ao topo"
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  backToTopButton.classList.toggle('visible', window.scrollY > 300);
});

backToTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rolagem suave
  });
});



// Formulário de contato (apenas exemplo - precisa de backend)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Recupere os valores do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validação básica (adicione mais validações conforme necessário)
  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
    return;
  }


    // Simulação de envio (substitua por código real de envio)
  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Mensagem:', message);


  // Exibe mensagem de sucesso (temporária)
    alert("Mensagem enviada com sucesso! (Simulação)");


  // Limpa o formulário
  contactForm.reset();
});


// Previne erros se o elemento não existir
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


