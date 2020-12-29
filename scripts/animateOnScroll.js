const SELECTOR = '.animate-on-scroll';
const ANIMATE_CLASS_NAME = 'is-visible';

const animate = element => (
  element.classList.add(ANIMATE_CLASS_NAME)
);

const isAnimated = element => (
  element.classList.contains(ANIMATE_CLASS_NAME)
);

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    
    // when element's is in viewport,
    // animate it!
    if (entry.intersectionRatio > 0) {
      animate(entry.target);
      // remove observer after animation
      observer.unobserve(entry.target);
    }
  });
});

// get only these elements,
// which are not animated yet
const elements = [].filter.call(
  document.querySelectorAll(SELECTOR),
  element => !isAnimated(element, ANIMATE_CLASS_NAME)
);
//console.log(elements);

// start observing your elements
elements.forEach((element) => intersectionObserver.observe(element));