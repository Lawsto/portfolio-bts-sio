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

document.addEventListener("DOMContentLoaded", () => {
  // Code existant pour le smooth scrolling et le footer...
  
  // Sélectionner toutes les sections (vous pouvez ajuster le sélecteur si besoin)
  const sections = document.querySelectorAll('section');

  // Options de l'observer (threshold définit à quel point l'élément doit être visible)
  const observerOptions = {
    threshold: 0.1 // 10% de visibilité pour déclencher l'animation
  };

  // Créer l'observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter la classe 'show' pour lancer l'animation
        entry.target.classList.add('show');
        // Optionnel : arrêter d'observer l'élément une fois l'animation lancée
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Ajouter la classe 'hidden' à chaque section et commencer à les observer
  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});
