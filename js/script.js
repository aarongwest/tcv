document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Offset for the fixed navigation
          behavior: 'smooth'
        });
      }
    });
  });

  // Add fade-in animation to sections when they come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(section);
  });

  // Add CSS class when the section becomes visible
  document.querySelectorAll('section.visible').forEach(section => {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  });
  
  // Add hover effect for company cards
  document.querySelectorAll('.bg-zinc-800\\/50').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-lg');
      card.classList.add('shadow-neon-green/5');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-lg');
      card.classList.remove('shadow-neon-green/5');
    });
  });
});
