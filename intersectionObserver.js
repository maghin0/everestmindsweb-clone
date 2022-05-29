const header = document.querySelector('nav');
const sectionOne = document.querySelector('.scroll-bar-blue');

const sectionOneOptions = {
  rootMargin: '-40% 0% 0% 0%',
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
