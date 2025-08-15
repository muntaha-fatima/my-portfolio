document.addEventListener('DOMContentLoaded', () => {
  // Project Slider
  const slider = document.getElementById('projectSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  const cardWidth = 300 + 24; // Card width + gap
  const totalCards = 10; // Sirf 10 cards tak chalane ke liye

  function updateSlider() {
    // calculate maxIndex dynamically
    const maxIndex = Math.max(0, totalCards - Math.floor(slider.parentElement.offsetWidth / cardWidth));

    // currentIndex ko 0 se maxIndex ke darmiyan hi rakhein
    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // initial load par slider ko sahi jagah par set karein
  updateSlider();

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);

  // Set skill progress
  document.querySelectorAll('.skill-progress').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
  });

  // Contact Form Validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    [name, email, message].forEach(input => {
      const errorMessage = input.nextElementSibling;
      if (!input.value.trim()) {
        errorMessage.classList.add('active');
        isValid = false;
      } else {
        errorMessage.classList.remove('active');
      }
    });

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.nextElementSibling.textContent = 'Please enter a valid email';
      email.nextElementSibling.classList.add('active');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully! (This is a demo)');
      form.reset();
    }
  });
});

  // Contact Form Validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    [name, email, message].forEach(input => {
      const errorMessage = input.nextElementSibling;
      if (!input.value.trim()) {
        errorMessage.classList.add('active');
        isValid = false;
      } else {
        errorMessage.classList.remove('active');
      }
    });

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.nextElementSibling.textContent = 'Please enter a valid email';
      email.nextElementSibling.classList.add('active');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully! (This is a demo)');
      form.reset();
    }
  });
 const menuBtn = document.getElementById('menu-btn');
  const navList = document.getElementById('nav-list');

  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });