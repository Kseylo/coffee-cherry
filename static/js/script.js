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
