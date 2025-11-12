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
});