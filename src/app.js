// import scripts
import DOMReady from './scripts/DOMReady';
import Carousel from './Carousel';
import templateGallery from './scripts/templates';

// import styles
import './css/styles.scss';

// enable hot module replacement
if (module.hot) {
  module.hot.accept();
}

DOMReady(() => {
  // application logic
  const containers = [...document.querySelectorAll('.carousel-container')];

  const carousels = containers.map(async (target) => {
    console.log(target.dataset.template);

    const carousel = new Carousel({
      target,
      template: templateGallery[target.dataset.template],
    });

    await fetch(target.dataset.src)
      .then((res) => res.json())
      .then((data) => carousel.setData(data));

    return carousel;
  });
});
