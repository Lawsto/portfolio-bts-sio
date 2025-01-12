document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Add dynamic year in the footer
  const year = new Date().getFullYear();
  document.querySelector('footer p').textContent = `© ${year} Fouarge Etienne. Tous droits réservés.`;
});


