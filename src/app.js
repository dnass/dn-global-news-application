// import scripts
import DOMReady from './scripts/DOMReady';
import Carousel from './Carousel';
import cardTemplate from './scripts/cardTemplate';

// import styles
import './css/styles.scss';

// enable hot module replacement
if (module.hot) {
  module.hot.accept();
}

DOMReady(() => {
  // application logic
  const carousel = new Carousel({
    target: document.querySelector('#carousel'),
    template: cardTemplate,
  });

  fetch('https://globalnews.ca/gnca-ajax-redesign/sample-data/')
    .then((res) => res.json())
    .then((data) => {
      carousel.setData(data);
    });
});
