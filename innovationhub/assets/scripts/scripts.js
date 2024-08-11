document.querySelector(".menu-toggle").addEventListener("click", function() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
});


// Add animations to stats on scroll
const stats = document.querySelectorAll('.stat');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const statsPosition = stats[0].offsetTop;

  if (scrollPosition >= statsPosition - 200) {
    stats.forEach((stat) => {
      stat.classList.add('animated');
    });
  }
});

// Add animation effect to stats
stats.forEach((stat) => {
  stat.addEventListener('animationend', () => {
    stat.classList.remove('animated');
  });
});