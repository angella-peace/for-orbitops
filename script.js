const orbit = document.querySelector(".orbit-container");

document.body.addEventListener("click", () => {
  orbit.style.animationPlayState = "running";

  setTimeout(() => {
    orbit.classList.add("paused");
  }, 5000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
      const fullDetails = button.nextElementSibling; // The .full-details-hidden div
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Collapse
        fullDetails.classList.remove('visible');
        button.textContent = 'Expand';
        button.setAttribute('aria-expanded', 'false');
      } else {
        // Expand
        fullDetails.classList.add('visible');
        button.textContent = 'Read Less';
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});



