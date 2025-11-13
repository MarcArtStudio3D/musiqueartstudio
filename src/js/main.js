document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  menuBtn?.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Cerrar menú al hacer click en un enlace
  const mobileLinks = mobileNav?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Slideshow de imágenes en el Hero
  const slides = [
    document.getElementById('slide1'),
    document.getElementById('slide2'),
    document.getElementById('slide3')
  ];

  if (slides[0]) {
    let currentSlide = 0;

    function nextSlide() {
      // Ocultar slide actual
      slides[currentSlide].classList.remove('opacity-100');
      slides[currentSlide].classList.add('opacity-0');

      // Cambiar al siguiente slide
      currentSlide = (currentSlide + 1) % slides.length;

      // Mostrar siguiente slide
      slides[currentSlide].classList.remove('opacity-0');
      slides[currentSlide].classList.add('opacity-100');
    }

    // Cambiar de imagen cada 3 segundos
    setInterval(nextSlide, 3000);
  }

  // Manejo del formulario de contacto
  const contactForm = document.getElementById('contactForm');
  
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const message = document.getElementById('message').value;
    
    // Crear el cuerpo del correo en francés con saltos de línea
    const emailBody = `Nom du client: ${fullName}

Email: ${emailAddress}

Message:
${message}`;
    
    // Crear el mailto link
    const mailtoLink = `mailto:ona.sierra@artstudio3d.fr?subject=${encodeURIComponent('Message de la part du site web')}&body=${encodeURIComponent(emailBody)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
  });
});