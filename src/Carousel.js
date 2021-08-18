class Carousel {
  /**
   * Creates an instance of a Carousel.
   *
   * @param {Object} config The carousel settings.
   * @param {Element} config.target The container element to mount the carousel in.
   * @param {Array} config.data An array of data objects to be rendered into slides.
   * @param {function} config.template A function that renders a single item into slide markup.
   */

  constructor({ target, data, template }) {
    this.target = target;
    this.data = data;
    this.template = template;
    this.currentSlide = 0;
    this.slides = [];

    this.setupCarousel();
    this.renderSlides();
  }

  /**
   * Creates the carousel container and buttons.
   */

  setupCarousel() {
    this.target.innerHTML = `
      <div class="carousel">
        <div class="button-container">
          <button aria-label="Previous">
            <img src="/src/images/left_arrow.svg" />
          </button>
        </div>
        <div class="slide-window">
          <div class="slide-container"></div>
        </div>
        <div class="button-container">
          <button aria-label="Next">
            <img src="/src/images/right_arrow.svg" />
          </button>
        </div>
      </div>
    `;

    this.slideContainer = this.target.querySelector('.slide-container');
    this.prevButton = this.target.querySelector('[aria-label="Previous"]');
    this.nextButton = this.target.querySelector('[aria-label="Next"]');

    this.prevButton.addEventListener('click', () => {
      this.scrollBy(-1);
    });

    this.nextButton.addEventListener('click', () => {
      this.scrollBy(1);
    });
  }

  /**
   * Sets the carousel's template function and triggers a render.
   * @param {function} template A template function.
   */

  setTemplate(template) {
    this.template = template;
    this.renderSlides();
  }

  /**
   * Sets the carousel's data and triggers a render.
   * @param {Array} data An array of data objects.
   */

  setData(data) {
    this.data = data;
    this.renderSlides();
  }

  /**
   * Renders the data to slides.
   */

  renderSlides() {
    if (!this.data || !this.template) return;

    this.currentSlide = 0;
    this.slideContainer.innerHTML = '';

    this.slides = this.data.map((item) => {
      const slide = document.createElement('div');
      slide.className = 'slide';
      this.slideContainer.append(slide);

      const renderedTemplate = this.template(item);
      slide.innerHTML = renderedTemplate;

      return slide;
    });

    this.scrollTo(0);
  }

  scrollBy(increment) {
    if (increment + this.currentSlide === this.slides.length) {
      this.scrollTo(0);
    } else {
      this.scrollTo(increment + this.currentSlide);
    }
  }

  /**
   * Scrolls the carousel to a given slide.
   * @param {number} index The index of the slide to scroll to.
   */

  scrollTo(index) {
    if (index < 0 || index > this.slides.length - 1) return;

    this.slides[this.currentSlide].classList.remove('active');

    const slideToScroll = this.slides[index];
    slideToScroll.classList.add('active');

    const { width: slideWidth } = slideToScroll.getBoundingClientRect();
    const { width: containerWidth } =
      this.slideContainer.getBoundingClientRect();

    const left = slideToScroll.offsetLeft - containerWidth / 2 + slideWidth / 2;

    this.slideContainer.scroll({ left, behavior: 'smooth' });

    this.prevButton.disabled = index === 0;
    // this.nextButton.disabled = index === this.slides.length - 1;

    this.currentSlide = index;
  }

  /**
   * Destroys the carousel.
   */

  destroy() {
    this.target.querySelector('.carousel').remove();
  }
}

export default Carousel;
