// Sticky navigation
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
const section = document.getElementById('section')

const stickyNav = function(entries) {
    const[entry] = entries;
    if (!entry.isIntersecting) header.classList.add('sticky')
    else header.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.1,
    rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(section);
/// Revealing on scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});