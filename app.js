document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const sectionToShow = this.getAttribute('data-section');
    
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    document.getElementById(sectionToShow).classList.add('active');
  });
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}