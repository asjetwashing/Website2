(() => {
  const images = document.querySelectorAll('img[loading="lazy"]');

  images.forEach((image) => {
    image.classList.add('lazy-image');

    const reveal = () => image.classList.add('is-loaded');

    if (image.complete) {
      reveal();
      return;
    }

    image.addEventListener('load', reveal, { once: true });
    image.addEventListener('error', reveal, { once: true });
  });
})();
